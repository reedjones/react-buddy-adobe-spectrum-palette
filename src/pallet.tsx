import React from 'react';
  import {
  Category,
  Component,
  Variant,
  Palette,
} from '@react-buddy/ide-toolbox';
import {Flex} from "./@react-spectrum/layout";

  export default () => (
  <Palette> <Category name="Application">
      </Category> <Category name="Layout"> <Component name="Flex">
        <Variant>
          <Flex> </Flex>
        </Variant>
      </Component>
       <Component name="Grid">
        <Variant>
          <Grid> </Grid>
        </Variant>
      </Component>
      </Category> <Category name="Buttons"> <Component name="ActionButton">
        <Variant>
          <ActionButton> </ActionButton>
        </Variant>
      </Component>
       <Component name="ActionGroup">
        <Variant>
          <ActionGroup> </ActionGroup>
        </Variant>
      </Component>
       <Component name="Button">
        <Variant>
          <Button> </Button>
        </Variant>
      </Component>
       <Component name="ButtonGroup">
        <Variant>
          <ButtonGroup> </ButtonGroup>
        </Variant>
      </Component>
       <Component name="LogicButton">
        <Variant>
          <LogicButton> </LogicButton>
        </Variant>
      </Component>
       <Component name="ToggleButton">
        <Variant>
          <ToggleButton> </ToggleButton>
        </Variant>
      </Component>
      </Category> <Category name="Collections"> <Component name="ActionBar">
        <Variant>
          <ActionBar> </ActionBar>
        </Variant>
      </Component>
       <Component name="ActionMenu">
        <Variant>
          <ActionMenu> </ActionMenu>
        </Variant>
      </Component>
       <Component name="ListBox">
        <Variant>
          <ListBox> </ListBox>
        </Variant>
      </Component>
       <Component name="ListView">
        <Variant>
          <ListView> </ListView>
        </Variant>
      </Component>
       <Component name="Menu">
        <Variant>
          <Menu> </Menu>
        </Variant>
      </Component>
       <Component name="MenuTrigger">
        <Variant>
          <MenuTrigger> </MenuTrigger>
        </Variant>
      </Component>
       <Component name="TableView">
        <Variant>
          <TableView> </TableView>
        </Variant>
      </Component>
       <Component name="TagGroup">
        <Variant>
          <TagGroup> </TagGroup>
        </Variant>
      </Component>
      </Category> <Category name="Color"> <Component name="ColorAreabeta">
        <Variant>
          <ColorAreabeta> </ColorAreabeta>
        </Variant>
      </Component>
       <Component name="ColorFieldbeta">
        <Variant>
          <ColorFieldbeta> </ColorFieldbeta>
        </Variant>
      </Component>
       <Component name="ColorSliderbeta">
        <Variant>
          <ColorSliderbeta> </ColorSliderbeta>
        </Variant>
      </Component>
       <Component name="ColorWheelbeta">
        <Variant>
          <ColorWheelbeta> </ColorWheelbeta>
        </Variant>
      </Component>
      </Category> <Category name="Date and Time"> <Component name="Calendar">
        <Variant>
          <Calendar> </Calendar>
        </Variant>
      </Component>
       <Component name="DateField">
        <Variant>
          <DateField> </DateField>
        </Variant>
      </Component>
       <Component name="DatePicker">
        <Variant>
          <DatePicker> </DatePicker>
        </Variant>
      </Component>
       <Component name="DateRangePicker">
        <Variant>
          <DateRangePicker> </DateRangePicker>
        </Variant>
      </Component>
       <Component name="RangeCalendar">
        <Variant>
          <RangeCalendar> </RangeCalendar>
        </Variant>
      </Component>
       <Component name="TimeField">
        <Variant>
          <TimeField> </TimeField>
        </Variant>
      </Component>
      </Category> <Category name="Drag and drop"> <Component name="DropZonerc">
        <Variant>
          <DropZonerc> </DropZonerc>
        </Variant>
      </Component>
      </Category> <Category name="Forms"> <Component name="Checkbox">
        <Variant>
          <Checkbox> </Checkbox>
        </Variant>
      </Component>
       <Component name="CheckboxGroup">
        <Variant>
          <CheckboxGroup> </CheckboxGroup>
        </Variant>
      </Component>
       <Component name="Form">
        <Variant>
          <Form> </Form>
        </Variant>
      </Component>
       <Component name="NumberField">
        <Variant>
          <NumberField> </NumberField>
        </Variant>
      </Component>
       <Component name="RadioGroup">
        <Variant>
          <RadioGroup> </RadioGroup>
        </Variant>
      </Component>
       <Component name="RangeSlider">
        <Variant>
          <RangeSlider> </RangeSlider>
        </Variant>
      </Component>
       <Component name="SearchField">
        <Variant>
          <SearchField> </SearchField>
        </Variant>
      </Component>
       <Component name="Slider">
        <Variant>
          <Slider> </Slider>
        </Variant>
      </Component>
       <Component name="Switch">
        <Variant>
          <Switch> </Switch>
        </Variant>
      </Component>
       <Component name="TextArea">
        <Variant>
          <TextArea> </TextArea>
        </Variant>
      </Component>
       <Component name="TextField">
        <Variant>
          <TextField> </TextField>
        </Variant>
      </Component>
      </Category> <Category name="Icons"> <Component name="Custom Icons">
        <Variant>
          <CustomIcons> </CustomIcons>
        </Variant>
      </Component>
       <Component name="Workflow Icons">
        <Variant>
          <WorkflowIcons> </WorkflowIcons>
        </Variant>
      </Component>
      </Category> <Category name="Navigation"> <Component name="Breadcrumbs">
        <Variant>
          <Breadcrumbs> </Breadcrumbs>
        </Variant>
      </Component>
       <Component name="Link">
        <Variant>
          <Link> </Link>
        </Variant>
      </Component>
       <Component name="Tabs">
        <Variant>
          <Tabs> </Tabs>
        </Variant>
      </Component>
      </Category> <Category name="Overlays"> <Component name="AlertDialog">
        <Variant>
          <AlertDialog> </AlertDialog>
        </Variant>
      </Component>
       <Component name="ContextualHelp">
        <Variant>
          <ContextualHelp> </ContextualHelp>
        </Variant>
      </Component>
       <Component name="Dialog">
        <Variant>
          <Dialog> </Dialog>
        </Variant>
      </Component>
       <Component name="DialogContainer">
        <Variant>
          <DialogContainer> </DialogContainer>
        </Variant>
      </Component>
       <Component name="DialogTrigger">
        <Variant>
          <DialogTrigger> </DialogTrigger>
        </Variant>
      </Component>
       <Component name="Tooltip">
        <Variant>
          <Tooltip> </Tooltip>
        </Variant>
      </Component>
      </Category> <Category name="Pickers"> <Component name="ComboBox">
        <Variant>
          <ComboBox> </ComboBox>
        </Variant>
      </Component>
       <Component name="Picker">
        <Variant>
          <Picker> </Picker>
        </Variant>
      </Component>
      </Category> <Category name="Status"> <Component name="Badge">
        <Variant>
          <Badge> </Badge>
        </Variant>
      </Component>
       <Component name="InlineAlert">
        <Variant>
          <InlineAlert> </InlineAlert>
        </Variant>
      </Component>
       <Component name="LabeledValue">
        <Variant>
          <LabeledValue> </LabeledValue>
        </Variant>
      </Component>
       <Component name="Meter">
        <Variant>
          <Meter> </Meter>
        </Variant>
      </Component>
       <Component name="ProgressBar">
        <Variant>
          <ProgressBar> </ProgressBar>
        </Variant>
      </Component>
       <Component name="ProgressCircle">
        <Variant>
          <ProgressCircle> </ProgressCircle>
        </Variant>
      </Component>
       <Component name="StatusLight">
        <Variant>
          <StatusLight> </StatusLight>
        </Variant>
      </Component>
       <Component name="Toastbeta">
        <Variant>
          <Toastbeta> </Toastbeta>
        </Variant>
      </Component>
      </Category> <Category name="Content"> <Component name="Avatar">
        <Variant>
          <Avatar> </Avatar>
        </Variant>
      </Component>
       <Component name="Content">
        <Variant>
          <Content> </Content>
        </Variant>
      </Component>
       <Component name="Divider">
        <Variant>
          <Divider> </Divider>
        </Variant>
      </Component>
       <Component name="Footer">
        <Variant>
          <Footer> </Footer>
        </Variant>
      </Component>
       <Component name="Header">
        <Variant>
          <Header> </Header>
        </Variant>
      </Component>
       <Component name="Heading">
        <Variant>
          <Heading> </Heading>
        </Variant>
      </Component>
       <Component name="IllustratedMessage">
        <Variant>
          <IllustratedMessage> </IllustratedMessage>
        </Variant>
      </Component>
       <Component name="Image">
        <Variant>
          <Image> </Image>
        </Variant>
      </Component>
       <Component name="Keyboard">
        <Variant>
          <Keyboard> </Keyboard>
        </Variant>
      </Component>
       <Component name="Text">
        <Variant>
          <Text> </Text>
        </Variant>
      </Component>
       <Component name="View">
        <Variant>
          <View> </View>
        </Variant>
      </Component>
       <Component name="Well">
        <Variant>
          <Well> </Well>
        </Variant>
      </Component>
      </Category></Palette>);