from bs4 import BeautifulSoup

import_template = """import React from 'react';
  import {
  Category,
  Component,
  Variant,
  Palette,
} from '@react-buddy/ide-toolbox';"""
template_pallet_start = """export default () => (
  <Palette>"""

template_pallet_category = """ <Category name="{category_name}">"""

template_pallet_category_end = """</Category>"""

template_pallet_component = """ <Component name="{component_name}" docURL="{component_url}">
       {component_code}
      </Component>
      """


def render_template_string(template_string, **kwargs):
    return template_string.format(**kwargs)


template_pallet_end = """</Palette>);"""


def get_component_code(c):
    component_name = c["name"].strip().replace(" ", "")
    examples = c['examples']
    names = []
    codes = ""
    for example in examples:
        counter = 1
        name_ = example['name']
        name_ = name_.replace("#", "")
        while name_ in names:
            name_ = name_ + str(counter)
            counter += 1
        names.append(name_)
        source = example['source']
        example_code = """\n
    <Variant name="{name}">
        {source}
    </Variant>\n\n""".format(name=name_, source=source)
        codes += example_code

    return codes


def make_component_code_for_category(category_name_arg, components):
    component_code = ""
    category_start = template_pallet_category.format(category_name=category_name_arg)
    category_end = template_pallet_category_end
    for component_ in components:
        component_code += template_pallet_component.format(
            component_name=component_["name"],
            component_url=component_["url"],
            component_code=get_component_code(component_)
        )
    return f"{category_start}{component_code}{category_end}"


import requests


def soup_from_url(url):
    response = requests.get(url)
    return BeautifulSoup(response.text, 'html.parser')


def load(path):
    with open(path, "r") as f:
        return f.read()


def parse_from_file():
    html_path = "navcontent.html"

    # Your HTML content
    html_content = load(html_path)

    # Parse the HTML
    soup = BeautifulSoup(html_content, 'html.parser')

    # Extract headings and corresponding component names
    headings = soup.find_all(class_=lambda x: x and x.startswith("_2q1b9a_spectrum-SideNav-heading"))

    # Initialize a dictionary to store components by category
    components_by_category = {}
    base_url = "https://react-spectrum.adobe.com"
    # Iterate over the headings
    for heading in headings:
        # Extract category name
        category_name = heading.get_text(strip=True)
        # Find the next <ul> tag after the heading
        component_list = heading.find_next_sibling("ul")
        if component_list:
            # Extract component names from <a> tags within <ul>
            component_names = [a.get_text(strip=True) for a in component_list.find_all("a")]
            component_links = [a["href"] for a in component_list.find_all("a")]
            component_urls = [base_url + link for link in component_links]
            # create a list of all component names and urls{ name, url } pairs
            com = []
            for i in range(len(component_names)):
                com.append({"name": component_names[i], "url": component_urls[i]})

            # Add the component names to the dictionary
            components_by_category[category_name] = com
    return components_by_category


# Print the dictionary
def print_items(components_by_category):
    for category, components in components_by_category.items():
        print(category)
        for component in components:
            print("-", component)
        print()


def make_pallet(components_by_category_):
    pallet = ""
    for category_name_, components in components_by_category_.items():
        pallet += make_component_code_for_category(category_name_, components)
    return f"{import_template}{template_pallet_start}{pallet}{template_pallet_end}"


import json


def dump_json(obj, file_path):
    with open(file_path, "w") as f:
        json.dump(obj, f, indent=4)


import re

heading = re.compile('^h[1-6]$')


def scrape_component_url(component):
    url = component["url"]
    s = soup_from_url(url)
    items = s.find_all('code')
    examples_ = []
    c = 1
    for item in items:
        source = item.find('span', attrs={"class": "source"})
        name = item.find_previous(heading)
        if name:
            name = name.get_text()
        else:
            name = f"Example_{c}"
        if source:
            source_code = source.get_text()
            data = {
                'source': source_code,
                "name": name
            }
            examples_.append(data)
    return examples_


def scrape_components(components_by_category):
    for _, components in components_by_category.items():
        for component in components:
            print(f"Working on {component}")
            examples_ = scrape_component_url(component)
            print(f"Scraped {component['name']}\n")
            print(examples_)
            component['examples'] = examples_

    dump_json(components_by_category, "components.json")
    print("Done")
    exit()


def load_json(file):
    with open(file, "r") as f:
        return json.load(f)


if __name__ == "__main__":
    components_by_category = load_json("components.json")
    print(make_pallet(components_by_category))
    # dump_json(components_by_category, "components.json")
    #
    # print(make_pallet(components_by_category))
    with open("pallet2.js", "w+") as f:
        f.write(make_pallet(components_by_category))
    # print("Done")
    # exit()
