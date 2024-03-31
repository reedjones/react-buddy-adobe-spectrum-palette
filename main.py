from bs4 import BeautifulSoup as bs
from calmjs.parse import es5
import pickle
import pathlib
import json
import os
import esprima
REACT_SPECTRUM_PATH = "@react-spectrum"
STORIES_FILE = "stories.tsx"
STORIES_DATA_FILE = "stories_data.json"


def dump_pickle(obj, file_path):
    with open(file_path, "wb") as f:
        pickle.dump(obj, f)


def dump_json(obj, file_path):
    with open(file_path, "w") as f:
        json.dump(obj, f, indent=4)


def load_json(file_path):
    with open(file_path, "r") as f:
        return json.load(f)


def load_pickle(file_path):
    with open(file_path, "rb") as f:
        return pickle.load(f)


def parse_pallet_tsx(path):
    """
    Get component (category, name) pairs from pallet.tsx file
    :param path:
    :return:
    """
    pass


def find_file(directory, target_file):
    """

    :param directory:
    :param target_file:
    :return:
    """
    for root, dirs, files in os.walk(directory):

        if target_file in files:
            return os.path.join(root, target_file)

    return None


def find_all_stories(start_path=REACT_SPECTRUM_PATH):
    stories = []
    for root, dirs, files in os.walk(start_path):
        for file in files:
            if ".stories." in file:
                print(os.path.join(root, file))
                stories.append({
                    "story": file,
                    "story_path": os.path.join(root, file),
                    "name": file.split(".")[0],
                    "src_dir": f"{REACT_SPECTRUM_PATH}/{file.split('.')[0].lower()}",

                })
    return stories


def find_component_stories(component_name, component_base_path=REACT_SPECTRUM_PATH, ):
    """
    Recursivily search the dir ./@react-spectrum and all sub-directories for
    a file named ComponentName.stories.tsx and returns the path to the file if found
    :param component_name:
    :return:
    """
    file_path = find_file(component_base_path, f"{component_name}.stories.tsx")

    return file_path


def load_stories_data(file_path=STORIES_DATA_FILE):
    return load_json(file_path)


def make_stories_data():
    all_stories = find_all_stories()
    print(all_stories)
    for story in all_stories:
        print(story)
        print(os.path.isfile(story['story_path']))
        if not os.path.isdir(story['src_dir']):
            story['src_dir'] = ""
            if os.path.isfile(story['story_path']):
                p = pathlib.Path(story['story_path'])
                story['src_dir'] = str(p.parent.parent)
        if not os.path.isfile(story['story_path']):
            story['story_path'] = ""
    dump_json(all_stories, STORIES_DATA_FILE)


def get_story_source(story_path):
    with open(story_path, "r") as f:
        data = f.read()
        return data


def extract_exported_functions(js_code):
    syntax_tree = esprima.parseModule(js_code)
    exported_functions = {}

    for node in syntax_tree.body:
        if node.type == 'ExportNamedDeclaration' and node.declaration.type == 'FunctionDeclaration':
            function_name = node.declaration.id.name
            function_source = js_code[node.declaration.range[0]:node.declaration.range[1]]
            exported_functions[function_name] = function_source.strip()
    return exported_functions

if __name__ == "__main__":
    stories = load_stories_data()
    story = stories[1]
    print(story)
    source = get_story_source(story['story_path'])
    print(source)
    parsed_source = extract_exported_functions(source)
    print(parsed_source)
