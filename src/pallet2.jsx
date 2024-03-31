import Draw from "@spectrum-icons/workflow/Draw";
import Copy from "@spectrum-icons/workflow/Copy";
import Select from "@spectrum-icons/workflow/Select";
import Delete from "@spectrum-icons/workflow/Delete";
import {
    Add,
    Airplane,
    Alert,
    App,
    Beaker,
    Bell,
    Book,
    Bookmark,
    Brush,
    BulkEditUsers,
    CheckmarkCircle,
    CloneStamp,
    ColorWheel,
    Crop,
    CropRotate,
    Cut,
    Dashboard,
    Duplicate,
    Game,
    Light,
    LockClosed,
    Moon,
    More,
    Move,
    News,
    Paste,
    Question,
    RegionSelect,
    Resize,
    ShoppingCart,
    Slice, TagBold, TagItalic, TagUnderline,
    TextAlignCenter,
    TextAlignJustify,
    TextAlignLeft,
    TextAlignRight, TextStrikethrough, TextStyle,
    ThumbUp,
    User,
    ViewCard,
    ViewGrid,
    ViewList
} from "@spectrum-icons/workflow";
import Folder from "@spectrum-icons/illustrations/Folder";
import Edit from "@spectrum-icons/workflow/Edit";
import {
    Cell,
    DropZone,
    FileTrigger,
    Label,
    RouterProvider,
    Row,
    SubmenuTrigger,
    TableBody
} from "react-aria-components";
import {
    DroppableListView,
    DraggableListView,
    CustomDragPreviewExample,
    DragIntoListDefaultCopy,
    DroppableListViewDefaultCopy,
    DraggableListViewDefaultCopy,
    DragBetweenListsExample,
    BidirectionalDnDListView,
    ReorderableList, DragIntoListFolder, DroppableListViewFolder, DraggableListViewFolder, DragIntoList
} from "./DragViews";
import {
    CalendarDate,
    getLocalTimeZone,
    isWeekend,
    parseAbsoluteToLocal, parseDate,
    parseZonedDateTime,
    Time,
    today
} from "@internationalized/date";
import {text} from "stream/consumers";
import {
    ActionBar, ActionBarContainer,
    ActionButton,
    ActionGroup, ActionMenu,
    AlertDialog,
    Avatar,
    Badge,
    Breadcrumbs,
    Button,
    ButtonGroup,
    Calendar,
    Checkbox, CheckboxGroup, Column,
    ComboBox,
    Content,
    ContextualHelp, DateField, DatePicker, DateRangePicker,
    defaultTheme,
    Dialog,
    DialogContainer,
    DialogTrigger,
    Divider,
    Flex,
    Footer,
    Form, Grid,
    Header,
    Heading,
    IllustratedMessage,
    InlineAlert,
    Item,
    Keyboard,
    LabeledValue,
    Link, ListBox, ListView, LogicButton,
    Menu,
    MenuTrigger,
    Meter,
    NumberField,
    Picker,
    ProgressBar,
    ProgressCircle,
    Provider,
    Radio,
    RadioGroup, RangeCalendar,
    RangeSlider,
    SearchField,
    Section,
    Slider,
    StatusLight,
    Switch, TableHeader, TableView,
    TabList,
    TabPanels,
    Tabs, TagGroup,
    TextArea,
    TextField, TimeField, ToggleButton,
    Tooltip,
    TooltipTrigger,
    View,
    Well
} from "@adobe/react-spectrum";
import {Category, Component, Palette, Variant} from "@react-buddy/ide-toolbox";
import NoSearchResults from "@spectrum-icons/illustrations/NoSearchResults";
import CustomIcon from "@ant-design/icons/docs/examples/custom-icon";
import Icon from "@ant-design/icons";
import ABC from "@spectrum-icons/workflow/ABC";
import AEMScreens from "@spectrum-icons/workflow/AEMScreens";
import Actions from "@spectrum-icons/workflow/Actions";
import AdDisplay from "@spectrum-icons/workflow/AdDisplay";
import AdPrint from "@spectrum-icons/workflow/AdPrint";
import Add from "@spectrum-icons/workflow/Add";
import AddCircle from "@spectrum-icons/workflow/AddCircle";
import AddTo from "@spectrum-icons/workflow/AddTo";
import AddToSelection from "@spectrum-icons/workflow/AddToSelection";
import Airplane from "@spectrum-icons/workflow/Airplane";
import Alert from "@spectrum-icons/workflow/Alert";
import AlertAdd from "@spectrum-icons/workflow/AlertAdd";
import AlertCheck from "@spectrum-icons/workflow/AlertCheck";
import AlertCircle from "@spectrum-icons/workflow/AlertCircle";
import AlertCircleFilled from "@spectrum-icons/workflow/AlertCircleFilled";
import Algorithm from "@spectrum-icons/workflow/Algorithm";
import Alias from "@spectrum-icons/workflow/Alias";
import AlignBottom from "@spectrum-icons/workflow/AlignBottom";
import AlignCenter from "@spectrum-icons/workflow/AlignCenter";
import AlignLeft from "@spectrum-icons/workflow/AlignLeft";
import AlignMiddle from "@spectrum-icons/workflow/AlignMiddle";
import AlignRight from "@spectrum-icons/workflow/AlignRight";
import AlignTop from "@spectrum-icons/workflow/AlignTop";
import WorkflowChromatic, {AllWorkflow} from "@spectrum-icons/workflow/chromatic/Workflow.chromatic";
import Amusementpark from "@spectrum-icons/workflow/Amusementpark";
import Anchor from "@spectrum-icons/workflow/Anchor";
import AnchorSelect from "@spectrum-icons/workflow/AnchorSelect";
import Annotate from "@spectrum-icons/workflow/Annotate";
import AnnotatePen from "@spectrum-icons/workflow/AnnotatePen";
import Answer from "@spectrum-icons/workflow/Answer";
import AnswerFavorite from "@spectrum-icons/workflow/AnswerFavorite";
import App from "@spectrum-icons/workflow/App";
import AppRefresh from "@spectrum-icons/workflow/AppRefresh";
import AppleFiles from "@spectrum-icons/workflow/AppleFiles";
import ApplicationDelivery from "@spectrum-icons/workflow/ApplicationDelivery";
import ApproveReject from "@spectrum-icons/workflow/ApproveReject";
import Apps from "@spectrum-icons/workflow/Apps";
import Archive from "@spectrum-icons/workflow/Archive";
import ArchiveRemove from "@spectrum-icons/workflow/ArchiveRemove";
import ArrowDown from "@spectrum-icons/workflow/ArrowDown";
import ArrowLeft from "@spectrum-icons/workflow/ArrowLeft";
import ArrowRight from "@spectrum-icons/workflow/ArrowRight";
import ArrowUp from "@spectrum-icons/workflow/ArrowUp";
import ArrowUpRight from "@spectrum-icons/workflow/ArrowUpRight";
import Artboard from "@spectrum-icons/workflow/Artboard";
import Article from "@spectrum-icons/workflow/Article";
import Asset from "@spectrum-icons/workflow/Asset";
import AssetCheck from "@spectrum-icons/workflow/AssetCheck";
import AssetsAdded from "@spectrum-icons/workflow/AssetsAdded";
import AssetsDownloaded from "@spectrum-icons/workflow/AssetsDownloaded";
import AssetsExpired from "@spectrum-icons/workflow/AssetsExpired";
import AssetsLinkedPublished from "@spectrum-icons/workflow/AssetsLinkedPublished";
import AssetsModified from "@spectrum-icons/workflow/AssetsModified";
import AssetsPublished from "@spectrum-icons/workflow/AssetsPublished";
import Asterisk from "@spectrum-icons/workflow/Asterisk";
import At from "@spectrum-icons/workflow/At";
import Attach from "@spectrum-icons/workflow/Attach";
import AttachmentExclude from "@spectrum-icons/workflow/AttachmentExclude";
import Attributes from "@spectrum-icons/workflow/Attributes";
import Audio from "@spectrum-icons/workflow/Audio";
import AutomatedSegment from "@spectrum-icons/workflow/AutomatedSegment";
import Back from "@spectrum-icons/workflow/Back";
import Back30Seconds from "@spectrum-icons/workflow/Back30Seconds";
import BackAndroid from "@spectrum-icons/workflow/BackAndroid";
import Beaker from "@spectrum-icons/workflow/Beaker";
import BeakerCheck from "@spectrum-icons/workflow/BeakerCheck";
import BeakerShare from "@spectrum-icons/workflow/BeakerShare";
import Bell from "@spectrum-icons/workflow/Bell";
import BidRule from "@spectrum-icons/workflow/BidRule";
import BidRuleAdd from "@spectrum-icons/workflow/BidRuleAdd";
import Blower from "@spectrum-icons/workflow/Blower";
import Blur from "@spectrum-icons/workflow/Blur";
import Book from "@spectrum-icons/workflow/Book";
import Bookmark from "@spectrum-icons/workflow/Bookmark";
import BookmarkSingle from "@spectrum-icons/workflow/BookmarkSingle";
import BookmarkSingleOutline from "@spectrum-icons/workflow/BookmarkSingleOutline";
import BookmarkSmall from "@spectrum-icons/workflow/BookmarkSmall";
import BookmarkSmallOutline from "@spectrum-icons/workflow/BookmarkSmallOutline";
import Boolean from "@spectrum-icons/workflow/Boolean";
import Border from "@spectrum-icons/workflow/Border";
import Box from "@spectrum-icons/workflow/Box";
import BoxAdd from "@spectrum-icons/workflow/BoxAdd";
import BoxExport from "@spectrum-icons/workflow/BoxExport";
import BoxImport from "@spectrum-icons/workflow/BoxImport";
import Brackets from "@spectrum-icons/workflow/Brackets";
import BracketsSquare from "@spectrum-icons/workflow/BracketsSquare";
import Branch1 from "@spectrum-icons/workflow/Branch1";
import Branch2 from "@spectrum-icons/workflow/Branch2";
import Branch3 from "@spectrum-icons/workflow/Branch3";
import BranchCircle from "@spectrum-icons/workflow/BranchCircle";
import BreadcrumbNavigation from "@spectrum-icons/workflow/BreadcrumbNavigation";
import Breakdown from "@spectrum-icons/workflow/Breakdown";
import BreakdownAdd from "@spectrum-icons/workflow/BreakdownAdd";
import Briefcase from "@spectrum-icons/workflow/Briefcase";
import Browse from "@spectrum-icons/workflow/Browse";
import Brush from "@spectrum-icons/workflow/Brush";
import Bug from "@spectrum-icons/workflow/Bug";
import Building from "@spectrum-icons/workflow/Building";
import BulkEditUsers from "@spectrum-icons/workflow/BulkEditUsers";
import CCLibrary from "@spectrum-icons/workflow/CCLibrary";
import Calculator from "@spectrum-icons/workflow/Calculator";
import CalendarAdd from "@spectrum-icons/workflow/CalendarAdd";
import CalendarLocked from "@spectrum-icons/workflow/CalendarLocked";
import CalendarUnlocked from "@spectrum-icons/workflow/CalendarUnlocked";
import CallCenter from "@spectrum-icons/workflow/CallCenter";
import Camera from "@spectrum-icons/workflow/Camera";
import CameraFlip from "@spectrum-icons/workflow/CameraFlip";
import CameraRefresh from "@spectrum-icons/workflow/CameraRefresh";
import Campaign from "@spectrum-icons/workflow/Campaign";
import CampaignAdd from "@spectrum-icons/workflow/CampaignAdd";
import CampaignClose from "@spectrum-icons/workflow/CampaignClose";
import CampaignDelete from "@spectrum-icons/workflow/CampaignDelete";
import CampaignEdit from "@spectrum-icons/workflow/CampaignEdit";
import Cancel from "@spectrum-icons/workflow/Cancel";
import Capitals from "@spectrum-icons/workflow/Capitals";
import Captcha from "@spectrum-icons/workflow/Captcha";
import Car from "@spectrum-icons/workflow/Car";
import Card from "@spectrum-icons/workflow/Card";
import Channel from "@spectrum-icons/workflow/Channel";
import Chat from "@spectrum-icons/workflow/Chat";
import ChatAdd from "@spectrum-icons/workflow/ChatAdd";
import CheckPause from "@spectrum-icons/workflow/CheckPause";
import Checkmark from "@spectrum-icons/workflow/Checkmark";
import CheckmarkCircle from "@spectrum-icons/workflow/CheckmarkCircle";
import CheckmarkCircleOutline from "@spectrum-icons/workflow/CheckmarkCircleOutline";
import ChevronDoubleLeft from "@spectrum-icons/workflow/ChevronDoubleLeft";
import ChevronDoubleRight from "@spectrum-icons/workflow/ChevronDoubleRight";
import ChevronDown from "@spectrum-icons/workflow/ChevronDown";
import ChevronLeft from "@spectrum-icons/workflow/ChevronLeft";
import ChevronRight from "@spectrum-icons/workflow/ChevronRight";
import ChevronUp from "@spectrum-icons/workflow/ChevronUp";
import ChevronUpDown from "@spectrum-icons/workflow/ChevronUpDown";
import Circle from "@spectrum-icons/workflow/Circle";
import CircleFilled from "@spectrum-icons/workflow/CircleFilled";
import ClassicGridView from "@spectrum-icons/workflow/ClassicGridView";
import Clock from "@spectrum-icons/workflow/Clock";
import ClockCheck from "@spectrum-icons/workflow/ClockCheck";
import CloneStamp from "@spectrum-icons/workflow/CloneStamp";
import Close from "@spectrum-icons/workflow/Close";
import CloseCaptions from "@spectrum-icons/workflow/CloseCaptions";
import CloseCircle from "@spectrum-icons/workflow/CloseCircle";
import Cloud from "@spectrum-icons/workflow/Cloud";
import CloudDisconnected from "@spectrum-icons/workflow/CloudDisconnected";
import CloudError from "@spectrum-icons/workflow/CloudError";
import CloudOutline from "@spectrum-icons/workflow/CloudOutline";
import Code from "@spectrum-icons/workflow/Code";
import CollectionAdd from "@spectrum-icons/workflow/CollectionAdd";
import CollectionAddTo from "@spectrum-icons/workflow/CollectionAddTo";
import CollectionCheck from "@spectrum-icons/workflow/CollectionCheck";
import CollectionEdit from "@spectrum-icons/workflow/CollectionEdit";
import CollectionExclude from "@spectrum-icons/workflow/CollectionExclude";
import CollectionLink from "@spectrum-icons/workflow/CollectionLink";
import ColorFill from "@spectrum-icons/workflow/ColorFill";
import ColorPalette from "@spectrum-icons/workflow/ColorPalette";
import ColorWheel from "@spectrum-icons/workflow/ColorWheel";
import ColumnSettings from "@spectrum-icons/workflow/ColumnSettings";
import ColumnTwoA from "@spectrum-icons/workflow/ColumnTwoA";
import ColumnTwoB from "@spectrum-icons/workflow/ColumnTwoB";
import ColumnTwoC from "@spectrum-icons/workflow/ColumnTwoC";
import Comment from "@spectrum-icons/workflow/Comment";
import Compare from "@spectrum-icons/workflow/Compare";
import Compass from "@spectrum-icons/workflow/Compass";
import Condition from "@spectrum-icons/workflow/Condition";
import ConfidenceFour from "@spectrum-icons/workflow/ConfidenceFour";
import ConfidenceOne from "@spectrum-icons/workflow/ConfidenceOne";
import ConfidenceThree from "@spectrum-icons/workflow/ConfidenceThree";
import ConfidenceTwo from "@spectrum-icons/workflow/ConfidenceTwo";
import Contrast from "@spectrum-icons/workflow/Contrast";
import ConversionFunnel from "@spectrum-icons/workflow/ConversionFunnel";
import CoverImage from "@spectrum-icons/workflow/CoverImage";
import CreditCard from "@spectrum-icons/workflow/CreditCard";
import Crop from "@spectrum-icons/workflow/Crop";
import CropLightning from "@spectrum-icons/workflow/CropLightning";
import CropRotate from "@spectrum-icons/workflow/CropRotate";
import Crosshairs from "@spectrum-icons/workflow/Crosshairs";
import Curate from "@spectrum-icons/workflow/Curate";
import Cut from "@spectrum-icons/workflow/Cut";
import Dashboard from "@spectrum-icons/workflow/Dashboard";
import Data from "@spectrum-icons/workflow/Data";
import DataAdd from "@spectrum-icons/workflow/DataAdd";
import DataBook from "@spectrum-icons/workflow/DataBook";
import DataCheck from "@spectrum-icons/workflow/DataCheck";
import DataCorrelated from "@spectrum-icons/workflow/DataCorrelated";
import DataDownload from "@spectrum-icons/workflow/DataDownload";
import DataEdit from "@spectrum-icons/workflow/DataEdit";
import DataMapping from "@spectrum-icons/workflow/DataMapping";
import DataRefresh from "@spectrum-icons/workflow/DataRefresh";
import DataRemove from "@spectrum-icons/workflow/DataRemove";
import DataSettings from "@spectrum-icons/workflow/DataSettings";
import DataUnavailable from "@spectrum-icons/workflow/DataUnavailable";
import DataUpload from "@spectrum-icons/workflow/DataUpload";
import DataUser from "@spectrum-icons/workflow/DataUser";
import Date from "@spectrum-icons/workflow/Date";
import Deduplication from "@spectrum-icons/workflow/Deduplication";
import Delegate from "@spectrum-icons/workflow/Delegate";
import DeleteOutline from "@spectrum-icons/workflow/DeleteOutline";
import Demographic from "@spectrum-icons/workflow/Demographic";
import Deselect from "@spectrum-icons/workflow/Deselect";
import DeselectCircular from "@spectrum-icons/workflow/DeselectCircular";
import DesktopAndMobile from "@spectrum-icons/workflow/DesktopAndMobile";
import DeviceDesktop from "@spectrum-icons/workflow/DeviceDesktop";
import DeviceLaptop from "@spectrum-icons/workflow/DeviceLaptop";
import DevicePhone from "@spectrum-icons/workflow/DevicePhone";
import DevicePhoneRefresh from "@spectrum-icons/workflow/DevicePhoneRefresh";
import DevicePreview from "@spectrum-icons/workflow/DevicePreview";
import DeviceRotateLandscape from "@spectrum-icons/workflow/DeviceRotateLandscape";
import DeviceRotatePortrait from "@spectrum-icons/workflow/DeviceRotatePortrait";
import DeviceTV from "@spectrum-icons/workflow/DeviceTV";
import DeviceTablet from "@spectrum-icons/workflow/DeviceTablet";
import Devices from "@spectrum-icons/workflow/Devices";
import DistributeBottomEdge from "@spectrum-icons/workflow/DistributeBottomEdge";
import DistributeHorizontalCenter from "@spectrum-icons/workflow/DistributeHorizontalCenter";
import DistributeHorizontally from "@spectrum-icons/workflow/DistributeHorizontally";
import DistributeLeftEdge from "@spectrum-icons/workflow/DistributeLeftEdge";
import DistributeRightEdge from "@spectrum-icons/workflow/DistributeRightEdge";
import DistributeSpaceHoriz from "@spectrum-icons/workflow/DistributeSpaceHoriz";
import DistributeSpaceVert from "@spectrum-icons/workflow/DistributeSpaceVert";
import DistributeTopEdge from "@spectrum-icons/workflow/DistributeTopEdge";
import DistributeVerticalCenter from "@spectrum-icons/workflow/DistributeVerticalCenter";
import DistributeVertically from "@spectrum-icons/workflow/DistributeVertically";
import Divide from "@spectrum-icons/workflow/Divide";
import DividePath from "@spectrum-icons/workflow/DividePath";
import Document from "@spectrum-icons/workflow/Document";
import DocumentFragment from "@spectrum-icons/workflow/DocumentFragment";
import DocumentFragmentGroup from "@spectrum-icons/workflow/DocumentFragmentGroup";
import DocumentOutline from "@spectrum-icons/workflow/DocumentOutline";
import DocumentRefresh from "@spectrum-icons/workflow/DocumentRefresh";
import Dolly from "@spectrum-icons/workflow/Dolly";
import Download from "@spectrum-icons/workflow/Download";
import DownloadFromCloud from "@spectrum-icons/workflow/DownloadFromCloud";
import DownloadFromCloudOutline from "@spectrum-icons/workflow/DownloadFromCloudOutline";
import Draft from "@spectrum-icons/workflow/Draft";
import DragHandle from "@spectrum-icons/workflow/DragHandle";
import Dropdown from "@spectrum-icons/workflow/Dropdown";
import Duplicate from "@spectrum-icons/workflow/Duplicate";
import EditCircle from "@spectrum-icons/workflow/EditCircle";
import EditExclude from "@spectrum-icons/workflow/EditExclude";
import EditIn from "@spectrum-icons/workflow/EditIn";
import EditInLight from "@spectrum-icons/workflow/EditInLight";
import Education from "@spectrum-icons/workflow/Education";
import Effects from "@spectrum-icons/workflow/Effects";
import Efficient from "@spectrum-icons/workflow/Efficient";
import Ellipse from "@spectrum-icons/workflow/Ellipse";
import Email from "@spectrum-icons/workflow/Email";
import EmailCancel from "@spectrum-icons/workflow/EmailCancel";
import EmailCheck from "@spectrum-icons/workflow/EmailCheck";
import EmailExclude from "@spectrum-icons/workflow/EmailExclude";
import EmailExcludeOutline from "@spectrum-icons/workflow/EmailExcludeOutline";
import EmailGear from "@spectrum-icons/workflow/EmailGear";
import EmailGearOutline from "@spectrum-icons/workflow/EmailGearOutline";
import EmailKey from "@spectrum-icons/workflow/EmailKey";
import EmailKeyOutline from "@spectrum-icons/workflow/EmailKeyOutline";
import EmailLightning from "@spectrum-icons/workflow/EmailLightning";
import EmailNotification from "@spectrum-icons/workflow/EmailNotification";
import EmailOutline from "@spectrum-icons/workflow/EmailOutline";
import EmailRefresh from "@spectrum-icons/workflow/EmailRefresh";
import EmailSchedule from "@spectrum-icons/workflow/EmailSchedule";
import Engagement from "@spectrum-icons/workflow/Engagement";
import Erase from "@spectrum-icons/workflow/Erase";
import Event from "@spectrum-icons/workflow/Event";
import EventExclude from "@spectrum-icons/workflow/EventExclude";
import EventShare from "@spectrum-icons/workflow/EventShare";
import Events from "@spectrum-icons/workflow/Events";
import ExcludeOverlap from "@spectrum-icons/workflow/ExcludeOverlap";
import Experience from "@spectrum-icons/workflow/Experience";
import ExperienceAdd from "@spectrum-icons/workflow/ExperienceAdd";
import ExperienceAddTo from "@spectrum-icons/workflow/ExperienceAddTo";
import ExperienceExport from "@spectrum-icons/workflow/ExperienceExport";
import ExperienceImport from "@spectrum-icons/workflow/ExperienceImport";
import Export from "@spectrum-icons/workflow/Export";
import ExportOriginal from "@spectrum-icons/workflow/ExportOriginal";
import Exposure from "@spectrum-icons/workflow/Exposure";
import Extension from "@spectrum-icons/workflow/Extension";
import FacebookCoverImage from "@spectrum-icons/workflow/FacebookCoverImage";
import Fast from "@spectrum-icons/workflow/Fast";
import FastForward from "@spectrum-icons/workflow/FastForward";
import FastForwardCircle from "@spectrum-icons/workflow/FastForwardCircle";
import Feature from "@spectrum-icons/workflow/Feature";
import Feed from "@spectrum-icons/workflow/Feed";
import FeedAdd from "@spectrum-icons/workflow/FeedAdd";
import FeedManagement from "@spectrum-icons/workflow/FeedManagement";
import Feedback from "@spectrum-icons/workflow/Feedback";
import FileAdd from "@spectrum-icons/workflow/FileAdd";
import FileCSV from "@spectrum-icons/workflow/FileCSV";
import FileCampaign from "@spectrum-icons/workflow/FileCampaign";
import FileChart from "@spectrum-icons/workflow/FileChart";
import FileCheckedOut from "@spectrum-icons/workflow/FileCheckedOut";
import FileCode from "@spectrum-icons/workflow/FileCode";
import FileData from "@spectrum-icons/workflow/FileData";
import FileEmail from "@spectrum-icons/workflow/FileEmail";
import FileExcel from "@spectrum-icons/workflow/FileExcel";
import FileFolder from "@spectrum-icons/workflow/FileFolder";
import FileGear from "@spectrum-icons/workflow/FileGear";
import FileGlobe from "@spectrum-icons/workflow/FileGlobe";
import FileHTML from "@spectrum-icons/workflow/FileHTML";
import FileImportant from "@spectrum-icons/workflow/FileImportant";
import FileJson from "@spectrum-icons/workflow/FileJson";
import FileKey from "@spectrum-icons/workflow/FileKey";
import FileMobile from "@spectrum-icons/workflow/FileMobile";
import FilePDF from "@spectrum-icons/workflow/FilePDF";
import FileShare from "@spectrum-icons/workflow/FileShare";
import FileSingleWebPage from "@spectrum-icons/workflow/FileSingleWebPage";
import FileSpace from "@spectrum-icons/workflow/FileSpace";
import FileTemplate from "@spectrum-icons/workflow/FileTemplate";
import FileTxt from "@spectrum-icons/workflow/FileTxt";
import FileUser from "@spectrum-icons/workflow/FileUser";
import FileWord from "@spectrum-icons/workflow/FileWord";
import FileWorkflow from "@spectrum-icons/workflow/FileWorkflow";
import FileXML from "@spectrum-icons/workflow/FileXML";
import FileZip from "@spectrum-icons/workflow/FileZip";
import FilingCabinet from "@spectrum-icons/workflow/FilingCabinet";
import Filmroll from "@spectrum-icons/workflow/Filmroll";
import FilmrollAutoAdd from "@spectrum-icons/workflow/FilmrollAutoAdd";
import Filter from "@spectrum-icons/workflow/Filter";
import FilterAdd from "@spectrum-icons/workflow/FilterAdd";
import FilterCheck from "@spectrum-icons/workflow/FilterCheck";
import FilterDelete from "@spectrum-icons/workflow/FilterDelete";
import FilterEdit from "@spectrum-icons/workflow/FilterEdit";
import FilterHeart from "@spectrum-icons/workflow/FilterHeart";
import FilterRemove from "@spectrum-icons/workflow/FilterRemove";
import FilterStar from "@spectrum-icons/workflow/FilterStar";
import FindAndReplace from "@spectrum-icons/workflow/FindAndReplace";
import Flag from "@spectrum-icons/workflow/Flag";
import FlagExclude from "@spectrum-icons/workflow/FlagExclude";
import FlashAuto from "@spectrum-icons/workflow/FlashAuto";
import FlashOff from "@spectrum-icons/workflow/FlashOff";
import FlashOn from "@spectrum-icons/workflow/FlashOn";
import Flashlight from "@spectrum-icons/workflow/Flashlight";
import FlashlightOff from "@spectrum-icons/workflow/FlashlightOff";
import FlashlightOn from "@spectrum-icons/workflow/FlashlightOn";
import FlipHorizontal from "@spectrum-icons/workflow/FlipHorizontal";
import FlipVertical from "@spectrum-icons/workflow/FlipVertical";
import Folder from "@spectrum-icons/workflow/Folder";
import Folder2Color from "@spectrum-icons/workflow/Folder2Color";
import FolderAdd from "@spectrum-icons/workflow/FolderAdd";
import FolderAddTo from "@spectrum-icons/workflow/FolderAddTo";
import FolderArchive from "@spectrum-icons/workflow/FolderArchive";
import FolderDelete from "@spectrum-icons/workflow/FolderDelete";
import FolderGear from "@spectrum-icons/workflow/FolderGear";
import FolderLocked from "@spectrum-icons/workflow/FolderLocked";
import FolderOpen from "@spectrum-icons/workflow/FolderOpen";
import FolderOpenOutline from "@spectrum-icons/workflow/FolderOpenOutline";
import FolderOutline from "@spectrum-icons/workflow/FolderOutline";
import FolderRemove from "@spectrum-icons/workflow/FolderRemove";
import FolderSearch from "@spectrum-icons/workflow/FolderSearch";
import FolderUser from "@spectrum-icons/workflow/FolderUser";
import Follow from "@spectrum-icons/workflow/Follow";
import FollowOff from "@spectrum-icons/workflow/FollowOff";
import ForPlacementOnly from "@spectrum-icons/workflow/ForPlacementOnly";
import Forecast from "@spectrum-icons/workflow/Forecast";
import Form from "@spectrum-icons/workflow/Form";
import Forward from "@spectrum-icons/workflow/Forward";
import FullScreen from "@spectrum-icons/workflow/FullScreen";
import FullScreenExit from "@spectrum-icons/workflow/FullScreenExit";
import Function from "@spectrum-icons/workflow/Function";
import Game from "@spectrum-icons/workflow/Game";
import Gauge1 from "@spectrum-icons/workflow/Gauge1";
import Gauge2 from "@spectrum-icons/workflow/Gauge2";
import Gauge3 from "@spectrum-icons/workflow/Gauge3";
import Gauge4 from "@spectrum-icons/workflow/Gauge4";
import Gauge5 from "@spectrum-icons/workflow/Gauge5";
import Gears from "@spectrum-icons/workflow/Gears";
import GearsAdd from "@spectrum-icons/workflow/GearsAdd";
import GearsDelete from "@spectrum-icons/workflow/GearsDelete";
import GearsEdit from "@spectrum-icons/workflow/GearsEdit";
import GenderFemale from "@spectrum-icons/workflow/GenderFemale";
import GenderMale from "@spectrum-icons/workflow/GenderMale";
import Gift from "@spectrum-icons/workflow/Gift";
import Globe from "@spectrum-icons/workflow/Globe";
import GlobeCheck from "@spectrum-icons/workflow/GlobeCheck";
import GlobeClock from "@spectrum-icons/workflow/GlobeClock";
import GlobeEnter from "@spectrum-icons/workflow/GlobeEnter";
import GlobeExit from "@spectrum-icons/workflow/GlobeExit";
import GlobeGrid from "@spectrum-icons/workflow/GlobeGrid";
import GlobeOutline from "@spectrum-icons/workflow/GlobeOutline";
import GlobeRemove from "@spectrum-icons/workflow/GlobeRemove";
import GlobeSearch from "@spectrum-icons/workflow/GlobeSearch";
import GlobeStrike from "@spectrum-icons/workflow/GlobeStrike";
import GlobeStrikeClock from "@spectrum-icons/workflow/GlobeStrikeClock";
import Gradient from "@spectrum-icons/workflow/Gradient";
import GraphArea from "@spectrum-icons/workflow/GraphArea";
import GraphAreaStacked from "@spectrum-icons/workflow/GraphAreaStacked";
import GraphBarHorizontal from "@spectrum-icons/workflow/GraphBarHorizontal";
import GraphBarHorizontalAdd from "@spectrum-icons/workflow/GraphBarHorizontalAdd";
import GraphBarHorizontalStacked from "@spectrum-icons/workflow/GraphBarHorizontalStacked";
import GraphBarVertical from "@spectrum-icons/workflow/GraphBarVertical";
import GraphBarVerticalAdd from "@spectrum-icons/workflow/GraphBarVerticalAdd";
import GraphBarVerticalStacked from "@spectrum-icons/workflow/GraphBarVerticalStacked";
import GraphBubble from "@spectrum-icons/workflow/GraphBubble";
import GraphBullet from "@spectrum-icons/workflow/GraphBullet";
import GraphConfidenceBands from "@spectrum-icons/workflow/GraphConfidenceBands";
import GraphDonut from "@spectrum-icons/workflow/GraphDonut";
import GraphDonutAdd from "@spectrum-icons/workflow/GraphDonutAdd";
import GraphGantt from "@spectrum-icons/workflow/GraphGantt";
import GraphHistogram from "@spectrum-icons/workflow/GraphHistogram";
import GraphPathing from "@spectrum-icons/workflow/GraphPathing";
import GraphPie from "@spectrum-icons/workflow/GraphPie";
import GraphProfitCurve from "@spectrum-icons/workflow/GraphProfitCurve";
import GraphScatter from "@spectrum-icons/workflow/GraphScatter";
import GraphStream from "@spectrum-icons/workflow/GraphStream";
import GraphStreamRanked from "@spectrum-icons/workflow/GraphStreamRanked";
import GraphStreamRankedAdd from "@spectrum-icons/workflow/GraphStreamRankedAdd";
import GraphSunburst from "@spectrum-icons/workflow/GraphSunburst";
import GraphTree from "@spectrum-icons/workflow/GraphTree";
import GraphTrend from "@spectrum-icons/workflow/GraphTrend";
import GraphTrendAdd from "@spectrum-icons/workflow/GraphTrendAdd";
import GraphTrendAlert from "@spectrum-icons/workflow/GraphTrendAlert";
import Graphic from "@spectrum-icons/workflow/Graphic";
import Group from "@spectrum-icons/workflow/Group";
import Hammer from "@spectrum-icons/workflow/Hammer";
import Hand from "@spectrum-icons/workflow/Hand";
import Hand0 from "@spectrum-icons/workflow/Hand0";
import Hand1 from "@spectrum-icons/workflow/Hand1";
import Hand2 from "@spectrum-icons/workflow/Hand2";
import Hand3 from "@spectrum-icons/workflow/Hand3";
import Hand4 from "@spectrum-icons/workflow/Hand4";
import Heal from "@spectrum-icons/workflow/Heal";
import Heart from "@spectrum-icons/workflow/Heart";
import Help from "@spectrum-icons/workflow/Help";
import HelpOutline from "@spectrum-icons/workflow/HelpOutline";
import Histogram from "@spectrum-icons/workflow/Histogram";
import History from "@spectrum-icons/workflow/History";
import Home from "@spectrum-icons/workflow/Home";
import Homepage from "@spectrum-icons/workflow/Homepage";
import HotFixes from "@spectrum-icons/workflow/HotFixes";
import HotelBed from "@spectrum-icons/workflow/HotelBed";
import IconsWorkflowStories, {Icon3DMaterialsWithSizes} from "@spectrum-icons/workflow/stories/IconsWorkflow.stories";
import IdentityService from "@spectrum-icons/workflow/IdentityService";
import Image from "@spectrum-icons/workflow/Image";
import ImageAdd from "@spectrum-icons/workflow/ImageAdd";
import ImageAlbum from "@spectrum-icons/workflow/ImageAlbum";
import ImageAutoMode from "@spectrum-icons/workflow/ImageAutoMode";
import ImageCarousel from "@spectrum-icons/workflow/ImageCarousel";
import ImageCheck from "@spectrum-icons/workflow/ImageCheck";
import ImageCheckedOut from "@spectrum-icons/workflow/ImageCheckedOut";
import ImageMapCircle from "@spectrum-icons/workflow/ImageMapCircle";
import ImageMapPolygon from "@spectrum-icons/workflow/ImageMapPolygon";
import ImageMapRectangle from "@spectrum-icons/workflow/ImageMapRectangle";
import ImageNext from "@spectrum-icons/workflow/ImageNext";
import ImageProfile from "@spectrum-icons/workflow/ImageProfile";
import ImageSearch from "@spectrum-icons/workflow/ImageSearch";
import ImageText from "@spectrum-icons/workflow/ImageText";
import Images from "@spectrum-icons/workflow/Images";
import Import from "@spectrum-icons/workflow/Import";
import Inbox from "@spectrum-icons/workflow/Inbox";
import Individual from "@spectrum-icons/workflow/Individual";
import Info from "@spectrum-icons/workflow/Info";
import InfoOutline from "@spectrum-icons/workflow/InfoOutline";
import IntersectOverlap from "@spectrum-icons/workflow/IntersectOverlap";
import InvertAdj from "@spectrum-icons/workflow/InvertAdj";
import Invite from "@spectrum-icons/workflow/Invite";
import Journey from "@spectrum-icons/workflow/Journey";
import JourneyAction from "@spectrum-icons/workflow/JourneyAction";
import JourneyData from "@spectrum-icons/workflow/JourneyData";
import JourneyEvent from "@spectrum-icons/workflow/JourneyEvent";
import JourneyEvent2 from "@spectrum-icons/workflow/JourneyEvent2";
import JourneyReports from "@spectrum-icons/workflow/JourneyReports";
import JourneyVoyager from "@spectrum-icons/workflow/JourneyVoyager";
import JumpToTop from "@spectrum-icons/workflow/JumpToTop";
import Key from "@spectrum-icons/workflow/Key";
import KeyClock from "@spectrum-icons/workflow/KeyClock";
import KeyExclude from "@spectrum-icons/workflow/KeyExclude";
import Keyboard from "@spectrum-icons/workflow/Keyboard";
import Label from "@spectrum-icons/workflow/Label";
import LabelExclude from "@spectrum-icons/workflow/LabelExclude";
import Labels from "@spectrum-icons/workflow/Labels";
import Landscape from "@spectrum-icons/workflow/Landscape";
import Launch from "@spectrum-icons/workflow/Launch";
import Layers from "@spectrum-icons/workflow/Layers";
import LayersBackward from "@spectrum-icons/workflow/LayersBackward";
import LayersBringToFront from "@spectrum-icons/workflow/LayersBringToFront";
import LayersForward from "@spectrum-icons/workflow/LayersForward";
import LayersSendToBack from "@spectrum-icons/workflow/LayersSendToBack";
import Light from "@spectrum-icons/workflow/Light";
import Line from "@spectrum-icons/workflow/Line";
import LineHeight from "@spectrum-icons/workflow/LineHeight";
import LinearGradient from "@spectrum-icons/workflow/LinearGradient";
import Link from "@spectrum-icons/workflow/Link";
import LinkCheck from "@spectrum-icons/workflow/LinkCheck";
import LinkGlobe from "@spectrum-icons/workflow/LinkGlobe";
import LinkNav from "@spectrum-icons/workflow/LinkNav";
import LinkOff from "@spectrum-icons/workflow/LinkOff";
import LinkOut from "@spectrum-icons/workflow/LinkOut";
import LinkOutLight from "@spectrum-icons/workflow/LinkOutLight";
import LinkPage from "@spectrum-icons/workflow/LinkPage";
import LinkUser from "@spectrum-icons/workflow/LinkUser";
import Location from "@spectrum-icons/workflow/Location";
import LocationBasedDate from "@spectrum-icons/workflow/LocationBasedDate";
import LocationBasedEvent from "@spectrum-icons/workflow/LocationBasedEvent";
import LocationContribution from "@spectrum-icons/workflow/LocationContribution";
import LockClosed from "@spectrum-icons/workflow/LockClosed";
import LockOpen from "@spectrum-icons/workflow/LockOpen";
import LogOut from "@spectrum-icons/workflow/LogOut";
import Login from "@spectrum-icons/workflow/Login";
import Looks from "@spectrum-icons/workflow/Looks";
import LoupeView from "@spectrum-icons/workflow/LoupeView";
import MBox from "@spectrum-icons/workflow/MBox";
import MagicWand from "@spectrum-icons/workflow/MagicWand";
import Magnify from "@spectrum-icons/workflow/Magnify";
import Mailbox from "@spectrum-icons/workflow/Mailbox";
import MapView from "@spectrum-icons/workflow/MapView";
import MarginBottom from "@spectrum-icons/workflow/MarginBottom";
import MarginLeft from "@spectrum-icons/workflow/MarginLeft";
import MarginRight from "@spectrum-icons/workflow/MarginRight";
import MarginTop from "@spectrum-icons/workflow/MarginTop";
import MarketingActivities from "@spectrum-icons/workflow/MarketingActivities";
import Maximize from "@spectrum-icons/workflow/Maximize";
import Measure from "@spectrum-icons/workflow/Measure";
import Menu from "@spectrum-icons/workflow/Menu";
import Merge from "@spectrum-icons/workflow/Merge";
import MergeLayers from "@spectrum-icons/workflow/MergeLayers";
import Messenger from "@spectrum-icons/workflow/Messenger";
import Minimize from "@spectrum-icons/workflow/Minimize";
import MobileServices from "@spectrum-icons/workflow/MobileServices";
import ModernGridView from "@spectrum-icons/workflow/ModernGridView";
import Money from "@spectrum-icons/workflow/Money";
import Monitoring from "@spectrum-icons/workflow/Monitoring";
import Moon from "@spectrum-icons/workflow/Moon";
import More from "@spectrum-icons/workflow/More";
import MoreCircle from "@spectrum-icons/workflow/MoreCircle";
import MoreSmall from "@spectrum-icons/workflow/MoreSmall";
import MoreSmallList from "@spectrum-icons/workflow/MoreSmallList";
import MoreSmallListVert from "@spectrum-icons/workflow/MoreSmallListVert";
import MoreVertical from "@spectrum-icons/workflow/MoreVertical";
import Move from "@spectrum-icons/workflow/Move";
import MoveLeftRight from "@spectrum-icons/workflow/MoveLeftRight";
import MoveTo from "@spectrum-icons/workflow/MoveTo";
import MoveUpDown from "@spectrum-icons/workflow/MoveUpDown";
import MovieCamera from "@spectrum-icons/workflow/MovieCamera";
import Multiple from "@spectrum-icons/workflow/Multiple";
import MultipleAdd from "@spectrum-icons/workflow/MultipleAdd";
import MultipleCheck from "@spectrum-icons/workflow/MultipleCheck";
import MultipleExclude from "@spectrum-icons/workflow/MultipleExclude";
import NamingOrder from "@spectrum-icons/workflow/NamingOrder";
import NewItem from "@spectrum-icons/workflow/NewItem";
import News from "@spectrum-icons/workflow/News";
import NewsAdd from "@spectrum-icons/workflow/NewsAdd";
import NoEdit from "@spectrum-icons/workflow/NoEdit";
import Note from "@spectrum-icons/workflow/Note";
import NoteAdd from "@spectrum-icons/workflow/NoteAdd";
import OS from "@spectrum-icons/workflow/OS";
import Offer from "@spectrum-icons/workflow/Offer";
import OfferDelete from "@spectrum-icons/workflow/OfferDelete";
import OnAir from "@spectrum-icons/workflow/OnAir";
import OpenIn from "@spectrum-icons/workflow/OpenIn";
import OpenInLight from "@spectrum-icons/workflow/OpenInLight";
import OpenRecent from "@spectrum-icons/workflow/OpenRecent";
import OpenRecentOutline from "@spectrum-icons/workflow/OpenRecentOutline";
import Orbit from "@spectrum-icons/workflow/Orbit";
import Organisations from "@spectrum-icons/workflow/Organisations";
import Organize from "@spectrum-icons/workflow/Organize";
import OutlinePath from "@spectrum-icons/workflow/OutlinePath";
import PaddingBottom from "@spectrum-icons/workflow/PaddingBottom";
import PaddingLeft from "@spectrum-icons/workflow/PaddingLeft";
import PaddingRight from "@spectrum-icons/workflow/PaddingRight";
import PaddingTop from "@spectrum-icons/workflow/PaddingTop";
import PageBreak from "@spectrum-icons/workflow/PageBreak";
import PageExclude from "@spectrum-icons/workflow/PageExclude";
import PageGear from "@spectrum-icons/workflow/PageGear";
import PageRule from "@spectrum-icons/workflow/PageRule";
import PageShare from "@spectrum-icons/workflow/PageShare";
import PageTag from "@spectrum-icons/workflow/PageTag";
import PagesExclude from "@spectrum-icons/workflow/PagesExclude";
import Pan from "@spectrum-icons/workflow/Pan";
import Panel from "@spectrum-icons/workflow/Panel";
import Paste from "@spectrum-icons/workflow/Paste";
import PasteHTML from "@spectrum-icons/workflow/PasteHTML";
import PasteList from "@spectrum-icons/workflow/PasteList";
import PasteText from "@spectrum-icons/workflow/PasteText";
import Pattern from "@spectrum-icons/workflow/Pattern";
import Pause from "@spectrum-icons/workflow/Pause";
import PauseCircle from "@spectrum-icons/workflow/PauseCircle";
import Pawn from "@spectrum-icons/workflow/Pawn";
import Pending from "@spectrum-icons/workflow/Pending";
import PeopleGroup from "@spectrum-icons/workflow/PeopleGroup";
import PersonalizationField from "@spectrum-icons/workflow/PersonalizationField";
import Perspective from "@spectrum-icons/workflow/Perspective";
import PinOff from "@spectrum-icons/workflow/PinOff";
import PinOn from "@spectrum-icons/workflow/PinOn";
import Pivot from "@spectrum-icons/workflow/Pivot";
import PlatformDataMapping from "@spectrum-icons/workflow/PlatformDataMapping";
import Play from "@spectrum-icons/workflow/Play";
import PlayCircle from "@spectrum-icons/workflow/PlayCircle";
import Plug from "@spectrum-icons/workflow/Plug";
import Polygon from "@spectrum-icons/workflow/Polygon";
import PolygonSelect from "@spectrum-icons/workflow/PolygonSelect";
import PopIn from "@spectrum-icons/workflow/PopIn";
import Portrait from "@spectrum-icons/workflow/Portrait";
import Preset from "@spectrum-icons/workflow/Preset";
import Preview from "@spectrum-icons/workflow/Preview";
import Print from "@spectrum-icons/workflow/Print";
import PrintPreview from "@spectrum-icons/workflow/PrintPreview";
import Project from "@spectrum-icons/workflow/Project";
import ProjectAdd from "@spectrum-icons/workflow/ProjectAdd";
import ProjectEdit from "@spectrum-icons/workflow/ProjectEdit";
import ProjectNameEdit from "@spectrum-icons/workflow/ProjectNameEdit";
import Promote from "@spectrum-icons/workflow/Promote";
import Properties from "@spectrum-icons/workflow/Properties";
import PropertiesCopy from "@spectrum-icons/workflow/PropertiesCopy";
import PublishCheck from "@spectrum-icons/workflow/PublishCheck";
import PublishPending from "@spectrum-icons/workflow/PublishPending";
import PublishReject from "@spectrum-icons/workflow/PublishReject";
import PublishRemove from "@spectrum-icons/workflow/PublishRemove";
import PublishSchedule from "@spectrum-icons/workflow/PublishSchedule";
import PushNotification from "@spectrum-icons/workflow/PushNotification";
import Question from "@spectrum-icons/workflow/Question";
import QuickSelect from "@spectrum-icons/workflow/QuickSelect";
import RSS from "@spectrum-icons/workflow/RSS";
import RadialGradient from "@spectrum-icons/workflow/RadialGradient";
import Rail from "@spectrum-icons/workflow/Rail";
import RailBottom from "@spectrum-icons/workflow/RailBottom";
import RailLeft from "@spectrum-icons/workflow/RailLeft";
import RailRight from "@spectrum-icons/workflow/RailRight";
import RailRightClose from "@spectrum-icons/workflow/RailRightClose";
import RailRightOpen from "@spectrum-icons/workflow/RailRightOpen";
import RailTop from "@spectrum-icons/workflow/RailTop";
import RangeMask from "@spectrum-icons/workflow/RangeMask";
import RealTimeCustomerProfile from "@spectrum-icons/workflow/RealTimeCustomerProfile";
import RectSelect from "@spectrum-icons/workflow/RectSelect";
import Rectangle from "@spectrum-icons/workflow/Rectangle";
import Redo from "@spectrum-icons/workflow/Redo";
import Refresh from "@spectrum-icons/workflow/Refresh";
import RegionSelect from "@spectrum-icons/workflow/RegionSelect";
import Relevance from "@spectrum-icons/workflow/Relevance";
import Remove from "@spectrum-icons/workflow/Remove";
import RemoveCircle from "@spectrum-icons/workflow/RemoveCircle";
import Rename from "@spectrum-icons/workflow/Rename";
import Reorder from "@spectrum-icons/workflow/Reorder";
import Replay from "@spectrum-icons/workflow/Replay";
import Replies from "@spectrum-icons/workflow/Replies";
import Reply from "@spectrum-icons/workflow/Reply";
import ReplyAll from "@spectrum-icons/workflow/ReplyAll";
import Report from "@spectrum-icons/workflow/Report";
import ReportAdd from "@spectrum-icons/workflow/ReportAdd";
import Resize from "@spectrum-icons/workflow/Resize";
import Retweet from "@spectrum-icons/workflow/Retweet";
import Reuse from "@spectrum-icons/workflow/Reuse";
import Revenue from "@spectrum-icons/workflow/Revenue";
import Revert from "@spectrum-icons/workflow/Revert";
import Rewind from "@spectrum-icons/workflow/Rewind";
import RewindCircle from "@spectrum-icons/workflow/RewindCircle";
import Ribbon from "@spectrum-icons/workflow/Ribbon";
import RotateCCW from "@spectrum-icons/workflow/RotateCCW";
import RotateCCWBold from "@spectrum-icons/workflow/RotateCCWBold";
import RotateCW from "@spectrum-icons/workflow/RotateCW";
import RotateCWBold from "@spectrum-icons/workflow/RotateCWBold";
import RotateLeft from "@spectrum-icons/workflow/RotateLeft";
import RotateLeftOutline from "@spectrum-icons/workflow/RotateLeftOutline";
import RotateRight from "@spectrum-icons/workflow/RotateRight";
import RotateRightOutline from "@spectrum-icons/workflow/RotateRightOutline";
import SMS from "@spectrum-icons/workflow/SMS";
import SMSKey from "@spectrum-icons/workflow/SMSKey";
import SMSLightning from "@spectrum-icons/workflow/SMSLightning";
import SMSRefresh from "@spectrum-icons/workflow/SMSRefresh";
import SQLQuery from "@spectrum-icons/workflow/SQLQuery";
import Sampler from "@spectrum-icons/workflow/Sampler";
import Sandbox from "@spectrum-icons/workflow/Sandbox";
import SaveAsFloppy from "@spectrum-icons/workflow/SaveAsFloppy";
import SaveFloppy from "@spectrum-icons/workflow/SaveFloppy";
import SaveTo from "@spectrum-icons/workflow/SaveTo";
import SaveToLight from "@spectrum-icons/workflow/SaveToLight";
import Scribble from "@spectrum-icons/workflow/Scribble";
import Search from "@spectrum-icons/workflow/Search";
import Seat from "@spectrum-icons/workflow/Seat";
import SeatAdd from "@spectrum-icons/workflow/SeatAdd";
import Segmentation from "@spectrum-icons/workflow/Segmentation";
import Segments from "@spectrum-icons/workflow/Segments";
import SelectAdd from "@spectrum-icons/workflow/SelectAdd";
import SelectBox from "@spectrum-icons/workflow/SelectBox";
import SelectBoxAll from "@spectrum-icons/workflow/SelectBoxAll";
import SelectCircular from "@spectrum-icons/workflow/SelectCircular";
import SelectContainer from "@spectrum-icons/workflow/SelectContainer";
import SelectGear from "@spectrum-icons/workflow/SelectGear";
import SelectIntersect from "@spectrum-icons/workflow/SelectIntersect";
import SelectSubtract from "@spectrum-icons/workflow/SelectSubtract";
import Selection from "@spectrum-icons/workflow/Selection";
import SelectionChecked from "@spectrum-icons/workflow/SelectionChecked";
import SelectionMove from "@spectrum-icons/workflow/SelectionMove";
import Send from "@spectrum-icons/workflow/Send";
import SentimentNegative from "@spectrum-icons/workflow/SentimentNegative";
import SentimentNeutral from "@spectrum-icons/workflow/SentimentNeutral";
import SentimentPositive from "@spectrum-icons/workflow/SentimentPositive";
import Servers from "@spectrum-icons/workflow/Servers";
import Settings from "@spectrum-icons/workflow/Settings";
import Shapes from "@spectrum-icons/workflow/Shapes";
import Share from "@spectrum-icons/workflow/Share";
import ShareAndroid from "@spectrum-icons/workflow/ShareAndroid";
import ShareCheck from "@spectrum-icons/workflow/ShareCheck";
import ShareLight from "@spectrum-icons/workflow/ShareLight";
import ShareWindows from "@spectrum-icons/workflow/ShareWindows";
import Sharpen from "@spectrum-icons/workflow/Sharpen";
import Shield from "@spectrum-icons/workflow/Shield";
import Ship from "@spectrum-icons/workflow/Ship";
import Shop from "@spectrum-icons/workflow/Shop";
import ShoppingCart from "@spectrum-icons/workflow/ShoppingCart";
import ShowAllLayers from "@spectrum-icons/workflow/ShowAllLayers";
import ShowMenu from "@spectrum-icons/workflow/ShowMenu";
import ShowOneLayer from "@spectrum-icons/workflow/ShowOneLayer";
import Shuffle from "@spectrum-icons/workflow/Shuffle";
import Slice from "@spectrum-icons/workflow/Slice";
import Slow from "@spectrum-icons/workflow/Slow";
import SmallCaps from "@spectrum-icons/workflow/SmallCaps";
import Snapshot from "@spectrum-icons/workflow/Snapshot";
import SocialNetwork from "@spectrum-icons/workflow/SocialNetwork";
import SortOrderDown from "@spectrum-icons/workflow/SortOrderDown";
import SortOrderUp from "@spectrum-icons/workflow/SortOrderUp";
import Spam from "@spectrum-icons/workflow/Spam";
import Spellcheck from "@spectrum-icons/workflow/Spellcheck";
import Spin from "@spectrum-icons/workflow/Spin";
import SplitView from "@spectrum-icons/workflow/SplitView";
import SpotHeal from "@spectrum-icons/workflow/SpotHeal";
import Stadium from "@spectrum-icons/workflow/Stadium";
import Stage from "@spectrum-icons/workflow/Stage";
import Stamp from "@spectrum-icons/workflow/Stamp";
import Star from "@spectrum-icons/workflow/Star";
import StarOutline from "@spectrum-icons/workflow/StarOutline";
import Starburst from "@spectrum-icons/workflow/Starburst";
import StepBackward from "@spectrum-icons/workflow/StepBackward";
import StepBackwardCircle from "@spectrum-icons/workflow/StepBackwardCircle";
import StepForward from "@spectrum-icons/workflow/StepForward";
import StepForwardCircle from "@spectrum-icons/workflow/StepForwardCircle";
import Stop from "@spectrum-icons/workflow/Stop";
import StopCircle from "@spectrum-icons/workflow/StopCircle";
import Stopwatch from "@spectrum-icons/workflow/Stopwatch";
import Straighten from "@spectrum-icons/workflow/Straighten";
import StraightenOutline from "@spectrum-icons/workflow/StraightenOutline";
import StrokeWidth from "@spectrum-icons/workflow/StrokeWidth";
import Subscribe from "@spectrum-icons/workflow/Subscribe";
import SubtractBackPath from "@spectrum-icons/workflow/SubtractBackPath";
import SubtractFromSelection from "@spectrum-icons/workflow/SubtractFromSelection";
import SubtractFrontPath from "@spectrum-icons/workflow/SubtractFrontPath";
import SuccessMetric from "@spectrum-icons/workflow/SuccessMetric";
import Summarize from "@spectrum-icons/workflow/Summarize";
import Survey from "@spectrum-icons/workflow/Survey";
import Sync from "@spectrum-icons/workflow/Sync";
import SyncRemove from "@spectrum-icons/workflow/SyncRemove";
import TableAdd from "@spectrum-icons/workflow/TableAdd";
import TableAndChart from "@spectrum-icons/workflow/TableAndChart";
import TableColumnAddLeft from "@spectrum-icons/workflow/TableColumnAddLeft";
import TableColumnAddRight from "@spectrum-icons/workflow/TableColumnAddRight";
import TableColumnMerge from "@spectrum-icons/workflow/TableColumnMerge";
import TableColumnRemoveCenter from "@spectrum-icons/workflow/TableColumnRemoveCenter";
import TableColumnSplit from "@spectrum-icons/workflow/TableColumnSplit";
import TableEdit from "@spectrum-icons/workflow/TableEdit";
import TableHistogram from "@spectrum-icons/workflow/TableHistogram";
import TableMergeCells from "@spectrum-icons/workflow/TableMergeCells";
import TableRowAddBottom from "@spectrum-icons/workflow/TableRowAddBottom";
import TableRowAddTop from "@spectrum-icons/workflow/TableRowAddTop";
import TableRowMerge from "@spectrum-icons/workflow/TableRowMerge";
import TableRowRemoveCenter from "@spectrum-icons/workflow/TableRowRemoveCenter";
import TableRowSplit from "@spectrum-icons/workflow/TableRowSplit";
import TableSelectColumn from "@spectrum-icons/workflow/TableSelectColumn";
import TableSelectRow from "@spectrum-icons/workflow/TableSelectRow";
import TagBold from "@spectrum-icons/workflow/TagBold";
import TagItalic from "@spectrum-icons/workflow/TagItalic";
import TagUnderline from "@spectrum-icons/workflow/TagUnderline";
import Target from "@spectrum-icons/workflow/Target";
import Targeted from "@spectrum-icons/workflow/Targeted";
import TaskList from "@spectrum-icons/workflow/TaskList";
import Teapot from "@spectrum-icons/workflow/Teapot";
import Temperature from "@spectrum-icons/workflow/Temperature";
import TestAB from "@spectrum-icons/workflow/TestAB";
import TestABEdit from "@spectrum-icons/workflow/TestABEdit";
import TestABGear from "@spectrum-icons/workflow/TestABGear";
import TestABRemove from "@spectrum-icons/workflow/TestABRemove";
import TestProfile from "@spectrum-icons/workflow/TestProfile";
import TextAdd from "@spectrum-icons/workflow/TextAdd";
import TextAlignCenter from "@spectrum-icons/workflow/TextAlignCenter";
import TextAlignJustify from "@spectrum-icons/workflow/TextAlignJustify";
import TextAlignLeft from "@spectrum-icons/workflow/TextAlignLeft";
import TextAlignRight from "@spectrum-icons/workflow/TextAlignRight";
import TextBaselineShift from "@spectrum-icons/workflow/TextBaselineShift";
import TextBold from "@spectrum-icons/workflow/TextBold";
import TextBulleted from "@spectrum-icons/workflow/TextBulleted";
import TextBulletedAttach from "@spectrum-icons/workflow/TextBulletedAttach";
import TextBulletedHierarchy from "@spectrum-icons/workflow/TextBulletedHierarchy";
import TextBulletedHierarchyExclude from "@spectrum-icons/workflow/TextBulletedHierarchyExclude";
import TextColor from "@spectrum-icons/workflow/TextColor";
import TextDecrease from "@spectrum-icons/workflow/TextDecrease";
import TextEdit from "@spectrum-icons/workflow/TextEdit";
import TextExclude from "@spectrum-icons/workflow/TextExclude";
import TextIncrease from "@spectrum-icons/workflow/TextIncrease";
import TextIndentDecrease from "@spectrum-icons/workflow/TextIndentDecrease";
import TextIndentIncrease from "@spectrum-icons/workflow/TextIndentIncrease";
import TextItalic from "@spectrum-icons/workflow/TextItalic";
import TextKerning from "@spectrum-icons/workflow/TextKerning";
import TextLetteredLowerCase from "@spectrum-icons/workflow/TextLetteredLowerCase";
import TextLetteredUpperCase from "@spectrum-icons/workflow/TextLetteredUpperCase";
import TextNumbered from "@spectrum-icons/workflow/TextNumbered";
import TextParagraph from "@spectrum-icons/workflow/TextParagraph";
import TextRomanLowercase from "@spectrum-icons/workflow/TextRomanLowercase";
import TextRomanUppercase from "@spectrum-icons/workflow/TextRomanUppercase";
import TextSize from "@spectrum-icons/workflow/TextSize";
import TextSizeAdd from "@spectrum-icons/workflow/TextSizeAdd";
import TextSpaceAfter from "@spectrum-icons/workflow/TextSpaceAfter";
import TextSpaceBefore from "@spectrum-icons/workflow/TextSpaceBefore";
import TextStrikethrough from "@spectrum-icons/workflow/TextStrikethrough";
import TextStroke from "@spectrum-icons/workflow/TextStroke";
import TextStyle from "@spectrum-icons/workflow/TextStyle";
import TextSubscript from "@spectrum-icons/workflow/TextSubscript";
import TextSuperscript from "@spectrum-icons/workflow/TextSuperscript";
import TextTracking from "@spectrum-icons/workflow/TextTracking";
import TextUnderline from "@spectrum-icons/workflow/TextUnderline";
import ThumbDown from "@spectrum-icons/workflow/ThumbDown";
import ThumbDownOutline from "@spectrum-icons/workflow/ThumbDownOutline";
import ThumbUp from "@spectrum-icons/workflow/ThumbUp";
import ThumbUpOutline from "@spectrum-icons/workflow/ThumbUpOutline";
import Tips from "@spectrum-icons/workflow/Tips";
import Train from "@spectrum-icons/workflow/Train";
import TransferToPlatform from "@spectrum-icons/workflow/TransferToPlatform";
import Transparency from "@spectrum-icons/workflow/Transparency";
import Trap from "@spectrum-icons/workflow/Trap";
import TreeCollapse from "@spectrum-icons/workflow/TreeCollapse";
import TreeCollapseAll from "@spectrum-icons/workflow/TreeCollapseAll";
import TreeExpand from "@spectrum-icons/workflow/TreeExpand";
import TreeExpandAll from "@spectrum-icons/workflow/TreeExpandAll";
import TrendInspect from "@spectrum-icons/workflow/TrendInspect";
import TrimPath from "@spectrum-icons/workflow/TrimPath";
import Trophy from "@spectrum-icons/workflow/Trophy";
import Type from "@spectrum-icons/workflow/Type";
import USA from "@spectrum-icons/workflow/USA";
import Underline from "@spectrum-icons/workflow/Underline";
import Undo from "@spectrum-icons/workflow/Undo";
import Ungroup from "@spectrum-icons/workflow/Ungroup";
import Unlink from "@spectrum-icons/workflow/Unlink";
import Unmerge from "@spectrum-icons/workflow/Unmerge";
import UploadToCloud from "@spectrum-icons/workflow/UploadToCloud";
import UploadToCloudOutline from "@spectrum-icons/workflow/UploadToCloudOutline";
import User from "@spectrum-icons/workflow/User";
import UserActivity from "@spectrum-icons/workflow/UserActivity";
import UserAdd from "@spectrum-icons/workflow/UserAdd";
import UserAdmin from "@spectrum-icons/workflow/UserAdmin";
import UserArrow from "@spectrum-icons/workflow/UserArrow";
import UserCheckedOut from "@spectrum-icons/workflow/UserCheckedOut";
import UserDeveloper from "@spectrum-icons/workflow/UserDeveloper";
import UserEdit from "@spectrum-icons/workflow/UserEdit";
import UserExclude from "@spectrum-icons/workflow/UserExclude";
import UserGroup from "@spectrum-icons/workflow/UserGroup";
import UserLock from "@spectrum-icons/workflow/UserLock";
import UserShare from "@spectrum-icons/workflow/UserShare";
import UsersAdd from "@spectrum-icons/workflow/UsersAdd";
import UsersExclude from "@spectrum-icons/workflow/UsersExclude";
import UsersLock from "@spectrum-icons/workflow/UsersLock";
import UsersShare from "@spectrum-icons/workflow/UsersShare";
import Variable from "@spectrum-icons/workflow/Variable";
import VectorDraw from "@spectrum-icons/workflow/VectorDraw";
import VideoCheckedOut from "@spectrum-icons/workflow/VideoCheckedOut";
import VideoFilled from "@spectrum-icons/workflow/VideoFilled";
import VideoOutline from "@spectrum-icons/workflow/VideoOutline";
import ViewAllTags from "@spectrum-icons/workflow/ViewAllTags";
import ViewBiWeek from "@spectrum-icons/workflow/ViewBiWeek";
import ViewCard from "@spectrum-icons/workflow/ViewCard";
import ViewColumn from "@spectrum-icons/workflow/ViewColumn";
import ViewDay from "@spectrum-icons/workflow/ViewDay";
import ViewDetail from "@spectrum-icons/workflow/ViewDetail";
import ViewGrid from "@spectrum-icons/workflow/ViewGrid";
import ViewList from "@spectrum-icons/workflow/ViewList";
import ViewRow from "@spectrum-icons/workflow/ViewRow";
import ViewSingle from "@spectrum-icons/workflow/ViewSingle";
import ViewStack from "@spectrum-icons/workflow/ViewStack";
import ViewWeek from "@spectrum-icons/workflow/ViewWeek";
import ViewedMarkAs from "@spectrum-icons/workflow/ViewedMarkAs";
import Vignette from "@spectrum-icons/workflow/Vignette";
import Visibility from "@spectrum-icons/workflow/Visibility";
import VisibilityOff from "@spectrum-icons/workflow/VisibilityOff";
import Visit from "@spectrum-icons/workflow/Visit";
import VisitShare from "@spectrum-icons/workflow/VisitShare";
import VoiceOver from "@spectrum-icons/workflow/VoiceOver";
import VolumeMute from "@spectrum-icons/workflow/VolumeMute";
import VolumeOne from "@spectrum-icons/workflow/VolumeOne";
import VolumeThree from "@spectrum-icons/workflow/VolumeThree";
import VolumeTwo from "@spectrum-icons/workflow/VolumeTwo";
import Watch from "@spectrum-icons/workflow/Watch";
import WebPage from "@spectrum-icons/workflow/WebPage";
import WebPages from "@spectrum-icons/workflow/WebPages";
import Workflow from "@spectrum-icons/workflow/Workflow";
import WorkflowAdd from "@spectrum-icons/workflow/WorkflowAdd";
import Wrench from "@spectrum-icons/workflow/Wrench";
import ZoomIn from "@spectrum-icons/workflow/ZoomIn";
import ZoomOut from "@spectrum-icons/workflow/ZoomOut";
import _123 from "@spectrum-icons/workflow/123";
import _3DMaterials from "@spectrum-icons/workflow/3DMaterials";
import IconsColorStories, {ColorIconWithSizes} from "@spectrum-icons/color/stories/IconsColor.stories";
import IconsExpressChromatic, {Colors} from "@spectrum-icons/express/chromatic/IconsExpress.chromatic";
import {IconAddWithSizes, IconAlertInformative} from "@spectrum-icons/express/stories/IconsExpress.stories";

export default () => (
    <Palette>
<Category name="Application">
<Component name="Provider" docURL="https://react-spectrum.adobe.com/react-spectrum/Provider.html">
<Variant name="Example">
<Provider theme={defaultTheme}>
                  <Button variant="accent">
                    Hello React Spectrum!
                  </Button>
                </Provider>
</Variant>
<Variant name="Example1">
<Provider theme={defaultTheme}>
                  <Button variant="accent">
                    Hello React Spectrum!
                  </Button>
                </Provider>
</Variant>
<Variant name="Example12">
<Provider
    theme={defaultTheme}
>
                  <Button variant="accent">
                    Hello React
                    Spectrum!
                  </Button>
                </Provider>
</Variant>
<Variant name="Color Schemes">
<Provider theme={theme} colorScheme="light">
                  <ActionButton margin="size-100">I'm a light button</ActionButton>
                </Provider>
</Variant>
<Variant name="Color Schemes1">
<Provider theme={theme} colorScheme="light">
                  <ActionButton margin="size-100">
                    I'm a light button
                  </ActionButton>
                </Provider>
</Variant>
<Variant name="Color Schemes12">
<Provider
    theme={theme}
    colorScheme="light"
>
                  <ActionButton margin="size-100">
                    I'm a light button
                  </ActionButton>
                </Provider>
</Variant>
<Variant name="Breakpoints">
<Provider theme={theme} breakpoints={{tablet: 640, desktop: 1024}}>
                  <View
                      height="size-1000"
                      backgroundColor={{
                          base: 'celery-600',
                          tablet: 'blue-600',
                          desktop: 'magenta-600'
                      }}
                  />
                </Provider>
</Variant>
<Variant name="Breakpoints1">
<Provider
    theme={theme}
    breakpoints={{tablet: 640, desktop: 1024}}
>
                  <View
                      height="size-1000"
                      backgroundColor={{
                          base: 'celery-600',
                          tablet: 'blue-600',
                          desktop: 'magenta-600'
                      }}
                  />
                </Provider>
</Variant>
<Variant name="Breakpoints12">
<Provider
    theme={theme}
    breakpoints={{
        tablet: 640,
        desktop: 1024
    }}
>
                  <View
                      height="size-1000"
                      backgroundColor={{
                          base:
                              'celery-600',
                          tablet:
                              'blue-600',
                          desktop:
                              'magenta-600'
                      }}
                  />
                </Provider>
</Variant>
<Variant name="Client side routing">
<Provider theme={theme} router={{navigate}}>
                  <YourApp/>
                </Provider>
</Variant>
<Variant name="Client side routing1">
<Provider theme={theme} router={{navigate}}>
                  <YourApp/>
                </Provider>
</Variant>
<Variant name="Client side routing12">
<Provider
    theme={theme}
    router={{navigate}}
>
                  <YourApp/>
                </Provider>
</Variant>
<Variant name="Property groups">
<Flex direction="column" gap="size-100" alignItems="start">
                  <Provider isDisabled>
                    <RadioGroup label="Favorite animal">
                      <Radio value="dogs">Dogs</Radio>
                      <Radio value="cats">Cats</Radio>
                      <Radio value="horses">Horses</Radio>
                    </RadioGroup>
                    <Checkbox>I agree</Checkbox>
                    <Button variant="primary">Submit</Button>
                  </Provider>
                </Flex>
</Variant>
<Variant name="Property groups1">
<Flex direction="column" gap="size-100" alignItems="start">
                  <Provider isDisabled>
                    <RadioGroup label="Favorite animal">
                      <Radio value="dogs">Dogs</Radio>
                      <Radio value="cats">Cats</Radio>
                      <Radio value="horses">Horses</Radio>
                    </RadioGroup>
                    <Checkbox>I agree</Checkbox>
                    <Button variant="primary">Submit</Button>
                  </Provider>
                </Flex>
</Variant>
<Variant name="Property groups12">
<Flex
    direction="column"
    gap="size-100"
    alignItems="start"
>
                  <Provider isDisabled>
                    <RadioGroup label="Favorite animal">
                      <Radio value="dogs">
                        Dogs
                      </Radio>
                      <Radio value="cats">
                        Cats
                      </Radio>
                      <Radio value="horses">
                        Horses
                      </Radio>
                    </RadioGroup>
                    <Checkbox>
                      I agree
                    </Checkbox>
                    <Button variant="primary">
                      Submit
                    </Button>
                  </Provider>
                </Flex>
</Variant>
<Variant name="Property groups123">
<Flex direction="column" gap="size-100" alignItems="start">
                    <Provider isQuiet>
                    <TextField
                        label="Email"
                        value={email}
                        onChange={setEmail}/>
                <Provider isDisabled={email.length === 0}>
                          <Picker label="Favorite color">
                            <Item key="magenta">Magenta</Item>
                            <Item key="indigo">Indigo</Item>
                            <Item key="chartreuse">Chartreuse</Item>
                          </Picker>
                          <Button variant="primary">Submit</Button>
                        </Provider>
                </Provider>
                </Flex>
</Variant>
<Variant name="Property groups1234">
<Flex
    direction="column"
    gap="size-100"
    alignItems="start"
>
                    <Provider isQuiet>
                    <TextField
                        label="Email"
                        value={email}
                        onChange={setEmail}
                    />
                <Provider isDisabled={email.length === 0}>
                          <Picker label="Favorite color">
                            <Item key="magenta">Magenta</Item>
                            <Item key="indigo">Indigo</Item>
                            <Item key="chartreuse">Chartreuse</Item>
                          </Picker>
                          <Button variant="primary">Submit</Button>
                        </Provider>
                </Provider>
                </Flex>
</Variant>
<Variant name="Property groups12345">
<Flex
    direction="column"
    gap="size-100"
    alignItems="start"
>
                    <Provider isQuiet>
                    <TextField
                        label="Email"
                    />
                <Provider
                >
                          <Picker label="Favorite color">
                            <Item key="magenta">
                              Magenta
                            </Item>
                            <Item key="indigo">
                              Indigo
                            </Item>
                            <Item key="chartreuse">
                              Chartreuse
                            </Item>
                          </Picker>
                          <Button variant="primary">
                            Submit
                          </Button>
                        </Provider>
                </Provider>
                </Flex>
</Variant>
<Variant name="useProvider">
<Moon aria-label="In dark theme"/>
</Variant>
<Variant name="useProvider1">
<Moon aria-label="In dark theme"/>
</Variant>
</Component>
</Category>
<Category name="Layout">
<Component name="Flex" docURL="https://react-spectrum.adobe.com/react-spectrum/Flex.html">
<Variant name="Vertical stack">
<Flex direction="column" width="size-2000" gap="size-100">
          <View backgroundColor="celery-600" height="size-800"/>
          <View backgroundColor="blue-600" height="size-800"/>
          <View backgroundColor="magenta-600" height="size-800"/>
        </Flex>
</Variant>
<Variant name="Vertical stack1">
<Flex direction="column" width="size-2000" gap="size-100">
          <View backgroundColor="celery-600" height="size-800"/>
          <View backgroundColor="blue-600" height="size-800"/>
          <View backgroundColor="magenta-600" height="size-800"/>
        </Flex>
</Variant>
<Variant name="Vertical stack12">
<Flex
    direction="column"
    width="size-2000"
    gap="size-100"
>
          <View
              backgroundColor="celery-600"
              height="size-800"
          />
          <View
              backgroundColor="blue-600"
              height="size-800"
          />
          <View
              backgroundColor="magenta-600"
              height="size-800"
          />
        </Flex>
</Variant>
<Variant name="Horizontal stack">
<Flex direction="row" height="size-800" gap="size-100">
          <View backgroundColor="celery-600" width="size-800"/>
          <View backgroundColor="blue-600" width="size-800"/>
          <View backgroundColor="magenta-600" width="size-800"/>
        </Flex>
</Variant>
<Variant name="Horizontal stack1">
<Flex direction="row" height="size-800" gap="size-100">
          <View backgroundColor="celery-600" width="size-800"/>
          <View backgroundColor="blue-600" width="size-800"/>
          <View backgroundColor="magenta-600" width="size-800"/>
        </Flex>
</Variant>
<Variant name="Horizontal stack12">
<Flex
    direction="row"
    height="size-800"
    gap="size-100"
>
          <View
              backgroundColor="celery-600"
              width="size-800"
          />
          <View
              backgroundColor="blue-600"
              width="size-800"
          />
          <View
              backgroundColor="magenta-600"
              width="size-800"
          />
        </Flex>
</Variant>
<Variant name="Nesting">
<Flex direction="column" gap="size-100">
          <View backgroundColor="celery-600" height="size-800"/>
          <Flex direction="row" height="size-3000" gap="size-100">
            <View backgroundColor="indigo-600" width="size-2000"/>
            <View backgroundColor="seafoam-600" flex/>
          </Flex>
          <View backgroundColor="magenta-600" height="size-800"/>
        </Flex>
</Variant>
<Variant name="Nesting1">
<Flex direction="column" gap="size-100">
          <View backgroundColor="celery-600" height="size-800"/>
          <Flex direction="row" height="size-3000" gap="size-100">
            <View backgroundColor="indigo-600" width="size-2000"/>
            <View backgroundColor="seafoam-600" flex/>
          </Flex>
          <View backgroundColor="magenta-600" height="size-800"/>
        </Flex>
</Variant>
<Variant name="Nesting12">
<Flex
    direction="column"
    gap="size-100"
>
          <View
              backgroundColor="celery-600"
              height="size-800"
          />
          <Flex
              direction="row"
              height="size-3000"
              gap="size-100"
          >
            <View
                backgroundColor="indigo-600"
                width="size-2000"
            />
            <View
                backgroundColor="seafoam-600"
                flex
            />
          </Flex>
          <View
              backgroundColor="magenta-600"
              height="size-800"
          />
        </Flex>
</Variant>
<Variant name="Wrapping">
<Flex direction="row" gap="size-100" wrap>
          {colors.map((color) => (
              <View
                  key={color}
                  backgroundColor={color}
                  width="size-800"
                  height="size-800"
              />
          ))}
        </Flex>
</Variant>
<Variant name="Wrapping1">
<Flex direction="row" gap="size-100" wrap>
          {colors.map((color) => (
              <View
                  key={color}
                  backgroundColor={color}
                  width="size-800"
                  height="size-800"
              />
          ))}
        </Flex>
</Variant>
<Variant name="Wrapping12">
<Flex
    direction="row"
    gap="size-100"
    wrap
>
          {colors.map(
              (color) => (
                  <View
                      key={color}
                      backgroundColor={color}
                      width="size-800"
                      height="size-800"
                  />
              )
          )}
        </Flex>
</Variant>
<Variant name="Alignment">
<Flex direction="column" gap="size-100" alignItems="center">
          <View backgroundColor="celery-600" width="size-800" height="size-800"/>
          <View backgroundColor="blue-600" width="size-2000" height="size-800"/>
          <View backgroundColor="magenta-600" width="size-800" height="size-800"/>
        </Flex>
</Variant>
<Variant name="Alignment1">
<Flex
    direction="column"
    gap="size-100"
    alignItems="center"
>
          <View
              backgroundColor="celery-600"
              width="size-800"
              height="size-800"
          />
          <View
              backgroundColor="blue-600"
              width="size-2000"
              height="size-800"
          />
          <View
              backgroundColor="magenta-600"
              width="size-800"
              height="size-800"
          />
        </Flex>
</Variant>
<Variant name="Alignment12">
<Flex
    direction="column"
    gap="size-100"
    alignItems="center"
>
          <View
              backgroundColor="celery-600"
              width="size-800"
              height="size-800"
          />
          <View
              backgroundColor="blue-600"
              width="size-2000"
              height="size-800"
          />
          <View
              backgroundColor="magenta-600"
              width="size-800"
              height="size-800"
          />
        </Flex>
</Variant>
<Variant name="Justification">
<View height="size-3000" borderWidth="thin" borderColor="dark">
          <Flex direction="column" gap="size-100" justifyContent="center" height="100%">
            <View backgroundColor="celery-600" width="size-800" height="size-800"/>
            <View backgroundColor="blue-600" width="size-2000" height="size-800"/>
            <View backgroundColor="magenta-600" width="size-800" height="size-800"/>
          </Flex>
        </View>
</Variant>
<Variant name="Justification1">
<View
    height="size-3000"
    borderWidth="thin"
    borderColor="dark"
>
          <Flex
              direction="column"
              gap="size-100"
              justifyContent="center"
              height="100%"
          >
            <View
                backgroundColor="celery-600"
                width="size-800"
                height="size-800"
            />
            <View
                backgroundColor="blue-600"
                width="size-2000"
                height="size-800"
            />
            <View
                backgroundColor="magenta-600"
                width="size-800"
                height="size-800"
            />
          </Flex>
        </View>
</Variant>
<Variant name="Justification12">
<View
    height="size-3000"
    borderWidth="thin"
    borderColor="dark"
>
          <Flex
              direction="column"
              gap="size-100"
              justifyContent="center"
              height="100%"
          >
            <View
                backgroundColor="celery-600"
                width="size-800"
                height="size-800"
            />
            <View
                backgroundColor="blue-600"
                width="size-2000"
                height="size-800"
            />
            <View
                backgroundColor="magenta-600"
                width="size-800"
                height="size-800"
            />
          </Flex>
        </View>
</Variant>
</Component>
<Component name="Grid" docURL="https://react-spectrum.adobe.com/react-spectrum/Grid.html">
<Variant name="Explicit grids">
<Grid
    areas={[
        'header  header',
        'sidebar content',
        'footer  footer'
    ]}
    columns={['1fr', '3fr']}
    rows={['size-1000', 'auto', 'size-1000']}
    height="size-6000"
    gap="size-100">
          <View backgroundColor="celery-600" gridArea="header"/>
          <View backgroundColor="blue-600" gridArea="sidebar"/>
          <View backgroundColor="purple-600" gridArea="content"/>
          <View backgroundColor="magenta-600" gridArea="footer"/>
        </Grid>
</Variant>
<Variant name="Explicit grids1">
<Grid
    areas={[
        'header  header',
        'sidebar content',
        'footer  footer'
    ]}
    columns={['1fr', '3fr']}
    rows={['size-1000', 'auto', 'size-1000']}
    height="size-6000"
    gap="size-100">
          <View backgroundColor="celery-600" gridArea="header"/>
          <View backgroundColor="blue-600" gridArea="sidebar"/>
          <View backgroundColor="purple-600" gridArea="content"/>
          <View backgroundColor="magenta-600" gridArea="footer"/>
        </Grid>
</Variant>
<Variant name="Explicit grids12">
<Grid
    areas={[
        'header  header',
        'sidebar content',
        'footer  footer'
    ]}
    columns={[
        '1fr',
        '3fr'
    ]}
    rows={[
        'size-1000',
        'auto',
        'size-1000'
    ]}
    height="size-6000"
    gap="size-100"
>
          <View
              backgroundColor="celery-600"
              gridArea="header"
          />
          <View
              backgroundColor="blue-600"
              gridArea="sidebar"
          />
          <View
              backgroundColor="purple-600"
              gridArea="content"
          />
          <View
              backgroundColor="magenta-600"
              gridArea="footer"
          />
        </Grid>
</Variant>
<Variant name="Implicit grids">
<Grid
    columns={repeat('auto-fit', 'size-800')}
    autoRows="size-800"
    justifyContent="center"
    gap="size-100">
          {colors.map(color =>
              <View key={color} backgroundColor={color}/>
          )}
        </Grid>
</Variant>
<Variant name="Implicit grids1">
<Grid
    columns={repeat('auto-fit', 'size-800')}
    autoRows="size-800"
    justifyContent="center"
    gap="size-100">
          {colors.map(color =>
              <View key={color} backgroundColor={color}/>
          )}
        </Grid>
</Variant>
<Variant name="Implicit grids12">
<Grid
    columns={repeat(
        'auto-fit',
        'size-800'
    )}
    autoRows="size-800"
    justifyContent="center"
    gap="size-100"
>
          {colors.map(
              (color) => (
                  <View
                      key={color}
                      backgroundColor={color}
                  />
              )
          )}
        </Grid>
</Variant>
</Component>
</Category>
<Category name="Buttons">
<Component name="ActionButton" docURL="https://react-spectrum.adobe.com/react-spectrum/ActionButton.html">
<Variant name="Example">
<ActionButton>Edit</ActionButton>
</Variant>
<Variant name="Example1">
<ActionButton>Edit</ActionButton>
</Variant>
<Variant name="Example12">
<ActionButton>
          Edit
        </ActionButton>
</Variant>
<Variant name="Content">
<ActionButton>
          <Edit/>
          <Text>Icon + Label</Text>
        </ActionButton>
</Variant>
<Variant name="Content1">
<ActionButton>
          <Edit/>
          <Text>Icon + Label</Text>
        </ActionButton>
</Variant>
<Variant name="Content12">
<ActionButton>
          <Edit/>
          <Text>
            Icon + Label
          </Text>
        </ActionButton>
</Variant>
<Variant name="Accessibility">
<ActionButton aria-label="Icon only">
          <Edit/>
        </ActionButton>
</Variant>
<Variant name="Accessibility1">
<ActionButton aria-label="Icon only">
          <Edit/>
        </ActionButton>
</Variant>
<Variant name="Accessibility12">
<ActionButton aria-label="Icon only">
          <Edit/>
        </ActionButton>
</Variant>
<Variant name="Events">
<ActionButton onPress={() => setCount((c) => c + 1)}>
              {count} Edits
            </ActionButton>
</Variant>
<Variant name="Events1">
<ActionButton onPress={() => setCount((c) => c + 1)}>
              {count} Edits
            </ActionButton>
</Variant>
<Variant name="Events12">
<ActionButton
    onPress={() =>
        setCount((c) =>
            c + 1
        )}
>
              {count} Edits
            </ActionButton>
</Variant>
<Variant name="Quiet">
<ActionButton isQuiet>Action!</ActionButton>
</Variant>
<Variant name="Quiet1">
<ActionButton isQuiet>Action!</ActionButton>
</Variant>
<Variant name="Quiet12">
<ActionButton isQuiet>
          Action!
        </ActionButton>
</Variant>
<Variant name="Disabled">
<ActionButton isDisabled>Action!</ActionButton>
</Variant>
<Variant name="Disabled1">
<ActionButton isDisabled>Action!</ActionButton>
</Variant>
<Variant name="Disabled12">
<ActionButton
    isDisabled
>
          Action!
        </ActionButton>
</Variant>
<Variant name="Static color">
<Flex wrap gap="size-250">
          <View backgroundColor="static-blue-700" padding="size-500">
            <ActionButton staticColor="white">
              <Edit/>
              <Text>Edit</Text>
            </ActionButton>
          </View>
          <View backgroundColor="static-yellow-400" padding="size-500">
            <ActionButton staticColor="black" isQuiet>
              <Edit/>
              <Text>Edit</Text>
            </ActionButton>
          </View>
        </Flex>
</Variant>
<Variant name="Static color1">
<Flex wrap gap="size-250">
          <View
              backgroundColor="static-blue-700"
              padding="size-500"
          >
            <ActionButton staticColor="white">
              <Edit/>
              <Text>Edit</Text>
            </ActionButton>
          </View>
          <View
              backgroundColor="static-yellow-400"
              padding="size-500"
          >
            <ActionButton staticColor="black" isQuiet>
              <Edit/>
              <Text>Edit</Text>
            </ActionButton>
          </View>
        </Flex>
</Variant>
<Variant name="Static color12">
<Flex
    wrap
    gap="size-250"
>
          <View
              backgroundColor="static-blue-700"
              padding="size-500"
          >
            <ActionButton staticColor="white">
              <Edit/>
              <Text>Edit</Text>
            </ActionButton>
          </View>
          <View
              backgroundColor="static-yellow-400"
              padding="size-500"
          >
            <ActionButton
                staticColor="black"
                isQuiet
            >
              <Edit/>
              <Text>Edit</Text>
            </ActionButton>
          </View>
        </Flex>
</Variant>
</Component>
<Component name="ActionGroup" docURL="https://react-spectrum.adobe.com/react-spectrum/ActionGroup.html">
<Variant name="Example">
<>
                <ActionGroup onAction={setAction}>
                <Item key="add">Add</Item>
                <Item key="delete">Delete</Item>
                <Item key="edit">Edit</Item>
              </ActionGroup>
              <p>Action: {action}</p>
            </>
</Variant>
<Variant name="Example1">
<>
            <ActionGroup onAction={setAction}>
                <Item key="add">Add</Item>
                <Item key="delete">Delete</Item>
                <Item key="edit">Edit</Item>
              </ActionGroup>
        <p>Action: {action}</p>
        </>
</Variant>
<Variant name="Example12">
<>
            <ActionGroup
                onAction={setAction}
            >
                <Item key="add">
                  Add
                </Item>
                <Item key="delete">
                  Delete
                </Item>
                <Item key="edit">
                  Edit
                </Item>
              </ActionGroup>
        <p>
                Action: {action}
              </p>
        </>
</Variant>
<Variant name="Content">
<ActionGroup items={[
    {label: 'React', name: 'React'},
    {label: 'Add', name: 'Add'},
    {label: 'Delete', name: 'Delete'}
]}>
          {item => <Item key={item.name}>{item.label}</Item>}
        </ActionGroup>
</Variant>
<Variant name="Icons">
<ActionGroup>
          <Item key="edit">
            <Draw/>
            <Text>Edit</Text>
          </Item>
          <Item key="copy">
            <Copy/>
            <Text>Copy</Text>
          </Item>
          <Item key="delete">
            <Delete/>
            <Text>Delete</Text>
          </Item>
        </ActionGroup>
</Variant>
<Variant name="Icons1">
<ActionGroup>
          <Item key="edit">
            <Draw/>
            <Text>Edit</Text>
          </Item>
          <Item key="copy">
            <Copy/>
            <Text>Copy</Text>
          </Item>
          <Item key="delete">
            <Delete/>
            <Text>Delete</Text>
          </Item>
        </ActionGroup>
</Variant>
<Variant name="Icons12">
<ActionGroup>
          <Item key="edit">
            <Draw/>
            <Text>Edit</Text>
          </Item>
          <Item key="copy">
            <Copy/>
            <Text>Copy</Text>
          </Item>
          <Item key="delete">
            <Delete/>
            <Text>Delete</Text>
          </Item>
        </ActionGroup>
</Variant>
<Variant name="Icons123">
<ActionGroup buttonLabelBehavior="hide">
          <Item key="edit">
            <Draw/>
            <Text>Edit</Text>
          </Item>
          <Item key="copy">
            <Copy/>
            <Text>Copy</Text>
          </Item>
          <Item key="delete">
            <Delete/>
            <Text>Delete</Text>
          </Item>
        </ActionGroup>
</Variant>
<Variant name="Icons1234">
<ActionGroup buttonLabelBehavior="hide">
          <Item key="edit">
            <Draw/>
            <Text>Edit</Text>
          </Item>
          <Item key="copy">
            <Copy/>
            <Text>Copy</Text>
          </Item>
          <Item key="delete">
            <Delete/>
            <Text>Delete</Text>
          </Item>
        </ActionGroup>
</Variant>
<Variant name="Icons12345">
<ActionGroup buttonLabelBehavior="hide">
          <Item key="edit">
            <Draw/>
            <Text>Edit</Text>
          </Item>
          <Item key="copy">
            <Copy/>
            <Text>Copy</Text>
          </Item>
          <Item key="delete">
            <Delete/>
            <Text>Delete</Text>
          </Item>
        </ActionGroup>
</Variant>
<Variant name="Accessibility">
<ActionGroup>
          <Item key="brush" aria-label="Brush"><Brush/></Item>
          <Item key="select" aria-label="Select"><Select/></Item>
          <Item key="regionSelect" aria-label="Select Region"><RegionSelect/></Item>
        </ActionGroup>
</Variant>
<Variant name="Accessibility1">
<ActionGroup>
          <Item key="brush" aria-label="Brush">
            <Brush/>
          </Item>
          <Item key="select" aria-label="Select">
            <Select/>
          </Item>
          <Item key="regionSelect" aria-label="Select Region">
            <RegionSelect/>
          </Item>
        </ActionGroup>
</Variant>
<Variant name="Accessibility12">
<ActionGroup>
          <Item
              key="brush"
              aria-label="Brush"
          >
            <Brush/>
          </Item>
          <Item
              key="select"
              aria-label="Select"
          >
            <Select/>
          </Item>
          <Item
              key="regionSelect"
              aria-label="Select Region"
          >
            <RegionSelect/>
          </Item>
        </ActionGroup>
</Variant>
<Variant name="Selection">
<ActionGroup selectionMode="single" defaultSelectedKeys={['list']}>
          <Item key="grid">Grid view</Item>
          <Item key="list">List view</Item>
          <Item key="gallery">Gallery view</Item>
        </ActionGroup>
</Variant>
<Variant name="Selection1">
<ActionGroup
    selectionMode="single"
    defaultSelectedKeys={['list']}
>
          <Item key="grid">Grid view</Item>
          <Item key="list">List view</Item>
          <Item key="gallery">Gallery view</Item>
        </ActionGroup>
</Variant>
<Variant name="Selection12">
<ActionGroup
    selectionMode="single"
    defaultSelectedKeys={[
        'list'
    ]}
>
          <Item key="grid">
            Grid view
          </Item>
          <Item key="list">
            List view
          </Item>
          <Item key="gallery">
            Gallery view
          </Item>
        </ActionGroup>
</Variant>
<Variant name="Selection123">
<>
            <ActionGroup
                selectionMode="single"
                selectedKeys={selected}
                onSelectionChange={setSelected}
            >
                <Item key="grid">Grid view</Item>
                <Item key="list">List view</Item>
                <Item key="gallery">Gallery view</Item>
              </ActionGroup>
        <p>Current selection (controlled): {[...selected]}</p>
        </>
</Variant>
<Variant name="Selection1234">
<>
            <ActionGroup
                selectionMode="single"
                selectedKeys={selected}
                onSelectionChange={setSelected}
            >
                <Item key="grid">Grid view</Item>
                <Item key="list">List view</Item>
                <Item key="gallery">Gallery view</Item>
              </ActionGroup>
        <p>Current selection (controlled): {[...selected]}</p>
        </>
</Variant>
<Variant name="Selection12345">
<>
            <ActionGroup
                selectionMode="single"
                selectedKeys={selected}
                onSelectionChange={setSelected}
            >
                <Item key="grid">
                  Grid view
                </Item>
                <Item key="list">
                  List view
                </Item>
                <Item key="gallery">
                  Gallery view
                </Item>
              </ActionGroup>
        <p>
                Current selection
                (controlled):
            {' '}
            {[...selected]}
              </p>
        </>
</Variant>
<Variant name="Selection123456">
<>
            <ActionGroup
                selectionMode="multiple"
                selectedKeys={selected}
                onSelectionChange={setSelected}
            >
                <Item key="grid">Grid view</Item>
                <Item key="list">List view</Item>
                <Item key="gallery">Gallery view</Item>
              </ActionGroup>
        <p>Current selections (controlled): {[...selected].join(', ')}</p>
        </>
</Variant>
<Variant name="Selection1234567">
<>
            <ActionGroup
                selectionMode="multiple"
                selectedKeys={selected}
                onSelectionChange={setSelected}
            >
                <Item key="grid">Grid view</Item>
                <Item key="list">List view</Item>
                <Item key="gallery">Gallery view</Item>
              </ActionGroup>
        <p>
                Current selections (controlled):{' '}
            {[...selected].join(', ')}
              </p>
        </>
</Variant>
<Variant name="Selection12345678">
<>
            <ActionGroup
                selectionMode="multiple"
                selectedKeys={selected}
                onSelectionChange={setSelected}
            >
                <Item key="grid">
                  Grid view
                </Item>
                <Item key="list">
                  List view
                </Item>
                <Item key="gallery">
                  Gallery view
                </Item>
              </ActionGroup>
        <p>
                Current
                selections
                (controlled):
            {' '}
            {[...selected]
                .join(', ')}
              </p>
        </>
</Variant>
<Variant name="Events">
<>
            <ActionGroup onAction={setActionKey}>
                <Item key="add">Add</Item>
                <Item key="delete">Delete</Item>
                <Item key="edit">Edit</Item>
              </ActionGroup>
        <p>Action: {actionKey}</p>
        </>
</Variant>
<Variant name="Events1">
<>
            <ActionGroup onAction={setActionKey}>
                <Item key="add">Add</Item>
                <Item key="delete">Delete</Item>
                <Item key="edit">Edit</Item>
              </ActionGroup>
        <p>Action: {actionKey}</p>
        </>
</Variant>
<Variant name="Events12">
<>
            <ActionGroup
                onAction={setActionKey}
            >
                <Item key="add">
                  Add
                </Item>
                <Item key="delete">
                  Delete
                </Item>
                <Item key="edit">
                  Edit
                </Item>
              </ActionGroup>
        <p>
                Action:{' '}
            {actionKey}
              </p>
        </>
</Variant>
<Variant name="Non-selectable">
<ActionGroup overflowMode="collapse" maxWidth={250}>
          <Item key="edit">
            <Draw/>
            <Text>Edit</Text>
          </Item>
          <Item key="copy">
            <Copy/>
            <Text>Copy</Text>
          </Item>
          <Item key="delete">
            <Delete/>
            <Text>Delete</Text>
          </Item>
          <Item key="move">
            <Move/>
            <Text>Move</Text>
          </Item>
          <Item key="duplicate">
            <Duplicate/>
            <Text>Duplicate</Text>
          </Item>
        </ActionGroup>
</Variant>
<Variant name="Non-selectable1">
<ActionGroup overflowMode="collapse" maxWidth={250}>
          <Item key="edit">
            <Draw/>
            <Text>Edit</Text>
          </Item>
          <Item key="copy">
            <Copy/>
            <Text>Copy</Text>
          </Item>
          <Item key="delete">
            <Delete/>
            <Text>Delete</Text>
          </Item>
          <Item key="move">
            <Move/>
            <Text>Move</Text>
          </Item>
          <Item key="duplicate">
            <Duplicate/>
            <Text>Duplicate</Text>
          </Item>
        </ActionGroup>
</Variant>
<Variant name="Non-selectable12">
<ActionGroup
    overflowMode="collapse"
    maxWidth={250}
>
          <Item key="edit">
            <Draw/>
            <Text>Edit</Text>
          </Item>
          <Item key="copy">
            <Copy/>
            <Text>Copy</Text>
          </Item>
          <Item key="delete">
            <Delete/>
            <Text>Delete</Text>
          </Item>
          <Item key="move">
            <Move/>
            <Text>Move</Text>
          </Item>
          <Item key="duplicate">
            <Duplicate/>
            <Text>
              Duplicate
            </Text>
          </Item>
        </ActionGroup>
</Variant>
<Variant name="Selection123456789">
<ActionGroup
    aria-label="Text style"
    overflowMode="collapse"
    selectionMode="multiple"
    isEmphasized
    summaryIcon={<TextStyle/>}
    maxWidth={100}>
          <Item key="bold">
            <TagBold/>
            <Text>Bold</Text>
          </Item>
          <Item key="italic">
            <TagItalic/>
            <Text>Italic</Text>
          </Item>
          <Item key="underline">
            <TagUnderline/>
            <Text>Underline</Text>
          </Item>
          <Item key="strike">
            <TextStrikethrough/>
            <Text>Strikethrough</Text>
          </Item>
        </ActionGroup>
</Variant>
<Variant name="Selection12345678910">
<ActionGroup
    aria-label="Text style"
    overflowMode="collapse"
    selectionMode="multiple"
    isEmphasized
    summaryIcon={<TextStyle/>}
    maxWidth={100}>
          <Item key="bold">
            <TagBold/>
            <Text>Bold</Text>
          </Item>
          <Item key="italic">
            <TagItalic/>
            <Text>Italic</Text>
          </Item>
          <Item key="underline">
            <TagUnderline/>
            <Text>Underline</Text>
          </Item>
          <Item key="strike">
            <TextStrikethrough/>
            <Text>Strikethrough</Text>
          </Item>
        </ActionGroup>
</Variant>
<Variant name="Selection1234567891011">
<ActionGroup
    aria-label="Text style"
    overflowMode="collapse"
    selectionMode="multiple"
    isEmphasized
    summaryIcon={
        <TextStyle/>
    }
    maxWidth={100}
>
          <Item key="bold">
            <TagBold/>
            <Text>Bold</Text>
          </Item>
          <Item key="italic">
            <TagItalic/>
            <Text>Italic</Text>
          </Item>
          <Item key="underline">
            <TagUnderline/>
            <Text>
              Underline
            </Text>
          </Item>
          <Item key="strike">
            <TextStrikethrough/>
            <Text>
              Strikethrough
            </Text>
          </Item>
        </ActionGroup>
</Variant>
<Variant name="Single selection">
<ActionGroup
    aria-label="Text alignment"
    overflowMode="collapse"
    selectionMode="single"
    defaultSelectedKeys={['left']}
    disallowEmptySelection
    buttonLabelBehavior="hide"
    isEmphasized
    maxWidth={100}>
          <Item key="left">
            <TextAlignLeft/>
            <Text>Align Left</Text>
          </Item>
          <Item key="center">
            <TextAlignCenter/>
            <Text>Align Center</Text>
          </Item>
          <Item key="right">
            <TextAlignRight/>
            <Text>Align Right</Text>
          </Item>
          <Item key="justify">
            <TextAlignJustify/>
            <Text>Justify</Text>
          </Item>
        </ActionGroup>
</Variant>
<Variant name="Single selection1">
<ActionGroup
    aria-label="Text alignment"
    overflowMode="collapse"
    selectionMode="single"
    defaultSelectedKeys={['left']}
    disallowEmptySelection
    buttonLabelBehavior="hide"
    isEmphasized
    maxWidth={100}>
          <Item key="left">
            <TextAlignLeft/>
            <Text>Align Left</Text>
          </Item>
          <Item key="center">
            <TextAlignCenter/>
            <Text>Align Center</Text>
          </Item>
          <Item key="right">
            <TextAlignRight/>
            <Text>Align Right</Text>
          </Item>
          <Item key="justify">
            <TextAlignJustify/>
            <Text>Justify</Text>
          </Item>
        </ActionGroup>
</Variant>
<Variant name="Single selection12">
<ActionGroup
    aria-label="Text alignment"
    overflowMode="collapse"
    selectionMode="single"
    defaultSelectedKeys={[
        'left'
    ]}
    disallowEmptySelection
    buttonLabelBehavior="hide"
    isEmphasized
    maxWidth={100}
>
          <Item key="left">
            <TextAlignLeft/>
            <Text>
              Align Left
            </Text>
          </Item>
          <Item key="center">
            <TextAlignCenter/>
            <Text>
              Align Center
            </Text>
          </Item>
          <Item key="right">
            <TextAlignRight/>
            <Text>
              Align Right
            </Text>
          </Item>
          <Item key="justify">
            <TextAlignJustify/>
            <Text>
              Justify
            </Text>
          </Item>
        </ActionGroup>
</Variant>
<Variant name="Collapsing button labels">
<ActionGroup
    overflowMode="collapse"
    buttonLabelBehavior="collapse"
    maxWidth={180}
>
          <Item key="edit">
            <Draw/>
            <Text>Edit</Text>
          </Item>
          <Item key="copy">
            <Copy/>
            <Text>Copy</Text>
          </Item>
          <Item key="delete">
            <Delete/>
            <Text>Delete</Text>
          </Item>
          <Item key="move">
            <Move/>
            <Text>Move</Text>
          </Item>
          <Item key="duplicate">
            <Duplicate/>
            <Text>Duplicate</Text>
          </Item>
        </ActionGroup>
</Variant>
<Variant name="Collapsing button labels1">
<ActionGroup
    overflowMode="collapse"
    buttonLabelBehavior="collapse"
    maxWidth={180}
>
          <Item key="edit">
            <Draw/>
            <Text>Edit</Text>
          </Item>
          <Item key="copy">
            <Copy/>
            <Text>Copy</Text>
          </Item>
          <Item key="delete">
            <Delete/>
            <Text>Delete</Text>
          </Item>
          <Item key="move">
            <Move/>
            <Text>Move</Text>
          </Item>
          <Item key="duplicate">
            <Duplicate/>
            <Text>Duplicate</Text>
          </Item>
        </ActionGroup>
</Variant>
<Variant name="Collapsing button labels12">
<ActionGroup
    overflowMode="collapse"
    buttonLabelBehavior="collapse"
    maxWidth={180}
>
          <Item key="edit">
            <Draw/>
            <Text>Edit</Text>
          </Item>
          <Item key="copy">
            <Copy/>
            <Text>Copy</Text>
          </Item>
          <Item key="delete">
            <Delete/>
            <Text>Delete</Text>
          </Item>
          <Item key="move">
            <Move/>
            <Text>Move</Text>
          </Item>
          <Item key="duplicate">
            <Duplicate/>
            <Text>
              Duplicate
            </Text>
          </Item>
        </ActionGroup>
</Variant>
<Variant name="Vertical collapsing behavior">
<ActionGroup
    overflowMode="collapse"
    orientation="vertical"
    buttonLabelBehavior="hide"
    maxHeight={150}
>
          <Item key="edit">
            <Draw/>
            <Text>Edit</Text>
          </Item>
          <Item key="copy">
            <Copy/>
            <Text>Copy</Text>
          </Item>
          <Item key="delete">
            <Delete/>
            <Text>Delete</Text>
          </Item>
          <Item key="move">
            <Move/>
            <Text>Move</Text>
          </Item>
          <Item key="duplicate">
            <Duplicate/>
            <Text>Duplicate</Text>
          </Item>
        </ActionGroup>
</Variant>
<Variant name="Vertical collapsing behavior1">
<ActionGroup
    overflowMode="collapse"
    orientation="vertical"
    buttonLabelBehavior="hide"
    maxHeight={150}
>
          <Item key="edit">
            <Draw/>
            <Text>Edit</Text>
          </Item>
          <Item key="copy">
            <Copy/>
            <Text>Copy</Text>
          </Item>
          <Item key="delete">
            <Delete/>
            <Text>Delete</Text>
          </Item>
          <Item key="move">
            <Move/>
            <Text>Move</Text>
          </Item>
          <Item key="duplicate">
            <Duplicate/>
            <Text>Duplicate</Text>
          </Item>
        </ActionGroup>
</Variant>
<Variant name="Vertical collapsing behavior12">
<ActionGroup
    overflowMode="collapse"
    orientation="vertical"
    buttonLabelBehavior="hide"
    maxHeight={150}
>
          <Item key="edit">
            <Draw/>
            <Text>Edit</Text>
          </Item>
          <Item key="copy">
            <Copy/>
            <Text>Copy</Text>
          </Item>
          <Item key="delete">
            <Delete/>
            <Text>Delete</Text>
          </Item>
          <Item key="move">
            <Move/>
            <Text>Move</Text>
          </Item>
          <Item key="duplicate">
            <Duplicate/>
            <Text>
              Duplicate
            </Text>
          </Item>
        </ActionGroup>
</Variant>
<Variant name="Quiet">
<ActionGroup isQuiet>
          <Item key="add">Add</Item>
          <Item key="delete">Delete</Item>
          <Item key="edit">Edit</Item>
        </ActionGroup>
</Variant>
<Variant name="Quiet1">
<ActionGroup isQuiet>
          <Item key="add">Add</Item>
          <Item key="delete">Delete</Item>
          <Item key="edit">Edit</Item>
        </ActionGroup>
</Variant>
<Variant name="Quiet12">
<ActionGroup isQuiet>
          <Item key="add">
            Add
          </Item>
          <Item key="delete">
            Delete
          </Item>
          <Item key="edit">
            Edit
          </Item>
        </ActionGroup>
</Variant>
<Variant name="Emphasized">
<ActionGroup
    isEmphasized
    selectionMode="single"
    defaultSelectedKeys={['list']}>
          <Item key="grid">Grid view</Item>
          <Item key="list">List view</Item>
          <Item key="gallery">Gallery view</Item>
        </ActionGroup>
</Variant>
<Variant name="Emphasized1">
<ActionGroup
    isEmphasized
    selectionMode="single"
    defaultSelectedKeys={['list']}>
          <Item key="grid">Grid view</Item>
          <Item key="list">List view</Item>
          <Item key="gallery">Gallery view</Item>
        </ActionGroup>
</Variant>
<Variant name="Emphasized12">
<ActionGroup
    isEmphasized
    selectionMode="single"
    defaultSelectedKeys={[
        'list'
    ]}
>
          <Item key="grid">
            Grid view
          </Item>
          <Item key="list">
            List view
          </Item>
          <Item key="gallery">
            Gallery view
          </Item>
        </ActionGroup>
</Variant>
<Variant name="Static color">
<Flex wrap gap="size-250">
          <View backgroundColor="static-blue-700" padding="size-500">
            <ActionGroup staticColor="white">
              <Item key="edit">
                <Draw/>
                <Text>Edit</Text>
              </Item>
              <Item key="copy">
                <Copy/>
                <Text>Copy</Text>
              </Item>
              <Item key="delete">
                <Delete/>
                <Text>Delete</Text>
              </Item>
            </ActionGroup>
          </View>
          <View backgroundColor="static-yellow-400" padding="size-500">
            <ActionGroup
                staticColor="black"
                isQuiet
                buttonLabelBehavior="hide"
                selectionMode="single"
                disallowEmptySelection
                defaultSelectedKeys={['list']}>
              <Item key="list">
                <ViewList/>
                <Text>List view</Text>
              </Item>
              <Item key="grid">
                <ViewGrid/>
                <Text>Grid view</Text>
              </Item>
              <Item key="gallery">
                <ViewCard/>
                <Text>Gallery view</Text>
              </Item>
            </ActionGroup>
          </View>
        </Flex>
</Variant>
<Variant name="Static color1">
<Flex wrap gap="size-250">
          <View
              backgroundColor="static-blue-700"
              padding="size-500"
          >
            <ActionGroup staticColor="white">
              <Item key="edit">
                <Draw/>
                <Text>Edit</Text>
              </Item>
              <Item key="copy">
                <Copy/>
                <Text>Copy</Text>
              </Item>
              <Item key="delete">
                <Delete/>
                <Text>Delete</Text>
              </Item>
            </ActionGroup>
          </View>
          <View
              backgroundColor="static-yellow-400"
              padding="size-500"
          >
            <ActionGroup
                staticColor="black"
                isQuiet
                buttonLabelBehavior="hide"
                selectionMode="single"
                disallowEmptySelection
                defaultSelectedKeys={['list']}
            >
              <Item key="list">
                <ViewList/>
                <Text>List view</Text>
              </Item>
              <Item key="grid">
                <ViewGrid/>
                <Text>Grid view</Text>
              </Item>
              <Item key="gallery">
                <ViewCard/>
                <Text>Gallery view</Text>
              </Item>
            </ActionGroup>
          </View>
        </Flex>
</Variant>
<Variant name="Static color12">
<Flex
    wrap
    gap="size-250"
>
          <View
              backgroundColor="static-blue-700"
              padding="size-500"
          >
            <ActionGroup staticColor="white">
              <Item key="edit">
                <Draw/>
                <Text>
                  Edit
                </Text>
              </Item>
              <Item key="copy">
                <Copy/>
                <Text>
                  Copy
                </Text>
              </Item>
              <Item key="delete">
                <Delete/>
                <Text>
                  Delete
                </Text>
              </Item>
            </ActionGroup>
          </View>
          <View
              backgroundColor="static-yellow-400"
              padding="size-500"
          >
            <ActionGroup
                staticColor="black"
                isQuiet
                buttonLabelBehavior="hide"
                selectionMode="single"
                disallowEmptySelection
                defaultSelectedKeys={[
                    'list'
                ]}
            >
              <Item key="list">
                <ViewList/>
                <Text>
                  List view
                </Text>
              </Item>
              <Item key="grid">
                <ViewGrid/>
                <Text>
                  Grid view
                </Text>
              </Item>
              <Item key="gallery">
                <ViewCard/>
                <Text>
                  Gallery view
                </Text>
              </Item>
            </ActionGroup>
          </View>
        </Flex>
</Variant>
<Variant name="Disabled">
<ActionGroup isDisabled>
          <Item key="add">Add</Item>
          <Item key="delete">Delete</Item>
          <Item key="edit">Edit</Item>
        </ActionGroup>
</Variant>
<Variant name="Disabled1">
<ActionGroup isDisabled>
          <Item key="add">Add</Item>
          <Item key="delete">Delete</Item>
          <Item key="edit">Edit</Item>
        </ActionGroup>
</Variant>
<Variant name="Disabled12">
<ActionGroup
    isDisabled
>
          <Item key="add">
            Add
          </Item>
          <Item key="delete">
            Delete
          </Item>
          <Item key="edit">
            Edit
          </Item>
        </ActionGroup>
</Variant>
<Variant name="Disabled123">
<ActionGroup disabledKeys={['add', 'delete']}>
          <Item key="add">Add</Item>
          <Item key="delete">Delete</Item>
          <Item key="edit">Edit</Item>
        </ActionGroup>
</Variant>
<Variant name="Disabled1234">
<ActionGroup disabledKeys={['add', 'delete']}>
          <Item key="add">Add</Item>
          <Item key="delete">Delete</Item>
          <Item key="edit">Edit</Item>
        </ActionGroup>
</Variant>
<Variant name="Disabled12345">
<ActionGroup
    disabledKeys={[
        'add',
        'delete'
    ]}
>
          <Item key="add">
            Add
          </Item>
          <Item key="delete">
            Delete
          </Item>
          <Item key="edit">
            Edit
          </Item>
        </ActionGroup>
</Variant>
<Variant name="Orientation">
<ActionGroup orientation="vertical">
          <Item key="brush" aria-label="Brush"><Brush/></Item>
          <Item key="select" aria-label="Select"><Select/></Item>
          <Item key="regionSelect" aria-label="Select Region"><RegionSelect/></Item>
        </ActionGroup>
</Variant>
<Variant name="Orientation1">
<ActionGroup orientation="vertical">
          <Item key="brush" aria-label="Brush">
            <Brush/>
          </Item>
          <Item key="select" aria-label="Select">
            <Select/>
          </Item>
          <Item key="regionSelect" aria-label="Select Region">
            <RegionSelect/>
          </Item>
        </ActionGroup>
</Variant>
<Variant name="Orientation12">
<ActionGroup orientation="vertical">
          <Item
              key="brush"
              aria-label="Brush"
          >
            <Brush/>
          </Item>
          <Item
              key="select"
              aria-label="Select"
          >
            <Select/>
          </Item>
          <Item
              key="regionSelect"
              aria-label="Select Region"
          >
            <RegionSelect/>
          </Item>
        </ActionGroup>
</Variant>
<Variant name="Density">
<ActionGroup density="compact">
          <Item key="brush" aria-label="Brush"><Brush/></Item>
          <Item key="select" aria-label="Select"><Select/></Item>
          <Item key="regionSelect" aria-label="Select Region"><RegionSelect/></Item>
        </ActionGroup>
</Variant>
<Variant name="Density1">
<ActionGroup density="compact">
          <Item key="brush" aria-label="Brush">
            <Brush/>
          </Item>
          <Item key="select" aria-label="Select">
            <Select/>
          </Item>
          <Item key="regionSelect" aria-label="Select Region">
            <RegionSelect/>
          </Item>
        </ActionGroup>
</Variant>
<Variant name="Density12">
<ActionGroup density="compact">
          <Item
              key="brush"
              aria-label="Brush"
          >
            <Brush/>
          </Item>
          <Item
              key="select"
              aria-label="Select"
          >
            <Select/>
          </Item>
          <Item
              key="regionSelect"
              aria-label="Select Region"
          >
            <RegionSelect/>
          </Item>
        </ActionGroup>
</Variant>
<Variant name="Density123">
<ActionGroup isQuiet density="compact">
          <Item key="brush" aria-label="Brush"><Brush/></Item>
          <Item key="select" aria-label="Select"><Select/></Item>
          <Item key="regionSelect" aria-label="Select Region"><RegionSelect/></Item>
        </ActionGroup>
</Variant>
<Variant name="Density1234">
<ActionGroup isQuiet density="compact">
          <Item key="brush" aria-label="Brush">
            <Brush/>
          </Item>
          <Item key="select" aria-label="Select">
            <Select/>
          </Item>
          <Item key="regionSelect" aria-label="Select Region">
            <RegionSelect/>
          </Item>
        </ActionGroup>
</Variant>
<Variant name="Density12345">
<ActionGroup
    isQuiet
    density="compact"
>
          <Item
              key="brush"
              aria-label="Brush"
          >
            <Brush/>
          </Item>
          <Item
              key="select"
              aria-label="Select"
          >
            <Select/>
          </Item>
          <Item
              key="regionSelect"
              aria-label="Select Region"
          >
            <RegionSelect/>
          </Item>
        </ActionGroup>
</Variant>
<Variant name="Justified">
<Flex width="size-2000" direction="column">
          <ActionGroup isJustified>
            <Item key="brush" aria-label="Brush"><Brush/></Item>
            <Item key="select" aria-label="Select"><Select/></Item>
            <Item key="regionSelect" aria-label="Select Region"><RegionSelect/></Item>
          </ActionGroup>
        </Flex>
</Variant>
<Variant name="Justified1">
<Flex width="size-2000" direction="column">
          <ActionGroup isJustified>
            <Item key="brush" aria-label="Brush">
              <Brush/>
            </Item>
            <Item key="select" aria-label="Select">
              <Select/>
            </Item>
            <Item key="regionSelect" aria-label="Select Region">
              <RegionSelect/>
            </Item>
          </ActionGroup>
        </Flex>
</Variant>
<Variant name="Justified12">
<Flex
    width="size-2000"
    direction="column"
>
          <ActionGroup
              isJustified
          >
            <Item
                key="brush"
                aria-label="Brush"
            >
              <Brush/>
            </Item>
            <Item
                key="select"
                aria-label="Select"
            >
              <Select/>
            </Item>
            <Item
                key="regionSelect"
                aria-label="Select Region"
            >
              <RegionSelect/>
            </Item>
          </ActionGroup>
        </Flex>
</Variant>
</Component>
<Component name="Button" docURL="https://react-spectrum.adobe.com/react-spectrum/Button.html">
<Variant name="Example">
<Button variant="accent">Save</Button>
</Variant>
<Variant name="Example1">
<Button variant="accent">Save</Button>
</Variant>
<Variant name="Example12">
<Button variant="accent">
          Save
        </Button>
</Variant>
<Variant name="Content">
<Button variant="primary">
          <Bell/>
          <Text>Icon + Label</Text>
        </Button>
</Variant>
<Variant name="Content1">
<Button variant="primary">
          <Bell/>
          <Text>Icon + Label</Text>
        </Button>
</Variant>
<Variant name="Content12">
<Button variant="primary">
          <Bell/>
          <Text>
            Icon + Label
          </Text>
        </Button>
</Variant>
<Variant name="Events">
<Button variant="primary" onPress={() => setCount((c) => c + 1)}>
              {count} Dogs
            </Button>
</Variant>
<Variant name="Events1">
<Button
    variant="primary"
    onPress={() => setCount((c) => c + 1)}
>
              {count} Dogs
            </Button>
</Variant>
<Variant name="Pending">
<Button variant="primary" isPending={isLoading} onPress={handlePress}>
              Click me!
            </Button>
</Variant>
<Variant name="Pending1">
<Button
    variant="primary"
    isPending={true}
>
              Click me!
            </Button>
</Variant>
<Variant name="Accent">
<Flex wrap gap="size-250">
          <Button variant="accent" style="fill">Save</Button>
          <Button variant="accent" style="outline">Save</Button>
        </Flex>
</Variant>
<Variant name="Accent1">
<Flex wrap gap="size-250">
          <Button variant="accent" style="fill">Save</Button>
          <Button variant="accent" style="outline">Save</Button>
        </Flex>
</Variant>
<Variant name="Accent12">
<Flex
    wrap
    gap="size-250"
>
          <Button
              variant="accent"
              style="fill"
          >
            Save
          </Button>
          <Button
              variant="accent"
              style="outline"
          >
            Save
          </Button>
        </Flex>
</Variant>
<Variant name="Primary">
<Flex wrap gap="size-250">
          <Button variant="primary" style="fill">Save</Button>
          <Button variant="primary" style="outline">Save</Button>
        </Flex>
</Variant>
<Variant name="Primary1">
<Flex wrap gap="size-250">
          <Button variant="primary" style="fill">Save</Button>
          <Button variant="primary" style="outline">Save</Button>
        </Flex>
</Variant>
<Variant name="Primary12">
<Flex
    wrap
    gap="size-250"
>
          <Button
              variant="primary"
              style="fill"
          >
            Save
          </Button>
          <Button
              variant="primary"
              style="outline"
          >
            Save
          </Button>
        </Flex>
</Variant>
<Variant name="Secondary">
<Flex wrap gap="size-250">
          <Button variant="secondary" style="fill">Save</Button>
          <Button variant="secondary" style="outline">Save</Button>
        </Flex>
</Variant>
<Variant name="Secondary1">
<Flex wrap gap="size-250">
          <Button variant="secondary" style="fill">Save</Button>
          <Button variant="secondary" style="outline">Save</Button>
        </Flex>
</Variant>
<Variant name="Secondary12">
<Flex
    wrap
    gap="size-250"
>
          <Button
              variant="secondary"
              style="fill"
          >
            Save
          </Button>
          <Button
              variant="secondary"
              style="outline"
          >
            Save
          </Button>
        </Flex>
</Variant>
<Variant name="Negative">
<Flex wrap gap="size-250">
          <Button variant="negative" style="fill">Save</Button>
          <Button variant="negative" style="outline">Save</Button>
        </Flex>
</Variant>
<Variant name="Negative1">
<Flex wrap gap="size-250">
          <Button variant="negative" style="fill">Save</Button>
          <Button variant="negative" style="outline">Save</Button>
        </Flex>
</Variant>
<Variant name="Negative12">
<Flex
    wrap
    gap="size-250"
>
          <Button
              variant="negative"
              style="fill"
          >
            Save
          </Button>
          <Button
              variant="negative"
              style="outline"
          >
            Save
          </Button>
        </Flex>
</Variant>
<Variant name="Static color">
<Flex wrap gap="size-250">
          <View backgroundColor="static-blue-700" padding="size-500">
            <Flex wrap gap="size-200">
              <Button variant="primary" staticColor="white" style="fill">Save</Button>
              <Button variant="primary" staticColor="white" style="outline">
                Save
              </Button>
            </Flex>
          </View>
          <View backgroundColor="static-yellow-400" padding="size-500">
            <Flex wrap gap="size-200">
              <Button variant="primary" staticColor="black" style="fill">Save</Button>
              <Button variant="primary" staticColor="black" style="outline">
                Save
              </Button>
            </Flex>
          </View>
        </Flex>
</Variant>
<Variant name="Static color1">
<Flex wrap gap="size-250">
          <View
              backgroundColor="static-blue-700"
              padding="size-500"
          >
            <Flex wrap gap="size-200">
              <Button
                  variant="primary"
                  staticColor="white"
                  style="fill"
              >
                Save
              </Button>
              <Button
                  variant="primary"
                  staticColor="white"
                  style="outline"
              >
                Save
              </Button>
            </Flex>
          </View>
          <View
              backgroundColor="static-yellow-400"
              padding="size-500"
          >
            <Flex wrap gap="size-200">
              <Button
                  variant="primary"
                  staticColor="black"
                  style="fill"
              >
                Save
              </Button>
              <Button
                  variant="primary"
                  staticColor="black"
                  style="outline"
              >
                Save
              </Button>
            </Flex>
          </View>
        </Flex>
</Variant>
<Variant name="Static color12">
<Flex
    wrap
    gap="size-250"
>
          <View
              backgroundColor="static-blue-700"
              padding="size-500"
          >
            <Flex
                wrap
                gap="size-200"
            >
              <Button
                  variant="primary"
                  staticColor="white"
                  style="fill"
              >
                Save
              </Button>
              <Button
                  variant="primary"
                  staticColor="white"
                  style="outline"
              >
                Save
              </Button>
            </Flex>
          </View>
          <View
              backgroundColor="static-yellow-400"
              padding="size-500"
          >
            <Flex
                wrap
                gap="size-200"
            >
              <Button
                  variant="primary"
                  staticColor="black"
                  style="fill"
              >
                Save
              </Button>
              <Button
                  variant="primary"
                  staticColor="black"
                  style="outline"
              >
                Save
              </Button>
            </Flex>
          </View>
        </Flex>
</Variant>
<Variant name="Disabled">
<Button variant="accent" isDisabled>Save</Button>
</Variant>
<Variant name="Disabled1">
<Button variant="accent" isDisabled>Save</Button>
</Variant>
<Variant name="Disabled12">
<Button
    variant="accent"
    isDisabled
>
          Save
        </Button>
</Variant>
<Variant name="Icon only">
<Flex direction="row" gap={8}>
          <Button variant="accent" aria-label="Ring for service"><Bell/></Button>
          <Button variant="primary" aria-label="Ring for service"><Bell/></Button>
          <Button variant="secondary" aria-label="Ring for service"><Bell/></Button>
        </Flex>
</Variant>
<Variant name="Icon only1">
<Flex direction="row" gap={8}>
          <Button variant="accent" aria-label="Ring for service">
            <Bell/>
          </Button>
          <Button variant="primary" aria-label="Ring for service">
            <Bell/>
          </Button>
          <Button
              variant="secondary"
              aria-label="Ring for service"
          >
            <Bell/>
          </Button>
        </Flex>
</Variant>
<Variant name="Icon only12">
<Flex
    direction="row"
    gap={8}
>
          <Button
              variant="accent"
              aria-label="Ring for service"
          >
            <Bell/>
          </Button>
          <Button
              variant="primary"
              aria-label="Ring for service"
          >
            <Bell/>
          </Button>
          <Button
              variant="secondary"
              aria-label="Ring for service"
          >
            <Bell/>
          </Button>
        </Flex>
</Variant>
</Component>
<Component name="ButtonGroup" docURL="https://react-spectrum.adobe.com/react-spectrum/ButtonGroup.html">
<Variant name="Example">
<ButtonGroup>
          <Button variant="primary">Rate Now</Button>
          <Button variant="secondary">No, thanks</Button>
          <Button variant="secondary">Remind me later</Button>
        </ButtonGroup>
</Variant>
<Variant name="Example1">
<ButtonGroup>
          <Button variant="primary">Rate Now</Button>
          <Button variant="secondary">No, thanks</Button>
          <Button variant="secondary">Remind me later</Button>
        </ButtonGroup>
</Variant>
<Variant name="Example12">
<ButtonGroup>
          <Button variant="primary">
            Rate Now
          </Button>
          <Button variant="secondary">
            No, thanks
          </Button>
          <Button variant="secondary">
            Remind me later
          </Button>
        </ButtonGroup>
</Variant>
<Variant name="Orientation">
<ButtonGroup orientation="vertical">
          <Button variant="secondary">No, thanks</Button>
          <Button variant="secondary">Remind me later</Button>
          <Button variant="primary">Rate Now</Button>
        </ButtonGroup>
</Variant>
<Variant name="Orientation1">
<ButtonGroup orientation="vertical">
          <Button variant="secondary">No, thanks</Button>
          <Button variant="secondary">Remind me later</Button>
          <Button variant="primary">Rate Now</Button>
        </ButtonGroup>
</Variant>
<Variant name="Orientation12">
<ButtonGroup orientation="vertical">
          <Button variant="secondary">
            No, thanks
          </Button>
          <Button variant="secondary">
            Remind me later
          </Button>
          <Button variant="primary">
            Rate Now
          </Button>
        </ButtonGroup>
</Variant>
<Variant name="Alignment">
<ButtonGroup orientation="vertical" align="end">
          <Button variant="secondary">No, thanks</Button>
          <Button variant="secondary">Remind me later</Button>
          <Button variant="primary">Rate Now</Button>
        </ButtonGroup>
</Variant>
<Variant name="Alignment1">
<ButtonGroup orientation="vertical" align="end">
          <Button variant="secondary">No, thanks</Button>
          <Button variant="secondary">Remind me later</Button>
          <Button variant="primary">Rate Now</Button>
        </ButtonGroup>
</Variant>
<Variant name="Alignment12">
<ButtonGroup
    orientation="vertical"
    align="end"
>
          <Button variant="secondary">
            No, thanks
          </Button>
          <Button variant="secondary">
            Remind me later
          </Button>
          <Button variant="primary">
            Rate Now
          </Button>
        </ButtonGroup>
</Variant>
<Variant name="Alignment123">
<ButtonGroup orientation="vertical" align="center">
          <Button variant="secondary">No, thanks</Button>
          <Button variant="secondary">Remind me later</Button>
          <Button variant="primary">Rate Now</Button>
        </ButtonGroup>
</Variant>
<Variant name="Alignment1234">
<ButtonGroup orientation="vertical" align="center">
          <Button variant="secondary">No, thanks</Button>
          <Button variant="secondary">Remind me later</Button>
          <Button variant="primary">Rate Now</Button>
        </ButtonGroup>
</Variant>
<Variant name="Alignment12345">
<ButtonGroup
    orientation="vertical"
    align="center"
>
          <Button variant="secondary">
            No, thanks
          </Button>
          <Button variant="secondary">
            Remind me later
          </Button>
          <Button variant="primary">
            Rate Now
          </Button>
        </ButtonGroup>
</Variant>
<Variant name="Disabled">
<ButtonGroup isDisabled>
          <Button variant="secondary">No, thanks</Button>
          <Button variant="secondary">Remind me later</Button>
          <Button variant="primary">Rate Now</Button>
        </ButtonGroup>
</Variant>
<Variant name="Disabled1">
<ButtonGroup isDisabled>
          <Button variant="secondary">No, thanks</Button>
          <Button variant="secondary">Remind me later</Button>
          <Button variant="primary">Rate Now</Button>
        </ButtonGroup>
</Variant>
<Variant name="Disabled12">
<ButtonGroup
    isDisabled
>
          <Button variant="secondary">
            No, thanks
          </Button>
          <Button variant="secondary">
            Remind me later
          </Button>
          <Button variant="primary">
            Rate Now
          </Button>
        </ButtonGroup>
</Variant>
</Component>
<Component name="LogicButton" docURL="https://react-spectrum.adobe.com/react-spectrum/LogicButton.html">
<Variant name="Example">
<LogicButton variant="and">And</LogicButton>
</Variant>
<Variant name="Example1">
<LogicButton variant="and">And</LogicButton>
</Variant>
<Variant name="Example12">
<LogicButton variant="and">
          And
        </LogicButton>
</Variant>
<Variant name="Content">
<LogicButton variant="or">Or</LogicButton>
</Variant>
<Variant name="Content1">
<LogicButton variant="or">Or</LogicButton>
</Variant>
<Variant name="Content12">
<LogicButton variant="or">
          Or
        </LogicButton>
</Variant>
<Variant name="Events">
<LogicButton
    variant={variant}
    onPress={() => setVariant(variant === 'or' ? 'and' : 'or')}
>
              {variant}
            </LogicButton>
</Variant>
<Variant name="Events1">
<LogicButton
    variant={variant}
    onPress={() =>
        setVariant(variant === 'or' ? 'and' : 'or')}
>
              {variant}
            </LogicButton>
</Variant>
<Variant name="Events12">
<LogicButton
    variant={variant}
    onPress={() =>
        setVariant(
            variant ===
            'or'
                ? 'and'
                : 'or'
        )}
>
              {variant}
            </LogicButton>
</Variant>
<Variant name="Variant">
<LogicButton variant="or" marginEnd="20px">Or</LogicButton>
</Variant>
<Variant name="Variant1">
<LogicButton variant="or" marginEnd="20px">Or</LogicButton>
</Variant>
<Variant name="Variant12">
<LogicButton
    variant="or"
    marginEnd="20px"
>
          Or
        </LogicButton>
</Variant>
<Variant name="Disabled">
<LogicButton variant="or" isDisabled>Or</LogicButton>
</Variant>
<Variant name="Disabled1">
<LogicButton variant="or" isDisabled>Or</LogicButton>
</Variant>
<Variant name="Disabled12">
<LogicButton
    variant="or"
    isDisabled
>
          Or
        </LogicButton>
</Variant>
</Component>
<Component name="ToggleButton" docURL="https://react-spectrum.adobe.com/react-spectrum/ToggleButton.html">
<Variant name="Example">
<ToggleButton>Pin</ToggleButton>
</Variant>
<Variant name="Example1">
<ToggleButton>Pin</ToggleButton>
</Variant>
<Variant name="Example12">
<ToggleButton>
          Pin
        </ToggleButton>
</Variant>
<Variant name="Content">
<ToggleButton>
          <Pin/>
          <Text>Icon + Label</Text>
        </ToggleButton>
</Variant>
<Variant name="Content1">
<ToggleButton>
          <Pin/>
          <Text>Icon + Label</Text>
        </ToggleButton>
</Variant>
<Variant name="Content12">
<ToggleButton>
          <Pin/>
          <Text>
            Icon + Label
          </Text>
        </ToggleButton>
</Variant>
<Variant name="Accessibility">
<ToggleButton aria-label="Icon only">
          <Pin/>
        </ToggleButton>
</Variant>
<Variant name="Accessibility1">
<ToggleButton aria-label="Icon only">
          <Pin/>
        </ToggleButton>
</Variant>
<Variant name="Accessibility12">
<ToggleButton aria-label="Icon only">
          <Pin/>
        </ToggleButton>
</Variant>
<Variant name="Events">
<ToggleButton
    isEmphasized
    isSelected={isSelected}
    onChange={setSelected}
    aria-label="Pin">
              <Pin/>
            </ToggleButton>
</Variant>
<Variant name="Events1">
<ToggleButton
    isEmphasized
    isSelected={isSelected}
    onChange={setSelected}
    aria-label="Pin">
              <Pin/>
            </ToggleButton>
</Variant>
<Variant name="Events12">
<ToggleButton
    isEmphasized
    isSelected={isSelected}
    onChange={setSelected}
    aria-label="Pin"
>
              <Pin/>
            </ToggleButton>
</Variant>
<Variant name="Quiet">
<ToggleButton isQuiet>Pin</ToggleButton>
</Variant>
<Variant name="Quiet1">
<ToggleButton isQuiet>Pin</ToggleButton>
</Variant>
<Variant name="Quiet12">
<ToggleButton isQuiet>
          Pin
        </ToggleButton>
</Variant>
<Variant name="Disabled">
<ToggleButton isDisabled>Pin</ToggleButton>
</Variant>
<Variant name="Disabled1">
<ToggleButton isDisabled>Pin</ToggleButton>
</Variant>
<Variant name="Disabled12">
<ToggleButton
    isDisabled
>
          Pin
        </ToggleButton>
</Variant>
<Variant name="Emphasized">
<ToggleButton isEmphasized defaultSelected>Pin</ToggleButton>
</Variant>
<Variant name="Emphasized1">
<ToggleButton isEmphasized defaultSelected>
          Pin
        </ToggleButton>
</Variant>
<Variant name="Emphasized12">
<ToggleButton
    isEmphasized
    defaultSelected
>
          Pin
        </ToggleButton>
</Variant>
<Variant name="Static color">
<Flex wrap gap="size-250">
          <View backgroundColor="static-blue-700" padding="size-500">
            <ToggleButton staticColor="white">
              <Pin/>
              <Text>Pin</Text>
            </ToggleButton>
          </View>
          <View backgroundColor="static-yellow-400" padding="size-500">
            <ToggleButton staticColor="black" isQuiet defaultSelected>
              <Pin/>
              <Text>Pin</Text>
            </ToggleButton>
          </View>
        </Flex>
</Variant>
<Variant name="Static color1">
<Flex wrap gap="size-250">
          <View
              backgroundColor="static-blue-700"
              padding="size-500"
          >
            <ToggleButton staticColor="white">
              <Pin/>
              <Text>Pin</Text>
            </ToggleButton>
          </View>
          <View
              backgroundColor="static-yellow-400"
              padding="size-500"
          >
            <ToggleButton
                staticColor="black"
                isQuiet
                defaultSelected
            >
              <Pin/>
              <Text>Pin</Text>
            </ToggleButton>
          </View>
        </Flex>
</Variant>
<Variant name="Static color12">
<Flex
    wrap
    gap="size-250"
>
          <View
              backgroundColor="static-blue-700"
              padding="size-500"
          >
            <ToggleButton staticColor="white">
              <Pin/>
              <Text>Pin</Text>
            </ToggleButton>
          </View>
          <View
              backgroundColor="static-yellow-400"
              padding="size-500"
          >
            <ToggleButton
                staticColor="black"
                isQuiet
                defaultSelected
            >
              <Pin/>
              <Text>Pin</Text>
            </ToggleButton>
          </View>
        </Flex>
</Variant>
</Component>
</Category>
<Category name="Collections">
<Component name="ActionBar" docURL="https://react-spectrum.adobe.com/react-spectrum/ActionBar.html">
<Variant name="Example">
<ActionBarContainer height={300} maxWidth="size-6000">
                  <ListView
                      aria-label="ListView with action bar"
                      selectionMode="multiple"
                      selectedKeys={selectedKeys}
                      onSelectionChange={setSelectedKeys}
                  >
                    <Item key="photoshop">Adobe Photoshop</Item>
                    <Item key="illustrator">Adobe Illustrator</Item>
                    <Item key="xd">Adobe XD</Item>
                  </ListView>
                  <ActionBar
                      isEmphasized
                      selectedItemCount={selectedKeys === 'all' ? 'all' : selectedKeys.size}
                      onAction={(key) => alert(`Performing ${key} action...`)}
                      onClearSelection={() => setSelectedKeys(new Set())}
                  >
                    <Item key="edit">
                      <Edit/>
                      <Text>Edit</Text>
                    </Item>
                    <Item key="copy">
                      <Copy/>
                      <Text>Copy</Text>
                    </Item>
                    <Item key="delete">
                      <Delete/>
                      <Text>Delete</Text>
                    </Item>
                  </ActionBar>
                </ActionBarContainer>
</Variant>
<Variant name="Example1">
<ActionBarContainer height={300} maxWidth="size-6000">
              <ListView
                  aria-label="ListView with action bar"
                  selectionMode="multiple"
                  selectedKeys={selectedKeys}
                  onSelectionChange={setSelectedKeys}
              >
                <Item key="photoshop">Adobe Photoshop</Item>
                <Item key="illustrator">Adobe Illustrator</Item>
                <Item key="xd">Adobe XD</Item>
              </ListView>
              <ActionBar
                  isEmphasized
                  selectedItemCount={selectedKeys === 'all'
                      ? 'all'
                      : selectedKeys.size}
                  onAction={(key) =>
                      alert(`Performing ${key} action...`)}
                  onClearSelection={() =>
                      setSelectedKeys(new Set())}
              >
                <Item key="edit">
                  <Edit/>
                  <Text>Edit</Text>
                </Item>
                <Item key="copy">
                  <Copy/>
                  <Text>Copy</Text>
                </Item>
                <Item key="delete">
                  <Delete/>
                  <Text>Delete</Text>
                </Item>
              </ActionBar>
            </ActionBarContainer>
</Variant>
<Variant name="Example12">
<ActionBarContainer
    height={300}
    maxWidth="size-6000"
>
              <ListView
                  aria-label="ListView with action bar"
                  selectionMode="multiple"
                  selectedKeys={selectedKeys}
                  onSelectionChange={setSelectedKeys}
              >
                <Item key="photoshop">
                  Adobe Photoshop
                </Item>
                <Item key="illustrator">
                  Adobe
                  Illustrator
                </Item>
                <Item key="xd">
                  Adobe XD
                </Item>
              </ListView>
              <ActionBar
                  isEmphasized
                  selectedItemCount={selectedKeys ===
                  'all'
                      ? 'all'
                      : selectedKeys
                          .size}
                  onAction={(
                      key
                  ) =>
                      alert(
                          `Performing ${key} action...`
                      )}
                  onClearSelection={() =>
                      setSelectedKeys(
                          new Set()
                      )}
              >
                <Item key="edit">
                  <Edit/>
                  <Text>
                    Edit
                  </Text>
                </Item>
                <Item key="copy">
                  <Copy/>
                  <Text>
                    Copy
                  </Text>
                </Item>
                <Item key="delete">
                  <Delete/>
                  <Text>
                    Delete
                  </Text>
                </Item>
              </ActionBar>
            </ActionBarContainer>
</Variant>
<Variant name="Content">
<ActionBarContainer height={300} maxWidth="size-6000">
              <ListView
                  aria-label="ListView with action bar"
                  selectionMode="multiple"
                  selectedKeys={selectedKeys}
                  onSelectionChange={setSelectedKeys}
              >
                <Item key="photoshop">Adobe Photoshop</Item>
                <Item key="illustrator">Adobe Illustrator</Item>
                <Item key="xd">Adobe XD</Item>
              </ListView>
              <ActionBar
                  items={barItems}
                  selectedItemCount={selectedKeys === 'all' ? 'all' : selectedKeys.size}
                  onAction={(key) => alert(`Performing ${key} action...`)}
                  onClearSelection={() => setSelectedKeys(new Set())}
                  isEmphasized
              >
                {(item) => (
                    <Item key={item.key}>
                    {item.label}
                  </Item>
                )}
              </ActionBar>
            </ActionBarContainer>
</Variant>
<Variant name="Content1">
<ActionBarContainer height={300} maxWidth="size-6000">
              <ListView
                  aria-label="ListView with action bar"
                  selectionMode="multiple"
                  selectedKeys={selectedKeys}
                  onSelectionChange={setSelectedKeys}
              >
                <Item key="photoshop">Adobe Photoshop</Item>
                <Item key="illustrator">Adobe Illustrator</Item>
                <Item key="xd">Adobe XD</Item>
              </ListView>
              <ActionBar
                  items={barItems}
                  selectedItemCount={selectedKeys === 'all'
                      ? 'all'
                      : selectedKeys.size}
                  onAction={(key) =>
                      alert(`Performing ${key} action...`)}
                  onClearSelection={() =>
                      setSelectedKeys(new Set())}
                  isEmphasized
              >
                {(item) => (
                    <Item key={item.key}>
                    {item.label}
                  </Item>
                )}
              </ActionBar>
            </ActionBarContainer>
</Variant>
<Variant name="Content12">
<ActionBarContainer
    height={300}
    maxWidth="size-6000"
>
              <ListView
                  aria-label="ListView with action bar"
                  selectionMode="multiple"
                  selectedKeys={selectedKeys}
                  onSelectionChange={setSelectedKeys}
              >
                <Item key="photoshop">
                  Adobe Photoshop
                </Item>
                <Item key="illustrator">
                  Adobe
                  Illustrator
                </Item>
                <Item key="xd">
                  Adobe XD
                </Item>
              </ListView>
              <ActionBar
                  items={barItems}
                  selectedItemCount={selectedKeys ===
                  'all'
                      ? 'all'
                      : selectedKeys
                          .size}
                  onAction={(
                      key
                  ) =>
                      alert(
                          `Performing ${key} action...`
                      )}
                  onClearSelection={() =>
                      setSelectedKeys(
                          new Set()
                      )}
                  isEmphasized
              >
                {(item) => (
                    <Item
                        key={item
                            .key}
                    >
                    {item.label}
                  </Item>
                )}
              </ActionBar>
            </ActionBarContainer>
</Variant>
<Variant name="Events">
<ActionBarContainer height="size-5000">
            <TableView
                aria-label="Table with action bar and controlled selection"
                selectionMode="multiple"
                selectedKeys={selectedKeys}
                onSelectionChange={setSelectedKeys}
            >
                <TableHeader>
                  <Column key="name">Name</Column>
                  <Column key="type">Type</Column>
                  <Column key="level" align="end">Level</Column>
                </TableHeader>
                <TableBody items={rows}>
                  {(item) => (
                      <Row>
                      {(columnKey) => <Cell>{item[columnKey]}</Cell>}
                    </Row>
                  )}
                </TableBody>
              </TableView>
        <ActionBar
            isEmphasized
            selectedItemCount={selectedKeys === 'all' ? 'all' : selectedKeys.size}
            onClearSelection={() => {
                setSelectedKeys(new Set());
            }}
            onAction={(key) => alert(`Performing ${key} action...`)}>
                <Item key="edit">
                  <Edit/>
                  <Text>Edit</Text>
                </Item>
                <Item key="delete">
                  <Delete/>
                  <Text>Delete</Text>
                </Item>
              </ActionBar>
        </ActionBarContainer>
</Variant>
<Variant name="Events1">
<ActionBarContainer height="size-5000">
            <TableView
                aria-label="Table with action bar and controlled selection"
                selectionMode="multiple"
                selectedKeys={selectedKeys}
                onSelectionChange={setSelectedKeys}
            >
                <TableHeader>
                  <Column key="name">Name</Column>
                  <Column key="type">Type</Column>
                  <Column key="level" align="end">Level</Column>
                </TableHeader>
                <TableBody items={rows}>
                  {(item) => (
                      <Row>
                      {(columnKey) => <Cell>{item[columnKey]}
                      </Cell>}
                    </Row>
                  )}
                </TableBody>
              </TableView>
        <ActionBar
            isEmphasized
            selectedItemCount={selectedKeys === 'all'
                ? 'all'
                : selectedKeys.size}
            onClearSelection={() => {
                setSelectedKeys(new Set());
            }}
            onAction={(key) =>
                alert(`Performing ${key} action...`)}>
                <Item key="edit">
                  <Edit/>
                  <Text>Edit</Text>
                </Item>
                <Item key="delete">
                  <Delete/>
                  <Text>Delete</Text>
                </Item>
              </ActionBar>
        </ActionBarContainer>
</Variant>
<Variant name="Events12">
<ActionBarContainer height="size-5000">
    <TableView
        aria-label="Table with action bar and controlled selection"
        selectionMode="multiple"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
    >
        <TableHeader>
          <Column key="name">
            Name
          </Column>
          <Column key="type">
            Type
          </Column>
          <Column
              key="level"
              align="end"
          >
            Level
          </Column>
        </TableHeader>
        <TableBody
            items={rows}
        >
          {(item) => (
              <Row>
              {(columnKey) => (
                  <Cell>
                  {item[
                      columnKey
                      ]}
                </Cell>
              )}
            </Row>
          )}
        </TableBody>
      </TableView>
<ActionBar
    isEmphasized
    selectedItemCount={selectedKeys ===
    'all'
        ? 'all'
        : selectedKeys
            .size}
    onClearSelection={() => {
        setSelectedKeys(
            new Set()
        );
    }}
    onAction={(key) =>
        alert(
            `Performing ${key} action...`
        )}>
        <Item key="edit">
          <Edit/>
          <Text>
            Edit
          </Text>
        </Item>
        <Item key="delete">
          <Delete/>
          <Text>
            Delete
          </Text>
        </Item>
      </ActionBar>
</ActionBarContainer>
</Variant>
<Variant name="isEmphasized">
<ActionBarContainer height={300} width="size-5000">
      <ListView
          aria-label="ListView with action bar"
          selectionMode="multiple"
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys}
      >
        <Item key="photoshop">Adobe Photoshop</Item>
        <Item key="illustrator">Adobe Illustrator</Item>
        <Item key="xd">Adobe XD</Item>
      </ListView>
      <ActionBar
          isEmphasized={isEmphasized} selectedItemCount={selectedKeys === 'all' ? 'all' : selectedKeys.size}
          onAction={(key) => alert(`Performing ${key} action...`)}
          onClearSelection={() => setSelectedKeys(new Set())}
      >
        <Item key="edit">
          <Edit/>
          <Text>Edit</Text>
        </Item>
        <Item key="copy">
          <Copy/>
          <Text>Copy</Text>
        </Item>
        <Item key="delete">
          <Delete/>
          <Text>Delete</Text>
        </Item>
      </ActionBar>
    </ActionBarContainer>
</Variant>
<Variant name="isEmphasized1">
<ActionBarContainer height={300} width="size-5000">
      <ListView
          aria-label="ListView with action bar"
          selectionMode="multiple"
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys}
      >
        <Item key="photoshop">Adobe Photoshop</Item>
        <Item key="illustrator">Adobe Illustrator</Item>
        <Item key="xd">Adobe XD</Item>
      </ListView>
      <ActionBar
          isEmphasized={isEmphasized} selectedItemCount={selectedKeys === 'all'
          ? 'all'
          : selectedKeys.size}
          onAction={(key) =>
              alert(`Performing ${key} action...`)}
          onClearSelection={() => setSelectedKeys(new Set())}
      >
        <Item key="edit">
          <Edit/>
          <Text>Edit</Text>
        </Item>
        <Item key="copy">
          <Copy/>
          <Text>Copy</Text>
        </Item>
        <Item key="delete">
          <Delete/>
          <Text>Delete</Text>
        </Item>
      </ActionBar>
    </ActionBarContainer>
</Variant>
<Variant name="isEmphasized12">
<ActionBarContainer
    height={300}
    width="size-5000"
>
      <ListView
          aria-label="ListView with action bar"
          selectionMode="multiple"
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys}
      >
        <Item key="photoshop">
          Adobe Photoshop
        </Item>
        <Item key="illustrator">
          Adobe
          Illustrator
        </Item>
        <Item key="xd">
          Adobe XD
        </Item>
      </ListView>
      <ActionBar
          isEmphasized={isEmphasized} selectedItemCount={selectedKeys ===
      'all'
          ? 'all'
          : selectedKeys
              .size}
          onAction={(
              key
          ) =>
              alert(
                  `Performing ${key} action...`
              )}
          onClearSelection={() =>
              setSelectedKeys(
                  new Set()
              )}
      >
        <Item key="edit">
          <Edit/>
          <Text>
            Edit
          </Text>
        </Item>
        <Item key="copy">
          <Copy/>
          <Text>
            Copy
          </Text>
        </Item>
        <Item key="delete">
          <Delete/>
          <Text>
            Delete
          </Text>
        </Item>
      </ActionBar>
    </ActionBarContainer>
</Variant>
</Component>
<Component name="ActionMenu" docURL="https://react-spectrum.adobe.com/react-spectrum/ActionMenu.html">
<Variant name="Example">
<ActionMenu>
        <Item>Cut</Item>
        <Item>Copy</Item>
        <Item>Paste</Item>
        </ActionMenu>
</Variant>
<Variant name="Example1">
<ActionMenu>
        <Item>Cut</Item>
        <Item>Copy</Item>
        <Item>Paste</Item>
        </ActionMenu>
</Variant>
<Variant name="Example12">
<ActionMenu>
        <Item>Cut</Item>
        <Item>Copy</Item>
        <Item>Paste</Item>
        </ActionMenu>
</Variant>
<Variant name="Content">
<ActionMenu items={actionMenuItems}>
      {item => <Item key={item.name}>{item.name}</Item>}
    </ActionMenu>
</Variant>
<Variant name="Content1">
<ActionMenu items={actionMenuItems}>
      {item => <Item key={item.name}>{item.name}</Item>}
    </ActionMenu>
</Variant>
<Variant name="Content12">
<ActionMenu
    items={actionMenuItems}
>
      {(item) => (
          <Item
              key={item.name}
          >
          {item.name}
        </Item>
      )}
    </ActionMenu>
</Variant>
<Variant name="Events">
<>
    <ActionMenu onAction={setAction}>
        <Item key="cut">Cut</Item>
        <Item key="copy">Copy</Item>
        <Item key="paste">Paste</Item>
      </ActionMenu>
<p>Action: {action}</p>
</>
</Variant>
<Variant name="Events1">
<>
    <ActionMenu onAction={setAction}>
        <Item key="cut">Cut</Item>
        <Item key="copy">Copy</Item>
        <Item key="paste">Paste</Item>
      </ActionMenu>
<p>Action: {action}</p>
</>
</Variant>
<Variant name="Events12">
<>
    <ActionMenu
        onAction={setAction}
    >
        <Item key="cut">
          Cut
        </Item>
        <Item key="copy">
          Copy
        </Item>
        <Item key="paste">
          Paste
        </Item>
      </ActionMenu>
<p>
        Action: {action}
      </p>
</>
</Variant>
<Variant name="Links">
<ActionMenu>
  <Item href="https://adobe.com/" target="_blank">Adobe</Item>
  <Item href="https://apple.com/" target="_blank">Apple</Item>
  <Item href="https://google.com/" target="_blank">Google</Item>
  <Item href="https://microsoft.com/" target="_blank">Microsoft</Item>
</ActionMenu>
</Variant>
<Variant name="Links1">
<ActionMenu>
  <Item href="https://adobe.com/" target="_blank">
    Adobe
  </Item>
  <Item href="https://apple.com/" target="_blank">
    Apple
  </Item>
  <Item href="https://google.com/" target="_blank">
    Google
  </Item>
  <Item href="https://microsoft.com/" target="_blank">
    Microsoft
  </Item>
</ActionMenu>
</Variant>
<Variant name="Links12">
<ActionMenu>
  <Item
      href="https://adobe.com/"
      target="_blank"
  >
    Adobe
  </Item>
  <Item
      href="https://apple.com/"
      target="_blank"
  >
    Apple
  </Item>
  <Item
      href="https://google.com/"
      target="_blank"
  >
    Google
  </Item>
  <Item
      href="https://microsoft.com/"
      target="_blank"
  >
    Microsoft
  </Item>
</ActionMenu>
</Variant>
<Variant name="Static Items">
<ActionMenu>
  <Section title="File">
    <Item key="new">New</Item>
    <Item key="open">Open...</Item>
  </Section>
  <Section title="Save">
    <Item key="save">Save</Item>
    <Item key="saveAs">Save As...</Item>
    <Item key="saveAll">Save All</Item>
  </Section>
</ActionMenu>
</Variant>
<Variant name="Static Items1">
<ActionMenu>
  <Section title="File">
    <Item key="new">New</Item>
    <Item key="open">Open...</Item>
  </Section>
  <Section title="Save">
    <Item key="save">Save</Item>
    <Item key="saveAs">Save As...</Item>
    <Item key="saveAll">Save All</Item>
  </Section>
</ActionMenu>
</Variant>
<Variant name="Static Items12">
<ActionMenu>
  <Section title="File">
    <Item key="new">
      New
    </Item>
    <Item key="open">
      Open...
    </Item>
  </Section>
  <Section title="Save">
    <Item key="save">
      Save
    </Item>
    <Item key="saveAs">
      Save As...
    </Item>
    <Item key="saveAll">
      Save All
    </Item>
  </Section>
</ActionMenu>
</Variant>
<Variant name="Dynamic Items">
<ActionMenu
    items={openWindows}>
      {item => (
          <Section items={item.children} title={item.name}>
          {item => <Item>{item.name}</Item>}
        </Section>
      )}
    </ActionMenu>
</Variant>
<Variant name="Dynamic Items1">
<ActionMenu
    items={openWindows}>
      {item => (
          <Section items={item.children} title={item.name}>
          {item => <Item>{item.name}</Item>}
        </Section>
      )}
    </ActionMenu>
</Variant>
<Variant name="Dynamic Items12">
<ActionMenu
    items={openWindows}
>
      {(item) => (
          <Section
              items={item
                  .children}
              title={item
                  .name}
          >
          {(item) => (
              <Item>
              {item.name}
            </Item>
          )}
        </Section>
      )}
    </ActionMenu>
</Variant>
<Variant name="Complex Menu Items">
<ActionMenu>
  <Item key="cut" textValue="cut">
    <Cut/>
    <Text>Cut</Text>
    <Keyboard>âX</Keyboard>
  </Item>
  <Item key="copy" textValue="copy">
    <Copy/>
    <Text>Copy</Text>
    <Keyboard>âC</Keyboard>
  </Item>
  <Item key="paste" textValue="paste">
    <Paste/>
    <Text>Paste</Text>
    <Keyboard>âV</Keyboard>
  </Item>
</ActionMenu>
</Variant>
<Variant name="Complex Menu Items1">
<ActionMenu>
  <Item key="cut" textValue="cut">
    <Cut/>
    <Text>Cut</Text>
    <Keyboard>âX</Keyboard>
  </Item>
  <Item key="copy" textValue="copy">
    <Copy/>
    <Text>Copy</Text>
    <Keyboard>âC</Keyboard>
  </Item>
  <Item key="paste" textValue="paste">
    <Paste/>
    <Text>Paste</Text>
    <Keyboard>âV</Keyboard>
  </Item>
</ActionMenu>
</Variant>
<Variant name="Complex Menu Items12">
<ActionMenu>
  <Item
      key="cut"
      textValue="cut"
  >
    <Cut/>
    <Text>Cut</Text>
    <Keyboard>
      âX
    </Keyboard>
  </Item>
  <Item
      key="copy"
      textValue="copy"
  >
    <Copy/>
    <Text>Copy</Text>
    <Keyboard>
      âC
    </Keyboard>
  </Item>
  <Item
      key="paste"
      textValue="paste"
  >
    <Paste/>
    <Text>Paste</Text>
    <Keyboard>
      âV
    </Keyboard>
  </Item>
</ActionMenu>
</Variant>
<Variant name="Quiet">
<ActionMenu
    isQuiet
    items={[
        {name: 'Cut', id: 'cut'},
        {name: 'Copy', id: 'copy'},
        {name: 'Paste', id: 'paste'}
    ]}>
  {item => <Item>{item.name}</Item>}
</ActionMenu>
</Variant>
<Variant name="Quiet1">
<ActionMenu
    isQuiet
    items={[
        {name: 'Cut', id: 'cut'},
        {name: 'Copy', id: 'copy'},
        {name: 'Paste', id: 'paste'}
    ]}>
  {item => <Item>{item.name}</Item>}
</ActionMenu>
</Variant>
<Variant name="Quiet12">
<ActionMenu
    isQuiet
    items={[
        {
            name: 'Cut',
            id: 'cut'
        },
        {
            name: 'Copy',
            id: 'copy'
        },
        {
            name: 'Paste',
            id: 'paste'
        }
    ]}
>
  {(item) => (
      <Item>
      {item.name}
    </Item>
  )}
</ActionMenu>
</Variant>
<Variant name="Disabled">
<ActionMenu
    items={[
        {name: 'Undo', id: 'undo'},
        {name: 'Redo', id: 'redo'},
        {name: 'Cut', id: 'cut'},
        {name: 'Copy', id: 'copy'},
        {name: 'Paste', id: 'paste'}
    ]}
    isDisabled>
  {item => <Item>{item.name}</Item>}
</ActionMenu>
</Variant>
<Variant name="Disabled1">
<ActionMenu
    items={[
        {name: 'Undo', id: 'undo'},
        {name: 'Redo', id: 'redo'},
        {name: 'Cut', id: 'cut'},
        {name: 'Copy', id: 'copy'},
        {name: 'Paste', id: 'paste'}
    ]}
    isDisabled>
  {item => <Item>{item.name}</Item>}
</ActionMenu>
</Variant>
<Variant name="Disabled12">
<ActionMenu
    items={[
        {
            name: 'Undo',
            id: 'undo'
        },
        {
            name: 'Redo',
            id: 'redo'
        },
        {
            name: 'Cut',
            id: 'cut'
        },
        {
            name: 'Copy',
            id: 'copy'
        },
        {
            name: 'Paste',
            id: 'paste'
        }
    ]}
    isDisabled
>
  {(item) => (
      <Item>
      {item.name}
    </Item>
  )}
</ActionMenu>
</Variant>
<Variant name="Disabled items">
<ActionMenu
    items={[
        {name: 'Undo', id: 'undo'},
        {name: 'Redo', id: 'redo'},
        {name: 'Cut', id: 'cut'},
        {name: 'Copy', id: 'copy'},
        {name: 'Paste', id: 'paste'}
    ]}
    disabledKeys={['redo', 'paste']}>
  {item => <Item>{item.name}</Item>}
</ActionMenu>
</Variant>
<Variant name="Disabled items1">
<ActionMenu
    items={[
        {name: 'Undo', id: 'undo'},
        {name: 'Redo', id: 'redo'},
        {name: 'Cut', id: 'cut'},
        {name: 'Copy', id: 'copy'},
        {name: 'Paste', id: 'paste'}
    ]}
    disabledKeys={['redo', 'paste']}>
  {item => <Item>{item.name}</Item>}
</ActionMenu>
</Variant>
<Variant name="Disabled items12">
<ActionMenu
    items={[
        {
            name: 'Undo',
            id: 'undo'
        },
        {
            name: 'Redo',
            id: 'redo'
        },
        {
            name: 'Cut',
            id: 'cut'
        },
        {
            name: 'Copy',
            id: 'copy'
        },
        {
            name: 'Paste',
            id: 'paste'
        }
    ]}
    disabledKeys={[
        'redo',
        'paste'
    ]}
>
  {(item) => (
      <Item>
      {item.name}
    </Item>
  )}
</ActionMenu>
</Variant>
<Variant name="Align and direction">
<Flex gap="size-100">
  <ActionMenu align="start">
    <Item key="cut">Cut</Item>
    <Item key="copy">Copy</Item>
    <Item key="paste">Paste</Item>
  </ActionMenu>
  <ActionMenu align="end" direction="top" shouldFlip={false}>
    <Item key="cut">Cut</Item>
    <Item key="copy">Copy</Item>
    <Item key="paste">Paste</Item>
  </ActionMenu>
  <ActionMenu direction="start" align="start">
    <Item key="cut">Cut</Item>
    <Item key="copy">Copy</Item>
    <Item key="paste">Paste</Item>
  </ActionMenu>
  <ActionMenu direction="end" align="end">
    <Item key="cut">Cut</Item>
    <Item key="copy">Copy</Item>
    <Item key="paste">Paste</Item>
  </ActionMenu>
</Flex>
</Variant>
<Variant name="Align and direction1">
<Flex gap="size-100">
  <ActionMenu align="start">
    <Item key="cut">Cut</Item>
    <Item key="copy">Copy</Item>
    <Item key="paste">Paste</Item>
  </ActionMenu>
  <ActionMenu
      align="end"
      direction="top"
      shouldFlip={false}
  >
    <Item key="cut">Cut</Item>
    <Item key="copy">Copy</Item>
    <Item key="paste">Paste</Item>
  </ActionMenu>
  <ActionMenu direction="start" align="start">
    <Item key="cut">Cut</Item>
    <Item key="copy">Copy</Item>
    <Item key="paste">Paste</Item>
  </ActionMenu>
  <ActionMenu direction="end" align="end">
    <Item key="cut">Cut</Item>
    <Item key="copy">Copy</Item>
    <Item key="paste">Paste</Item>
  </ActionMenu>
</Flex>
</Variant>
<Variant name="Align and direction12">
<Flex gap="size-100">
  <ActionMenu align="start">
    <Item key="cut">
      Cut
    </Item>
    <Item key="copy">
      Copy
    </Item>
    <Item key="paste">
      Paste
    </Item>
  </ActionMenu>
  <ActionMenu
      align="end"
      direction="top"
      shouldFlip={false}
  >
    <Item key="cut">
      Cut
    </Item>
    <Item key="copy">
      Copy
    </Item>
    <Item key="paste">
      Paste
    </Item>
  </ActionMenu>
  <ActionMenu
      direction="start"
      align="start"
  >
    <Item key="cut">
      Cut
    </Item>
    <Item key="copy">
      Copy
    </Item>
    <Item key="paste">
      Paste
    </Item>
  </ActionMenu>
  <ActionMenu
      direction="end"
      align="end"
  >
    <Item key="cut">
      Cut
    </Item>
    <Item key="copy">
      Copy
    </Item>
    <Item key="paste">
      Paste
    </Item>
  </ActionMenu>
</Flex>
</Variant>
<Variant name="Flipping">
<Flex gap="size-100">
  <ActionMenu shouldFlip>
    <Item key="cut">Cut</Item>
    <Item key="copy">Copy</Item>
    <Item key="paste">Paste</Item>
  </ActionMenu>
  <ActionMenu shouldFlip={false}>
    <Item key="cut">Cut</Item>
    <Item key="copy">Copy</Item>
    <Item key="paste">Paste</Item>
  </ActionMenu>
</Flex>
</Variant>
<Variant name="Flipping1">
<Flex gap="size-100">
  <ActionMenu shouldFlip>
    <Item key="cut">Cut</Item>
    <Item key="copy">Copy</Item>
    <Item key="paste">Paste</Item>
  </ActionMenu>
  <ActionMenu shouldFlip={false}>
    <Item key="cut">Cut</Item>
    <Item key="copy">Copy</Item>
    <Item key="paste">Paste</Item>
  </ActionMenu>
</Flex>
</Variant>
<Variant name="Flipping12">
<Flex gap="size-100">
  <ActionMenu
      shouldFlip
  >
    <Item key="cut">
      Cut
    </Item>
    <Item key="copy">
      Copy
    </Item>
    <Item key="paste">
      Paste
    </Item>
  </ActionMenu>
  <ActionMenu
      shouldFlip={false}
  >
    <Item key="cut">
      Cut
    </Item>
    <Item key="copy">
      Copy
    </Item>
    <Item key="paste">
      Paste
    </Item>
  </ActionMenu>
</Flex>
</Variant>
<Variant name="Open">
<ActionMenu
    isOpen={open}
    onOpenChange={setOpen}>
      <Item key="cut">Cut</Item>
      <Item key="copy">Copy</Item>
      <Item key="paste">Paste</Item>
    </ActionMenu>
</Variant>
<Variant name="Open1">
<ActionMenu
    isOpen={open}
    onOpenChange={setOpen}>
      <Item key="cut">Cut</Item>
      <Item key="copy">Copy</Item>
      <Item key="paste">Paste</Item>
    </ActionMenu>
</Variant>
<Variant name="Open12">
<ActionMenu
    isOpen={open}
    onOpenChange={setOpen}
>
      <Item key="cut">
        Cut
      </Item>
      <Item key="copy">
        Copy
      </Item>
      <Item key="paste">
        Paste
      </Item>
    </ActionMenu>
</Variant>
</Component>
<Component name="ListBox" docURL="https://react-spectrum.adobe.com/react-spectrum/ListBox.html">
<Variant name="Example">
<ListBox width="size-2400" aria-label="Alignment">
  <Item>Left</Item>
  <Item>Middle</Item>
  <Item>Right</Item>
</ListBox>
</Variant>
<Variant name="Example1">
<ListBox width="size-2400" aria-label="Alignment">
  <Item>Left</Item>
  <Item>Middle</Item>
  <Item>Right</Item>
</ListBox>
</Variant>
<Variant name="Example12">
<ListBox
    width="size-2400"
    aria-label="Alignment"
>
  <Item>Left</Item>
  <Item>Middle</Item>
  <Item>Right</Item>
</ListBox>
</Variant>
<Variant name="Content">
<>
        <ListBox
            width="size-2400"
            aria-label="Animals"
            items={options}
            selectionMode="single"
            onSelectionChange={setAnimalId}
        >
        {(item) => <Item>{item.name}</Item>}
      </ListBox>
      <p>Animal id: {animalId}</p>
    </>
</Variant>
<Variant name="Content1">
<>
    <ListBox
        width="size-2400"
        aria-label="Animals"
        items={options}
        selectionMode="single"
        onSelectionChange={setAnimalId}
    >
        {(item) => <Item>{item.name}</Item>}
      </ListBox>
<p>Animal id: {animalId}</p>
</>
</Variant>
<Variant name="Content12">
<>
    <ListBox
        width="size-2400"
        aria-label="Animals"
        items={options}
        selectionMode="single"
        onSelectionChange={setAnimalId}
    >
        {(item) => (
            <Item>
            {item.name}
          </Item>
        )}
      </ListBox>
<p>
        Animal id:{' '}
    {animalId}
      </p>
</>
</Variant>
<Variant name="Selection">
<Flex direction="row" gap="size-350">
    <ListBox
        selectionMode="multiple"
        aria-label="Pick an animal"
        items={options}
        defaultSelectedKeys={['Bison', 'Koala']}
        width="size-2400"
    >
        {(item) => <Item key={item.name}>{item.name}</Item>}
      </ListBox>

<ListBox
    selectionMode="multiple"
    aria-label="Pick an animal"
    items={options}
    selectedKeys={selectedKeys}
    onSelectionChange={setSelectedKeys}
    width="size-2400"
>
        {(item) => <Item key={item.name}>{item.name}</Item>}
      </ListBox>
</Flex>
</Variant>
<Variant name="Selection1">
<Flex direction="row" gap="size-350">
    <ListBox
        selectionMode="multiple"
        aria-label="Pick an animal"
        items={options}
        defaultSelectedKeys={['Bison', 'Koala']}
        width="size-2400"
    >
        {(item) => <Item key={item.name}>{item.name}</Item>}
      </ListBox>

<ListBox
    selectionMode="multiple"
    aria-label="Pick an animal"
    items={options}
    selectedKeys={selectedKeys}
    onSelectionChange={setSelectedKeys}
    width="size-2400"
>
        {(item) => <Item key={item.name}>{item.name}</Item>}
      </ListBox>
</Flex>
</Variant>
<Variant name="Selection12">
<Flex
    direction="row"
    gap="size-350"
>
    <ListBox
        selectionMode="multiple"
        aria-label="Pick an animal"
        items={options}
        defaultSelectedKeys={[
            'Bison',
            'Koala'
        ]}
        width="size-2400"
    >
        {(item) => (
            <Item
                key={item
                    .name}
            >
            {item.name}
          </Item>
        )}
      </ListBox>

<ListBox
    selectionMode="multiple"
    aria-label="Pick an animal"
    items={options}
    selectedKeys={selectedKeys}
    onSelectionChange={setSelectedKeys}
    width="size-2400"
>
        {(item) => (
            <Item
                key={item
                    .name}
            >
            {item.name}
          </Item>
        )}
      </ListBox>
</Flex>
</Variant>
<Variant name="Links">
<ListBox aria-label="Links">
  <Item href="https://adobe.com/" target="_blank">Adobe</Item>
  <Item href="https://apple.com/" target="_blank">Apple</Item>
  <Item href="https://google.com/" target="_blank">Google</Item>
  <Item href="https://microsoft.com/" target="_blank">Microsoft</Item>
</ListBox>
</Variant>
<Variant name="Links1">
<ListBox aria-label="Links">
  <Item href="https://adobe.com/" target="_blank">
    Adobe
  </Item>
  <Item href="https://apple.com/" target="_blank">
    Apple
  </Item>
  <Item href="https://google.com/" target="_blank">
    Google
  </Item>
  <Item href="https://microsoft.com/" target="_blank">
    Microsoft
  </Item>
</ListBox>
</Variant>
<Variant name="Links12">
<ListBox aria-label="Links">
  <Item
      href="https://adobe.com/"
      target="_blank"
  >
    Adobe
  </Item>
  <Item
      href="https://apple.com/"
      target="_blank"
  >
    Apple
  </Item>
  <Item
      href="https://google.com/"
      target="_blank"
  >
    Google
  </Item>
  <Item
      href="https://microsoft.com/"
      target="_blank"
  >
    Microsoft
  </Item>
</ListBox>
</Variant>
<Variant name="Static Items">
<ListBox
    width="size-2400"
    aria-label="Pick your favorite"
    selectionMode="single"
>
  <Section title="Animals">
    <Item key="Aardvark">Aardvark</Item>
    <Item key="Kangaroo">Kangaroo</Item>
    <Item key="Snake">Snake</Item>
  </Section>
  <Section title="People">
    <Item key="Danni">Danni</Item>
    <Item key="Devon">Devon</Item>
    <Item key="Ross">Ross</Item>
  </Section>
</ListBox>
</Variant>
<Variant name="Static Items1">
<ListBox
    width="size-2400"
    aria-label="Pick your favorite"
    selectionMode="single"
>
  <Section title="Animals">
    <Item key="Aardvark">Aardvark</Item>
    <Item key="Kangaroo">Kangaroo</Item>
    <Item key="Snake">Snake</Item>
  </Section>
  <Section title="People">
    <Item key="Danni">Danni</Item>
    <Item key="Devon">Devon</Item>
    <Item key="Ross">Ross</Item>
  </Section>
</ListBox>
</Variant>
<Variant name="Static Items12">
<ListBox
    width="size-2400"
    aria-label="Pick your favorite"
    selectionMode="single"
>
  <Section title="Animals">
    <Item key="Aardvark">
      Aardvark
    </Item>
    <Item key="Kangaroo">
      Kangaroo
    </Item>
    <Item key="Snake">
      Snake
    </Item>
  </Section>
  <Section title="People">
    <Item key="Danni">
      Danni
    </Item>
    <Item key="Devon">
      Devon
    </Item>
    <Item key="Ross">
      Ross
    </Item>
  </Section>
</ListBox>
</Variant>
<Variant name="Dynamic Items">
<ListBox
    aria-label="Pick an animal"
    items={options}
    selectedKeys={selected}
    selectionMode="single"
    onSelectionChange={setSelected}
    width="size-2400">
      {item => (
          <Section key={item.name} items={item.children} title={item.name}>
          {item => <Item>{item.name}</Item>}
        </Section>
      )}
    </ListBox>
</Variant>
<Variant name="Dynamic Items1">
<ListBox
    aria-label="Pick an animal"
    items={options}
    selectedKeys={selected}
    selectionMode="single"
    onSelectionChange={setSelected}
    width="size-2400"
>
      {(item) => (
          <Section
              key={item.name}
              items={item.children}
              title={item.name}
          >
          {(item) => <Item>{item.name}</Item>}
        </Section>
      )}
    </ListBox>
</Variant>
<Variant name="Dynamic Items12">
<ListBox
    aria-label="Pick an animal"
    items={options}
    selectedKeys={selected}
    selectionMode="single"
    onSelectionChange={setSelected}
    width="size-2400"
>
      {(item) => (
          <Section
              key={item.name}
              items={item
                  .children}
              title={item
                  .name}
          >
          {(item) => (
              <Item>
              {item.name}
            </Item>
          )}
        </Section>
      )}
    </ListBox>
</Variant>
<Variant name="Events">
<>
    <ListBox
        aria-label="Choose frequency"
        selectionMode="single"
        onSelectionChange={selected => setFrequency(selected)}
        width="size-2400">
        <Item key="Rarely">Rarely</Item>
        <Item key="Sometimes">Sometimes</Item>
        <Item key="Always">Always</Item>
      </ListBox>
<p>You selected: {[...frequency][0]}</p>
</>
</Variant>
<Variant name="Events1">
<>
    <ListBox
        aria-label="Choose frequency"
        selectionMode="single"
        onSelectionChange={(selected) =>
            setFrequency(selected)}
        width="size-2400"
    >
        <Item key="Rarely">Rarely</Item>
        <Item key="Sometimes">Sometimes</Item>
        <Item key="Always">Always</Item>
      </ListBox>
<p>You selected: {[...frequency][0]}</p>
</>
</Variant>
<Variant name="Events12">
<>
    <ListBox
        aria-label="Choose frequency"
        selectionMode="single"
        onSelectionChange={(selected) =>
            setFrequency(
                selected
            )}
        width="size-2400"
    >
        <Item key="Rarely">
          Rarely
        </Item>
        <Item key="Sometimes">
          Sometimes
        </Item>
        <Item key="Always">
          Always
        </Item>
      </ListBox>
<p>
        You selected:
    {' '}
    {[...frequency][
        0
        ]}
      </p>
</>
</Variant>
<Variant name="Events123">
<>
    <ListBox
        selectionMode="single"
        aria-label="Pick an animal"
        items={options}
        onSelectionChange={selected => setAnimalId(selected)}
        width="size-2400">
        {item => <Item>{item.name}</Item>}
      </ListBox>
<p>Your favorite animal has id: {[...animalId][0]}</p>
</>
</Variant>
<Variant name="Events1234">
<>
    <ListBox
        selectionMode="single"
        aria-label="Pick an animal"
        items={options}
        onSelectionChange={(selected) =>
            setAnimalId(selected)}
        width="size-2400"
    >
        {(item) => <Item>{item.name}</Item>}
      </ListBox>
<p>Your favorite animal has id: {[...animalId][0]}</p>
</>
</Variant>
<Variant name="Events12345">
<>
    <ListBox
        selectionMode="single"
        aria-label="Pick an animal"
        items={options}
        onSelectionChange={(selected) =>
            setAnimalId(
                selected
            )}
        width="size-2400"
    >
        {(item) => (
            <Item>
            {item.name}
          </Item>
        )}
      </ListBox>
<p>
        Your favorite
        animal has id:
    {' '}
    {[...animalId][
        0
        ]}
      </p>
</>
</Variant>
<Variant name="Complex Items">
<ListBox width="size-2400" aria-label="Options" selectionMode="single">
  <Section title="Permission">
    <Item textValue="Read">
      <Book size="S"/>
      <Text>Read</Text>
      <Text slot="description">Read Only</Text>
    </Item>
    <Item textValue="Write">
      <Draw size="S"/>
      <Text>Write</Text>
      <Text slot="description">Read and Write Only</Text>
    </Item>
    <Item textValue="Admin">
      <BulkEditUsers size="S"/>
      <Text>Admin</Text>
      <Text slot="description">Full access</Text>
    </Item>
  </Section>
</ListBox>
</Variant>
<Variant name="Complex Items1">
<ListBox
    width="size-2400"
    aria-label="Options"
    selectionMode="single"
>
  <Section title="Permission">
    <Item textValue="Read">
      <Book size="S"/>
      <Text>Read</Text>
      <Text slot="description">Read Only</Text>
    </Item>
    <Item textValue="Write">
      <Draw size="S"/>
      <Text>Write</Text>
      <Text slot="description">Read and Write Only</Text>
    </Item>
    <Item textValue="Admin">
      <BulkEditUsers size="S"/>
      <Text>Admin</Text>
      <Text slot="description">Full access</Text>
    </Item>
  </Section>
</ListBox>
</Variant>
<Variant name="Complex Items12">
<ListBox
    width="size-2400"
    aria-label="Options"
    selectionMode="single"
>
  <Section title="Permission">
    <Item textValue="Read">
      <Book size="S"/>
      <Text>Read</Text>
      <Text slot="description">
        Read Only
      </Text>
    </Item>
    <Item textValue="Write">
      <Draw size="S"/>
      <Text>
        Write
      </Text>
      <Text slot="description">
        Read and Write
        Only
      </Text>
    </Item>
    <Item textValue="Admin">
      <BulkEditUsers size="S"/>
      <Text>
        Admin
      </Text>
      <Text slot="description">
        Full access
      </Text>
    </Item>
  </Section>
</ListBox>
</Variant>
<Variant name="With avatars">
<ListBox width="size-2400" aria-label="Options" selectionMode="single">
  <Section title="Users">
    <Item textValue="User 1">
      <Avatar src="https://i.imgur.com/kJOwAdv.png"/>
      <Text>User 1</Text>
    </Item>
    <Item textValue="User 2">
      <Avatar src="https://i.imgur.com/kJOwAdv.png"/>
      <Text>User 2</Text>
    </Item>
    <Item textValue="User 3">
      <Avatar src="https://i.imgur.com/kJOwAdv.png"/>
      <Text>User 3</Text>
    </Item>
    <Item textValue="User 4">
      <Avatar src="https://i.imgur.com/kJOwAdv.png"/>
      <Text>User 4</Text>
    </Item>
  </Section>
</ListBox>
</Variant>
<Variant name="With avatars1">
<ListBox
    width="size-2400"
    aria-label="Options"
    selectionMode="single"
>
  <Section title="Users">
    <Item textValue="User 1">
      <Avatar src="https://i.imgur.com/kJOwAdv.png"/>
      <Text>User 1</Text>
    </Item>
    <Item textValue="User 2">
      <Avatar src="https://i.imgur.com/kJOwAdv.png"/>
      <Text>User 2</Text>
    </Item>
    <Item textValue="User 3">
      <Avatar src="https://i.imgur.com/kJOwAdv.png"/>
      <Text>User 3</Text>
    </Item>
    <Item textValue="User 4">
      <Avatar src="https://i.imgur.com/kJOwAdv.png"/>
      <Text>User 4</Text>
    </Item>
  </Section>
</ListBox>
</Variant>
<Variant name="With avatars12">
<ListBox
    width="size-2400"
    aria-label="Options"
    selectionMode="single"
>
  <Section title="Users">
    <Item textValue="User 1">
      <Avatar src="https://i.imgur.com/kJOwAdv.png"/>
      <Text>
        User 1
      </Text>
    </Item>
    <Item textValue="User 2">
      <Avatar src="https://i.imgur.com/kJOwAdv.png"/>
      <Text>
        User 2
      </Text>
    </Item>
    <Item textValue="User 3">
      <Avatar src="https://i.imgur.com/kJOwAdv.png"/>
      <Text>
        User 3
      </Text>
    </Item>
    <Item textValue="User 4">
      <Avatar src="https://i.imgur.com/kJOwAdv.png"/>
      <Text>
        User 4
      </Text>
    </Item>
  </Section>
</ListBox>
</Variant>
<Variant name="Asynchronous loading">
<Flex maxHeight="size-2400">
    <ListBox
        aria-label="Pick a Pokemon"
        items={list.items}
        isLoading={list.isLoading}
        onLoadMore={list.loadMore}
        width="size-2400"
    >
        {(item) => <Item key={item.name}>{item.name}</Item>}
      </ListBox>
</Flex>
</Variant>
<Variant name="Asynchronous loading1">
<Flex maxHeight="size-2400">
    <ListBox
        aria-label="Pick a Pokemon"
        items={list.items}
        isLoading={list.isLoading}
        onLoadMore={list.loadMore}
        width="size-2400"
    >
        {(item) => <Item key={item.name}>{item.name}</Item>}
      </ListBox>
</Flex>
</Variant>
<Variant name="Asynchronous loading12">
<Flex maxHeight="size-2400">
    <ListBox
        aria-label="Pick a Pokemon"
        items={list
            .items}
        isLoading={list
            .isLoading}
        onLoadMore={list
            .loadMore}
        width="size-2400"
    >
        {(item) => (
            <Item
                key={item
                    .name}
            >
            {item.name}
          </Item>
        )}
      </ListBox>
</Flex>
</Variant>
<Variant name="Loading">
<ListBox
    isLoading
    aria-label="Choose frequency"
    selectionMode="single"
    width="size-1200">
</ListBox>
</Variant>
<Variant name="Loading1">
<ListBox
    isLoading
    aria-label="Choose frequency"
    selectionMode="single"
    width="size-1200">
</ListBox>
</Variant>
<Variant name="Loading12">
<ListBox
    isLoading
    aria-label="Choose frequency"
    selectionMode="single"
    width="size-1200"
>
</ListBox>
</Variant>
<Variant name="Disabled">
<ListBox
    width="size-2400"
    aria-label="Pick your favorite"
    disabledKeys={['Snake', 'Ross']}
    selectionMode="single"
>
  <Section title="Animals">
    <Item key="Aardvark">Aardvark</Item>
    <Item key="Kangaroo">Kangaroo</Item>
    <Item key="Snake">Snake</Item>
  </Section>
  <Section title="People">
    <Item key="Danni">Danni</Item>
    <Item key="Devon">Devon</Item>
    <Item key="Ross">Ross</Item>
  </Section>
</ListBox>
</Variant>
<Variant name="Disabled1">
<ListBox
    width="size-2400"
    aria-label="Pick your favorite"
    disabledKeys={['Snake', 'Ross']}
    selectionMode="single"
>
  <Section title="Animals">
    <Item key="Aardvark">Aardvark</Item>
    <Item key="Kangaroo">Kangaroo</Item>
    <Item key="Snake">Snake</Item>
  </Section>
  <Section title="People">
    <Item key="Danni">Danni</Item>
    <Item key="Devon">Devon</Item>
    <Item key="Ross">Ross</Item>
  </Section>
</ListBox>
</Variant>
<Variant name="Disabled12">
<ListBox
    width="size-2400"
    aria-label="Pick your favorite"
    disabledKeys={[
        'Snake',
        'Ross'
    ]}
    selectionMode="single"
>
  <Section title="Animals">
    <Item key="Aardvark">
      Aardvark
    </Item>
    <Item key="Kangaroo">
      Kangaroo
    </Item>
    <Item key="Snake">
      Snake
    </Item>
  </Section>
  <Section title="People">
    <Item key="Danni">
      Danni
    </Item>
    <Item key="Devon">
      Devon
    </Item>
    <Item key="Ross">
      Ross
    </Item>
  </Section>
</ListBox>
</Variant>
</Component>
<Component name="ListView" docURL="https://react-spectrum.adobe.com/react-spectrum/ListView.html">
<Variant name="Example">
<ListView
    selectionMode="multiple"
    aria-label="Static ListView items example"
    maxWidth="size-6000"
>
  <Item>Adobe Photoshop</Item>
  <Item>Adobe InDesign</Item>
  <Item>Adobe AfterEffects</Item>
  <Item>Adobe Illustrator</Item>
  <Item>Adobe Lightroom</Item>
</ListView>
</Variant>
<Variant name="Example1">
<ListView
    selectionMode="multiple"
    aria-label="Static ListView items example"
    maxWidth="size-6000"
>
  <Item>Adobe Photoshop</Item>
  <Item>Adobe InDesign</Item>
  <Item>Adobe AfterEffects</Item>
  <Item>Adobe Illustrator</Item>
  <Item>Adobe Lightroom</Item>
</ListView>
</Variant>
<Variant name="Example12">
<ListView
    selectionMode="multiple"
    aria-label="Static ListView items example"
    maxWidth="size-6000"
>
  <Item>
    Adobe Photoshop
  </Item>
  <Item>
    Adobe InDesign
  </Item>
  <Item>
    Adobe AfterEffects
  </Item>
  <Item>
    Adobe Illustrator
  </Item>
  <Item>
    Adobe Lightroom
  </Item>
</ListView>
</Variant>
<Variant name="Content">
<ListView
    items={[
        {id: 1, name: 'Adobe Photoshop'},
        {id: 2, name: 'Adobe XD'},
        {id: 3, name: 'Adobe InDesign'},
        {id: 4, name: 'Adobe AfterEffects'},
        {id: 5, name: 'Adobe Illustrator'},
        {id: 6, name: 'Adobe Lightroom'},
        {id: 7, name: 'Adobe Premiere Pro'},
        {id: 8, name: 'Adobe Fresco'},
        {id: 9, name: 'Adobe Dreamweaver'}
    ]}
    selectionMode="multiple"
    maxWidth="size-6000"
    height="250px"
    aria-label="Dynamic ListView items example"
>
  {(item) => <Item>{item.name}</Item>}
</ListView>
</Variant>
<Variant name="Content1">
<ListView
    items={[
        {id: 1, name: 'Adobe Photoshop'},
        {id: 2, name: 'Adobe XD'},
        {id: 3, name: 'Adobe InDesign'},
        {id: 4, name: 'Adobe AfterEffects'},
        {id: 5, name: 'Adobe Illustrator'},
        {id: 6, name: 'Adobe Lightroom'},
        {id: 7, name: 'Adobe Premiere Pro'},
        {id: 8, name: 'Adobe Fresco'},
        {id: 9, name: 'Adobe Dreamweaver'}
    ]}
    selectionMode="multiple"
    maxWidth="size-6000"
    height="250px"
    aria-label="Dynamic ListView items example"
>
  {(item) => <Item>{item.name}</Item>}
</ListView>
</Variant>
<Variant name="Content12">
<ListView
    items={[
        {id: 1, name: 'Adobe Photoshop'},
        {id: 2, name: 'Adobe XD'},
        {id: 3, name: 'Adobe InDesign'},
        {id: 4, name: 'Adobe AfterEffects'},
        {id: 5, name: 'Adobe Illustrator'},
        {id: 6, name: 'Adobe Lightroom'},
        {id: 7, name: 'Adobe Premiere Pro'},
        {id: 8, name: 'Adobe Fresco'},
        {id: 9, name: 'Adobe Dreamweaver'}
    ]}
    selectionMode="multiple"
    maxWidth="size-6000"
    height="250px"
    aria-label="Dynamic ListView items example"
>
  {(item) => (
      <Item>
      {item.name}
    </Item>
  )}
</ListView>
</Variant>
<Variant name="Complex items">
<ListView
    selectionMode="multiple"
    maxWidth="size-6000"
    aria-label="ListView example with complex items"
    onAction={(key) => alert(`Triggering action on item ${key}`)}
>
  <Item key="1" textValue="Utilities" hasChildItems>
    <Folder/>
    <Text>Utilities</Text>
    <Text slot="description">16 items</Text>
    <ActionMenu>
      <Item key="edit" textValue="Edit">
        <Edit/>
        <Text>Edit</Text>
      </Item>
      <Item key="delete" textValue="Delete">
        <Delete/>
        <Text>Delete</Text>
      </Item>
    </ActionMenu>
  </Item>
  <Item key="2" textValue="Glasses Dog">
    <Image
        src="https://random.dog/1a0535a6-ca89-4059-9b3a-04a554c0587b.jpg"
        alt="Shiba Inu with glasses"
    />
    <Text>Glasses Dog</Text>
    <Text slot="description">JPG</Text>
    <ActionMenu>
      <Item key="edit" textValue="Edit">
        <Edit/>
        <Text>Edit</Text>
      </Item>
      <Item key="delete" textValue="Delete">
        <Delete/>
        <Text>Delete</Text>
      </Item>
    </ActionMenu>
  </Item>
  <Item key="3" textValue="readme">
    <File/>
    <Text>readme.txt</Text>
    <Text slot="description">TXT</Text>
    <ActionMenu>
      <Item key="edit" textValue="Edit">
        <Edit/>
        <Text>Edit</Text>
      </Item>
      <Item key="delete" textValue="Delete">
        <Delete/>
        <Text>Delete</Text>
      </Item>
    </ActionMenu>
  </Item>
  <Item key="4" textValue="Onboarding">
    <File/>
    <Text>Onboarding</Text>
    <Text slot="description">PDF</Text>
    <ActionMenu>
      <Item key="edit" textValue="Edit">
        <Edit/>
        <Text>Edit</Text>
      </Item>
      <Item key="delete" textValue="Delete">
        <Delete/>
        <Text>Delete</Text>
      </Item>
    </ActionMenu>
  </Item>
</ListView>
</Variant>
<Variant name="Complex items1">
<ListView
    selectionMode="multiple"
    maxWidth="size-6000"
    aria-label="ListView example with complex items"
    onAction={(key) =>
        alert(`Triggering action on item ${key}`)}
>
  <Item key="1" textValue="Utilities" hasChildItems>
    <Folder/>
    <Text>Utilities</Text>
    <Text slot="description">16 items</Text>
    <ActionMenu>
      <Item key="edit" textValue="Edit">
        <Edit/>
        <Text>Edit</Text>
      </Item>
      <Item key="delete" textValue="Delete">
        <Delete/>
        <Text>Delete</Text>
      </Item>
    </ActionMenu>
  </Item>
  <Item key="2" textValue="Glasses Dog">
    <Image
        src="https://random.dog/1a0535a6-ca89-4059-9b3a-04a554c0587b.jpg"
        alt="Shiba Inu with glasses"
    />
    <Text>Glasses Dog</Text>
    <Text slot="description">JPG</Text>
    <ActionMenu>
      <Item key="edit" textValue="Edit">
        <Edit/>
        <Text>Edit</Text>
      </Item>
      <Item key="delete" textValue="Delete">
        <Delete/>
        <Text>Delete</Text>
      </Item>
    </ActionMenu>
  </Item>
  <Item key="3" textValue="readme">
    <File/>
    <Text>readme.txt</Text>
    <Text slot="description">TXT</Text>
    <ActionMenu>
      <Item key="edit" textValue="Edit">
        <Edit/>
        <Text>Edit</Text>
      </Item>
      <Item key="delete" textValue="Delete">
        <Delete/>
        <Text>Delete</Text>
      </Item>
    </ActionMenu>
  </Item>
  <Item key="4" textValue="Onboarding">
    <File/>
    <Text>Onboarding</Text>
    <Text slot="description">PDF</Text>
    <ActionMenu>
      <Item key="edit" textValue="Edit">
        <Edit/>
        <Text>Edit</Text>
      </Item>
      <Item key="delete" textValue="Delete">
        <Delete/>
        <Text>Delete</Text>
      </Item>
    </ActionMenu>
  </Item>
</ListView>
</Variant>
<Variant name="Complex items12">
<ListView
    selectionMode="multiple"
    maxWidth="size-6000"
    aria-label="ListView example with complex items"
    onAction={(key) =>
        alert(
            `Triggering action on item ${key}`
        )}
>
  <Item
      key="1"
      textValue="Utilities"
      hasChildItems
  >
    <Folder/>
    <Text>
      Utilities
    </Text>
    <Text slot="description">
      16 items
    </Text>
    <ActionMenu>
      <Item
          key="edit"
          textValue="Edit"
      >
        <Edit/>
        <Text>
          Edit
        </Text>
      </Item>
      <Item
          key="delete"
          textValue="Delete"
      >
        <Delete/>
        <Text>
          Delete
        </Text>
      </Item>
    </ActionMenu>
  </Item>
  <Item
      key="2"
      textValue="Glasses Dog"
  >
    <Image
        src="https://random.dog/1a0535a6-ca89-4059-9b3a-04a554c0587b.jpg"
        alt="Shiba Inu with glasses"
    />
    <Text>
      Glasses Dog
    </Text>
    <Text slot="description">
      JPG
    </Text>
    <ActionMenu>
      <Item
          key="edit"
          textValue="Edit"
      >
        <Edit/>
        <Text>
          Edit
        </Text>
      </Item>
      <Item
          key="delete"
          textValue="Delete"
      >
        <Delete/>
        <Text>
          Delete
        </Text>
      </Item>
    </ActionMenu>
  </Item>
  <Item
      key="3"
      textValue="readme"
  >
    <File/>
    <Text>
      readme.txt
    </Text>
    <Text slot="description">
      TXT
    </Text>
    <ActionMenu>
      <Item
          key="edit"
          textValue="Edit"
      >
        <Edit/>
        <Text>
          Edit
        </Text>
      </Item>
      <Item
          key="delete"
          textValue="Delete"
      >
        <Delete/>
        <Text>
          Delete
        </Text>
      </Item>
    </ActionMenu>
  </Item>
  <Item
      key="4"
      textValue="Onboarding"
  >
    <File/>
    <Text>
      Onboarding
    </Text>
    <Text slot="description">
      PDF
    </Text>
    <ActionMenu>
      <Item
          key="edit"
          textValue="Edit"
      >
        <Edit/>
        <Text>
          Edit
        </Text>
      </Item>
      <Item
          key="delete"
          textValue="Delete"
      >
        <Delete/>
        <Text>
          Delete
        </Text>
      </Item>
    </ActionMenu>
  </Item>
</ListView>
</Variant>
<Variant name="Selection">
<ListView
    maxWidth="size-6000"
    selectionMode="multiple"
    defaultSelectedKeys={['Charizard', 'Venusaur']}
    aria-label="ListView multiple selection example"
>
  <Item key="Charizard">
    Charizard
  </Item>
  <Item key="Blastoise">
    Blastoise
  </Item>
  <Item key="Venusaur">
    Venusaur
  </Item>
  <Item key="Pikachu">
    Pikachu
  </Item>
</ListView>
</Variant>
<Variant name="Selection1">
<ListView
    maxWidth="size-6000"
    selectionMode="multiple"
    defaultSelectedKeys={['Charizard', 'Venusaur']}
    aria-label="ListView multiple selection example"
>
  <Item key="Charizard">
    Charizard
  </Item>
  <Item key="Blastoise">
    Blastoise
  </Item>
  <Item key="Venusaur">
    Venusaur
  </Item>
  <Item key="Pikachu">
    Pikachu
  </Item>
</ListView>
</Variant>
<Variant name="Selection12">
<ListView
    maxWidth="size-6000"
    selectionMode="multiple"
    defaultSelectedKeys={[
        'Charizard',
        'Venusaur'
    ]}
    aria-label="ListView multiple selection example"
>
  <Item key="Charizard">
    Charizard
  </Item>
  <Item key="Blastoise">
    Blastoise
  </Item>
  <Item key="Venusaur">
    Venusaur
  </Item>
  <Item key="Pikachu">
    Pikachu
  </Item>
</ListView>
</Variant>
<Variant name="Controlled selection">
<ListView
    maxWidth="size-6000"
    aria-label="ListView with controlled selection"
    selectionMode="multiple"
    {...props}
    items={rows}
    selectedKeys={selectedKeys}
    onSelectionChange={setSelectedKeys}
>
      {(item) => (
          <Item>
          {item.name}
        </Item>
      )}
    </ListView>
</Variant>
<Variant name="Controlled selection1">
<ListView
    maxWidth="size-6000"
    aria-label="ListView with controlled selection"
    selectionMode="multiple"
    {...props}
    items={rows}
    selectedKeys={selectedKeys}
    onSelectionChange={setSelectedKeys}
>
      {(item) => (
          <Item>
          {item.name}
        </Item>
      )}
    </ListView>
</Variant>
<Variant name="Controlled selection12">
<ListView
    maxWidth="size-6000"
    aria-label="ListView with controlled selection"
    selectionMode="multiple"
    {...props}
    items={rows}
    selectedKeys={selectedKeys}
    onSelectionChange={setSelectedKeys}
>
      {(item) => (
          <Item>
          {item.name}
        </Item>
      )}
    </ListView>
</Variant>
<Variant name="Single selection">
<PokemonList
    selectionMode="single"
    selectionStyle="highlight"
    aria-label="ListView with single selection"
/>
</Variant>
<Variant name="Single selection1">
<PokemonList
    selectionMode="single"
    selectionStyle="highlight"
    aria-label="ListView with single selection"
/>
</Variant>
<Variant name="Single selection12">
<PokemonList
    selectionMode="single"
    selectionStyle="highlight"
    aria-label="ListView with single selection"
/>
</Variant>
<Variant name="Disallow empty selection">
<PokemonList
    disallowEmptySelection
    aria-label="ListView with empty selection disallowed"
/>
</Variant>
<Variant name="Disallow empty selection1">
<PokemonList
    disallowEmptySelection
    aria-label="ListView with empty selection disallowed"
/>
</Variant>
<Variant name="Disallow empty selection12">
<PokemonList
    disallowEmptySelection
    aria-label="ListView with empty selection disallowed"
/>
</Variant>
<Variant name="Disabled rows">
<PokemonList disabledKeys={[3]} aria-label="ListView with disabled rows"/>
</Variant>
<Variant name="Disabled rows1">
<PokemonList
    disabledKeys={[3]}
    aria-label="ListView with disabled rows"
/>
</Variant>
<Variant name="Disabled rows12">
<PokemonList
    disabledKeys={[3]}
    aria-label="ListView with disabled rows"
/>
</Variant>
<Variant name="Disabled rows123">
<Flex wrap gap="size-300">
  <PokemonList
      disabledKeys={[3]}
      defaultSelectedKeys={[]}
      disabledBehavior="all"
      aria-label="ListView with all interaction disabled for disabled rows"
      width="size-2400"
      onAction={key => alert(`Opening item ${key}...`)}
  />
  <PokemonList
      disabledKeys={[3]}
      defaultSelectedKeys={[]}
      disabledBehavior="selection"
      aria-label="ListView with selection disabled for disabled rows"
      width="size-2400"
      onAction={key => alert(`Opening item ${key}...`)}
  />
</Flex>
</Variant>
<Variant name="Disabled rows1234">
<Flex wrap gap="size-300">
  <PokemonList
      disabledKeys={[3]}
      defaultSelectedKeys={[]}
      disabledBehavior="all"
      aria-label="ListView with all interaction disabled for disabled rows"
      width="size-2400"
      onAction={(key) => alert(`Opening item ${key}...`)}
  />
  <PokemonList
      disabledKeys={[3]}
      defaultSelectedKeys={[]}
      disabledBehavior="selection"
      aria-label="ListView with selection disabled for disabled rows"
      width="size-2400"
      onAction={(key) => alert(`Opening item ${key}...`)}
  />
</Flex>
</Variant>
<Variant name="Disabled rows12345">
<Flex
    wrap
    gap="size-300"
>
  <PokemonList
      disabledKeys={[3]}
      defaultSelectedKeys={[]}
      disabledBehavior="all"
      aria-label="ListView with all interaction disabled for disabled rows"
      width="size-2400"
      onAction={(key) =>
          alert(
              `Opening item ${key}...`
          )}
  />
  <PokemonList
      disabledKeys={[3]}
      defaultSelectedKeys={[]}
      disabledBehavior="selection"
      aria-label="ListView with selection disabled for disabled rows"
      width="size-2400"
      onAction={(key) =>
          alert(
              `Opening item ${key}...`
          )}
  />
</Flex>
</Variant>
<Variant name="Highlight selection">
<PokemonList
    selectionStyle="highlight"
    aria-label="Highlight selection ListView"
/>
</Variant>
<Variant name="Highlight selection1">
<PokemonList
    selectionStyle="highlight"
    aria-label="Highlight selection ListView"
/>
</Variant>
<Variant name="Highlight selection12">
<PokemonList
    selectionStyle="highlight"
    aria-label="Highlight selection ListView"
/>
</Variant>
<Variant name="Row actions">
<Flex wrap gap="size-300">
  <PokemonList
      onAction={(key) => alert(`Opening item ${key}...`)}
      aria-label="Checkbox selection ListView with row actions"
      width="size-2400"
  />
  <PokemonList
      selectionStyle="highlight"
      onAction={(key) => alert(`Opening item ${key}...`)}
      aria-label="Highlight selection ListView with row actions"
      width="size-2400"
  />
</Flex>
</Variant>
<Variant name="Row actions1">
<Flex wrap gap="size-300">
  <PokemonList
      onAction={(key) => alert(`Opening item ${key}...`)}
      aria-label="Checkbox selection ListView with row actions"
      width="size-2400"
  />
  <PokemonList
      selectionStyle="highlight"
      onAction={(key) => alert(`Opening item ${key}...`)}
      aria-label="Highlight selection ListView with row actions"
      width="size-2400"
  />
</Flex>
</Variant>
<Variant name="Row actions12">
<Flex
    wrap
    gap="size-300"
>
  <PokemonList
      onAction={(key) =>
          alert(
              `Opening item ${key}...`
          )}
      aria-label="Checkbox selection ListView with row actions"
      width="size-2400"
  />
  <PokemonList
      selectionStyle="highlight"
      onAction={(key) =>
          alert(
              `Opening item ${key}...`
          )}
      aria-label="Highlight selection ListView with row actions"
      width="size-2400"
  />
</Flex>
</Variant>
<Variant name="Links">
<ListView aria-label="Links" selectionMode="multiple">
  <Item href="https://adobe.com/" target="_blank">Adobe</Item>
  <Item href="https://apple.com/" target="_blank">Apple</Item>
  <Item href="https://google.com/" target="_blank">Google</Item>
  <Item href="https://microsoft.com/" target="_blank">Microsoft</Item>
</ListView>
</Variant>
<Variant name="Links1">
<ListView aria-label="Links" selectionMode="multiple">
  <Item href="https://adobe.com/" target="_blank">
    Adobe
  </Item>
  <Item href="https://apple.com/" target="_blank">
    Apple
  </Item>
  <Item href="https://google.com/" target="_blank">
    Google
  </Item>
  <Item href="https://microsoft.com/" target="_blank">
    Microsoft
  </Item>
</ListView>
</Variant>
<Variant name="Links12">
<ListView
    aria-label="Links"
    selectionMode="multiple"
>
  <Item
      href="https://adobe.com/"
      target="_blank"
  >
    Adobe
  </Item>
  <Item
      href="https://apple.com/"
      target="_blank"
  >
    Apple
  </Item>
  <Item
      href="https://google.com/"
      target="_blank"
  >
    Google
  </Item>
  <Item
      href="https://microsoft.com/"
      target="_blank"
  >
    Microsoft
  </Item>
</ListView>
</Variant>
<Variant name="Draggable ListView and droppable ListView">
<ListView
    aria-label="Draggable ListView in drag into list example"
    selectionMode="multiple"
    width="size-3600"
    height="size-2400"
    dragAndDropHooks={dragAndDropHooks} items={list.items}
>
      {(item) => (
          <Item textValue={item.name}>
          <Text>{item.name}</Text>
        </Item>
      )}
    </ListView>
</Variant>
<Variant name="Draggable ListView and droppable ListView1">
<ListView
    aria-label="Draggable ListView in drag into list example"
    selectionMode="multiple"
    width="size-3600"
    height="size-2400"
    dragAndDropHooks={dragAndDropHooks} items={list.items}
>
      {(item) => (
          <Item textValue={item.name}>
          <Text>{item.name}</Text>
        </Item>
      )}
    </ListView>
</Variant>
<Variant name="Draggable ListView and droppable ListView12">
<ListView
    aria-label="Draggable ListView in drag into list example"
    selectionMode="multiple"
    width="size-3600"
    height="size-2400"
    dragAndDropHooks={dragAndDropHooks} items={list.items}
>
      {(item) => (
          <Item
              textValue={item
                  .name}
          >
          <Text>
            {item.name}
          </Text>
        </Item>
      )}
    </ListView>
</Variant>
<Variant name="Draggable ListView and droppable ListView123">
<DragIntoList/>
</Variant>
<Variant name="Draggable ListView and droppable ListView1234">
<DragIntoList/>
</Variant>
<Variant name="Draggable ListView and droppable ListView12345">
<DragIntoList/>
</Variant>
<Variant name="Handling folder drops">
<ListView
    aria-label="Draggable ListView in drag onto folder example"
    selectionMode="multiple"
    width="size-3600"
    height="size-3600"
    dragAndDropHooks={dragAndDropHooks}
    items={list.items}
>
      {(item) => (
          <Item textValue={item.name}>
          {item.type === 'folder' && <Folder/>}
              <Text>{item.name}</Text>
        </Item>
      )}
    </ListView>
</Variant>
<Variant name="Handling folder drops1">
<ListView
    aria-label="Draggable ListView in drag onto folder example"
    selectionMode="multiple"
    width="size-3600"
    height="size-3600"
    dragAndDropHooks={dragAndDropHooks}
    items={list.items}
>
      {(item) => (
          <Item textValue={item.name}>
          {item.type === 'folder' && <Folder/>}
              <Text>{item.name}</Text>
        </Item>
      )}
    </ListView>
</Variant>
<Variant name="Handling folder drops12">
<ListView
    aria-label="Draggable ListView in drag onto folder example"
    selectionMode="multiple"
    width="size-3600"
    height="size-3600"
    dragAndDropHooks={dragAndDropHooks}
    items={list.items}
>
      {(item) => (
          <Item
              textValue={item
                  .name}
          >
          {item.type ===
              'folder' &&
              <Folder/>}
              <Text>
            {item.name}
          </Text>
        </Item>
      )}
    </ListView>
</Variant>
<Variant name="Handling folder drops123">
<DragIntoListFolder/>
</Variant>
<Variant name="Handling folder drops1234">
<DragIntoListFolder/>
</Variant>
<Variant name="Handling folder drops12345">
<DragIntoListFolder/>
</Variant>
<Variant name="Reorderable">
<ListView
    aria-label="Reorderable ListView"
    selectionMode="multiple"
    width="size-3600"
    height="size-3600"
    items={list.items}
    dragAndDropHooks={dragAndDropHooks}>
      {item => (
          <Item textValue={item.name}>
          {item.type === 'folder' && <Folder/>}
              <Text>{item.name}</Text>
        </Item>
      )}
    </ListView>
</Variant>
<Variant name="Reorderable1">
<ListView
    aria-label="Reorderable ListView"
    selectionMode="multiple"
    width="size-3600"
    height="size-3600"
    items={list.items}
    dragAndDropHooks={dragAndDropHooks}
>
      {(item) => (
          <Item textValue={item.name}>
          {item.type === 'folder' && <Folder/>}
              <Text>{item.name}</Text>
        </Item>
      )}
    </ListView>
</Variant>
<Variant name="Reorderable12">
<ListView
    aria-label="Reorderable ListView"
    selectionMode="multiple"
    width="size-3600"
    height="size-3600"
    items={list.items}
    dragAndDropHooks={dragAndDropHooks}
>
      {(item) => (
          <Item
              textValue={item
                  .name}
          >
          {item.type ===
              'folder' &&
              <Folder/>}
              <Text>
            {item.name}
          </Text>
        </Item>
      )}
    </ListView>
</Variant>
<Variant name="Reorderable123">
<ReorderableList/>
</Variant>
<Variant name="Reorderable1234">
<ReorderableList/>
</Variant>
<Variant name="Reorderable12345">
<ReorderableList/>
</Variant>
<Variant name="Bi-directional dragging">
<ListView
    aria-label={props['aria-label']}
    selectionMode="multiple"
    width="size-3600"
    height="size-3600"
    items={list.items}
    dragAndDropHooks={dragAndDropHooks}
>
      {(item) => (
          <Item textValue={item.name}>
          {item.type === 'folder' && <Folder/>}
              <Text>{item.name}</Text>
        </Item>
      )}
    </ListView>
</Variant>
<Variant name="Bi-directional dragging1">
<ListView
    aria-label={props['aria-label']}
    selectionMode="multiple"
    width="size-3600"
    height="size-3600"
    items={list.items}
    dragAndDropHooks={dragAndDropHooks}
>
      {(item) => (
          <Item textValue={item.name}>
          {item.type === 'folder' && <Folder/>}
              <Text>{item.name}</Text>
        </Item>
      )}
    </ListView>
</Variant>
<Variant name="Bi-directional dragging12">
<ListView
    aria-label={props[
        'aria-label'
        ]}
    selectionMode="multiple"
    width="size-3600"
    height="size-3600"
    items={list.items}
    dragAndDropHooks={dragAndDropHooks}
>
      {(item) => (
          <Item
              textValue={item
                  .name}
          >
          {item.type ===
              'folder' &&
              <Folder/>}
              <Text>
            {item.name}
          </Text>
        </Item>
      )}
    </ListView>
</Variant>
<Variant name="Bi-directional dragging123">
<DragBetweenListsExample/>
</Variant>
<Variant name="Bi-directional dragging1234">
<DragBetweenListsExample/>
</Variant>
<Variant name="Bi-directional dragging12345">
<DragBetweenListsExample/>
</Variant>
<Variant name="Overriding default drop operation">
<ListView
    aria-label="Draggable ListView in default copy operation example"
    selectionMode="multiple"
    width="size-3600"
    height="size-2400"
    dragAndDropHooks={dragAndDropHooks}
    items={list.items}
>
      {(item) => (
          <Item textValue={item.name}>
          <Text>{item.name}</Text>
        </Item>
      )}
    </ListView>
</Variant>
<Variant name="Overriding default drop operation1">
<ListView
    aria-label="Draggable ListView in default copy operation example"
    selectionMode="multiple"
    width="size-3600"
    height="size-2400"
    dragAndDropHooks={dragAndDropHooks}
    items={list.items}
>
      {(item) => (
          <Item textValue={item.name}>
          <Text>{item.name}</Text>
        </Item>
      )}
    </ListView>
</Variant>
<Variant name="Overriding default drop operation12">
<ListView
    aria-label="Draggable ListView in default copy operation example"
    selectionMode="multiple"
    width="size-3600"
    height="size-2400"
    dragAndDropHooks={dragAndDropHooks}
    items={list.items}
>
      {(item) => (
          <Item
              textValue={item
                  .name}
          >
          <Text>
            {item.name}
          </Text>
        </Item>
      )}
    </ListView>
</Variant>
<Variant name="Overriding default drop operation123">
<DragIntoListDefaultCopy/>
</Variant>
<Variant name="Overriding default drop operation1234">
<DragIntoListDefaultCopy/>
</Variant>
<Variant name="Overriding default drop operation12345">
<DragIntoListDefaultCopy/>
</Variant>
<Variant name="Custom drag previews">
<View
    backgroundColor="gray-50"
    padding="size-100"
    borderRadius="medium"
    borderWidth="thin"
    borderColor="blue-500"
>
    <strong>Custom Preview</strong>
    <div>Keys: [{[...keys].join(', ')}]</div>
<div>Dragged: {draggedKey}</div>
</View>
</Variant>
<Variant name="Custom drag previews1">
<View
    backgroundColor="gray-50"
    padding="size-100"
    borderRadius="medium"
    borderWidth="thin"
    borderColor="blue-500"
>
    <strong>Custom Preview</strong>
    <div>Keys: [{[...keys].join(', ')}]</div>
<div>Dragged: {draggedKey}</div>
</View>
</Variant>
<Variant name="Custom drag previews12">
<View
    backgroundColor="gray-50"
    padding="size-100"
    borderRadius="medium"
    borderWidth="thin"
    borderColor="blue-500"
>
    <strong>
    Custom Preview
    </strong>
    <div>
    Keys: [{[
        ...keys
    ].join(', ')}]
        </div>
<div>
          Dragged:{' '}
    {draggedKey}
        </div>
</View>
</Variant>
<Variant name="Custom drag previews123">
<CustomDragPreviewExample/>
</Variant>
<Variant name="Custom drag previews1234">
<CustomDragPreviewExample/>
</Variant>
<Variant name="Custom drag previews12345">
<CustomDragPreviewExample/>
</Variant>
<Variant name="Quiet">
<ListView
    selectionMode="multiple"
    aria-label="Quiet ListView example"
    width="size-3000"
    {...props}
>
      <Item>Adobe AfterEffects</Item>
      <Item>Adobe Dreamweaver</Item>
      <Item>Adobe Acrobat</Item>
    </ListView>
</Variant>
<Variant name="Quiet1">
<ListView
    selectionMode="multiple"
    aria-label="Quiet ListView example"
    width="size-3000"
    {...props}
>
      <Item>Adobe AfterEffects</Item>
      <Item>Adobe Dreamweaver</Item>
      <Item>Adobe Acrobat</Item>
    </ListView>
</Variant>
<Variant name="Quiet12">
<ListView
    selectionMode="multiple"
    aria-label="Quiet ListView example"
    width="size-3000"
    {...props}
>
      <Item>
        Adobe
        AfterEffects
      </Item>
      <Item>
        Adobe Dreamweaver
      </Item>
      <Item>
        Adobe Acrobat
      </Item>
    </ListView>
</Variant>
<Variant name="Density">
<Flex wrap gap="size-300">
    <ListExample density="compact" aria-label="Compact ListView example"/>
    <ListExample density="spacious" aria-label="Spacious ListView example"/>
    </Flex>
</Variant>
<Variant name="Density1">
<Flex wrap gap="size-300">
    <ListExample
        density="compact"
        aria-label="Compact ListView example"
    />
    <ListExample
        density="spacious"
        aria-label="Spacious ListView example"
    />
    </Flex>
</Variant>
<Variant name="Density12">
<Flex
    wrap
    gap="size-300"
>
    <ListExample
        density="compact"
        aria-label="Compact ListView example"
    />
    <ListExample
        density="spacious"
        aria-label="Spacious ListView example"
    />
    </Flex>
</Variant>
<Variant name="Overflow mode">
<ListExample
    overflowMode="wrap"
    aria-label="Text wrapping ListView example"
    width="size-2000"
/>
</Variant>
<Variant name="Overflow mode1">
<ListExample
    overflowMode="wrap"
    aria-label="Text wrapping ListView example"
    width="size-2000"
/>
</Variant>
<Variant name="Overflow mode12">
<ListExample
    overflowMode="wrap"
    aria-label="Text wrapping ListView example"
    width="size-2000"
/>
</Variant>
<Variant name="Empty state">
<IllustratedMessage>
    <NotFound/>
    <Heading>No results</Heading>
    <Content>No results found</Content>
    </IllustratedMessage>
</Variant>
<Variant name="Empty state1">
<IllustratedMessage>
    <NotFound/>
    <Heading>No results</Heading>
    <Content>No results found</Content>
    </IllustratedMessage>
</Variant>
<Variant name="Empty state12">
<IllustratedMessage>
    <NotFound/>
    <Heading>
    No results
    </Heading>
    <Content>
    No results found
    </Content>
    </IllustratedMessage>
</Variant>
</Component>
<Component name="Menu" docURL="https://react-spectrum.adobe.com/react-spectrum/Menu.html">
<Variant name="Example">
<MenuTrigger>
  <ActionButton>
    Edit
  </ActionButton>
  <Menu onAction={(key) => alert(key)}>
    <Item key="cut">Cut</Item>
    <Item key="copy">Copy</Item>
    <Item key="paste">Paste</Item>
    <Item key="replace">Replace</Item>
  </Menu>
</MenuTrigger>
</Variant>
<Variant name="Example1">
<MenuTrigger>
  <ActionButton>
    Edit
  </ActionButton>
  <Menu onAction={(key) => alert(key)}>
    <Item key="cut">Cut</Item>
    <Item key="copy">Copy</Item>
    <Item key="paste">Paste</Item>
    <Item key="replace">Replace</Item>
  </Menu>
</MenuTrigger>
</Variant>
<Variant name="Example12">
<MenuTrigger>
  <ActionButton>
    Edit
  </ActionButton>
  <Menu
      onAction={(key) =>
          alert(key)}
  >
    <Item key="cut">
      Cut
    </Item>
    <Item key="copy">
      Copy
    </Item>
    <Item key="paste">
      Paste
    </Item>
    <Item key="replace">
      Replace
    </Item>
  </Menu>
</MenuTrigger>
</Variant>
<Variant name="Content">
<MenuTrigger>
        <ActionButton>
        Edit
        </ActionButton>
        <Menu items={menuItems}>
        {item => <Item key={item.name}>{item.name}</Item>}
      </Menu>
    </MenuTrigger>
</Variant>
<Variant name="Content1">
<MenuTrigger>
    <ActionButton>
    Edit
    </ActionButton>
    <Menu items={menuItems}>
        {item => <Item key={item.name}>{item.name}</Item>}
      </Menu>
</MenuTrigger>
</Variant>
<Variant name="Content12">
<MenuTrigger>
    <ActionButton>
    Edit
    </ActionButton>
    <Menu
        items={menuItems}
    >
        {(item) => (
            <Item
                key={item
                    .name}
            >
            {item.name}
          </Item>
        )}
      </Menu>
</MenuTrigger>
</Variant>
<Variant name="Events">
<>
    <MenuTrigger>
    <ActionButton>
    Edit
    </ActionButton>
    <Menu onAction={setAction}>
          <Item key="cut">Cut</Item>
          <Item key="copy">Copy</Item>
          <Item key="paste">Paste</Item>
        </Menu>
</MenuTrigger>
<p>Action: {action}</p>
</>
</Variant>
<Variant name="Events1">
<>
    <MenuTrigger>
    <ActionButton>
    Edit
    </ActionButton>
    <Menu onAction={setAction}>
          <Item key="cut">Cut</Item>
          <Item key="copy">Copy</Item>
          <Item key="paste">Paste</Item>
        </Menu>
</MenuTrigger>
<p>Action: {action}</p>
</>
</Variant>
<Variant name="Events12">
<>
    <MenuTrigger>
    <ActionButton>
    Edit
    </ActionButton>
    <Menu
        onAction={setAction}
    >
          <Item key="cut">
            Cut
          </Item>
          <Item key="copy">
            Copy
          </Item>
          <Item key="paste">
            Paste
          </Item>
        </Menu>
</MenuTrigger>
<p>
        Action: {action}
      </p>
</>
</Variant>
<Variant name="Selection">
<>
    <MenuTrigger>
    <ActionButton>
    Align
    </ActionButton>
    <Menu
        selectionMode="single"
        selectedKeys={selected}
        onSelectionChange={setSelected}
    >
          <Item key="left">Left</Item>
          <Item key="middle">Middle</Item>
          <Item key="right">Right</Item>
        </Menu>
</MenuTrigger>
<p>Current selection (controlled): {[...selected]}</p>
</>
</Variant>
<Variant name="Selection1">
<>
    <MenuTrigger>
    <ActionButton>
    Align
    </ActionButton>
    <Menu
        selectionMode="single"
        selectedKeys={selected}
        onSelectionChange={setSelected}
    >
          <Item key="left">Left</Item>
          <Item key="middle">Middle</Item>
          <Item key="right">Right</Item>
        </Menu>
</MenuTrigger>
<p>Current selection (controlled): {[...selected]}</p>
</>
</Variant>
<Variant name="Selection12">
<>
    <MenuTrigger>
    <ActionButton>
    Align
    </ActionButton>
    <Menu
        selectionMode="single"
        selectedKeys={selected}
        onSelectionChange={setSelected}
    >
          <Item key="left">
            Left
          </Item>
          <Item key="middle">
            Middle
          </Item>
          <Item key="right">
            Right
          </Item>
        </Menu>
</MenuTrigger>
<p>
        Current selection
        (controlled):
    {' '}
    {[...selected]}
      </p>
</>
</Variant>
<Variant name="Selection123">
<>
    <MenuTrigger closeOnSelect={false}>
        <ActionButton>
          Show
        </ActionButton>
        <Menu
            selectionMode="multiple"
            selectedKeys={selected}
            onSelectionChange={setSelected}
        >
          <Item key="Sidebar">Sidebar</Item>
          <Item key="Searchbar">Searchbar</Item>
          <Item key="Tools">Tools</Item>
          <Item key="Console">Console</Item>
        </Menu>
      </MenuTrigger>
<p>
        Current selection (controlled):{' '}
    {selected === 'all' ? 'all' : [...selected].join(', ')}
      </p>
</>
</Variant>
<Variant name="Selection1234">
<>
    <MenuTrigger closeOnSelect={false}>
        <ActionButton>
          Show
        </ActionButton>
        <Menu
            selectionMode="multiple"
            selectedKeys={selected}
            onSelectionChange={setSelected}
        >
          <Item key="Sidebar">Sidebar</Item>
          <Item key="Searchbar">Searchbar</Item>
          <Item key="Tools">Tools</Item>
          <Item key="Console">Console</Item>
        </Menu>
      </MenuTrigger>
<p>
        Current selection (controlled): {selected === 'all'
    ? 'all'
    : [...selected].join(', ')}
      </p>
</>
</Variant>
<Variant name="Selection12345">
<>
    <MenuTrigger
        closeOnSelect={false}
    >
        <ActionButton>
          Show
        </ActionButton>
        <Menu
            selectionMode="multiple"
            selectedKeys={selected}
            onSelectionChange={setSelected}
        >
          <Item key="Sidebar">
            Sidebar
          </Item>
          <Item key="Searchbar">
            Searchbar
          </Item>
          <Item key="Tools">
            Tools
          </Item>
          <Item key="Console">
            Console
          </Item>
        </Menu>
      </MenuTrigger>
<p>
        Current selection
        (controlled):
    {' '}
    {selected ===
    'all'
        ? 'all'
        : [...selected]
            .join(', ')}
      </p>
</>
</Variant>
<Variant name="Links">
<MenuTrigger>
  <ActionButton>Links</ActionButton>
  <Menu>
    <Item href="https://adobe.com/" target="_blank">Adobe</Item>
    <Item href="https://apple.com/" target="_blank">Apple</Item>
    <Item href="https://google.com/" target="_blank">Google</Item>
    <Item href="https://microsoft.com/" target="_blank">Microsoft</Item>
  </Menu>
</MenuTrigger>
</Variant>
<Variant name="Links1">
<MenuTrigger>
  <ActionButton>Links</ActionButton>
  <Menu>
    <Item href="https://adobe.com/" target="_blank">
      Adobe
    </Item>
    <Item href="https://apple.com/" target="_blank">
      Apple
    </Item>
    <Item href="https://google.com/" target="_blank">
      Google
    </Item>
    <Item href="https://microsoft.com/" target="_blank">
      Microsoft
    </Item>
  </Menu>
</MenuTrigger>
</Variant>
<Variant name="Links12">
<MenuTrigger>
  <ActionButton>
    Links
  </ActionButton>
  <Menu>
    <Item
        href="https://adobe.com/"
        target="_blank"
    >
      Adobe
    </Item>
    <Item
        href="https://apple.com/"
        target="_blank"
    >
      Apple
    </Item>
    <Item
        href="https://google.com/"
        target="_blank"
    >
      Google
    </Item>
    <Item
        href="https://microsoft.com/"
        target="_blank"
    >
      Microsoft
    </Item>
  </Menu>
</MenuTrigger>
</Variant>
<Variant name="Static Items">
<MenuTrigger>
    <ActionButton>
    Edit
    </ActionButton>
    <Menu
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={setSelected}
    >
        <Section title="Styles">
          <Item key="bold">Bold</Item>
          <Item key="underline">Underline</Item>
        </Section>
        <Section title="Align">
          <Item key="left">Left</Item>
          <Item key="middle">Middle</Item>
          <Item key="right">Right</Item>
        </Section>
      </Menu>
</MenuTrigger>
</Variant>
<Variant name="Static Items1">
<MenuTrigger>
    <ActionButton>
    Edit
    </ActionButton>
    <Menu
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={setSelected}
    >
        <Section title="Styles">
          <Item key="bold">Bold</Item>
          <Item key="underline">Underline</Item>
        </Section>
        <Section title="Align">
          <Item key="left">Left</Item>
          <Item key="middle">Middle</Item>
          <Item key="right">Right</Item>
        </Section>
      </Menu>
</MenuTrigger>
</Variant>
<Variant name="Static Items12">
<MenuTrigger>
    <ActionButton>
    Edit
    </ActionButton>
    <Menu
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={setSelected}
    >
        <Section title="Styles">
          <Item key="bold">
            Bold
          </Item>
          <Item key="underline">
            Underline
          </Item>
        </Section>
        <Section title="Align">
          <Item key="left">
            Left
          </Item>
          <Item key="middle">
            Middle
          </Item>
          <Item key="right">
            Right
          </Item>
        </Section>
      </Menu>
</MenuTrigger>
</Variant>
<Variant name="Dynamic Items">
<MenuTrigger>
    <ActionButton>
    Window
    </ActionButton>
    <Menu
        items={openWindows}
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={setSelected}>
        {item => (
            <Section items={item.children} title={item.name}>
            {item => <Item>{item.name}</Item>}
          </Section>
        )}
      </Menu>
</MenuTrigger>
</Variant>
<Variant name="Dynamic Items1">
<MenuTrigger>
    <ActionButton>
    Window
    </ActionButton>
    <Menu
        items={openWindows}
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={setSelected}
    >
        {(item) => (
            <Section items={item.children} title={item.name}>
            {(item) => <Item>{item.name}</Item>}
          </Section>
        )}
      </Menu>
</MenuTrigger>
</Variant>
<Variant name="Dynamic Items12">
<MenuTrigger>
    <ActionButton>
    Window
    </ActionButton>
    <Menu
        items={openWindows}
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={setSelected}
    >
        {(item) => (
            <Section
                items={item
                    .children}
                title={item
                    .name}
            >
            {(item) => (
                <Item>
                {item
                    .name}
              </Item>
            )}
          </Section>
        )}
      </Menu>
</MenuTrigger>
</Variant>
<Variant name="Complex Menu Items">
<MenuTrigger>
  <ActionButton>
    Edit
  </ActionButton>
  <Menu>
    <Item key="cut" textValue="cut">
      <Cut/>
      <Text>Cut</Text>
      <Keyboard>âX</Keyboard>
    </Item>
    <Item key="copy" textValue="copy">
      <Copy/>
      <Text>Copy</Text>
      <Keyboard>âC</Keyboard>
    </Item>
    <Item key="paste" textValue="paste">
      <Paste/>
      <Text>Paste</Text>
      <Keyboard>âV</Keyboard>
    </Item>
  </Menu>
</MenuTrigger>
</Variant>
<Variant name="Complex Menu Items1">
<MenuTrigger>
  <ActionButton>
    Edit
  </ActionButton>
  <Menu>
    <Item key="cut" textValue="cut">
      <Cut/>
      <Text>Cut</Text>
      <Keyboard>âX</Keyboard>
    </Item>
    <Item key="copy" textValue="copy">
      <Copy/>
      <Text>Copy</Text>
      <Keyboard>âC</Keyboard>
    </Item>
    <Item key="paste" textValue="paste">
      <Paste/>
      <Text>Paste</Text>
      <Keyboard>âV</Keyboard>
    </Item>
  </Menu>
</MenuTrigger>
</Variant>
<Variant name="Complex Menu Items12">
<MenuTrigger>
  <ActionButton>
    Edit
  </ActionButton>
  <Menu>
    <Item
        key="cut"
        textValue="cut"
    >
      <Cut/>
      <Text>Cut</Text>
      <Keyboard>
        âX
      </Keyboard>
    </Item>
    <Item
        key="copy"
        textValue="copy"
    >
      <Copy/>
      <Text>Copy</Text>
      <Keyboard>
        âC
      </Keyboard>
    </Item>
    <Item
        key="paste"
        textValue="paste"
    >
      <Paste/>
      <Text>
        Paste
      </Text>
      <Keyboard>
        âV
      </Keyboard>
    </Item>
  </Menu>
</MenuTrigger>
</Variant>
<Variant name="Unavailable Items beta">
<MenuTrigger>
  <ActionButton>Edit</ActionButton>
  <Menu>
    <Item key="undo">Undo</Item>
    <Item key="redo">Redo</Item>
    <ContextualHelpTrigger isUnavailable>
      <Item key="cut">Cut</Item>
      <Dialog>
        <Heading>Cut</Heading>
        <Content>Please select text for 'Cut' to be enabled.</Content>
      </Dialog>
    </ContextualHelpTrigger>
    <ContextualHelpTrigger isUnavailable>
      <Item key="copy">Copy</Item>
      <Dialog>
        <Heading>Copy</Heading>
        <Content>Please select text for 'Copy' to be enabled.</Content>
      </Dialog>
    </ContextualHelpTrigger>
    <ContextualHelpTrigger>
      <Item key="paste">Paste</Item>
      <Dialog>
        <Heading>Paste</Heading>
        <Content>You have nothing to 'Paste'.</Content>
      </Dialog>
    </ContextualHelpTrigger>
  </Menu>
</MenuTrigger>
</Variant>
<Variant name="Unavailable Items beta1">
<MenuTrigger>
  <ActionButton>Edit</ActionButton>
  <Menu>
    <Item key="undo">Undo</Item>
    <Item key="redo">Redo</Item>
    <ContextualHelpTrigger isUnavailable>
      <Item key="cut">Cut</Item>
      <Dialog>
        <Heading>Cut</Heading>
        <Content>
          Please select text for 'Cut' to be enabled.
        </Content>
      </Dialog>
    </ContextualHelpTrigger>
    <ContextualHelpTrigger isUnavailable>
      <Item key="copy">Copy</Item>
      <Dialog>
        <Heading>Copy</Heading>
        <Content>
          Please select text for 'Copy' to be enabled.
        </Content>
      </Dialog>
    </ContextualHelpTrigger>
    <ContextualHelpTrigger>
      <Item key="paste">Paste</Item>
      <Dialog>
        <Heading>Paste</Heading>
        <Content>You have nothing to 'Paste'.</Content>
      </Dialog>
    </ContextualHelpTrigger>
  </Menu>
</MenuTrigger>
</Variant>
<Variant name="Unavailable Items beta12">
<MenuTrigger>
  <ActionButton>
    Edit
  </ActionButton>
  <Menu>
    <Item key="undo">
      Undo
    </Item>
    <Item key="redo">
      Redo
    </Item>
    <ContextualHelpTrigger
        isUnavailable
    >
      <Item key="cut">
        Cut
      </Item>
      <Dialog>
        <Heading>
          Cut
        </Heading>
        <Content>
          Please select
          text for
          'Cut' to be
          enabled.
        </Content>
      </Dialog>
    </ContextualHelpTrigger>
    <ContextualHelpTrigger
        isUnavailable
    >
      <Item key="copy">
        Copy
      </Item>
      <Dialog>
        <Heading>
          Copy
        </Heading>
        <Content>
          Please select
          text for
          'Copy' to be
          enabled.
        </Content>
      </Dialog>
    </ContextualHelpTrigger>
    <ContextualHelpTrigger>
      <Item key="paste">
        Paste
      </Item>
      <Dialog>
        <Heading>
          Paste
        </Heading>
        <Content>
          You have
          nothing to
          'Paste'.
        </Content>
      </Dialog>
    </ContextualHelpTrigger>
  </Menu>
</MenuTrigger>
</Variant>
<Variant name="Static">
<MenuTrigger>
  <ActionButton>Actions</ActionButton>
  <Menu onAction={(key) => alert(`Root menu ${key} action`)}>
    <Item key="Copy">Copy</Item>
    <Item key="Cut">Cut</Item>
    <Item key="Paste">Paste</Item>
    <SubmenuTrigger>
      <Item key="Share">Share</Item>
      <Menu onAction={(key) => alert(`Share menu ${key} action`)}>
        <Item key="Copy Link">Copy Link</Item>
        <SubmenuTrigger>
          <Item key="Email">Email</Item>
          <Menu onAction={(key) => alert(`Email menu ${key} action`)}>
            <Item key="Attachment">Email as Attachment</Item>
            <Item key="Link">Email as Link</Item>
          </Menu>
        </SubmenuTrigger>
        <Item key="SMS">SMS</Item>
      </Menu>
    </SubmenuTrigger>
    <Item key="Delete">Delete</Item>
  </Menu>
</MenuTrigger>
</Variant>
<Variant name="Static1">
<MenuTrigger>
  <ActionButton>Actions</ActionButton>
  <Menu
      onAction={(key) => alert(`Root menu ${key} action`)}
  >
    <Item key="Copy">Copy</Item>
    <Item key="Cut">Cut</Item>
    <Item key="Paste">Paste</Item>
    <SubmenuTrigger>
      <Item key="Share">Share</Item>
      <Menu
          onAction={(key) =>
              alert(`Share menu ${key} action`)}
      >
        <Item key="Copy Link">Copy Link</Item>
        <SubmenuTrigger>
          <Item key="Email">Email</Item>
          <Menu
              onAction={(key) =>
                  alert(`Email menu ${key} action`)}
          >
            <Item key="Attachment">
              Email as Attachment
            </Item>
            <Item key="Link">Email as Link</Item>
          </Menu>
        </SubmenuTrigger>
        <Item key="SMS">SMS</Item>
      </Menu>
    </SubmenuTrigger>
    <Item key="Delete">Delete</Item>
  </Menu>
</MenuTrigger>
</Variant>
<Variant name="Static12">
<MenuTrigger>
  <ActionButton>
    Actions
  </ActionButton>
  <Menu
      onAction={(key) =>
          alert(
              `Root menu ${key} action`
          )}
  >
    <Item key="Copy">
      Copy
    </Item>
    <Item key="Cut">
      Cut
    </Item>
    <Item key="Paste">
      Paste
    </Item>
    <SubmenuTrigger>
      <Item key="Share">
        Share
      </Item>
      <Menu
          onAction={(
              key
          ) =>
              alert(
                  `Share menu ${key} action`
              )}
      >
        <Item key="Copy Link">
          Copy Link
        </Item>
        <SubmenuTrigger>
          <Item key="Email">
            Email
          </Item>
          <Menu
              onAction={(
                  key
              ) =>
                  alert(
                      `Email menu ${key} action`
                  )}
          >
            <Item key="Attachment">
              Email as
              Attachment
            </Item>
            <Item key="Link">
              Email as
              Link
            </Item>
          </Menu>
        </SubmenuTrigger>
        <Item key="SMS">
          SMS
        </Item>
      </Menu>
    </SubmenuTrigger>
    <Item key="Delete">
      Delete
    </Item>
  </Menu>
</MenuTrigger>
</Variant>
<Variant name="Disabled">
<MenuTrigger>
  <ActionButton>
    Filter
  </ActionButton>
  <Menu
      items={[
          {name: 'tiff', id: 'a1b2c3'},
          {name: 'png', id: 'g5h1j9'},
          {name: 'jpg', id: 'p8k3i4'},
          {name: 'PDF', id: 'j7i3a0'}
      ]}
      disabledKeys={['a1b2c3', 'p8k3i4']}>
    {item => <Item>{item.name}</Item>}
  </Menu>
</MenuTrigger>
</Variant>
<Variant name="Disabled1">
<MenuTrigger>
  <ActionButton>
    Filter
  </ActionButton>
  <Menu
      items={[
          {name: 'tiff', id: 'a1b2c3'},
          {name: 'png', id: 'g5h1j9'},
          {name: 'jpg', id: 'p8k3i4'},
          {name: 'PDF', id: 'j7i3a0'}
      ]}
      disabledKeys={['a1b2c3', 'p8k3i4']}>
    {item => <Item>{item.name}</Item>}
  </Menu>
</MenuTrigger>
</Variant>
<Variant name="Disabled12">
<MenuTrigger>
  <ActionButton>
    Filter
  </ActionButton>
  <Menu
      items={[
          {
              name: 'tiff',
              id: 'a1b2c3'
          },
          {
              name: 'png',
              id: 'g5h1j9'
          },
          {
              name: 'jpg',
              id: 'p8k3i4'
          },
          {
              name: 'PDF',
              id: 'j7i3a0'
          }
      ]}
      disabledKeys={[
          'a1b2c3',
          'p8k3i4'
      ]}
  >
    {(item) => (
        <Item>
        {item.name}
      </Item>
    )}
  </Menu>
</MenuTrigger>
</Variant>
</Component>
<Component name="MenuTrigger" docURL="https://react-spectrum.adobe.com/react-spectrum/MenuTrigger.html">
<Variant name="Example">
<MenuTrigger>
  <ActionButton>
    Edit
  </ActionButton>
  <Menu>
    <Item>Cut</Item>
    <Item>Copy</Item>
    <Item>Paste</Item>
  </Menu>
</MenuTrigger>
</Variant>
<Variant name="Example1">
<MenuTrigger>
  <ActionButton>
    Edit
  </ActionButton>
  <Menu>
    <Item>Cut</Item>
    <Item>Copy</Item>
    <Item>Paste</Item>
  </Menu>
</MenuTrigger>
</Variant>
<Variant name="Example12">
<MenuTrigger>
  <ActionButton>
    Edit
  </ActionButton>
  <Menu>
    <Item>Cut</Item>
    <Item>Copy</Item>
    <Item>Paste</Item>
  </Menu>
</MenuTrigger>
</Variant>
<Variant name="Events">
<Flex gap="size-100" alignItems="center">
        <MenuTrigger onOpenChange={setIsOpen}>
        <ActionButton>
            Edit
        </ActionButton>
        <Menu>
          <Item key="cut">Cut</Item>
          <Item key="copy">Copy</Item>
          <Item key="paste">Paste</Item>
        </Menu>
      </MenuTrigger>
      <div>Currently open: {isOpen.toString()}</div>
    </Flex>
</Variant>
<Variant name="Events1">
<Flex gap="size-100" alignItems="center">
    <MenuTrigger onOpenChange={setIsOpen}>
        <ActionButton>
            Edit
        </ActionButton>
        <Menu>
          <Item key="cut">Cut</Item>
          <Item key="copy">Copy</Item>
          <Item key="paste">Paste</Item>
        </Menu>
      </MenuTrigger>
<div>Currently open: {isOpen.toString()}</div>
</Flex>
</Variant>
<Variant name="Events12">
<Flex
    gap="size-100"
    alignItems="center"
>
    <MenuTrigger
        onOpenChange={setIsOpen}
    >
        <ActionButton>
          Edit
        </ActionButton>
        <Menu>
          <Item key="cut">
            Cut
          </Item>
          <Item key="copy">
            Copy
          </Item>
          <Item key="paste">
            Paste
          </Item>
        </Menu>
      </MenuTrigger>
<div>
        Currently open:
    {' '}
    {isOpen
        .toString()}
      </div>
</Flex>
</Variant>
<Variant name="Long press">
<MenuTrigger trigger="longPress">
  <ActionButton
      aria-label="Crop tool"
      onPress={() => alert('Cropping!')}
  >
    <Crop/>
  </ActionButton>
  <Menu>
    <Item textValue="Crop Rotate">
      <CropRotate/>
      <Text>Crop Rotate</Text>
    </Item>
    <Item textValue="Slice">
      <Slice/>
      <Text>Slice</Text>
    </Item>
    <Item textValue="Clone stamp">
      <CloneStamp/>
      <Text>Clone Stamp</Text>
    </Item>
  </Menu>
</MenuTrigger>
</Variant>
<Variant name="Long press1">
<MenuTrigger trigger="longPress">
  <ActionButton
      aria-label="Crop tool"
      onPress={() => alert('Cropping!')}
  >
    <Crop/>
  </ActionButton>
  <Menu>
    <Item textValue="Crop Rotate">
      <CropRotate/>
      <Text>Crop Rotate</Text>
    </Item>
    <Item textValue="Slice">
      <Slice/>
      <Text>Slice</Text>
    </Item>
    <Item textValue="Clone stamp">
      <CloneStamp/>
      <Text>Clone Stamp</Text>
    </Item>
  </Menu>
</MenuTrigger>
</Variant>
<Variant name="Long press12">
<MenuTrigger trigger="longPress">
  <ActionButton
      aria-label="Crop tool"
      onPress={() =>
          alert(
              'Cropping!'
          )}
  >
    <Crop/>
  </ActionButton>
  <Menu>
    <Item textValue="Crop Rotate">
      <CropRotate/>
      <Text>
        Crop Rotate
      </Text>
    </Item>
    <Item textValue="Slice">
      <Slice/>
      <Text>
        Slice
      </Text>
    </Item>
    <Item textValue="Clone stamp">
      <CloneStamp/>
      <Text>
        Clone Stamp
      </Text>
    </Item>
  </Menu>
</MenuTrigger>
</Variant>
<Variant name="Align and direction">
<Flex gap="size-100">
  <MenuTrigger align="start">
    <ActionButton>Edit</ActionButton>
    <Menu>
      <Item key="cut">Cut</Item>
      <Item key="copy">Copy</Item>
      <Item key="paste">Paste</Item>
    </Menu>
  </MenuTrigger>
  <MenuTrigger align="end" direction="top" shouldFlip={false}>
    <ActionButton>View</ActionButton>
    <Menu>
      <Item key="side">Side bar</Item>
      <Item key="options">Page options</Item>
      <Item key="edit">Edit Panel</Item>
    </Menu>
  </MenuTrigger>
  <MenuTrigger direction="start" align="start">
    <ActionButton>Edit</ActionButton>
    <Menu>
      <Item key="cut">Cut</Item>
      <Item key="copy">Copy</Item>
      <Item key="paste">Paste</Item>
    </Menu>
  </MenuTrigger>
  <MenuTrigger direction="end" align="end">
    <ActionButton>View</ActionButton>
    <Menu>
      <Item key="side">Side bar</Item>
      <Item key="options">Page options</Item>
      <Item key="edit">Edit Panel</Item>
    </Menu>
  </MenuTrigger>
</Flex>
</Variant>
<Variant name="Align and direction1">
<Flex gap="size-100">
  <MenuTrigger align="start">
    <ActionButton>Edit</ActionButton>
    <Menu>
      <Item key="cut">Cut</Item>
      <Item key="copy">Copy</Item>
      <Item key="paste">Paste</Item>
    </Menu>
  </MenuTrigger>
  <MenuTrigger
      align="end"
      direction="top"
      shouldFlip={false}
  >
    <ActionButton>View</ActionButton>
    <Menu>
      <Item key="side">Side bar</Item>
      <Item key="options">Page options</Item>
      <Item key="edit">Edit Panel</Item>
    </Menu>
  </MenuTrigger>
  <MenuTrigger direction="start" align="start">
    <ActionButton>Edit</ActionButton>
    <Menu>
      <Item key="cut">Cut</Item>
      <Item key="copy">Copy</Item>
      <Item key="paste">Paste</Item>
    </Menu>
  </MenuTrigger>
  <MenuTrigger direction="end" align="end">
    <ActionButton>View</ActionButton>
    <Menu>
      <Item key="side">Side bar</Item>
      <Item key="options">Page options</Item>
      <Item key="edit">Edit Panel</Item>
    </Menu>
  </MenuTrigger>
</Flex>
</Variant>
<Variant name="Align and direction12">
<Flex gap="size-100">
  <MenuTrigger align="start">
    <ActionButton>
      Edit
    </ActionButton>
    <Menu>
      <Item key="cut">
        Cut
      </Item>
      <Item key="copy">
        Copy
      </Item>
      <Item key="paste">
        Paste
      </Item>
    </Menu>
  </MenuTrigger>
  <MenuTrigger
      align="end"
      direction="top"
      shouldFlip={false}
  >
    <ActionButton>
      View
    </ActionButton>
    <Menu>
      <Item key="side">
        Side bar
      </Item>
      <Item key="options">
        Page options
      </Item>
      <Item key="edit">
        Edit Panel
      </Item>
    </Menu>
  </MenuTrigger>
  <MenuTrigger
      direction="start"
      align="start"
  >
    <ActionButton>
      Edit
    </ActionButton>
    <Menu>
      <Item key="cut">
        Cut
      </Item>
      <Item key="copy">
        Copy
      </Item>
      <Item key="paste">
        Paste
      </Item>
    </Menu>
  </MenuTrigger>
  <MenuTrigger
      direction="end"
      align="end"
  >
    <ActionButton>
      View
    </ActionButton>
    <Menu>
      <Item key="side">
        Side bar
      </Item>
      <Item key="options">
        Page options
      </Item>
      <Item key="edit">
        Edit Panel
      </Item>
    </Menu>
  </MenuTrigger>
</Flex>
</Variant>
<Variant name="Close on selection">
<MenuTrigger closeOnSelect={false}>
  <ActionButton>
    View
  </ActionButton>
  <Menu selectionMode="multiple">
    <Item key="side">Side bar</Item>
    <Item key="options">Page options</Item>
    <Item key="edit">Edit Panel</Item>
  </Menu>
</MenuTrigger>
</Variant>
<Variant name="Close on selection1">
<MenuTrigger closeOnSelect={false}>
  <ActionButton>
    View
  </ActionButton>
  <Menu selectionMode="multiple">
    <Item key="side">Side bar</Item>
    <Item key="options">Page options</Item>
    <Item key="edit">Edit Panel</Item>
  </Menu>
</MenuTrigger>
</Variant>
<Variant name="Close on selection12">
<MenuTrigger
    closeOnSelect={false}
>
  <ActionButton>
    View
  </ActionButton>
  <Menu selectionMode="multiple">
    <Item key="side">
      Side bar
    </Item>
    <Item key="options">
      Page options
    </Item>
    <Item key="edit">
      Edit Panel
    </Item>
  </Menu>
</MenuTrigger>
</Variant>
<Variant name="Flipping">
<Flex gap="size-100">
  <MenuTrigger shouldFlip>
    <ActionButton>
      View
    </ActionButton>
    <Menu>
      <Item key="side">Side bar</Item>
      <Item key="options">Page options</Item>
      <Item key="edit">Edit Panel</Item>
    </Menu>
  </MenuTrigger>
  <MenuTrigger shouldFlip={false}>
    <ActionButton>
      Edit
    </ActionButton>
    <Menu>
      <Item key="cut">Cut</Item>
      <Item key="copy">Copy</Item>
      <Item key="paste">Paste</Item>
    </Menu>
  </MenuTrigger>
</Flex>
</Variant>
<Variant name="Flipping1">
<Flex gap="size-100">
  <MenuTrigger shouldFlip>
    <ActionButton>
      View
    </ActionButton>
    <Menu>
      <Item key="side">Side bar</Item>
      <Item key="options">Page options</Item>
      <Item key="edit">Edit Panel</Item>
    </Menu>
  </MenuTrigger>
  <MenuTrigger shouldFlip={false}>
    <ActionButton>
      Edit
    </ActionButton>
    <Menu>
      <Item key="cut">Cut</Item>
      <Item key="copy">Copy</Item>
      <Item key="paste">Paste</Item>
    </Menu>
  </MenuTrigger>
</Flex>
</Variant>
<Variant name="Flipping12">
<Flex gap="size-100">
  <MenuTrigger
      shouldFlip
  >
    <ActionButton>
      View
    </ActionButton>
    <Menu>
      <Item key="side">
        Side bar
      </Item>
      <Item key="options">
        Page options
      </Item>
      <Item key="edit">
        Edit Panel
      </Item>
    </Menu>
  </MenuTrigger>
  <MenuTrigger
      shouldFlip={false}
  >
    <ActionButton>
      Edit
    </ActionButton>
    <Menu>
      <Item key="cut">
        Cut
      </Item>
      <Item key="copy">
        Copy
      </Item>
      <Item key="paste">
        Paste
      </Item>
    </Menu>
  </MenuTrigger>
</Flex>
</Variant>
<Variant name="Open">
<MenuTrigger
    isOpen={open}
    onOpenChange={setOpen}>
      <ActionButton>
        View
      </ActionButton>
      <Menu selectionMode="multiple">
        <Item key="side">Side bar</Item>
        <Item key="options">Page options</Item>
        <Item key="edit">Edit Panel</Item>
      </Menu>
    </MenuTrigger>
</Variant>
<Variant name="Open1">
<MenuTrigger
    isOpen={open}
    onOpenChange={setOpen}>
      <ActionButton>
        View
      </ActionButton>
      <Menu selectionMode="multiple">
        <Item key="side">Side bar</Item>
        <Item key="options">Page options</Item>
        <Item key="edit">Edit Panel</Item>
      </Menu>
    </MenuTrigger>
</Variant>
<Variant name="Open12">
<MenuTrigger
    isOpen={open}
    onOpenChange={setOpen}
>
      <ActionButton>
        View
      </ActionButton>
      <Menu selectionMode="multiple">
        <Item key="side">
          Side bar
        </Item>
        <Item key="options">
          Page options
        </Item>
        <Item key="edit">
          Edit Panel
        </Item>
      </Menu>
    </MenuTrigger>
</Variant>
</Component>
<Component name="TableView" docURL="https://react-spectrum.adobe.com/react-spectrum/TableView.html">
<Variant name="Example">
<TableView
    aria-label="Example table with static contents"
    selectionMode="multiple"
>
  <TableHeader>
    <Column>Name</Column>
    <Column>Type</Column>
    <Column align="end">Date Modified</Column>
  </TableHeader>
  <TableBody>
    <Row>
      <Cell>Games</Cell>
      <Cell>File folder</Cell>
      <Cell>6/7/2020</Cell>
    </Row>
    <Row>
      <Cell>Program Files</Cell>
      <Cell>File folder</Cell>
      <Cell>4/7/2021</Cell>
    </Row>
    <Row>
      <Cell>bootmgr</Cell>
      <Cell>System file</Cell>
      <Cell>11/20/2010</Cell>
    </Row>
    <Row>
      <Cell>log.txt</Cell>
      <Cell>Text Document</Cell>
      <Cell>1/18/2016</Cell>
    </Row>
  </TableBody>
</TableView>
</Variant>
<Variant name="Example1">
<TableView
    aria-label="Example table with static contents"
    selectionMode="multiple"
>
  <TableHeader>
    <Column>Name</Column>
    <Column>Type</Column>
    <Column align="end">Date Modified</Column>
  </TableHeader>
  <TableBody>
    <Row>
      <Cell>Games</Cell>
      <Cell>File folder</Cell>
      <Cell>6/7/2020</Cell>
    </Row>
    <Row>
      <Cell>Program Files</Cell>
      <Cell>File folder</Cell>
      <Cell>4/7/2021</Cell>
    </Row>
    <Row>
      <Cell>bootmgr</Cell>
      <Cell>System file</Cell>
      <Cell>11/20/2010</Cell>
    </Row>
    <Row>
      <Cell>log.txt</Cell>
      <Cell>Text Document</Cell>
      <Cell>1/18/2016</Cell>
    </Row>
  </TableBody>
</TableView>
</Variant>
<Variant name="Example12">
<TableView
    aria-label="Example table with static contents"
    selectionMode="multiple"
>
  <TableHeader>
    <Column>
      Name
    </Column>
    <Column>
      Type
    </Column>
    <Column align="end">
      Date Modified
    </Column>
  </TableHeader>
  <TableBody>
    <Row>
      <Cell>
        Games
      </Cell>
      <Cell>
        File folder
      </Cell>
      <Cell>
        6/7/2020
      </Cell>
    </Row>
    <Row>
      <Cell>
        Program Files
      </Cell>
      <Cell>
        File folder
      </Cell>
      <Cell>
        4/7/2021
      </Cell>
    </Row>
    <Row>
      <Cell>
        bootmgr
      </Cell>
      <Cell>
        System file
      </Cell>
      <Cell>
        11/20/2010
      </Cell>
    </Row>
    <Row>
      <Cell>
        log.txt
      </Cell>
      <Cell>
        Text Document
      </Cell>
      <Cell>
        1/18/2016
      </Cell>
    </Row>
  </TableBody>
</TableView>
</Variant>
<Variant name="Content">
<TableView
    aria-label="Example table with dynamic content"
    maxWidth="size-6000">
  <TableHeader columns={[
      {name: 'Name', uid: 'name'},
      {name: 'Type', uid: 'type'}
  ]}>
    {column => (
        <Column
            key={column.uid}
            align={column.uid === 'date' ? 'end' : 'start'}>
        {column.name}
      </Column>
    )}
  </TableHeader>
  <TableBody items={rows}>
    {item => (
        <Row>
        {columnKey => <Cell>{item[columnKey]}</Cell>}
      </Row>
    )}
  </TableBody>
</TableView>
</Variant>
<Variant name="Content1">
<TableView
    aria-label="Example table with dynamic content"
    maxWidth="size-6000"
>
  <TableHeader columns={[
      {name: 'Name', uid: 'name'},
      {name: 'Type', uid: 'type'}
  ]}>
    {(column) => (
        <Column
            key={column.uid}
            align={column.uid === 'date' ? 'end' : 'start'}
        >
        {column.name}
      </Column>
    )}
  </TableHeader>
  <TableBody items={rows}>
    {(item) => (
        <Row>
        {(columnKey) => <Cell>{item[columnKey]}</Cell>}
      </Row>
    )}
  </TableBody>
</TableView>
</Variant>
<Variant name="Content12">
<TableView
    aria-label="Example table with dynamic content"
    maxWidth="size-6000"
>
  <TableHeader
      columns={[
          {name: 'Name', uid: 'name'},
          {name: 'Type', uid: 'type'}
      ]}
  >
    {(column) => (
        <Column
            key={column
                .uid}
            align={column
                .uid ===
            'date'
                ? 'end'
                : 'start'}
        >
        {column.name}
      </Column>
    )}
  </TableHeader>
  <TableBody
      items={rows}
  >
    {(item) => (
        <Row>
        {(columnKey) => (
            <Cell>
            {item[
                columnKey
                ]}
          </Cell>
        )}
      </Row>
    )}
  </TableBody>
</TableView>
</Variant>
<Variant name="Layout">
<Flex height="size-5000" width="100%" direction="column" gap="size-150">
  <ActionButton alignSelf="start">Add</ActionButton>
  <TableView
      flex
      aria-label="Example table with dynamic content"
  >
    <TableHeader columns={[
        {name: 'Name', uid: 'name'},
        {name: 'Type', uid: 'type'}
    ]}>
      {(column) => (
          <Column
              key={column.id}
          >
          {column.name}
        </Column>
      )}
    </TableHeader>
    <TableBody items={rows}>
      {(item) => (
          <Row>
          {(columnKey) => <Cell>{item[columnKey]}</Cell>}
        </Row>
      )}
    </TableBody>
  </TableView>
</Flex>
</Variant>
<Variant name="Layout1">
<Flex
    height="size-5000"
    width="100%"
    direction="column"
    gap="size-150"
>
  <ActionButton alignSelf="start">Add</ActionButton>
  <TableView
      flex
      aria-label="Example table with dynamic content"
  >
    <TableHeader columns={[
        {name: 'Name', uid: 'name'},
        {name: 'Type', uid: 'type'}
    ]}>
      {(column) => (
          <Column
              key={column.id}
          >
          {column.name}
        </Column>
      )}
    </TableHeader>
    <TableBody items={rows}>
      {(item) => (
          <Row>
          {(columnKey) => <Cell>{item[columnKey]}</Cell>}
        </Row>
      )}
    </TableBody>
  </TableView>
</Flex>
</Variant>
<Variant name="Layout12">
<Flex
    height="size-5000"
    width="100%"
    direction="column"
    gap="size-150"
>
  <ActionButton alignSelf="start">
    Add
  </ActionButton>
  <TableView
      flex
      aria-label="Example table with dynamic content"
  >
    <TableHeader
        columns={[
            {name: 'Name', uid: 'name'},
            {name: 'Type', uid: 'type'}
        ]}
    >
      {(column) => (
          <Column
              key={column
                  .id}
          >
          {column.name}
        </Column>
      )}
    </TableHeader>
    <TableBody
        items={rows}
    >
      {(item) => (
          <Row>
          {(columnKey) => (
              <Cell>
              {item[
                  columnKey
                  ]}
            </Cell>
          )}
        </Row>
      )}
    </TableBody>
  </TableView>
</Flex>
</Variant>
<Variant name="Accessibility">
<TableView aria-label="Example table with static contents">
  <TableHeader>
    <Column isRowHeader>First Name</Column>
    <Column isRowHeader>Last Name</Column>
    <Column align="end">Age</Column>
  </TableHeader>
  <TableBody>
    <Row>
      <Cell>John</Cell>
      <Cell>Doe</Cell>
      <Cell>45</Cell>
    </Row>
    <Row>
      <Cell>Jane</Cell>
      <Cell>Doe</Cell>
      <Cell>37</Cell>
    </Row>
    <Row>
      <Cell>Joe</Cell>
      <Cell>Schmoe</Cell>
      <Cell>67</Cell>
    </Row>
  </TableBody>
</TableView>
</Variant>
<Variant name="Accessibility1">
<TableView aria-label="Example table with static contents">
  <TableHeader>
    <Column isRowHeader>First Name</Column>
    <Column isRowHeader>Last Name</Column>
    <Column align="end">Age</Column>
  </TableHeader>
  <TableBody>
    <Row>
      <Cell>John</Cell>
      <Cell>Doe</Cell>
      <Cell>45</Cell>
    </Row>
    <Row>
      <Cell>Jane</Cell>
      <Cell>Doe</Cell>
      <Cell>37</Cell>
    </Row>
    <Row>
      <Cell>Joe</Cell>
      <Cell>Schmoe</Cell>
      <Cell>67</Cell>
    </Row>
  </TableBody>
</TableView>
</Variant>
<Variant name="Accessibility12">
<TableView aria-label="Example table with static contents">
  <TableHeader>
    <Column
        isRowHeader
    >
      First Name
    </Column>
    <Column
        isRowHeader
    >
      Last Name
    </Column>
    <Column align="end">
      Age
    </Column>
  </TableHeader>
  <TableBody>
    <Row>
      <Cell>John</Cell>
      <Cell>Doe</Cell>
      <Cell>45</Cell>
    </Row>
    <Row>
      <Cell>Jane</Cell>
      <Cell>Doe</Cell>
      <Cell>37</Cell>
    </Row>
    <Row>
      <Cell>Joe</Cell>
      <Cell>
        Schmoe
      </Cell>
      <Cell>67</Cell>
    </Row>
  </TableBody>
</TableView>
</Variant>
<Variant name="Asynchronous loading">
<TableView aria-label="example async loading table" height="size-3000">
        <TableHeader columns={[
            {name: 'Name', uid: 'name'},
            {name: 'Type', uid: 'type'}
        ]}>
        {(column) => (
            <Column align={column.key !== 'name' ? 'end' : 'start'}>
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody
          items={list.items}
          loadingState={list.loadingState}
          onLoadMore={list.loadMore}
      >
        {(item) => (
            <Row key={item.name}>{(key) => <Cell>{item[key]}</Cell>}</Row>
        )}
      </TableBody>
    </TableView>
</Variant>
<Variant name="Asynchronous loading1">
<TableView
    aria-label="example async loading table"
    height="size-3000"
>
    <TableHeader columns={[
        {name: 'Name', uid: 'name'},
        {name: 'Type', uid: 'type'}
    ]}>
        {(column) => (
            <Column
                align={column.key !== 'name' ? 'end' : 'start'}
            >
            {column.name}
          </Column>
        )}
      </TableHeader>
<TableBody
    items={list.items}
    loadingState={list.loadingState}
    onLoadMore={list.loadMore}
>
        {(item) => (
            <Row key={item.name}>
            {(key) => <Cell>{item[key]}</Cell>}
          </Row>
        )}
      </TableBody>
</TableView>
</Variant>
<Variant name="Asynchronous loading12">
<TableView
    aria-label="example async loading table"
    height="size-3000"
>
    <TableHeader
        columns={[
            {name: 'Name', uid: 'name'},
            {name: 'Type', uid: 'type'}
        ]}
    >
        {(column) => (
            <Column
                align={column
                    .key !==
                'name'
                    ? 'end'
                    : 'start'}
            >
            {column.name}
          </Column>
        )}
      </TableHeader>
<TableBody
    items={list
        .items}
    loadingState={list
        .loadingState}
    onLoadMore={list
        .loadMore}
>
        {(item) => (
            <Row
                key={item
                    .name}
            >
            {(key) => (
                <Cell>
                {item[
                    key
                    ]}
              </Cell>
            )}
          </Row>
        )}
      </TableBody>
</TableView>
</Variant>
<Variant name="Selection">
<TableView
    aria-label="Example table with multiple selection"
    selectionMode="multiple"
    defaultSelectedKeys={['2', '4']}
>
  <TableHeader>
    <Column>Name</Column>
    <Column>Type</Column>
    <Column align="end">Level</Column>
  </TableHeader>
  <TableBody>
    <Row key="1">
      <Cell>Charizard</Cell>
      <Cell>Fire, Flying</Cell>
      <Cell>67</Cell>
    </Row>
    <Row key="2">
      <Cell>Blastoise</Cell>
      <Cell>Water</Cell>
      <Cell>56</Cell>
    </Row>
    <Row key="3">
      <Cell>Venusaur</Cell>
      <Cell>Grass, Poison</Cell>
      <Cell>83</Cell>
    </Row>
    <Row key="4">
      <Cell>Pikachu</Cell>
      <Cell>Electric</Cell>
      <Cell>100</Cell>
    </Row>
  </TableBody>
</TableView>
</Variant>
<Variant name="Selection1">
<TableView
    aria-label="Example table with multiple selection"
    selectionMode="multiple"
    defaultSelectedKeys={['2', '4']}
>
  <TableHeader>
    <Column>Name</Column>
    <Column>Type</Column>
    <Column align="end">Level</Column>
  </TableHeader>
  <TableBody>
    <Row key="1">
      <Cell>Charizard</Cell>
      <Cell>Fire, Flying</Cell>
      <Cell>67</Cell>
    </Row>
    <Row key="2">
      <Cell>Blastoise</Cell>
      <Cell>Water</Cell>
      <Cell>56</Cell>
    </Row>
    <Row key="3">
      <Cell>Venusaur</Cell>
      <Cell>Grass, Poison</Cell>
      <Cell>83</Cell>
    </Row>
    <Row key="4">
      <Cell>Pikachu</Cell>
      <Cell>Electric</Cell>
      <Cell>100</Cell>
    </Row>
  </TableBody>
</TableView>
</Variant>
<Variant name="Selection12">
<TableView
    aria-label="Example table with multiple selection"
    selectionMode="multiple"
    defaultSelectedKeys={[
        '2',
        '4'
    ]}
>
  <TableHeader>
    <Column>
      Name
    </Column>
    <Column>
      Type
    </Column>
    <Column align="end">
      Level
    </Column>
  </TableHeader>
  <TableBody>
    <Row key="1">
      <Cell>
        Charizard
      </Cell>
      <Cell>
        Fire, Flying
      </Cell>
      <Cell>67</Cell>
    </Row>
    <Row key="2">
      <Cell>
        Blastoise
      </Cell>
      <Cell>
        Water
      </Cell>
      <Cell>56</Cell>
    </Row>
    <Row key="3">
      <Cell>
        Venusaur
      </Cell>
      <Cell>
        Grass, Poison
      </Cell>
      <Cell>83</Cell>
    </Row>
    <Row key="4">
      <Cell>
        Pikachu
      </Cell>
      <Cell>
        Electric
      </Cell>
      <Cell>100</Cell>
    </Row>
  </TableBody>
</TableView>
</Variant>
<Variant name="Controlled selection">
<TableView
    aria-label="Table with controlled selection"
    selectionMode="multiple"
    selectedKeys={selectedKeys}
    onSelectionChange={setSelectedKeys}
    {...props}
>
      <TableHeader columns={[
          {name: 'Name', uid: 'name'},
          {name: 'Type', uid: 'type'}
      ]}>
        {(column) => (
            <Column
                key={column.uid}
                align={column.uid === 'level' ? 'end' : 'start'}
            >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
            <Row>
            {(columnKey) => <Cell>{item[columnKey]}</Cell>}
          </Row>
        )}
      </TableBody>
    </TableView>
</Variant>
<Variant name="Controlled selection1">
<TableView
    aria-label="Table with controlled selection"
    selectionMode="multiple"
    selectedKeys={selectedKeys}
    onSelectionChange={setSelectedKeys}
    {...props}
>
      <TableHeader columns={[
          {name: 'Name', uid: 'name'},
          {name: 'Type', uid: 'type'}
      ]}>
        {(column) => (
            <Column
                key={column.uid}
                align={column.uid === 'level' ? 'end' : 'start'}
            >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
            <Row>
            {(columnKey) => <Cell>{item[columnKey]}</Cell>}
          </Row>
        )}
      </TableBody>
    </TableView>
</Variant>
<Variant name="Controlled selection12">
<TableView
    aria-label="Table with controlled selection"
    selectionMode="multiple"
    selectedKeys={selectedKeys}
    onSelectionChange={setSelectedKeys}
    {...props}
>
      <TableHeader
          columns={[
              {name: 'Name', uid: 'name'},
              {name: 'Type', uid: 'type'}
          ]}
      >
        {(column) => (
            <Column
                key={column
                    .uid}
                align={column
                    .uid ===
                'level'
                    ? 'end'
                    : 'start'}
            >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody
          items={rows}
      >
        {(item) => (
            <Row>
            {(columnKey) => (
                <Cell>
                {item[
                    columnKey
                    ]}
              </Cell>
            )}
          </Row>
        )}
      </TableBody>
    </TableView>
</Variant>
<Variant name="Single selection">
<PokemonTable selectionMode="single"/>
</Variant>
<Variant name="Single selection1">
<PokemonTable selectionMode="single"/>
</Variant>
<Variant name="Single selection12">
<PokemonTable selectionMode="single"/>
</Variant>
<Variant name="Disallow empty selection">
<PokemonTable disallowEmptySelection/>
</Variant>
<Variant name="Disallow empty selection1">
<PokemonTable disallowEmptySelection/>
</Variant>
<Variant name="Disallow empty selection12">
<PokemonTable
    disallowEmptySelection
/>
</Variant>
<Variant name="Disabled rows">
<PokemonTable selectionMode="multiple" disabledKeys={[3]}/>
</Variant>
<Variant name="Disabled rows1">
<PokemonTable selectionMode="multiple" disabledKeys={[3]}/>
</Variant>
<Variant name="Disabled rows12">
<PokemonTable
    selectionMode="multiple"
    disabledKeys={[3]}
/>
</Variant>
<Variant name="Highlight selection">
<PokemonTable selectionMode="multiple" selectionStyle="highlight"/>
</Variant>
<Variant name="Highlight selection1">
<PokemonTable
    selectionMode="multiple"
    selectionStyle="highlight"
/>
</Variant>
<Variant name="Highlight selection12">
<PokemonTable
    selectionMode="multiple"
    selectionStyle="highlight"
/>
</Variant>
<Variant name="Row actions">
<Flex direction="column" gap="size-300">
  <PokemonTable
      aria-label="Pokemon table with row actions and checkbox selection"
      selectionMode="multiple"
      onAction={(key) => alert(`Opening item ${key}...`)}
  />
  <PokemonTable
      aria-label="Pokemon table with row actions and highlight selection"
      selectionMode="multiple"
      selectionStyle="highlight"
      onAction={(key) => alert(`Opening item ${key}...`)}
  />
</Flex>
</Variant>
<Variant name="Row actions1">
<Flex direction="column" gap="size-300">
  <PokemonTable
      aria-label="Pokemon table with row actions and checkbox selection"
      selectionMode="multiple"
      onAction={(key) => alert(`Opening item ${key}...`)}
  />
  <PokemonTable
      aria-label="Pokemon table with row actions and highlight selection"
      selectionMode="multiple"
      selectionStyle="highlight"
      onAction={(key) => alert(`Opening item ${key}...`)}
  />
</Flex>
</Variant>
<Variant name="Row actions12">
<Flex
    direction="column"
    gap="size-300"
>
  <PokemonTable
      aria-label="Pokemon table with row actions and checkbox selection"
      selectionMode="multiple"
      onAction={(key) =>
          alert(
              `Opening item ${key}...`
          )}
  />
  <PokemonTable
      aria-label="Pokemon table with row actions and highlight selection"
      selectionMode="multiple"
      selectionStyle="highlight"
      onAction={(key) =>
          alert(
              `Opening item ${key}...`
          )}
  />
</Flex>
</Variant>
<Variant name="Links">
<TableView aria-label="Bookmarks" selectionMode="multiple">
  <TableHeader>
    <Column>Name</Column>
    <Column>URL</Column>
    <Column>Date added</Column>
  </TableHeader>
  <TableBody>
    <Row href="https://adobe.com/" target="_blank">
      <Cell>Adobe</Cell>
      <Cell>https://adobe.com/</Cell>
      <Cell>January 28, 2023</Cell>
    </Row>
    <Row href="https://google.com/" target="_blank">
      <Cell>Google</Cell>
      <Cell>https://google.com/</Cell>
      <Cell>April 5, 2023</Cell>
    </Row>
    <Row href="https://nytimes.com/" target="_blank">
      <Cell>New York Times</Cell>
      <Cell>https://nytimes.com/</Cell>
      <Cell>July 12, 2023</Cell>
    </Row>
  </TableBody>
</TableView>
</Variant>
<Variant name="Links1">
<TableView aria-label="Bookmarks" selectionMode="multiple">
  <TableHeader>
    <Column>Name</Column>
    <Column>URL</Column>
    <Column>Date added</Column>
  </TableHeader>
  <TableBody>
    <Row href="https://adobe.com/" target="_blank">
      <Cell>Adobe</Cell>
      <Cell>https://adobe.com/</Cell>
      <Cell>January 28, 2023</Cell>
    </Row>
    <Row href="https://google.com/" target="_blank">
      <Cell>Google</Cell>
      <Cell>https://google.com/</Cell>
      <Cell>April 5, 2023</Cell>
    </Row>
    <Row href="https://nytimes.com/" target="_blank">
      <Cell>New York Times</Cell>
      <Cell>https://nytimes.com/</Cell>
      <Cell>July 12, 2023</Cell>
    </Row>
  </TableBody>
</TableView>
</Variant>
<Variant name="Links12">
<TableView
    aria-label="Bookmarks"
    selectionMode="multiple"
>
  <TableHeader>
    <Column>
      Name
    </Column>
    <Column>
      URL
    </Column>
    <Column>
      Date added
    </Column>
  </TableHeader>
  <TableBody>
    <Row
        href="https://adobe.com/"
        target="_blank"
    >
      <Cell>
        Adobe
      </Cell>
      <Cell>
        https://adobe.com/
      </Cell>
      <Cell>
        January 28,
        2023
      </Cell>
    </Row>
    <Row
        href="https://google.com/"
        target="_blank"
    >
      <Cell>
        Google
      </Cell>
      <Cell>
        https://google.com/
      </Cell>
      <Cell>
        April 5, 2023
      </Cell>
    </Row>
    <Row
        href="https://nytimes.com/"
        target="_blank"
    >
      <Cell>
        New York Times
      </Cell>
      <Cell>
        https://nytimes.com/
      </Cell>
      <Cell>
        July 12, 2023
      </Cell>
    </Row>
  </TableBody>
</TableView>
</Variant>
<Variant name="Sorting">
<TableView
    aria-label="Example table with client side sorting"
    sortDescriptor={list.sortDescriptor}
    onSortChange={list.sort}
    height="size-3000"
>
      <TableHeader>
        <Column key="name" allowsSorting>Name</Column>
        <Column key="height" allowsSorting>Height</Column>
        <Column key="mass" allowsSorting>Mass</Column>
        <Column key="birth_year" allowsSorting>Birth Year</Column>
      </TableHeader>
      <TableBody
          items={list.items}
          loadingState={list.loadingState}
      >
        {(item) => (
            <Row key={item.name}>
            {(columnKey) => <Cell>{item[columnKey]}</Cell>}
          </Row>
        )}
      </TableBody>
    </TableView>
</Variant>
<Variant name="Sorting1">
<TableView
    aria-label="Example table with client side sorting"
    sortDescriptor={list.sortDescriptor}
    onSortChange={list.sort}
    height="size-3000"
>
      <TableHeader>
        <Column key="name" allowsSorting>Name</Column>
        <Column key="height" allowsSorting>Height</Column>
        <Column key="mass" allowsSorting>Mass</Column>
        <Column key="birth_year" allowsSorting>
          Birth Year
        </Column>
      </TableHeader>
      <TableBody
          items={list.items}
          loadingState={list.loadingState}
      >
        {(item) => (
            <Row key={item.name}>
            {(columnKey) => <Cell>{item[columnKey]}</Cell>}
          </Row>
        )}
      </TableBody>
    </TableView>
</Variant>
<Variant name="Sorting12">
<TableView
    aria-label="Example table with client side sorting"
    sortDescriptor={list
        .sortDescriptor}
    onSortChange={list
        .sort}
    height="size-3000"
>
      <TableHeader>
        <Column
            key="name"
            allowsSorting
        >
          Name
        </Column>
        <Column
            key="height"
            allowsSorting
        >
          Height
        </Column>
        <Column
            key="mass"
            allowsSorting
        >
          Mass
        </Column>
        <Column
            key="birth_year"
            allowsSorting
        >
          Birth Year
        </Column>
      </TableHeader>
      <TableBody
          items={list
              .items}
          loadingState={list
              .loadingState}
      >
        {(item) => (
            <Row
                key={item
                    .name}
            >
            {(columnKey) => (
                <Cell>
                {item[
                    columnKey
                    ]}
              </Cell>
            )}
          </Row>
        )}
      </TableBody>
    </TableView>
</Variant>
<Variant name="Column widths">
<TableView aria-label="Example table for column widths" maxWidth={320}>
  <TableHeader>
    <Column defaultWidth="1fr" align="start">Name</Column>
    <Column maxWidth={80}>Type</Column>
    <Column width={80}>Size</Column>
    <Column minWidth={100} align="end">Date Modified</Column>
  </TableHeader>
  <TableBody>
    <Row>
      <Cell>2021406_Proposal</Cell>
      <Cell>PDF</Cell>
      <Cell>86 KB</Cell>
      <Cell>April 12</Cell>
    </Row>
    <Row>
      <Cell>Budget Template</Cell>
      <Cell>XLS</Cell>
      <Cell>120 KB</Cell>
      <Cell>November 27</Cell>
    </Row>
    <Row>
      <Cell>Onboarding</Cell>
      <Cell>PPT</Cell>
      <Cell>472 KB</Cell>
      <Cell>January 7</Cell>
    </Row>
    <Row>
      <Cell>Welcome</Cell>
      <Cell>TXT</Cell>
      <Cell>24 KB</Cell>
      <Cell>February 11</Cell>
    </Row>
  </TableBody>
</TableView>
</Variant>
<Variant name="Column widths1">
<TableView
    aria-label="Example table for column widths"
    maxWidth={320}
>
  <TableHeader>
    <Column defaultWidth="1fr" align="start">Name</Column>
    <Column maxWidth={80}>Type</Column>
    <Column width={80}>Size</Column>
    <Column minWidth={100} align="end">
      Date Modified
    </Column>
  </TableHeader>
  <TableBody>
    <Row>
      <Cell>2021406_Proposal</Cell>
      <Cell>PDF</Cell>
      <Cell>86 KB</Cell>
      <Cell>April 12</Cell>
    </Row>
    <Row>
      <Cell>Budget Template</Cell>
      <Cell>XLS</Cell>
      <Cell>120 KB</Cell>
      <Cell>November 27</Cell>
    </Row>
    <Row>
      <Cell>Onboarding</Cell>
      <Cell>PPT</Cell>
      <Cell>472 KB</Cell>
      <Cell>January 7</Cell>
    </Row>
    <Row>
      <Cell>Welcome</Cell>
      <Cell>TXT</Cell>
      <Cell>24 KB</Cell>
      <Cell>February 11</Cell>
    </Row>
  </TableBody>
</TableView>
</Variant>
<Variant name="Column widths12">
<TableView
    aria-label="Example table for column widths"
    maxWidth={320}
>
  <TableHeader>
    <Column
        defaultWidth="1fr"
        align="start"
    >
      Name
    </Column>
    <Column
        maxWidth={80}
    >
      Type
    </Column>
    <Column width={80}>
      Size
    </Column>
    <Column
        minWidth={100}
        align="end"
    >
      Date Modified
    </Column>
  </TableHeader>
  <TableBody>
    <Row>
      <Cell>
        2021406_Proposal
      </Cell>
      <Cell>PDF</Cell>
      <Cell>
        86 KB
      </Cell>
      <Cell>
        April 12
      </Cell>
    </Row>
    <Row>
      <Cell>
        Budget Template
      </Cell>
      <Cell>XLS</Cell>
      <Cell>
        120 KB
      </Cell>
      <Cell>
        November 27
      </Cell>
    </Row>
    <Row>
      <Cell>
        Onboarding
      </Cell>
      <Cell>PPT</Cell>
      <Cell>
        472 KB
      </Cell>
      <Cell>
        January 7
      </Cell>
    </Row>
    <Row>
      <Cell>
        Welcome
      </Cell>
      <Cell>TXT</Cell>
      <Cell>
        24 KB
      </Cell>
      <Cell>
        February 11
      </Cell>
    </Row>
  </TableBody>
</TableView>
</Variant>
<Variant name="Width values">
<TableView
    aria-label="TableView with resizable columns"
    maxWidth={320}
    height={200}>
  <TableHeader>
    <Column key="file" allowsResizing maxWidth={500}>File Name</Column>
    <Column key="size" width={80}>Size</Column>
    <Column key="date" allowsResizing minWidth={100}>Date Modified</Column>  </TableHeader>
  <TableBody>
    <Row>
      <Cell>2022-Roadmap-Proposal-Revision-012822-Copy(2)</Cell>
      <Cell>214 KB</Cell>
      <Cell>November 27, 2022 at 4:56PM</Cell>
    </Row>
    <Row>
      <Cell>62259692_p0_master1200</Cell>
      <Cell>120 KB</Cell>
      <Cell>January 27, 2021 at 1:56AM</Cell>
    </Row>
  </TableBody>
</TableView>
</Variant>
<Variant name="Width values1">
<TableView
    aria-label="TableView with resizable columns"
    maxWidth={320}
    height={200}
>
  <TableHeader>
    <Column key="file" allowsResizing maxWidth={500}>
      File Name
    </Column>
    <Column key="size" width={80}>Size</Column>
    <Column key="date" allowsResizing minWidth={100}>
      Date Modified
    </Column>  </TableHeader>
  <TableBody>
    <Row>
      <Cell>
        2022-Roadmap-Proposal-Revision-012822-Copy(2)
      </Cell>
      <Cell>214 KB</Cell>
      <Cell>November 27, 2022 at 4:56PM</Cell>
    </Row>
    <Row>
      <Cell>62259692_p0_master1200</Cell>
      <Cell>120 KB</Cell>
      <Cell>January 27, 2021 at 1:56AM</Cell>
    </Row>
  </TableBody>
</TableView>
</Variant>
<Variant name="Width values12">
<TableView
    aria-label="TableView with resizable columns"
    maxWidth={320}
    height={200}
>
  <TableHeader>
    <Column
        key="file"
        allowsResizing
        maxWidth={500}
    >
      File Name
    </Column>
    <Column
        key="size"
        width={80}
    >
      Size
    </Column>
    <Column
        key="date"
        allowsResizing
        minWidth={100}
    >
      Date Modified
    </Column>  </TableHeader>
  <TableBody>
    <Row>
      <Cell>
        2022-Roadmap-Proposal-Revision-012822-Copy(2)
      </Cell>
      <Cell>
        214 KB
      </Cell>
      <Cell>
        November 27,
        2022 at 4:56PM
      </Cell>
    </Row>
    <Row>
      <Cell>
        62259692_p0_master1200
      </Cell>
      <Cell>
        120 KB
      </Cell>
      <Cell>
        January 27,
        2021 at 1:56AM
      </Cell>
    </Row>
  </TableBody>
</TableView>
</Variant>
<Variant name="Resize events">
<TableView
    onResize={onResize}
    onResizeEnd={onResizeEnd} aria-label="TableView with controlled, resizable columns saved in local storage"
    maxWidth={320}
    height={200}
>
      <TableHeader columns={[
          {name: 'Name', uid: 'name'},
          {name: 'Type', uid: 'type'}
      ]}>
        {(column) => {

            return <Column allowsResizing key={id} width={width}>{name}</Column>;
        }}
      </TableHeader>
      <TableBody items={items}>
        {(item) => <Row key={item.id}>{(key) => <Cell>{item[key]}</Cell>}</Row>}
      </TableBody>
    </TableView>
</Variant>
<Variant name="Draggable TableView and droppable TableView">
<TableView
    aria-label="Draggable TableView in drag into table example"
    selectionMode="multiple"
    width="size-5000"
    height="size-2400"
    dragAndDropHooks={dragAndDropHooks}>
      <TableHeader columns={[
          {name: 'Name', uid: 'name'},
          {name: 'Type', uid: 'type'}
      ]}>
        {(column) => (
            <Column
                key={column.id}
                align={column.id === 'date' ? 'end' : 'start'}
            >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody items={list.items}>
        {(item) => (
            <Row>
            {(columnKey) => <Cell>{item[columnKey]}</Cell>}
          </Row>
        )}
      </TableBody>
    </TableView>
</Variant>
<Variant name="Draggable TableView and droppable TableView1">
<TableView
    aria-label="Draggable TableView in drag into table example"
    selectionMode="multiple"
    width="size-5000"
    height="size-2400"
    dragAndDropHooks={dragAndDropHooks}>
      <TableHeader columns={[
          {name: 'Name', uid: 'name'},
          {name: 'Type', uid: 'type'}
      ]}>
        {(column) => (
            <Column
                key={column.id}
                align={column.id === 'date' ? 'end' : 'start'}
            >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody items={list.items}>
        {(item) => (
            <Row>
            {(columnKey) => <Cell>{item[columnKey]}</Cell>}
          </Row>
        )}
      </TableBody>
    </TableView>
</Variant>
<Variant name="Draggable TableView and droppable TableView12">
<TableView
    aria-label="Draggable TableView in drag into table example"
    selectionMode="multiple"
    width="size-5000"
    height="size-2400"
    dragAndDropHooks={dragAndDropHooks}>
      <TableHeader
          columns={[
              {name: 'Name', uid: 'name'},
              {name: 'Type', uid: 'type'}
          ]}
      >
        {(column) => (
            <Column
                key={column
                    .id}
                align={column
                    .id ===
                'date'
                    ? 'end'
                    : 'start'}
            >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody
          items={list
              .items}
      >
        {(item) => (
            <Row>
            {(columnKey) => (
                <Cell>
                {item[
                    columnKey
                    ]}
              </Cell>
            )}
          </Row>
        )}
      </TableBody>
    </TableView>
</Variant>
<Variant name="Draggable TableView and droppable TableView123">
<DragIntoTable/>
</Variant>
<Variant name="Draggable TableView and droppable TableView1234">
<DragIntoTable/>
</Variant>
<Variant name="Draggable TableView and droppable TableView12345">
<DragIntoTable/>
</Variant>
<Variant name="Handling folder drops">
<TableView
    aria-label="Draggable TableView in drag onto folder example"
    selectionMode="multiple"
    width="size-5000"
    height="size-3600"
    dragAndDropHooks={dragAndDropHooks}
>
      <TableHeader columns={[
          {name: 'Name', uid: 'name'},
          {name: 'Type', uid: 'type'}
      ]}>
        {(column) => (
            <Column
                key={column.id}
                align={column.id === 'date' ? 'end' : 'start'}
            >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody items={list.items}>
        {(item) => (
            <Row>
            {(columnKey) => <Cell>{item[columnKey]}</Cell>}
          </Row>
        )}
      </TableBody>
    </TableView>
</Variant>
<Variant name="Handling folder drops1">
<TableView
    aria-label="Draggable TableView in drag onto folder example"
    selectionMode="multiple"
    width="size-5000"
    height="size-3600"
    dragAndDropHooks={dragAndDropHooks}
>
      <TableHeader columns={[
          {name: 'Name', uid: 'name'},
          {name: 'Type', uid: 'type'}
      ]}>
        {(column) => (
            <Column
                key={column.id}
                align={column.id === 'date' ? 'end' : 'start'}
            >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody items={list.items}>
        {(item) => (
            <Row>
            {(columnKey) => <Cell>{item[columnKey]}</Cell>}
          </Row>
        )}
      </TableBody>
    </TableView>
</Variant>
<Variant name="Handling folder drops12">
<TableView
    aria-label="Draggable TableView in drag onto folder example"
    selectionMode="multiple"
    width="size-5000"
    height="size-3600"
    dragAndDropHooks={dragAndDropHooks}
>
      <TableHeader
          columns={[
              {name: 'Name', uid: 'name'},
              {name: 'Type', uid: 'type'}
          ]}
      >
        {(column) => (
            <Column
                key={column
                    .id}
                align={column
                    .id ===
                'date'
                    ? 'end'
                    : 'start'}
            >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody
          items={list
              .items}
      >
        {(item) => (
            <Row>
            {(columnKey) => (
                <Cell>
                {item[
                    columnKey
                    ]}
              </Cell>
            )}
          </Row>
        )}
      </TableBody>
    </TableView>
</Variant>
<Variant name="Handling folder drops123">
<DragIntoTableFolder/>
</Variant>
<Variant name="Handling folder drops1234">
<DragIntoTableFolder/>
</Variant>
<Variant name="Handling folder drops12345">
<DragIntoTableFolder/>
</Variant>
<Variant name="Reorderable">
<TableView
    aria-label="Reorderable TableView"
    selectionMode="multiple"
    height="size-3600"
    dragAndDropHooks={dragAndDropHooks}
>
      <TableHeader columns={[
          {name: 'Name', uid: 'name'},
          {name: 'Type', uid: 'type'}
      ]}>
        {(column) => (
            <Column
                key={column.id}
                align={column.id === 'date' ? 'end' : 'start'}
            >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody items={list.items}>
        {(item) => (
            <Row>
            {(columnKey) => <Cell>{item[columnKey]}</Cell>}
          </Row>
        )}
      </TableBody>
    </TableView>
</Variant>
<Variant name="Reorderable1">
<TableView
    aria-label="Reorderable TableView"
    selectionMode="multiple"
    height="size-3600"
    dragAndDropHooks={dragAndDropHooks}
>
      <TableHeader columns={[
          {name: 'Name', uid: 'name'},
          {name: 'Type', uid: 'type'}
      ]}>
        {(column) => (
            <Column
                key={column.id}
                align={column.id === 'date' ? 'end' : 'start'}
            >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody items={list.items}>
        {(item) => (
            <Row>
            {(columnKey) => <Cell>{item[columnKey]}</Cell>}
          </Row>
        )}
      </TableBody>
    </TableView>
</Variant>
<Variant name="Reorderable12">
<TableView
    aria-label="Reorderable TableView"
    selectionMode="multiple"
    height="size-3600"
    dragAndDropHooks={dragAndDropHooks}
>
      <TableHeader
          columns={[
              {name: 'Name', uid: 'name'},
              {name: 'Type', uid: 'type'}
          ]}
      >
        {(column) => (
            <Column
                key={column
                    .id}
                align={column
                    .id ===
                'date'
                    ? 'end'
                    : 'start'}
            >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody
          items={list
              .items}
      >
        {(item) => (
            <Row>
            {(columnKey) => (
                <Cell>
                {item[
                    columnKey
                    ]}
              </Cell>
            )}
          </Row>
        )}
      </TableBody>
    </TableView>
</Variant>
<Variant name="Reorderable123">
<ReorderableTable/>
</Variant>
<Variant name="Reorderable1234">
<ReorderableTable/>
</Variant>
<Variant name="Reorderable12345">
<ReorderableTable/>
</Variant>
<Variant name="Bi-directional dragging">
<TableView
    aria-label={props['aria-label']}
    selectionMode="multiple"
    width="size-5000"
    height="size-3600"
    dragAndDropHooks={dragAndDropHooks}
>
      <TableHeader columns={[
          {name: 'Name', uid: 'name'},
          {name: 'Type', uid: 'type'}
      ]}>
        {(column) => (
            <Column
                key={column.id}
                align={column.id === 'date' ? 'end' : 'start'}
            >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody items={list.items}>
        {(item) => (
            <Row>
            {(columnKey) => <Cell>{item[columnKey]}</Cell>}
          </Row>
        )}
      </TableBody>
    </TableView>
</Variant>
<Variant name="Bi-directional dragging1">
<TableView
    aria-label={props['aria-label']}
    selectionMode="multiple"
    width="size-5000"
    height="size-3600"
    dragAndDropHooks={dragAndDropHooks}
>
      <TableHeader columns={[
          {name: 'Name', uid: 'name'},
          {name: 'Type', uid: 'type'}
      ]}>
        {(column) => (
            <Column
                key={column.id}
                align={column.id === 'date' ? 'end' : 'start'}
            >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody items={list.items}>
        {(item) => (
            <Row>
            {(columnKey) => <Cell>{item[columnKey]}</Cell>}
          </Row>
        )}
      </TableBody>
    </TableView>
</Variant>
<Variant name="Bi-directional dragging12">
<TableView
    aria-label={props[
        'aria-label'
        ]}
    selectionMode="multiple"
    width="size-5000"
    height="size-3600"
    dragAndDropHooks={dragAndDropHooks}
>
      <TableHeader
          columns={[
              {name: 'Name', uid: 'name'},
              {name: 'Type', uid: 'type'}
          ]}
      >
        {(column) => (
            <Column
                key={column
                    .id}
                align={column
                    .id ===
                'date'
                    ? 'end'
                    : 'start'}
            >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody
          items={list
              .items}
      >
        {(item) => (
            <Row>
            {(columnKey) => (
                <Cell>
                {item[
                    columnKey
                    ]}
              </Cell>
            )}
          </Row>
        )}
      </TableBody>
    </TableView>
</Variant>
<Variant name="Bi-directional dragging123">
<DragBetweenTablesExample/>
</Variant>
<Variant name="Bi-directional dragging1234">
<DragBetweenTablesExample/>
</Variant>
<Variant name="Bi-directional dragging12345">
<DragBetweenTablesExample/>
</Variant>
<Variant name="Overriding default drop operation">
<TableView
    aria-label="Draggable TableView in default copy operation example"
    selectionMode="multiple"
    width="size-5000"
    height="size-2400"
    dragAndDropHooks={dragAndDropHooks}
>
      <TableHeader columns={[
          {name: 'Name', uid: 'name'},
          {name: 'Type', uid: 'type'}
      ]}>
        {(column) => (
            <Column
                key={column.id}
                align={column.id === 'date' ? 'end' : 'start'}
            >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody items={list.items}>
        {(item) => (
            <Row>
            {(columnKey) => <Cell>{item[columnKey]}</Cell>}
          </Row>
        )}
      </TableBody>
    </TableView>
</Variant>
<Variant name="Overriding default drop operation1">
<TableView
    aria-label="Draggable TableView in default copy operation example"
    selectionMode="multiple"
    width="size-5000"
    height="size-2400"
    dragAndDropHooks={dragAndDropHooks}
>
      <TableHeader columns={[
          {name: 'Name', uid: 'name'},
          {name: 'Type', uid: 'type'}
      ]}>
        {(column) => (
            <Column
                key={column.id}
                align={column.id === 'date' ? 'end' : 'start'}
            >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody items={list.items}>
        {(item) => (
            <Row>
            {(columnKey) => <Cell>{item[columnKey]}</Cell>}
          </Row>
        )}
      </TableBody>
    </TableView>
</Variant>
<Variant name="Overriding default drop operation12">
<TableView
    aria-label="Draggable TableView in default copy operation example"
    selectionMode="multiple"
    width="size-5000"
    height="size-2400"
    dragAndDropHooks={dragAndDropHooks}
>
      <TableHeader
          columns={[
              {name: 'Name', uid: 'name'},
              {name: 'Type', uid: 'type'}
          ]}
      >
        {(column) => (
            <Column
                key={column
                    .id}
                align={column
                    .id ===
                'date'
                    ? 'end'
                    : 'start'}
            >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody
          items={list
              .items}
      >
        {(item) => (
            <Row>
            {(columnKey) => (
                <Cell>
                {item[
                    columnKey
                    ]}
              </Cell>
            )}
          </Row>
        )}
      </TableBody>
    </TableView>
</Variant>
<Variant name="Overriding default drop operation123">
<DragIntoTablesDefaultCopy/>
</Variant>
<Variant name="Overriding default drop operation1234">
<DragIntoTablesDefaultCopy/>
</Variant>
<Variant name="Overriding default drop operation12345">
<DragIntoTablesDefaultCopy/>
</Variant>
<Variant name="Custom drag previews">
<View
    backgroundColor="gray-50"
    padding="size-100"
    borderRadius="medium"
    borderWidth="thin"
    borderColor="blue-500"
>
    <strong>Custom Preview</strong>
    <div>Keys: [{[...keys].join(', ')}]</div>
<div>Dragged: {draggedKey}</div>
</View>
</Variant>
<Variant name="Custom drag previews1">
<View
    backgroundColor="gray-50"
    padding="size-100"
    borderRadius="medium"
    borderWidth="thin"
    borderColor="blue-500"
>
    <strong>Custom Preview</strong>
    <div>Keys: [{[...keys].join(', ')}]</div>
<div>Dragged: {draggedKey}</div>
</View>
</Variant>
<Variant name="Custom drag previews12">
<View
    backgroundColor="gray-50"
    padding="size-100"
    borderRadius="medium"
    borderWidth="thin"
    borderColor="blue-500"
>
    <strong>
    Custom Preview
    </strong>
    <div>
    Keys: [{[
        ...keys
    ].join(', ')}]
        </div>
<div>
          Dragged:{' '}
    {draggedKey}
        </div>
</View>
</Variant>
<Variant name="Custom drag previews123">
<CustomDragPreviewExample/>
</Variant>
<Variant name="Custom drag previews1234">
<CustomDragPreviewExample/>
</Variant>
<Variant name="Custom drag previews12345">
<CustomDragPreviewExample/>
</Variant>
<Variant name="Column alignment">
<TableView aria-label="Example table for column alignment">
  <TableHeader>
    <Column align="start">Name</Column>
    <Column align="center">Type</Column>
    <Column align="end">Size</Column>
  </TableHeader>
  <TableBody>
    <Row>
      <Cell>2021406_Proposal</Cell>
      <Cell>PDF</Cell>
      <Cell>86 KB</Cell>
    </Row>
    <Row>
      <Cell>Budget Template</Cell>
      <Cell>XLS</Cell>
      <Cell>120 KB</Cell>
    </Row>
    <Row>
      <Cell>Onboarding</Cell>
      <Cell>PPT</Cell>
      <Cell>472 KB</Cell>
    </Row>
    <Row>
      <Cell>Welcome</Cell>
      <Cell>TXT</Cell>
      <Cell>24 KB</Cell>
    </Row>
  </TableBody>
</TableView>
</Variant>
<Variant name="Column alignment1">
<TableView aria-label="Example table for column alignment">
  <TableHeader>
    <Column align="start">Name</Column>
    <Column align="center">Type</Column>
    <Column align="end">Size</Column>
  </TableHeader>
  <TableBody>
    <Row>
      <Cell>2021406_Proposal</Cell>
      <Cell>PDF</Cell>
      <Cell>86 KB</Cell>
    </Row>
    <Row>
      <Cell>Budget Template</Cell>
      <Cell>XLS</Cell>
      <Cell>120 KB</Cell>
    </Row>
    <Row>
      <Cell>Onboarding</Cell>
      <Cell>PPT</Cell>
      <Cell>472 KB</Cell>
    </Row>
    <Row>
      <Cell>Welcome</Cell>
      <Cell>TXT</Cell>
      <Cell>24 KB</Cell>
    </Row>
  </TableBody>
</TableView>
</Variant>
<Variant name="Column alignment12">
<TableView aria-label="Example table for column alignment">
  <TableHeader>
    <Column align="start">
      Name
    </Column>
    <Column align="center">
      Type
    </Column>
    <Column align="end">
      Size
    </Column>
  </TableHeader>
  <TableBody>
    <Row>
      <Cell>
        2021406_Proposal
      </Cell>
      <Cell>PDF</Cell>
      <Cell>
        86 KB
      </Cell>
    </Row>
    <Row>
      <Cell>
        Budget Template
      </Cell>
      <Cell>XLS</Cell>
      <Cell>
        120 KB
      </Cell>
    </Row>
    <Row>
      <Cell>
        Onboarding
      </Cell>
      <Cell>PPT</Cell>
      <Cell>
        472 KB
      </Cell>
    </Row>
    <Row>
      <Cell>
        Welcome
      </Cell>
      <Cell>TXT</Cell>
      <Cell>
        24 KB
      </Cell>
    </Row>
  </TableBody>
</TableView>
</Variant>
<Variant name="Column dividers">
<TableView aria-label="Example table for column dividers">
  <TableHeader>
    <Column align="start" showDivider>Name</Column>
    <Column showDivider>Type</Column>
    <Column align="end" showDivider>Size</Column>
  </TableHeader>
  <TableBody>
    <Row>
      <Cell>2021406_Proposal</Cell>
      <Cell>PDF</Cell>
      <Cell>86 KB</Cell>
    </Row>
    <Row>
      <Cell>Budget Template</Cell>
      <Cell>XLS</Cell>
      <Cell>120 KB</Cell>
    </Row>
    <Row>
      <Cell>Onboarding</Cell>
      <Cell>PPT</Cell>
      <Cell>472 KB</Cell>
    </Row>
    <Row>
      <Cell>Welcome</Cell>
      <Cell>TXT</Cell>
      <Cell>24 KB</Cell>
    </Row>
  </TableBody>
</TableView>
</Variant>
<Variant name="Column dividers1">
<TableView aria-label="Example table for column dividers">
  <TableHeader>
    <Column align="start" showDivider>Name</Column>
    <Column showDivider>Type</Column>
    <Column align="end" showDivider>Size</Column>
  </TableHeader>
  <TableBody>
    <Row>
      <Cell>2021406_Proposal</Cell>
      <Cell>PDF</Cell>
      <Cell>86 KB</Cell>
    </Row>
    <Row>
      <Cell>Budget Template</Cell>
      <Cell>XLS</Cell>
      <Cell>120 KB</Cell>
    </Row>
    <Row>
      <Cell>Onboarding</Cell>
      <Cell>PPT</Cell>
      <Cell>472 KB</Cell>
    </Row>
    <Row>
      <Cell>Welcome</Cell>
      <Cell>TXT</Cell>
      <Cell>24 KB</Cell>
    </Row>
  </TableBody>
</TableView>
</Variant>
<Variant name="Column dividers12">
<TableView aria-label="Example table for column dividers">
  <TableHeader>
    <Column
        align="start"
        showDivider
    >
      Name
    </Column>
    <Column
        showDivider
    >
      Type
    </Column>
    <Column
        align="end"
        showDivider
    >
      Size
    </Column>
  </TableHeader>
  <TableBody>
    <Row>
      <Cell>
        2021406_Proposal
      </Cell>
      <Cell>PDF</Cell>
      <Cell>
        86 KB
      </Cell>
    </Row>
    <Row>
      <Cell>
        Budget Template
      </Cell>
      <Cell>XLS</Cell>
      <Cell>
        120 KB
      </Cell>
    </Row>
    <Row>
      <Cell>
        Onboarding
      </Cell>
      <Cell>PPT</Cell>
      <Cell>
        472 KB
      </Cell>
    </Row>
    <Row>
      <Cell>
        Welcome
      </Cell>
      <Cell>TXT</Cell>
      <Cell>
        24 KB
      </Cell>
    </Row>
  </TableBody>
</TableView>
</Variant>
<Variant name="Hide header">
<TableView
    aria-label="Example table with hidden headers"
    maxWidth="size-6000"
    {...props}
>
      <TableHeader columns={[
          {name: 'Name', uid: 'name'},
          {name: 'Type', uid: 'type'}
      ]}>
        {(column) => (
            <Column
                hideHeader={column.key === 'addInfo'}
                align={column.key === 'age' ? 'end' : 'start'}
                showDivider={column.key === 'addInfo'}
            >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
            <Row key={item.id}>
            {(key) =>
                key === 'addInfo'
                    ? (
                        <Cell>
                    <ActionButton aria-label="Add Info" isQuiet>
                      <Add/>
                    </ActionButton>
                  </Cell>
                    )
                    : <Cell>{item[key]}</Cell>}
          </Row>
        )}
      </TableBody>
    </TableView>
</Variant>
<Variant name="Hide header1">
<TableView
    aria-label="Example table with hidden headers"
    maxWidth="size-6000"
    {...props}
>
      <TableHeader columns={[
          {name: 'Name', uid: 'name'},
          {name: 'Type', uid: 'type'}
      ]}>
        {(column) => (
            <Column
                hideHeader={column.key === 'addInfo'}
                align={column.key === 'age' ? 'end' : 'start'}
                showDivider={column.key === 'addInfo'}
            >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
            <Row key={item.id}>
            {(key) =>
                key === 'addInfo'
                    ? (
                        <Cell>
                    <ActionButton
                        aria-label="Add Info"
                        isQuiet
                    >
                      <Add/>
                    </ActionButton>
                  </Cell>
                    )
                    : <Cell>{item[key]}</Cell>}
          </Row>
        )}
      </TableBody>
    </TableView>
</Variant>
<Variant name="Hide header12">
<TableView
    aria-label="Example table with hidden headers"
    maxWidth="size-6000"
    {...props}
>
      <TableHeader
          columns={[
              {name: 'Name', uid: 'name'},
              {name: 'Type', uid: 'type'}
          ]}
      >
        {(column) => (
            <Column
                hideHeader={column
                        .key ===
                    'addInfo'}
                align={column
                    .key ===
                'age'
                    ? 'end'
                    : 'start'}
                showDivider={column
                        .key ===
                    'addInfo'}
            >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody
          items={rows}
      >
        {(item) => (
            <Row
                key={item.id}
            >
            {(key) =>
                key ===
                'addInfo'
                    ? (
                        <Cell>
                    <ActionButton
                        aria-label="Add Info"
                        isQuiet
                    >
                      <Add/>
                    </ActionButton>
                  </Cell>
                    )
                    : (
                        <Cell>
                    {item[
                        key
                        ]}
                  </Cell>
                    )}
          </Row>
        )}
      </TableBody>
    </TableView>
</Variant>
<Variant name="Quiet">
<TableExample isQuiet/>
</Variant>
<Variant name="Quiet1">
<TableExample isQuiet/>
</Variant>
<Variant name="Quiet12">
<TableExample
    isQuiet
/>
</Variant>
<Variant name="Density">
<Flex direction="column" gap="size-300">
    <TableExample density="compact"/>
    <TableExample density="spacious"/>
    </Flex>
</Variant>
<Variant name="Density1">
<Flex direction="column" gap="size-300">
    <TableExample density="compact"/>
    <TableExample density="spacious"/>
    </Flex>
</Variant>
<Variant name="Density12">
<Flex
    direction="column"
    gap="size-300"
>
    <TableExample density="compact"/>
    <TableExample density="spacious"/>
    </Flex>
</Variant>
<Variant name="Overflow mode">
<TableExample overflowMode="wrap"/>
</Variant>
<Variant name="Overflow mode1">
<TableExample overflowMode="wrap"/>
</Variant>
<Variant name="Overflow mode12">
<TableExample overflowMode="wrap"/>
</Variant>
<Variant name="Empty state">
<IllustratedMessage>
    <NotFound/>
    <Heading>No results</Heading>
    <Content>No results found</Content>
    </IllustratedMessage>
</Variant>
<Variant name="Empty state1">
<IllustratedMessage>
    <NotFound/>
    <Heading>No results</Heading>
    <Content>No results found</Content>
    </IllustratedMessage>
</Variant>
<Variant name="Empty state12">
<IllustratedMessage>
    <NotFound/>
    <Heading>
    No results
    </Heading>
    <Content>
    No results found
    </Content>
    </IllustratedMessage>
</Variant>
<Variant name="Nested columns">
<TableView aria-label="Example table for nested columns">
  <TableHeader>
    <Column title="Name">
      <Column isRowHeader>First Name</Column>
      <Column isRowHeader>Last Name</Column>
    </Column>
    <Column title="Information">
      <Column>Age</Column>
      <Column>Birthday</Column>
    </Column>
  </TableHeader>
  <TableBody>
    <Row>
      <Cell>Sam</Cell>
      <Cell>Smith</Cell>
      <Cell>36</Cell>
      <Cell>May 3</Cell>
    </Row>
    <Row>
      <Cell>Julia</Cell>
      <Cell>Jones</Cell>
      <Cell>24</Cell>
      <Cell>February 10</Cell>
    </Row>
    <Row>
      <Cell>Peter</Cell>
      <Cell>Parker</Cell>
      <Cell>28</Cell>
      <Cell>September 7</Cell>
    </Row>
    <Row>
      <Cell>Bruce</Cell>
      <Cell>Wayne</Cell>
      <Cell>32</Cell>
      <Cell>December 18</Cell>
    </Row>
  </TableBody>
</TableView>
</Variant>
<Variant name="Nested columns1">
<TableView aria-label="Example table for nested columns">
  <TableHeader>
    <Column title="Name">
      <Column isRowHeader>First Name</Column>
      <Column isRowHeader>Last Name</Column>
    </Column>
    <Column title="Information">
      <Column>Age</Column>
      <Column>Birthday</Column>
    </Column>
  </TableHeader>
  <TableBody>
    <Row>
      <Cell>Sam</Cell>
      <Cell>Smith</Cell>
      <Cell>36</Cell>
      <Cell>May 3</Cell>
    </Row>
    <Row>
      <Cell>Julia</Cell>
      <Cell>Jones</Cell>
      <Cell>24</Cell>
      <Cell>February 10</Cell>
    </Row>
    <Row>
      <Cell>Peter</Cell>
      <Cell>Parker</Cell>
      <Cell>28</Cell>
      <Cell>September 7</Cell>
    </Row>
    <Row>
      <Cell>Bruce</Cell>
      <Cell>Wayne</Cell>
      <Cell>32</Cell>
      <Cell>December 18</Cell>
    </Row>
  </TableBody>
</TableView>
</Variant>
<Variant name="Nested columns12">
<TableView aria-label="Example table for nested columns">
  <TableHeader>
    <Column title="Name">
      <Column
          isRowHeader
      >
        First Name
      </Column>
      <Column
          isRowHeader
      >
        Last Name
      </Column>
    </Column>
    <Column title="Information">
      <Column>
        Age
      </Column>
      <Column>
        Birthday
      </Column>
    </Column>
  </TableHeader>
  <TableBody>
    <Row>
      <Cell>Sam</Cell>
      <Cell>
        Smith
      </Cell>
      <Cell>36</Cell>
      <Cell>
        May 3
      </Cell>
    </Row>
    <Row>
      <Cell>
        Julia
      </Cell>
      <Cell>
        Jones
      </Cell>
      <Cell>24</Cell>
      <Cell>
        February 10
      </Cell>
    </Row>
    <Row>
      <Cell>
        Peter
      </Cell>
      <Cell>
        Parker
      </Cell>
      <Cell>28</Cell>
      <Cell>
        September 7
      </Cell>
    </Row>
    <Row>
      <Cell>
        Bruce
      </Cell>
      <Cell>
        Wayne
      </Cell>
      <Cell>32</Cell>
      <Cell>
        December 18
      </Cell>
    </Row>
  </TableBody>
</TableView>
</Variant>
<Variant name="Nested columns123">
<TableView aria-label="Example table for nested columns">
  <TableHeader columns={[
      {name: 'Name', uid: 'name'},
      {name: 'Type', uid: 'type'}
  ]}>
    {column => (
        <Column isRowHeader={column.isRowHeader} childColumns={column.children}>
        {column.name}
      </Column>
    )}
  </TableHeader>
  <TableBody items={rows}>
    {item => (
        <Row>
        {columnKey => <Cell>{item[columnKey]}</Cell>}
      </Row>
    )}
  </TableBody>
</TableView>
</Variant>
<Variant name="Nested columns1234">
<TableView aria-label="Example table for nested columns">
  <TableHeader columns={[
      {name: 'Name', uid: 'name'},
      {name: 'Type', uid: 'type'}
  ]}>
    {(column) => (
        <Column
            isRowHeader={column.isRowHeader}
            childColumns={column.children}
        >
        {column.name}
      </Column>
    )}
  </TableHeader>
  <TableBody items={rows}>
    {(item) => (
        <Row>
        {(columnKey) => <Cell>{item[columnKey]}</Cell>}
      </Row>
    )}
  </TableBody>
</TableView>
</Variant>
<Variant name="Nested columns12345">
<TableView aria-label="Example table for nested columns">
  <TableHeader
      columns={[
          {name: 'Name', uid: 'name'},
          {name: 'Type', uid: 'type'}
      ]}
  >
    {(column) => (
        <Column
            isRowHeader={column
                .isRowHeader}
            childColumns={column
                .children}
        >
        {column.name}
      </Column>
    )}
  </TableHeader>
  <TableBody
      items={rows}
  >
    {(item) => (
        <Row>
        {(columnKey) => (
            <Cell>
            {item[
                columnKey
                ]}
          </Cell>
        )}
      </Row>
    )}
  </TableBody>
</TableView>
</Variant>
</Component>
<Component name="TagGroup" docURL="https://react-spectrum.adobe.com/react-spectrum/TagGroup.html">
<Variant name="Example">
<TagGroup aria-label="Static TagGroup items example">
  <Item>News</Item>
  <Item>Travel</Item>
  <Item>Gaming</Item>
  <Item>Shopping</Item>
</TagGroup>
</Variant>
<Variant name="Example1">
<TagGroup aria-label="Static TagGroup items example">
  <Item>News</Item>
  <Item>Travel</Item>
  <Item>Gaming</Item>
  <Item>Shopping</Item>
</TagGroup>
</Variant>
<Variant name="Example12">
<TagGroup aria-label="Static TagGroup items example">
  <Item>News</Item>
  <Item>Travel</Item>
  <Item>Gaming</Item>
  <Item>Shopping</Item>
</TagGroup>
</Variant>
<Variant name="Content">
<TagGroup items={items} aria-label="Dynamic TagGroup items example">
  {item => <Item>{item.name}</Item>}
</TagGroup>
</Variant>
<Variant name="Content1">
<TagGroup
    items={items}
    aria-label="Dynamic TagGroup items example"
>
  {(item) => <Item>{item.name}</Item>}
</TagGroup>
</Variant>
<Variant name="Content12">
<TagGroup
    items={items}
    aria-label="Dynamic TagGroup items example"
>
  {(item) => (
      <Item>
      {item.name}
    </Item>
  )}
</TagGroup>
</Variant>
<Variant name="Labeling">
<TagGroup label="Categories">
  <Item>News</Item>
  <Item>Travel</Item>
  <Item>Gaming</Item>
  <Item>Shopping</Item>
</TagGroup>
</Variant>
<Variant name="Labeling1">
<TagGroup label="Categories">
  <Item>News</Item>
  <Item>Travel</Item>
  <Item>Gaming</Item>
  <Item>Shopping</Item>
</TagGroup>
</Variant>
<Variant name="Labeling12">
<TagGroup label="Categories">
  <Item>News</Item>
  <Item>Travel</Item>
  <Item>Gaming</Item>
  <Item>Shopping</Item>
</TagGroup>
</Variant>
<Variant name="onRemove">
<TagGroup
    items={items}
    onRemove={onRemove} aria-label="Removable TagGroup example">
      {item => <Item>{item.name}</Item>}
    </TagGroup>
</Variant>
<Variant name="onRemove1">
<TagGroup
    items={items}
    onRemove={onRemove} aria-label="Removable TagGroup example"
>
      {(item) => <Item>{item.name}</Item>}
    </TagGroup>
</Variant>
<Variant name="onRemove12">
<TagGroup
    items={items}
    onRemove={onRemove} aria-label="Removable TagGroup example"
>
      {(item) => (
          <Item>
          {item.name}
        </Item>
      )}
    </TagGroup>
</Variant>
<Variant name="onAction">
<TagGroup
    actionLabel="Clear"
    onAction={() => alert('Clear action pressed.')} aria-label="TagGroup with action">
  <Item>News</Item>
  <Item>Travel</Item>
  <Item>Gaming</Item>
  <Item>Shopping</Item>
</TagGroup>
</Variant>
<Variant name="onAction1">
<TagGroup
    actionLabel="Clear"
    onAction={() => alert('Clear action pressed.')} aria-label="TagGroup with action">
  <Item>News</Item>
  <Item>Travel</Item>
  <Item>Gaming</Item>
  <Item>Shopping</Item>
</TagGroup>
</Variant>
<Variant name="onAction12">
<TagGroup
    actionLabel="Clear"
    onAction={() =>
        alert(
            'Clear action pressed.'
        )} aria-label="TagGroup with action"
>
  <Item>News</Item>
  <Item>Travel</Item>
  <Item>Gaming</Item>
  <Item>Shopping</Item>
</TagGroup>
</Variant>
<Variant name="Links">
<TagGroup label="Links">
  <Item href="https://adobe.com/" target="_blank">Adobe</Item>
  <Item href="https://apple.com/" target="_blank">Apple</Item>
  <Item href="https://google.com/" target="_blank">Google</Item>
  <Item href="https://microsoft.com/" target="_blank">Microsoft</Item>
</TagGroup>
</Variant>
<Variant name="Links1">
<TagGroup label="Links">
  <Item href="https://adobe.com/" target="_blank">
    Adobe
  </Item>
  <Item href="https://apple.com/" target="_blank">
    Apple
  </Item>
  <Item href="https://google.com/" target="_blank">
    Google
  </Item>
  <Item href="https://microsoft.com/" target="_blank">
    Microsoft
  </Item>
</TagGroup>
</Variant>
<Variant name="Links12">
<TagGroup label="Links">
  <Item
      href="https://adobe.com/"
      target="_blank"
  >
    Adobe
  </Item>
  <Item
      href="https://apple.com/"
      target="_blank"
  >
    Apple
  </Item>
  <Item
      href="https://google.com/"
      target="_blank"
  >
    Google
  </Item>
  <Item
      href="https://microsoft.com/"
      target="_blank"
  >
    Microsoft
  </Item>
</TagGroup>
</Variant>
<Variant name="With icons">
<TagGroup aria-label="TagGroup with icons example">
  <Item textValue="News">
    <News/>
    <Text>News</Text>
  </Item>
  <Item textValue="Travel">
    <Airplane/>
    <Text>Travel</Text>
  </Item>
  <Item textValue="Gaming">
    <Game/>
    <Text>Gaming</Text>
  </Item>
  <Item textValue="Shopping">
    <ShoppingCart/>
    <Text>Shopping</Text>
  </Item>
</TagGroup>
</Variant>
<Variant name="With icons1">
<TagGroup aria-label="TagGroup with icons example">
  <Item textValue="News">
    <News/>
    <Text>News</Text>
  </Item>
  <Item textValue="Travel">
    <Airplane/>
    <Text>Travel</Text>
  </Item>
  <Item textValue="Gaming">
    <Game/>
    <Text>Gaming</Text>
  </Item>
  <Item textValue="Shopping">
    <ShoppingCart/>
    <Text>Shopping</Text>
  </Item>
</TagGroup>
</Variant>
<Variant name="With icons12">
<TagGroup aria-label="TagGroup with icons example">
  <Item textValue="News">
    <News/>
    <Text>News</Text>
  </Item>
  <Item textValue="Travel">
    <Airplane/>
    <Text>Travel</Text>
  </Item>
  <Item textValue="Gaming">
    <Game/>
    <Text>Gaming</Text>
  </Item>
  <Item textValue="Shopping">
    <ShoppingCart/>
    <Text>
      Shopping
    </Text>
  </Item>
</TagGroup>
</Variant>
<Variant name="With avatars">
<TagGroup aria-label="TagGroup with avatars example">
  <Item textValue="Person 1">
    <Avatar src="https://i.imgur.com/kJOwAdv.png"/>
    <Text>Person 1</Text>
  </Item>
  <Item textValue="Person 2">
    <Avatar src="https://i.imgur.com/kJOwAdv.png"/>
    <Text>Person 2</Text>
  </Item>
  <Item textValue="Person 3">
    <Avatar src="https://i.imgur.com/kJOwAdv.png"/>
    <Text>Person 3</Text>
  </Item>
  <Item textValue="Person 4">
    <Avatar src="https://i.imgur.com/kJOwAdv.png"/>
    <Text>Person 4</Text>
  </Item>
</TagGroup>
</Variant>
<Variant name="With avatars1">
<TagGroup aria-label="TagGroup with avatars example">
  <Item textValue="Person 1">
    <Avatar src="https://i.imgur.com/kJOwAdv.png"/>
    <Text>Person 1</Text>
  </Item>
  <Item textValue="Person 2">
    <Avatar src="https://i.imgur.com/kJOwAdv.png"/>
    <Text>Person 2</Text>
  </Item>
  <Item textValue="Person 3">
    <Avatar src="https://i.imgur.com/kJOwAdv.png"/>
    <Text>Person 3</Text>
  </Item>
  <Item textValue="Person 4">
    <Avatar src="https://i.imgur.com/kJOwAdv.png"/>
    <Text>Person 4</Text>
  </Item>
</TagGroup>
</Variant>
<Variant name="With avatars12">
<TagGroup aria-label="TagGroup with avatars example">
  <Item textValue="Person 1">
    <Avatar src="https://i.imgur.com/kJOwAdv.png"/>
    <Text>
      Person 1
    </Text>
  </Item>
  <Item textValue="Person 2">
    <Avatar src="https://i.imgur.com/kJOwAdv.png"/>
    <Text>
      Person 2
    </Text>
  </Item>
  <Item textValue="Person 3">
    <Avatar src="https://i.imgur.com/kJOwAdv.png"/>
    <Text>
      Person 3
    </Text>
  </Item>
  <Item textValue="Person 4">
    <Avatar src="https://i.imgur.com/kJOwAdv.png"/>
    <Text>
      Person 4
    </Text>
  </Item>
</TagGroup>
</Variant>
<Variant name="Label position and alignment">
<TagGroup label="Categories" labelPosition="side" labelAlign="end">
  <Item>News</Item>
  <Item>Travel</Item>
  <Item>Gaming</Item>
  <Item>Shopping</Item>
</TagGroup>
</Variant>
<Variant name="Label position and alignment1">
<TagGroup
    label="Categories"
    labelPosition="side"
    labelAlign="end"
>
  <Item>News</Item>
  <Item>Travel</Item>
  <Item>Gaming</Item>
  <Item>Shopping</Item>
</TagGroup>
</Variant>
<Variant name="Label position and alignment12">
<TagGroup
    label="Categories"
    labelPosition="side"
    labelAlign="end"
>
  <Item>News</Item>
  <Item>Travel</Item>
  <Item>Gaming</Item>
  <Item>Shopping</Item>
</TagGroup>
</Variant>
<Variant name="Help text">
<TagGroup
    label="Categories"
    items={items}
    onRemove={onRemove}
    aria-label="TagGroup help text example"
    isInvalid={!isValid}
    description="Please include tags for related categories."
    errorMessage="Must contain no more than 3 tags. Please remove some."
>
      {item => <Item>{item.name}</Item>}
    </TagGroup>
</Variant>
<Variant name="Help text1">
<TagGroup
    label="Categories"
    items={items}
    onRemove={onRemove}
    aria-label="TagGroup help text example"
    isInvalid={!isValid}
    description="Please include tags for related categories."
    errorMessage="Must contain no more than 3 tags. Please remove some."
>
      {(item) => <Item>{item.name}</Item>}
    </TagGroup>
</Variant>
<Variant name="Help text12">
<TagGroup
    label="Categories"
    items={items}
    onRemove={onRemove}
    aria-label="TagGroup help text example"
    isInvalid={!isValid}
    description="Please include tags for related categories."
    errorMessage="Must contain no more than 3 tags. Please remove some."
>
      {(item) => (
          <Item>
          {item.name}
        </Item>
      )}
    </TagGroup>
</Variant>
<Variant name="Contextual help">
<TagGroup
    label="Categories"
    contextualHelp={
        <ContextualHelp>
      <Heading>What are tags?</Heading>
      <Content>Tags allow users to categorize content.</Content>
    </ContextualHelp>
    }>
  <Item>News</Item>
  <Item>Travel</Item>
  <Item>Gaming</Item>
  <Item>Shopping</Item>
</TagGroup>
</Variant>
<Variant name="Contextual help1">
<TagGroup
    label="Categories"
    contextualHelp={
        <ContextualHelp>
      <Heading>What are tags?</Heading>
      <Content>
        Tags allow users to categorize content.
      </Content>
    </ContextualHelp>
    }
>
  <Item>News</Item>
  <Item>Travel</Item>
  <Item>Gaming</Item>
  <Item>Shopping</Item>
</TagGroup>
</Variant>
<Variant name="Contextual help12">
<TagGroup
    label="Categories"
    contextualHelp={
        <ContextualHelp>
      <Heading>
        What are tags?
      </Heading>
      <Content>
        Tags allow
        users to
        categorize
        content.
      </Content>
    </ContextualHelp>
    }
>
  <Item>News</Item>
  <Item>Travel</Item>
  <Item>Gaming</Item>
  <Item>Shopping</Item>
</TagGroup>
</Variant>
<Variant name="Limit rows">
<View
    maxWidth="size-3400"
    minHeight="size-2000"
    padding="size-150"
    borderWidth="thin"
    borderColor="dark"
    borderRadius="medium"
>
  <TagGroup
      maxRows={2} aria-label="Static TagGroup items example with maxRows set"
  >
    <Item>News</Item>
    <Item>Travel</Item>
    <Item>Gaming</Item>
    <Item>Shopping</Item>
    <Item>Business</Item>
    <Item>Entertainment</Item>
    <Item>Food</Item>
    <Item>Technology</Item>
    <Item>Politics</Item>
    <Item>Health</Item>
    <Item>Science</Item>
  </TagGroup>
</View>
</Variant>
<Variant name="Limit rows1">
<View
    maxWidth="size-3400"
    minHeight="size-2000"
    padding="size-150"
    borderWidth="thin"
    borderColor="dark"
    borderRadius="medium"
>
  <TagGroup
      maxRows={2} aria-label="Static TagGroup items example with maxRows set"
  >
    <Item>News</Item>
    <Item>Travel</Item>
    <Item>Gaming</Item>
    <Item>Shopping</Item>
    <Item>Business</Item>
    <Item>Entertainment</Item>
    <Item>Food</Item>
    <Item>Technology</Item>
    <Item>Politics</Item>
    <Item>Health</Item>
    <Item>Science</Item>
  </TagGroup>
</View>
</Variant>
<Variant name="Limit rows12">
<View
    maxWidth="size-3400"
    minHeight="size-2000"
    padding="size-150"
    borderWidth="thin"
    borderColor="dark"
    borderRadius="medium"
>
  <TagGroup
      maxRows={2} aria-label="Static TagGroup items example with maxRows set"
  >
    <Item>News</Item>
    <Item>Travel</Item>
    <Item>Gaming</Item>
    <Item>
      Shopping
    </Item>
    <Item>
      Business
    </Item>
    <Item>
      Entertainment
    </Item>
    <Item>Food</Item>
    <Item>
      Technology
    </Item>
    <Item>
      Politics
    </Item>
    <Item>Health</Item>
    <Item>
      Science
    </Item>
  </TagGroup>
</View>
</Variant>
<Variant name="Empty state">
<span>
    No categories.{' '}
    <Link>
        <a href="//react-spectrum.com">Click here</a>
      </Link>{' '}
    to add some.
    </span>
</Variant>
<Variant name="Empty state1">
<span>
    No categories.{' '}
    <Link>
        <a href="//react-spectrum.com">Click here</a>
      </Link>{' '}
    to add some.
    </span>
</Variant>
<Variant name="Empty state12">
<span>
    No categories.{' '}
    <Link>
        <a href="//react-spectrum.com">
          Click here
        </a>
      </Link>{' '}
    to add some.
    </span>
</Variant>
</Component>
</Category>
<Category name="Color">
<Component name="ColorAreabeta" docURL="https://react-spectrum.adobe.com/react-spectrum/ColorArea.html">
<Variant name="Example">
<ColorArea defaultValue="#7f0000"/>
</Variant>
<Variant name="Example1">
<ColorArea defaultValue="#7f0000"/>
</Variant>
<Variant name="Example12">
<ColorArea defaultValue="#7f0000"/>
</Variant>
<Variant name="Value">
<Flex gap="size-300" wrap>
        <div>
        <Label id="hsl-uncontrolled-id">
        x: Saturation, y: Lightness (uncontrolled)
        </Label>
        <ColorArea
            aria-labelledby="hsl-uncontrolled-id"
            defaultValue={value}
            xChannel="saturation"
            yChannel="lightness"
        />
      </div>
      <div>
        <Label id="hsl-controlled-id">
          x: Saturation, y: Lightness (controlled)
        </Label>
        <ColorArea
            aria-labelledby="hsl-controlled-id"
            value={value}
            onChange={setValue}
            xChannel="saturation"
            yChannel="lightness"
        />
      </div>
    </Flex>
</Variant>
<Variant name="Value1">
<Flex gap="size-300" wrap>
    <div>
    <Label id="hsl-uncontrolled-id">
    x: Saturation, y: Lightness (uncontrolled)
    </Label>
    <ColorArea
        aria-labelledby="hsl-uncontrolled-id"
        defaultValue={value}
        xChannel="saturation"
        yChannel="lightness"
    />
</div>
<div>
        <Label id="hsl-controlled-id">
          x: Saturation, y: Lightness (controlled)
        </Label>
        <ColorArea
            aria-labelledby="hsl-controlled-id"
            value={value}
            onChange={setValue}
            xChannel="saturation"
            yChannel="lightness"
        />
      </div>
</Flex>
</Variant>
<Variant name="Value12">
<Flex
    gap="size-300"
    wrap
>
    <div>
    <Label id="hsl-uncontrolled-id">
    x: Saturation,
    y: Lightness
    (uncontrolled)
    </Label>
    <ColorArea
        aria-labelledby="hsl-uncontrolled-id"
        defaultValue={value}
        xChannel="saturation"
        yChannel="lightness"
    />
</div>
<div>
        <Label id="hsl-controlled-id">
          x: Saturation,
          y: Lightness
          (controlled)
        </Label>
        <ColorArea
            aria-labelledby="hsl-controlled-id"
            value={value}
            onChange={setValue}
            xChannel="saturation"
            yChannel="lightness"
        />
      </div>
</Flex>
</Variant>
<Variant name="HTML forms">
<ColorArea xName="red" yName="green"/>
</Variant>
<Variant name="HTML forms1">
<ColorArea xName="red" yName="green"/>
</Variant>
<Variant name="HTML forms12">
<ColorArea
    xName="red"
    yName="green"
/>
</Variant>
<Variant name="Labeling">
<Flex gap="size-300" wrap alignItems="end">
  <ColorArea
      aria-label="Background color"
      defaultValue="hsl(0, 100%, 50%)"
      xChannel="saturation"
      yChannel="lightness"/>
  <div>
    <Label
        id="hsl-aria-labelledby-id">Background color</Label>
    <ColorArea
        aria-labelledby="hsl-aria-labelledby-id"
        defaultValue="hsl(0, 100%, 50%)"
        xChannel="saturation"
        yChannel="lightness"/>
  </div>
</Flex>
</Variant>
<Variant name="Labeling1">
<Flex gap="size-300" wrap alignItems="end">
  <ColorArea
      aria-label="Background color"
      defaultValue="hsl(0, 100%, 50%)"
      xChannel="saturation"
      yChannel="lightness"/>
  <div>
    <Label
        id="hsl-aria-labelledby-id">Background color</Label>
    <ColorArea
        aria-labelledby="hsl-aria-labelledby-id"
        defaultValue="hsl(0, 100%, 50%)"
        xChannel="saturation"
        yChannel="lightness"/>
  </div>
</Flex>
</Variant>
<Variant name="Labeling12">
<Flex
    gap="size-300"
    wrap
    alignItems="end"
>
  <ColorArea
      aria-label="Background color"
      defaultValue="hsl(0, 100%, 50%)"
      xChannel="saturation"
      yChannel="lightness"
  />
  <div>
    <Label id="hsl-aria-labelledby-id">
      Background color
    </Label>
    <ColorArea
        aria-labelledby="hsl-aria-labelledby-id"
        defaultValue="hsl(0, 100%, 50%)"
        xChannel="saturation"
        yChannel="lightness"
    />
  </div>
</Flex>
</Variant>
<Variant name="Events">
<div>
    <ColorArea
        value={currentValue}
        onChange={setCurrentValue}
        onChangeEnd={setFinalValue}
    />
<pre>Current value: {currentValue.toString('hsl')}</pre>
<pre>Final value: {finalValue.toString('hsl')}</pre>
</div>
</Variant>
<Variant name="Events1">
<div>
    <ColorArea
        value={currentValue}
        onChange={setCurrentValue}
        onChangeEnd={setFinalValue}
    />
<pre>Current value: {currentValue.toString('hsl')}</pre>
<pre>Final value: {finalValue.toString('hsl')}</pre>
</div>
</Variant>
<Variant name="Events12">
<div>
    <ColorArea
        value={currentValue}
        onChange={setCurrentValue}
        onChangeEnd={setFinalValue}
    />
<pre>Current value: {currentValue.toString('hsl')}</pre>
<pre>Final value: {finalValue.toString('hsl')}</pre>
</div>
</Variant>
<Variant name="RGBA">
<fieldset style={{border: 0}}>
      <legend>{color.getColorSpace().toUpperCase()}A Example</legend>
      <Flex direction="column">
        <ColorArea
            xChannel={redChannel}
            yChannel={greenChannel}
            value={color}
            onChange={setColor}
        />
        <ColorSlider channel={blueChannel} value={color} onChange={setColor}/>
        <ColorSlider channel="alpha" value={color} onChange={setColor}/>
        <p>Current value: {color.toString('css')}</p>
      </Flex>
    </fieldset>
</Variant>
<Variant name="RGBA1">
<fieldset style={{border: 0}}>
      <legend>
        {color.getColorSpace().toUpperCase()}A Example
      </legend>
      <Flex direction="column">
        <ColorArea
            xChannel={redChannel}
            yChannel={greenChannel}
            value={color}
            onChange={setColor}
        />
        <ColorSlider
            channel={blueChannel}
            value={color}
            onChange={setColor}
        />
        <ColorSlider
            channel="alpha"
            value={color}
            onChange={setColor}
        />
        <p>Current value: {color.toString('css')}</p>
      </Flex>
    </fieldset>
</Variant>
<Variant name="RGBA12">
<fieldset
    style={{
        border: 0
    }}
>
      <legend>
        {color
            .getColorSpace()
            .toUpperCase()}A
        Example
      </legend>
      <Flex direction="column">
        <ColorArea
            xChannel={redChannel}
            yChannel={greenChannel}
            value={color}
            onChange={setColor}
        />
        <ColorSlider
            channel={blueChannel}
            value={color}
            onChange={setColor}
        />
        <ColorSlider
            channel="alpha"
            value={color}
            onChange={setColor}
        />
        <p>
          Current value:
            {' '}
            {color
                .toString(
                    'css'
                )}
        </p>
      </Flex>
    </fieldset>
</Variant>
<Variant name="HSLA">
<fieldset style={{border: 0}}>
      <legend>HSLA Example</legend>
      <Flex
          direction="column">
        <View
            position="relative"
            width="size-2400">
          <Grid
              position="absolute"
              justifyContent="center"
              alignContent="center"
              width="100%"
              height="100%">
            <ColorArea
                xChannel={saturationChannel}
                yChannel={lightnessChannel}
                value={color}
                onChange={setColor}
                size="size-1200"/>
          </Grid>
          <ColorWheel
              value={color}
              onChange={setColor}
              size="size-2400"/>
        </View>
        <ColorSlider channel="alpha" value={color} onChange={setColor}/>
        <p>Current value: {color.toString('hsla')}</p>
      </Flex>
    </fieldset>
</Variant>
<Variant name="HSLA1">
<fieldset style={{border: 0}}>
      <legend>HSLA Example</legend>
      <Flex direction="column">
        <View
            position="relative"
            width="size-2400"
        >
          <Grid
              position="absolute"
              justifyContent="center"
              alignContent="center"
              width="100%"
              height="100%"
          >
            <ColorArea
                xChannel={saturationChannel}
                yChannel={lightnessChannel}
                value={color}
                onChange={setColor}
                size="size-1200"
            />
          </Grid>
          <ColorWheel
              value={color}
              onChange={setColor}
              size="size-2400"
          />
        </View>
        <ColorSlider
            channel="alpha"
            value={color}
            onChange={setColor}
        />
        <p>Current value: {color.toString('hsla')}</p>
      </Flex>
    </fieldset>
</Variant>
<Variant name="HSLA12">
<fieldset
    style={{
        border: 0
    }}
>
      <legend>
        HSLA Example
      </legend>
      <Flex direction="column">
        <View
            position="relative"
            width="size-2400"
        >
          <Grid
              position="absolute"
              justifyContent="center"
              alignContent="center"
              width="100%"
              height="100%"
          >
            <ColorArea
                xChannel={saturationChannel}
                yChannel={lightnessChannel}
                value={color}
                onChange={setColor}
                size="size-1200"
            />
          </Grid>
          <ColorWheel
              value={color}
              onChange={setColor}
              size="size-2400"
          />
        </View>
        <ColorSlider
            channel="alpha"
            value={color}
            onChange={setColor}
        />
        <p>
          Current value:
            {' '}
            {color
                .toString(
                    'hsla'
                )}
        </p>
      </Flex>
    </fieldset>
</Variant>
<Variant name="HSBA">
<fieldset style={{border: 0}}>
      <legend>HSBA Example</legend>
      <Flex
          direction="column">
        <View
            position="relative"
            width="size-2400">
          <Grid
              position="absolute"
              justifyContent="center"
              alignContent="center"
              width="100%"
              height="100%">
            <ColorArea
                xChannel={saturationChannel}
                yChannel={brightnessChannel}
                value={color}
                onChange={setColor}
                size="size-1200"/>
          </Grid>
          <ColorWheel
              value={color}
              onChange={setColor}
              size="size-2400"/>
        </View>
        <ColorSlider channel="alpha" value={color} onChange={setColor}/>
        <p>Current value: {color.toString('hsba')}</p>
      </Flex>
    </fieldset>
</Variant>
<Variant name="HSBA1">
<fieldset style={{border: 0}}>
      <legend>HSBA Example</legend>
      <Flex direction="column">
        <View
            position="relative"
            width="size-2400"
        >
          <Grid
              position="absolute"
              justifyContent="center"
              alignContent="center"
              width="100%"
              height="100%"
          >
            <ColorArea
                xChannel={saturationChannel}
                yChannel={brightnessChannel}
                value={color}
                onChange={setColor}
                size="size-1200"
            />
          </Grid>
          <ColorWheel
              value={color}
              onChange={setColor}
              size="size-2400"
          />
        </View>
        <ColorSlider
            channel="alpha"
            value={color}
            onChange={setColor}
        />
        <p>Current value: {color.toString('hsba')}</p>
      </Flex>
    </fieldset>
</Variant>
<Variant name="HSBA12">
<fieldset
    style={{
        border: 0
    }}
>
      <legend>
        HSBA Example
      </legend>
      <Flex direction="column">
        <View
            position="relative"
            width="size-2400"
        >
          <Grid
              position="absolute"
              justifyContent="center"
              alignContent="center"
              width="100%"
              height="100%"
          >
            <ColorArea
                xChannel={saturationChannel}
                yChannel={brightnessChannel}
                value={color}
                onChange={setColor}
                size="size-1200"
            />
          </Grid>
          <ColorWheel
              value={color}
              onChange={setColor}
              size="size-2400"
          />
        </View>
        <ColorSlider
            channel="alpha"
            value={color}
            onChange={setColor}
        />
        <p>
          Current value:
            {' '}
            {color
                .toString(
                    'hsba'
                )}
        </p>
      </Flex>
    </fieldset>
</Variant>
<Variant name="Disabled">
<ColorArea defaultValue="#7f0000" isDisabled/>
</Variant>
<Variant name="Disabled1">
<ColorArea defaultValue="#7f0000" isDisabled/>
</Variant>
<Variant name="Disabled12">
<ColorArea
    defaultValue="#7f0000"
    isDisabled
/>
</Variant>
<Variant name="Custom Size">
<Flex direction="column" gap="size-300">
  <ColorArea defaultValue="#7f0000" size="size-3600" maxWidth="100%"/>
</Flex>
</Variant>
<Variant name="Custom Size1">
<Flex direction="column" gap="size-300">
  <ColorArea
      defaultValue="#7f0000"
      size="size-3600"
      maxWidth="100%"
  />
</Flex>
</Variant>
<Variant name="Custom Size12">
<Flex
    direction="column"
    gap="size-300"
>
  <ColorArea
      defaultValue="#7f0000"
      size="size-3600"
      maxWidth="100%"
  />
</Flex>
</Variant>
</Component>
<Component name="ColorFieldbeta" docURL="https://react-spectrum.adobe.com/react-spectrum/ColorField.html">
<Variant name="Example">
<ColorField label="Primary Color"/>
</Variant>
<Variant name="Example1">
<ColorField label="Primary Color"/>
</Variant>
<Variant name="Example12">
<ColorField label="Primary Color"/>
</Variant>
<Variant name="Value">
<Flex gap="size-150" wrap>
        <ColorField
            label="Primary Color (Uncontrolled)"
            defaultValue="#e21"/>

        <ColorField
            label="Primary Color (Controlled)"
            value={value}
            onChange={setValue}/>
    </Flex>
</Variant>
<Variant name="Value1">
<Flex gap="size-150" wrap>
    <ColorField
        label="Primary Color (Uncontrolled)"
        defaultValue="#e21"
    />

    <ColorField
        label="Primary Color (Controlled)"
        value={value}
        onChange={setValue}
    />
</Flex>
</Variant>
<Variant name="Value12">
<Flex
    gap="size-150"
    wrap
>
    <ColorField
        label="Primary Color (Uncontrolled)"
        defaultValue="#e21"
    />

    <ColorField
        label="Primary Color (Controlled)"
        value={value}
        onChange={setValue}
    />
</Flex>
</Variant>
<Variant name="HTML forms">
<ColorField label="Color" name="color"/>
</Variant>
<Variant name="HTML forms1">
<ColorField label="Color" name="color"/>
</Variant>
<Variant name="HTML forms12">
<ColorField
    label="Color"
    name="color"
/>
</Variant>
<Variant name="Labeling">
<Flex gap="size-150" wrap>
  <ColorField label="Primary Color"/>
  <ColorField label="Primary Color" isRequired/>
  <ColorField label="Primary Color" isRequired necessityIndicator="label"/>
  <ColorField label="Primary Color" necessityIndicator="label"/>
</Flex>
</Variant>
<Variant name="Labeling1">
<Flex gap="size-150" wrap>
  <ColorField label="Primary Color"/>
  <ColorField label="Primary Color" isRequired/>
  <ColorField
      label="Primary Color"
      isRequired
      necessityIndicator="label"
  />
  <ColorField
      label="Primary Color"
      necessityIndicator="label"
  />
</Flex>
</Variant>
<Variant name="Labeling12">
<Flex
    gap="size-150"
    wrap
>
  <ColorField label="Primary Color"/>
  <ColorField
      label="Primary Color"
      isRequired
  />
  <ColorField
      label="Primary Color"
      isRequired
      necessityIndicator="label"
  />
  <ColorField
      label="Primary Color"
      necessityIndicator="label"
  />
</Flex>
</Variant>
<Variant name="Validation">
<Form validationBehavior="native" maxWidth="size-3000">
  <ColorField label="Color" name="color" isRequired/>  <ButtonGroup>
    <Button type="submit" variant="primary">Submit</Button>
    <Button type="reset" variant="secondary">Reset</Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Validation1">
<Form validationBehavior="native" maxWidth="size-3000">
  <ColorField label="Color" name="color" isRequired/>  <ButtonGroup>
    <Button type="submit" variant="primary">
      Submit
    </Button>
    <Button type="reset" variant="secondary">
      Reset
    </Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Validation12">
<Form
    validationBehavior="native"
    maxWidth="size-3000"
>
  <ColorField
      label="Color"
      name="color"
      isRequired
  />  <ButtonGroup>
    <Button
        type="submit"
        variant="primary"
    >
      Submit
    </Button>
    <Button
        type="reset"
        variant="secondary"
    >
      Reset
    </Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Quiet">
<ColorField label="Primary Color" isQuiet/>
</Variant>
<Variant name="Quiet1">
<ColorField label="Primary Color" isQuiet/>
</Variant>
<Variant name="Quiet12">
<ColorField
    label="Primary Color"
    isQuiet
/>
</Variant>
<Variant name="Disabled">
<ColorField label="Primary Color" isDisabled defaultValue="#e73623"/>
</Variant>
<Variant name="Disabled1">
<ColorField
    label="Primary Color"
    isDisabled
    defaultValue="#e73623"
/>
</Variant>
<Variant name="Disabled12">
<ColorField
    label="Primary Color"
    isDisabled
    defaultValue="#e73623"
/>
</Variant>
<Variant name="Read only">
<ColorField label="Primary Color" isReadOnly defaultValue="#e73623"/>
</Variant>
<Variant name="Read only1">
<ColorField
    label="Primary Color"
    isReadOnly
    defaultValue="#e73623"
/>
</Variant>
<Variant name="Read only12">
<ColorField
    label="Primary Color"
    isReadOnly
    defaultValue="#e73623"
/>
</Variant>
<Variant name="Label alignment and position">
<ColorField label="Primary Color" labelPosition="side" labelAlign="end"/>
</Variant>
<Variant name="Label alignment and position1">
<ColorField
    label="Primary Color"
    labelPosition="side"
    labelAlign="end"
/>
</Variant>
<Variant name="Label alignment and position12">
<ColorField
    label="Primary Color"
    labelPosition="side"
    labelAlign="end"
/>
</Variant>
<Variant name="Help text">
<Flex gap="size-100" wrap>
  <ColorField
      label="Color"
      defaultValue="#abc"
      validationState="valid"
      description="Enter your favorite color."
  />
  <ColorField
      label="Color"
      validationState="invalid"
      errorMessage="Empty input is not allowed."
  />
</Flex>
</Variant>
<Variant name="Help text1">
<Flex gap="size-100" wrap>
  <ColorField
      label="Color"
      defaultValue="#abc"
      validationState="valid"
      description="Enter your favorite color."
  />
  <ColorField
      label="Color"
      validationState="invalid"
      errorMessage="Empty input is not allowed."
  />
</Flex>
</Variant>
<Variant name="Help text12">
<Flex
    gap="size-100"
    wrap
>
  <ColorField
      label="Color"
      defaultValue="#abc"
      validationState="valid"
      description="Enter your favorite color."
  />
  <ColorField
      label="Color"
      validationState="invalid"
      errorMessage="Empty input is not allowed."
  />
</Flex>
</Variant>
<Variant name="Contextual help">
<ColorField
    label="Accent Color"
    defaultValue="#e73623"
    contextualHelp={
        <ContextualHelp>
      <Heading>What is an accent color?</Heading>
      <Content>
        An accent color is the primary foreground color for your theme, used
        across all components.
      </Content>
    </ContextualHelp>
    }
/>
</Variant>
<Variant name="Contextual help1">
<ColorField
    label="Accent Color"
    defaultValue="#e73623"
    contextualHelp={
        <ContextualHelp>
      <Heading>What is an accent color?</Heading>
      <Content>
        An accent color is the primary foreground color
        for your theme, used across all components.
      </Content>
    </ContextualHelp>
    }
/>
</Variant>
<Variant name="Contextual help12">
<ColorField
    label="Accent Color"
    defaultValue="#e73623"
    contextualHelp={
        <ContextualHelp>
      <Heading>
        What is an
        accent color?
      </Heading>
      <Content>
        An accent color
        is the primary
        foreground
        color for your
        theme, used
        across all
        components.
      </Content>
    </ContextualHelp>
    }
/>
</Variant>
<Variant name="Custom width">
<ColorField label="Primary Color" width="size-3600" maxWidth="100%"/>
</Variant>
<Variant name="Custom width1">
<ColorField
    label="Primary Color"
    width="size-3600"
    maxWidth="100%"
/>
</Variant>
<Variant name="Custom width12">
<ColorField
    label="Primary Color"
    width="size-3600"
    maxWidth="100%"
/>
</Variant>
</Component>
<Component name="ColorSliderbeta" docURL="https://react-spectrum.adobe.com/react-spectrum/ColorSlider.html">
<Variant name="Example">
<ColorSlider defaultValue="#7f0000" channel="red"/>
</Variant>
<Variant name="Example1">
<ColorSlider defaultValue="#7f0000" channel="red"/>
</Variant>
<Variant name="Example12">
<ColorSlider
    defaultValue="#7f0000"
    channel="red"
/>
</Variant>
<Variant name="Value">
<Flex gap="size-300" wrap>
        <ColorSlider
            label="Hue (uncontrolled)"
            defaultValue="hsl(0, 100%, 50%)"
            channel="hue"/>
        <ColorSlider
            label="Hue (controlled)"
            value={value}
            onChange={setValue}
            channel="hue"/>
    </Flex>
</Variant>
<Variant name="Value1">
<Flex gap="size-300" wrap>
    <ColorSlider
        label="Hue (uncontrolled)"
        defaultValue="hsl(0, 100%, 50%)"
        channel="hue"
    />
    <ColorSlider
        label="Hue (controlled)"
        value={value}
        onChange={setValue}
        channel="hue"
    />
</Flex>
</Variant>
<Variant name="Value12">
<Flex
    gap="size-300"
    wrap
>
    <ColorSlider
        label="Hue (uncontrolled)"
        defaultValue="hsl(0, 100%, 50%)"
        channel="hue"
    />
    <ColorSlider
        label="Hue (controlled)"
        value={value}
        onChange={setValue}
        channel="hue"
    />
</Flex>
</Variant>
<Variant name="HTML forms">
<ColorSlider
    defaultValue="#7f0000"
    channel="red"
    name="red"/>
</Variant>
<Variant name="HTML forms1">
<ColorSlider
    defaultValue="#7f0000"
    channel="red"
    name="red"/>
</Variant>
<Variant name="HTML forms12">
<ColorSlider
    defaultValue="#7f0000"
    channel="red"
    name="red"/>
</Variant>
<Variant name="Labeling">
<Flex gap="size-300" wrap alignItems="end">
  <ColorSlider
      channel="saturation"
      defaultValue="hsl(0, 100%, 50%)"
      label={null}
  />
  <ColorSlider
      channel="lightness"
      defaultValue="hsl(0, 100%, 50%)"
      showValueLabel={false}
  />
</Flex>
</Variant>
<Variant name="Labeling1">
<Flex gap="size-300" wrap alignItems="end">
  <ColorSlider
      channel="saturation"
      defaultValue="hsl(0, 100%, 50%)"
      label={null}
  />
  <ColorSlider
      channel="lightness"
      defaultValue="hsl(0, 100%, 50%)"
      showValueLabel={false}
  />
</Flex>
</Variant>
<Variant name="Labeling12">
<Flex
    gap="size-300"
    wrap
    alignItems="end"
>
  <ColorSlider
      channel="saturation"
      defaultValue="hsl(0, 100%, 50%)"
      label={null}
  />
  <ColorSlider
      channel="lightness"
      defaultValue="hsl(0, 100%, 50%)"
      showValueLabel={false}
  />
</Flex>
</Variant>
<Variant name="Events">
<div>
    <ColorSlider
        value={currentValue}
        channel="hue"
        onChange={setCurrentValue}
        onChangeEnd={setFinalValue}
    />
<pre>Current value: {currentValue.toString('hsl')}</pre>
<pre>Final value: {finalValue.toString('hsl')}</pre>
</div>
</Variant>
<Variant name="Events1">
<div>
    <ColorSlider
        value={currentValue}
        channel="hue"
        onChange={setCurrentValue}
        onChangeEnd={setFinalValue}
    />
<pre>Current value: {currentValue.toString('hsl')}</pre>
<pre>Final value: {finalValue.toString('hsl')}</pre>
</div>
</Variant>
<Variant name="Events12">
<div>
    <ColorSlider
        value={currentValue}
        channel="hue"
        onChange={setCurrentValue}
        onChangeEnd={setFinalValue}
    />
<pre>Current value: {currentValue.toString('hsl')}</pre>
<pre>Final value: {finalValue.toString('hsl')}</pre>
</div>
</Variant>
<Variant name="RGBA">
<Flex direction="column">
    <ColorSlider channel="red" value={color} onChange={setColor}/>
<ColorSlider channel="green" value={color} onChange={setColor}/>
<ColorSlider channel="blue" value={color} onChange={setColor}/>
<ColorSlider channel="alpha" value={color} onChange={setColor}/>
</Flex>
</Variant>
<Variant name="RGBA1">
<Flex direction="column">
    <ColorSlider
        channel="red"
        value={color}
        onChange={setColor}
    />
<ColorSlider
    channel="green"
    value={color}
    onChange={setColor}
/>
<ColorSlider
    channel="blue"
    value={color}
    onChange={setColor}
/>
<ColorSlider
    channel="alpha"
    value={color}
    onChange={setColor}
/>
</Flex>
</Variant>
<Variant name="RGBA12">
<Flex direction="column">
    <ColorSlider
        channel="red"
        value={color}
        onChange={setColor}
    />
<ColorSlider
    channel="green"
    value={color}
    onChange={setColor}
/>
<ColorSlider
    channel="blue"
    value={color}
    onChange={setColor}
/>
<ColorSlider
    channel="alpha"
    value={color}
    onChange={setColor}
/>
</Flex>
</Variant>
<Variant name="HSLA">
<Flex direction="column">
    <ColorSlider channel="hue" value={color} onChange={setColor}/>
<ColorSlider channel="saturation" value={color} onChange={setColor}/>
<ColorSlider channel="lightness" value={color} onChange={setColor}/>
<ColorSlider channel="alpha" value={color} onChange={setColor}/>
</Flex>
</Variant>
<Variant name="HSLA1">
<Flex direction="column">
    <ColorSlider
        channel="hue"
        value={color}
        onChange={setColor}
    />
<ColorSlider
    channel="saturation"
    value={color}
    onChange={setColor}
/>
<ColorSlider
    channel="lightness"
    value={color}
    onChange={setColor}
/>
<ColorSlider
    channel="alpha"
    value={color}
    onChange={setColor}
/>
</Flex>
</Variant>
<Variant name="HSLA12">
<Flex direction="column">
    <ColorSlider
        channel="hue"
        value={color}
        onChange={setColor}
    />
<ColorSlider
    channel="saturation"
    value={color}
    onChange={setColor}
/>
<ColorSlider
    channel="lightness"
    value={color}
    onChange={setColor}
/>
<ColorSlider
    channel="alpha"
    value={color}
    onChange={setColor}
/>
</Flex>
</Variant>
<Variant name="HSBA">
<>
    <ColorSlider channel="hue" value={color} onChange={setColor}/>
<ColorSlider channel="saturation" value={color} onChange={setColor}/>
<ColorSlider channel="brightness" value={color} onChange={setColor}/>
<ColorSlider channel="alpha" value={color} onChange={setColor}/>
</>
</Variant>
<Variant name="HSBA1">
<>
    <ColorSlider
        channel="hue"
        value={color}
        onChange={setColor}
    />
<ColorSlider
    channel="saturation"
    value={color}
    onChange={setColor}
/>
<ColorSlider
    channel="brightness"
    value={color}
    onChange={setColor}
/>
<ColorSlider
    channel="alpha"
    value={color}
    onChange={setColor}
/>
</>
</Variant>
<Variant name="HSBA12">
<>
    <ColorSlider
        channel="hue"
        value={color}
        onChange={setColor}
    />
<ColorSlider
    channel="saturation"
    value={color}
    onChange={setColor}
/>
<ColorSlider
    channel="brightness"
    value={color}
    onChange={setColor}
/>
<ColorSlider
    channel="alpha"
    value={color}
    onChange={setColor}
/>
</>
</Variant>
<Variant name="Disabled">
<ColorSlider defaultValue="#7f0000" channel="red" isDisabled/>
</Variant>
<Variant name="Disabled1">
<ColorSlider
    defaultValue="#7f0000"
    channel="red"
    isDisabled
/>
</Variant>
<Variant name="Disabled12">
<ColorSlider
    defaultValue="#7f0000"
    channel="red"
    isDisabled
/>
</Variant>
<Variant name="Vertical">
<ColorSlider defaultValue="#7f0000" channel="red" orientation="vertical"/>
</Variant>
<Variant name="Vertical1">
<ColorSlider
    defaultValue="#7f0000"
    channel="red"
    orientation="vertical"
/>
</Variant>
<Variant name="Vertical12">
<ColorSlider
    defaultValue="#7f0000"
    channel="red"
    orientation="vertical"
/>
</Variant>
<Variant name="Custom Size">
<Flex direction="column" gap="size-300">
  <ColorSlider
      defaultValue="#7f0000"
      channel="red"
      orientation="vertical"
      height="size-3600"
  />
  <ColorSlider
      defaultValue="#7f0000"
      channel="red"
      width="size-3600"
      maxWidth="100%"
  />
</Flex>
</Variant>
<Variant name="Custom Size1">
<Flex direction="column" gap="size-300">
  <ColorSlider
      defaultValue="#7f0000"
      channel="red"
      orientation="vertical"
      height="size-3600"
  />
  <ColorSlider
      defaultValue="#7f0000"
      channel="red"
      width="size-3600"
      maxWidth="100%"
  />
</Flex>
</Variant>
<Variant name="Custom Size12">
<Flex
    direction="column"
    gap="size-300"
>
  <ColorSlider
      defaultValue="#7f0000"
      channel="red"
      orientation="vertical"
      height="size-3600"
  />
  <ColorSlider
      defaultValue="#7f0000"
      channel="red"
      width="size-3600"
      maxWidth="100%"
  />
</Flex>
</Variant>
<Variant name="Contextual help">
<ColorSlider
    label="Accent Color"
    channel="hue"
    defaultValue="hsl(120, 100%, 50%)"
    contextualHelp={
        <ContextualHelp>
      <Heading>What is an accent color?</Heading>
      <Content>
        An accent color is the primary foreground color for your theme, used
        across all components.
      </Content>
    </ContextualHelp>
    }
/>
</Variant>
<Variant name="Contextual help1">
<ColorSlider
    label="Accent Color"
    channel="hue"
    defaultValue="hsl(120, 100%, 50%)"
    contextualHelp={
        <ContextualHelp>
      <Heading>What is an accent color?</Heading>
      <Content>
        An accent color is the primary foreground color
        for your theme, used across all components.
      </Content>
    </ContextualHelp>
    }
/>
</Variant>
<Variant name="Contextual help12">
<ColorSlider
    label="Accent Color"
    channel="hue"
    defaultValue="hsl(120, 100%, 50%)"
    contextualHelp={
        <ContextualHelp>
      <Heading>
        What is an
        accent color?
      </Heading>
      <Content>
        An accent color
        is the primary
        foreground
        color for your
        theme, used
        across all
        components.
      </Content>
    </ContextualHelp>
    }
/>
</Variant>
</Component>
<Component name="ColorWheelbeta" docURL="https://react-spectrum.adobe.com/react-spectrum/ColorWheel.html">
<Variant name="Example">
<ColorWheel defaultValue="hsl(30, 100%, 50%)"/>
</Variant>
<Variant name="Example1">
<ColorWheel defaultValue="hsl(30, 100%, 50%)"/>
</Variant>
<Variant name="Example12">
<ColorWheel defaultValue="hsl(30, 100%, 50%)"/>
</Variant>
<Variant name="Value">
<Flex gap="size-300" wrap>
        <Flex direction="column" alignItems="center">
        <label id="label-1">Hue (uncontrolled)</label>
        <ColorWheel
            defaultValue="hsl(30, 100%, 50%)"
            aria-labelledby="label-1"/>
        </Flex>
        <Flex direction="column" alignItems="center">
        <label id="label-2">Hue (controlled)</label>
        <ColorWheel
            value={value}
            onChange={setValue}
            aria-labelledby="label-1"/>
      </Flex>
</Flex>
</Variant>
<Variant name="Value1">
<Flex gap="size-300" wrap>
    <Flex direction="column" alignItems="center">
    <label id="label-1">Hue (uncontrolled)</label>
    <ColorWheel
        defaultValue="hsl(30, 100%, 50%)"
        aria-labelledby="label-1"
    />
    </Flex>
    <Flex direction="column" alignItems="center">
    <label id="label-2">Hue (controlled)</label>
    <ColorWheel
        value={value}
        onChange={setValue}
        aria-labelledby="label-1"
    />
</Flex>
</Flex>
</Variant>
<Variant name="Value12">
<Flex
    gap="size-300"
    wrap
>
    <Flex
        direction="column"
        alignItems="center"
    >
    <label id="label-1">
    Hue
    (uncontrolled)
    </label>
    <ColorWheel
        defaultValue="hsl(30, 100%, 50%)"
        aria-labelledby="label-1"
    />
    </Flex>
    <Flex
        direction="column"
        alignItems="center"
    >
    <label id="label-2">
    Hue
    (controlled)
    </label>
    <ColorWheel
        value={value}
        onChange={setValue}
        aria-labelledby="label-1"
    />
</Flex>
</Flex>
</Variant>
<Variant name="HTML forms">
<ColorWheel name="hue"/>
</Variant>
<Variant name="HTML forms1">
<ColorWheel name="hue"/>
</Variant>
<Variant name="HTML forms12">
<ColorWheel name="hue"/>
</Variant>
<Variant name="Events">
<div>
    <ColorWheel
        value={currentValue}
        onChange={setCurrentValue}
        onChangeEnd={setFinalValue}
    />
<pre>Current value: {currentValue.toString('hsl')}</pre>
<pre>Final value: {finalValue.toString('hsl')}</pre>
</div>
</Variant>
<Variant name="Events1">
<div>
    <ColorWheel
        value={currentValue}
        onChange={setCurrentValue}
        onChangeEnd={setFinalValue}
    />
<pre>Current value: {currentValue.toString('hsl')}</pre>
<pre>Final value: {finalValue.toString('hsl')}</pre>
</div>
</Variant>
<Variant name="Events12">
<div>
    <ColorWheel
        value={currentValue}
        onChange={setCurrentValue}
        onChangeEnd={setFinalValue}
    />
<pre>Current value: {currentValue.toString('hsl')}</pre>
<pre>Final value: {finalValue.toString('hsl')}</pre>
</div>
</Variant>
<Variant name="Disabled">
<ColorWheel isDisabled/>
</Variant>
<Variant name="Disabled1">
<ColorWheel isDisabled/>
</Variant>
<Variant name="Disabled12">
<ColorWheel isDisabled/>
</Variant>
<Variant name="Size">
<ColorWheel size="size-1600"/>
</Variant>
<Variant name="Size1">
<ColorWheel size="size-1600"/>
</Variant>
<Variant name="Size12">
<ColorWheel size="size-1600"/>
</Variant>
</Component>
</Category>
<Category name="Date and Time">
<Component name="Calendar" docURL="https://react-spectrum.adobe.com/react-spectrum/Calendar.html">
<Variant name="Example">
<Calendar aria-label="Event date"/>
</Variant>
<Variant name="Example1">
<Calendar aria-label="Event date"/>
</Variant>
<Variant name="Example12">
<Calendar aria-label="Event date"/>
</Variant>
<Variant name="Value">
<Flex gap="size-300" wrap>
        <Calendar
            aria-label="Date (uncontrolled)"
            defaultValue={parseDate('2020-02-03')}/>
      <Calendar
          aria-label="Date (controlled)"
          value={value}
          onChange={setValue}/>
    </Flex>
</Variant>
<Variant name="Value1">
<Flex gap="size-300" wrap>
    <Calendar
        aria-label="Date (uncontrolled)"
        defaultValue={parseDate('2020-02-03')}
    />
<Calendar
    aria-label="Date (controlled)"
    value={value}
    onChange={setValue}
/>
</Flex>
</Variant>
<Variant name="Value12">
<Flex
    gap="size-300"
    wrap
>
    <Calendar
        aria-label="Date (uncontrolled)"
        defaultValue={parseDate(
            '2020-02-03'
        )}
    />
<Calendar
    aria-label="Date (controlled)"
    value={value}
    onChange={setValue}
/>
</Flex>
</Variant>
<Variant name="International calendars">
<Provider locale="hi-IN-u-ca-indian">
    <Calendar aria-label="Date" value={date} onChange={setDate}/>
<p>Selected date: {date?.toString()}</p>
</Provider>
</Variant>
<Variant name="International calendars1">
<Provider locale="hi-IN-u-ca-indian">
    <Calendar
        aria-label="Date"
        value={date}
        onChange={setDate}
    />
<p>Selected date: {date?.toString()}</p>
</Provider>
</Variant>
<Variant name="International calendars12">
<Provider locale="hi-IN-u-ca-indian">
    <Calendar
        aria-label="Date"
        value={date}
        onChange={setDate}
    />
<p>
        Selected date:
    {' '}
    {date
        ?.toString()}
      </p>
</Provider>
</Variant>
<Variant name="Events">
<>
    <Calendar aria-label="Event date" value={date} onChange={setDate}/>
<p>Selected date: {formatter.format(date.toDate(getLocalTimeZone()))}</p>
</>
</Variant>
<Variant name="Events1">
<>
    <Calendar
        aria-label="Event date"
        value={date}
        onChange={setDate}
    />
<p>
        Selected date:{' '}
    {formatter.format(date.toDate(getLocalTimeZone()))}
      </p>
</>
</Variant>
<Variant name="Events12">
<>
    <Calendar
        aria-label="Event date"
        value={date}
        onChange={setDate}
    />
<p>
        Selected date:
    {' '}
    {formatter
        .format(
            date.toDate(
                getLocalTimeZone()
            )
        )}
      </p>
</>
</Variant>
<Variant name="Validation">
<Calendar
    aria-label="Appointment date"
    minValue={today(getLocalTimeZone())}
/>
</Variant>
<Variant name="Validation1">
<Calendar
    aria-label="Appointment date"
    minValue={today(getLocalTimeZone())}
/>
</Variant>
<Variant name="Validation12">
<Calendar
    aria-label="Appointment date"
    minValue={today(
        getLocalTimeZone()
    )}
/>
</Variant>
<Variant name="Unavailable dates">
<Calendar
    aria-label="Appointment date"
    minValue={today(getLocalTimeZone())}
    isDateUnavailable={isDateUnavailable}
/>
</Variant>
<Variant name="Unavailable dates1">
<Calendar
    aria-label="Appointment date"
    minValue={today(getLocalTimeZone())}
    isDateUnavailable={isDateUnavailable}
/>
</Variant>
<Variant name="Unavailable dates12">
<Calendar
    aria-label="Appointment date"
    minValue={today(
        getLocalTimeZone()
    )}
    isDateUnavailable={isDateUnavailable}
/>
</Variant>
<Variant name="Controlling the focused date">
<Flex direction="column" alignItems="start" gap="size-200">
    <ActionButton onPress={() => setFocusedDate(defaultDate)}>
        Reset focused date
      </ActionButton>
<Calendar focusedValue={focusedDate} onFocusChange={setFocusedDate}/>
</Flex>
</Variant>
<Variant name="Controlling the focused date1">
<Flex
    direction="column"
    alignItems="start"
    gap="size-200"
>
    <ActionButton
        onPress={() => setFocusedDate(defaultDate)}
    >
        Reset focused date
      </ActionButton>
<Calendar
    focusedValue={focusedDate}
    onFocusChange={setFocusedDate}
/>
</Flex>
</Variant>
<Variant name="Controlling the focused date12">
<Flex
    direction="column"
    alignItems="start"
    gap="size-200"
>
    <ActionButton
        onPress={() =>
            setFocusedDate(
                defaultDate
            )}
    >
        Reset focused
        date
      </ActionButton>
<Calendar
    focusedValue={focusedDate}
    onFocusChange={setFocusedDate}
/>
</Flex>
</Variant>
<Variant name="Disabled">
<Calendar aria-label="Event date" isDisabled/>
</Variant>
<Variant name="Disabled1">
<Calendar aria-label="Event date" isDisabled/>
</Variant>
<Variant name="Disabled12">
<Calendar
    aria-label="Event date"
    isDisabled
/>
</Variant>
<Variant name="Read only">
<Calendar
    aria-label="Event date"
    value={today(getLocalTimeZone())}
    isReadOnly
/>
</Variant>
<Variant name="Read only1">
<Calendar
    aria-label="Event date"
    value={today(getLocalTimeZone())}
    isReadOnly
/>
</Variant>
<Variant name="Read only12">
<Calendar
    aria-label="Event date"
    value={today(
        getLocalTimeZone()
    )}
    isReadOnly
/>
</Variant>
<Variant name="Visible months">
<div style={{maxWidth: '100%', overflow: 'auto'}}>
  <Calendar aria-label="Event date" visibleMonths={3}/>
</div>
</Variant>
<Variant name="Visible months1">
<div style={{maxWidth: '100%', overflow: 'auto'}}>
  <Calendar aria-label="Event date" visibleMonths={3}/>
</div>
</Variant>
<Variant name="Visible months12">
<div
    style={{
        maxWidth: '100%',
        overflow: 'auto'
    }}
>
  <Calendar
      aria-label="Event date"
      visibleMonths={3}
  />
</div>
</Variant>
<Variant name="Page behavior">
<div style={{maxWidth: '100%', overflow: 'auto'}}>
  <Calendar aria-label="Event date" visibleMonths={3} pageBehavior="single"/>
</div>
</Variant>
<Variant name="Page behavior1">
<div style={{maxWidth: '100%', overflow: 'auto'}}>
  <Calendar
      aria-label="Event date"
      visibleMonths={3}
      pageBehavior="single"
  />
</div>
</Variant>
<Variant name="Page behavior12">
<div
    style={{
        maxWidth: '100%',
        overflow: 'auto'
    }}
>
  <Calendar
      aria-label="Event date"
      visibleMonths={3}
      pageBehavior="single"
  />
</div>
</Variant>
</Component>
<Component name="DateField" docURL="https://react-spectrum.adobe.com/react-spectrum/DateField.html">
<Variant name="Example">
<DateField label="Event date"/>
</Variant>
<Variant name="Example1">
<DateField label="Event date"/>
</Variant>
<Variant name="Example12">
<DateField label="Event date"/>
</Variant>
<Variant name="Value">
<Flex gap="size-150" wrap>
        <DateField
            label="Date (uncontrolled)"
            defaultValue={parseDate('2020-02-03')}/>
      <DateField
          label="Date (controlled)"
          value={value}
          onChange={setValue}/>
    </Flex>
</Variant>
<Variant name="Value1">
<Flex gap="size-150" wrap>
    <DateField
        label="Date (uncontrolled)"
        defaultValue={parseDate('2020-02-03')}
    />
<DateField
    label="Date (controlled)"
    value={value}
    onChange={setValue}
/>
</Flex>
</Variant>
<Variant name="Value12">
<Flex
    gap="size-150"
    wrap
>
    <DateField
        label="Date (uncontrolled)"
        defaultValue={parseDate(
            '2020-02-03'
        )}
    />
<DateField
    label="Date (controlled)"
    value={value}
    onChange={setValue}
/>
</Flex>
</Variant>
<Variant name="Time zones">
<DateField
    label="Event date"
    defaultValue={parseZonedDateTime('2022-11-07T00:45[America/Los_Angeles]')}
/>
</Variant>
<Variant name="Time zones1">
<DateField
    label="Event date"
    defaultValue={parseZonedDateTime(
        '2022-11-07T00:45[America/Los_Angeles]'
    )}
/>
</Variant>
<Variant name="Time zones12">
<DateField
    label="Event date"
    defaultValue={parseZonedDateTime(
        '2022-11-07T00:45[America/Los_Angeles]'
    )}
/>
</Variant>
<Variant name="Time zones123">
<DateField
    label="Event date"
    defaultValue={parseAbsoluteToLocal('2021-11-07T07:45:00Z')}
/>
</Variant>
<Variant name="Time zones1234">
<DateField
    label="Event date"
    defaultValue={parseAbsoluteToLocal(
        '2021-11-07T07:45:00Z'
    )}
/>
</Variant>
<Variant name="Time zones12345">
<DateField
    label="Event date"
    defaultValue={parseAbsoluteToLocal(
        '2021-11-07T07:45:00Z'
    )}
/>
</Variant>
<Variant name="Granularity">
<Flex gap="size-150" wrap>
    <DateField
        label="Date and time"
        granularity="second"
        value={date}
        onChange={setDate}
    />
<DateField
    label="Date"
    granularity="day"
    value={date}
    onChange={setDate}
/>
</Flex>
</Variant>
<Variant name="Granularity1">
<Flex gap="size-150" wrap>
    <DateField
        label="Date and time"
        granularity="second"
        value={date}
        onChange={setDate}
    />
<DateField
    label="Date"
    granularity="day"
    value={date}
    onChange={setDate}
/>
</Flex>
</Variant>
<Variant name="Granularity12">
<Flex
    gap="size-150"
    wrap
>
    <DateField
        label="Date and time"
        granularity="second"
        value={date}
        onChange={setDate}
    />
<DateField
    label="Date"
    granularity="day"
    value={date}
    onChange={setDate}
/>
</Flex>
</Variant>
<Variant name="Granularity123">
<Flex gap="size-150" wrap>
  <DateField
      label="Event date"
      granularity="second"/>
  <DateField
      label="Event date"
      placeholderValue={now('America/New_York')}
      granularity="second"/>
</Flex>
</Variant>
<Variant name="Granularity1234">
<Flex gap="size-150" wrap>
  <DateField
      label="Event date"
      granularity="second"/>
  <DateField
      label="Event date"
      placeholderValue={now('America/New_York')}
      granularity="second"/>
</Flex>
</Variant>
<Variant name="Granularity12345">
<Flex
    gap="size-150"
    wrap
>
  <DateField
      label="Event date"
      granularity="second"
  />
  <DateField
      label="Event date"
      placeholderValue={now(
          'America/New_York'
      )}
      granularity="second"
  />
</Flex>
</Variant>
<Variant name="International calendars">
<Provider locale="hi-IN-u-ca-indian">
    <DateField label="Date" value={date} onChange={setDate}/>
<p>Selected date: {date?.toString()}</p>
</Provider>
</Variant>
<Variant name="International calendars1">
<Provider locale="hi-IN-u-ca-indian">
    <DateField
        label="Date"
        value={date}
        onChange={setDate}
    />
<p>Selected date: {date?.toString()}</p>
</Provider>
</Variant>
<Variant name="International calendars12">
<Provider locale="hi-IN-u-ca-indian">
    <DateField
        label="Date"
        value={date}
        onChange={setDate}
    />
<p>
        Selected date:
    {' '}
    {date
        ?.toString()}
      </p>
</Provider>
</Variant>
<Variant name="HTML forms">
<DateField label="Birth date" name="birthday"/>
</Variant>
<Variant name="HTML forms1">
<DateField label="Birth date" name="birthday"/>
</Variant>
<Variant name="HTML forms12">
<DateField
    label="Birth date"
    name="birthday"
/>
</Variant>
<Variant name="Labeling">
<Flex gap="size-150" wrap>
  <DateField label="Birth date"/>
  <DateField label="Birth date" isRequired necessityIndicator="icon"/>
  <DateField label="Birth date" isRequired necessityIndicator="label"/>
  <DateField label="Birth date" necessityIndicator="label"/>
</Flex>
</Variant>
<Variant name="Labeling1">
<Flex gap="size-150" wrap>
  <DateField label="Birth date"/>
  <DateField
      label="Birth date"
      isRequired
      necessityIndicator="icon"
  />
  <DateField
      label="Birth date"
      isRequired
      necessityIndicator="label"
  />
  <DateField
      label="Birth date"
      necessityIndicator="label"
  />
</Flex>
</Variant>
<Variant name="Labeling12">
<Flex
    gap="size-150"
    wrap
>
  <DateField label="Birth date"/>
  <DateField
      label="Birth date"
      isRequired
      necessityIndicator="icon"
  />
  <DateField
      label="Birth date"
      isRequired
      necessityIndicator="label"
  />
  <DateField
      label="Birth date"
      necessityIndicator="label"
  />
</Flex>
</Variant>
<Variant name="Events">
<>
    <DateField label="Birth date" value={date} onChange={setDate}/>
<p>
        Selected date:{' '}
    {date ? formatter.format(date.toDate(getLocalTimeZone())) : '--'}
      </p>
</>
</Variant>
<Variant name="Events1">
<>
    <DateField
        label="Birth date"
        value={date}
        onChange={setDate}
    />
<p>
        Selected date: {date
    ? formatter.format(
        date.toDate(getLocalTimeZone())
    )
    : '--'}
      </p>
</>
</Variant>
<Variant name="Events12">
<>
    <DateField
        label="Birth date"
        value={date}
        onChange={setDate}
    />
<p>
        Selected date:
    {' '}
    {date
        ? formatter
            .format(
                date
                    .toDate(
                        getLocalTimeZone()
                    )
            )
        : '--'}
      </p>
</>
</Variant>
<Variant name="Validation">
<Form validationBehavior="native" maxWidth="size-3000">
  <DateField label="Appointment date" name="date" isRequired/>  <ButtonGroup>
    <Button type="submit" variant="primary">Submit</Button>
    <Button type="reset" variant="secondary">Reset</Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Validation1">
<Form validationBehavior="native" maxWidth="size-3000">
  <DateField
      label="Appointment date"
      name="date"
      isRequired
  />  <ButtonGroup>
    <Button type="submit" variant="primary">
      Submit
    </Button>
    <Button type="reset" variant="secondary">
      Reset
    </Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Validation12">
<Form
    validationBehavior="native"
    maxWidth="size-3000"
>
  <DateField
      label="Appointment date"
      name="date"
      isRequired
  />  <ButtonGroup>
    <Button
        type="submit"
        variant="primary"
    >
      Submit
    </Button>
    <Button
        type="reset"
        variant="secondary"
    >
      Reset
    </Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Minimum and maximum values">
<Form validationBehavior="native" maxWidth="size-3000">
  <DateField
      label="Appointment date"
      minValue={today(getLocalTimeZone())} defaultValue={parseDate('2022-02-03')}/>
  <ButtonGroup>
    <Button type="submit" variant="primary">Submit</Button>
    <Button type="reset" variant="secondary">Reset</Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Minimum and maximum values1">
<Form validationBehavior="native" maxWidth="size-3000">
  <DateField
      label="Appointment date"
      minValue={today(getLocalTimeZone())} defaultValue={parseDate('2022-02-03')}/>
  <ButtonGroup>
    <Button type="submit" variant="primary">Submit</Button>
    <Button type="reset" variant="secondary">Reset</Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Minimum and maximum values12">
<Form
    validationBehavior="native"
    maxWidth="size-3000"
>
  <DateField
      label="Appointment date"
      minValue={today(
          getLocalTimeZone()
      )} defaultValue={parseDate(
      '2022-02-03'
  )}
  />
  <ButtonGroup>
    <Button
        type="submit"
        variant="primary"
    >
      Submit
    </Button>
    <Button
        type="reset"
        variant="secondary"
    >
      Reset
    </Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Custom validation">
<Form validationBehavior="native" maxWidth="size-3000">
    <DateField
        label="Appointment date"
        validate={(date) =>
            date && isWeekend(date, locale) ? 'We are closed on weekends.' : null}
        defaultValue={parseDate('2023-10-28')}
    />
<ButtonGroup>
        <Button type="submit" variant="primary">Submit</Button>
        <Button type="reset" variant="secondary">Reset</Button>
      </ButtonGroup>
</Form>
</Variant>
<Variant name="Custom validation1">
<Form validationBehavior="native" maxWidth="size-3000">
    <DateField
        label="Appointment date"
        validate={(date) =>
            date && isWeekend(date, locale)
                ? 'We are closed on weekends.'
                : null} defaultValue={parseDate('2023-10-28')}
    />
<ButtonGroup>
        <Button type="submit" variant="primary">
          Submit
        </Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </ButtonGroup>
</Form>
</Variant>
<Variant name="Custom validation12">
<Form
    validationBehavior="native"
    maxWidth="size-3000"
>
    <DateField
        label="Appointment date"
        validate={(date) =>
            date &&
            isWeekend(
                date,
                locale
            )
                ? 'We are closed on weekends.'
                : null} defaultValue={parseDate(
        '2023-10-28'
    )}
    />
<ButtonGroup>
        <Button
            type="submit"
            variant="primary"
        >
          Submit
        </Button>
        <Button
            type="reset"
            variant="secondary"
        >
          Reset
        </Button>
      </ButtonGroup>
</Form>
</Variant>
<Variant name="Quiet">
<DateField label="Birth date" isQuiet/>
</Variant>
<Variant name="Quiet1">
<DateField label="Birth date" isQuiet/>
</Variant>
<Variant name="Quiet12">
<DateField
    label="Birth date"
    isQuiet
/>
</Variant>
<Variant name="Disabled">
<DateField label="Birth date" isDisabled/>
</Variant>
<Variant name="Disabled1">
<DateField label="Birth date" isDisabled/>
</Variant>
<Variant name="Disabled12">
<DateField
    label="Birth date"
    isDisabled
/>
</Variant>
<Variant name="Read only">
<DateField label="Birth date" value={today(getLocalTimeZone())} isReadOnly/>
</Variant>
<Variant name="Read only1">
<DateField
    label="Birth date"
    value={today(getLocalTimeZone())}
    isReadOnly
/>
</Variant>
<Variant name="Read only12">
<DateField
    label="Birth date"
    value={today(
        getLocalTimeZone()
    )}
    isReadOnly
/>
</Variant>
<Variant name="Label alignment and position">
<DateField label="Birth date" labelPosition="side" labelAlign="end"/>
</Variant>
<Variant name="Label alignment and position1">
<DateField
    label="Birth date"
    labelPosition="side"
    labelAlign="end"
/>
</Variant>
<Variant name="Label alignment and position12">
<DateField
    label="Birth date"
    labelPosition="side"
    labelAlign="end"
/>
</Variant>
<Variant name="Help text">
<Flex gap="size-100" wrap>
  <DateField
      label="Date"
      defaultValue={today(getLocalTimeZone())}
      validationState="valid"
      description="Select a meeting date."
  />
  <DateField
      label="Date"
      validationState="invalid"
      errorMessage="Empty input is not allowed."
  />
</Flex>
</Variant>
<Variant name="Help text1">
<Flex gap="size-100" wrap>
  <DateField
      label="Date"
      defaultValue={today(getLocalTimeZone())}
      validationState="valid"
      description="Select a meeting date."
  />
  <DateField
      label="Date"
      validationState="invalid"
      errorMessage="Empty input is not allowed."
  />
</Flex>
</Variant>
<Variant name="Help text12">
<Flex
    gap="size-100"
    wrap
>
  <DateField
      label="Date"
      defaultValue={today(
          getLocalTimeZone()
      )}
      validationState="valid"
      description="Select a meeting date."
  />
  <DateField
      label="Date"
      validationState="invalid"
      errorMessage="Empty input is not allowed."
  />
</Flex>
</Variant>
<Variant name="Help text123">
<DateField label="Birth date" showFormatHelpText/>
</Variant>
<Variant name="Help text1234">
<DateField label="Birth date" showFormatHelpText/>
</Variant>
<Variant name="Help text12345">
<DateField
    label="Birth date"
    showFormatHelpText
/>
</Variant>
<Variant name="Contextual help">
<DateField
    label="Appointment date"
    contextualHelp={
        <ContextualHelp variant="info">
      <Heading>Appointment changes</Heading>
      <Content>
        Your appointment date cannot be changed once it is scheduled.
      </Content>
    </ContextualHelp>
    }
/>
</Variant>
<Variant name="Contextual help1">
<DateField
    label="Appointment date"
    contextualHelp={
        <ContextualHelp variant="info">
      <Heading>Appointment changes</Heading>
      <Content>
        Your appointment date cannot be changed once it is
        scheduled.
      </Content>
    </ContextualHelp>
    }
/>
</Variant>
<Variant name="Contextual help12">
<DateField
    label="Appointment date"
    contextualHelp={
        <ContextualHelp variant="info">
      <Heading>
        Appointment
        changes
      </Heading>
      <Content>
        Your
        appointment
        date cannot be
        changed once it
        is scheduled.
      </Content>
    </ContextualHelp>
    }
/>
</Variant>
<Variant name="Placeholder value">
<DateField
    label="Birth date"
    placeholderValue={new CalendarDate(1980, 1, 1)}
/>
</Variant>
<Variant name="Placeholder value1">
<DateField
    label="Birth date"
    placeholderValue={new CalendarDate(1980, 1, 1)}
/>
</Variant>
<Variant name="Placeholder value12">
<DateField
    label="Birth date"
    placeholderValue={new CalendarDate(
        1980,
        1,
        1
    )}
/>
</Variant>
<Variant name="Hide time zone">
<DateField
    label="Appointment time"
    defaultValue={parseZonedDateTime('2022-11-07T10:45[America/Los_Angeles]')}
    hideTimeZone/>
</Variant>
<Variant name="Hide time zone1">
<DateField
    label="Appointment time"
    defaultValue={parseZonedDateTime(
        '2022-11-07T10:45[America/Los_Angeles]'
    )}
    hideTimeZone
/>
</Variant>
<Variant name="Hide time zone12">
<DateField
    label="Appointment time"
    defaultValue={parseZonedDateTime(
        '2022-11-07T10:45[America/Los_Angeles]'
    )}
    hideTimeZone
/>
</Variant>
<Variant name="Hour cycle">
<DateField
    label="Appointment time"
    granularity="minute"
    hourCycle={24}/>
</Variant>
<Variant name="Hour cycle1">
<DateField
    label="Appointment time"
    granularity="minute"
    hourCycle={24}/>
</Variant>
<Variant name="Hour cycle12">
<DateField
    label="Appointment time"
    granularity="minute"
    hourCycle={24}
/>
</Variant>
</Component>
<Component name="DatePicker" docURL="https://react-spectrum.adobe.com/react-spectrum/DatePicker.html">
<Variant name="Example">
<DatePicker label="Event date"/>
</Variant>
<Variant name="Example1">
<DatePicker label="Event date"/>
</Variant>
<Variant name="Example12">
<DatePicker label="Event date"/>
</Variant>
<Variant name="Value">
<Flex gap="size-150" wrap>
        <DatePicker
            label="Date (uncontrolled)"
            defaultValue={parseDate('2020-02-03')}/>
      <DatePicker
          label="Date (controlled)"
          value={value}
          onChange={setValue}/>
    </Flex>
</Variant>
<Variant name="Value1">
<Flex gap="size-150" wrap>
    <DatePicker
        label="Date (uncontrolled)"
        defaultValue={parseDate('2020-02-03')}
    />
<DatePicker
    label="Date (controlled)"
    value={value}
    onChange={setValue}
/>
</Flex>
</Variant>
<Variant name="Value12">
<Flex
    gap="size-150"
    wrap
>
    <DatePicker
        label="Date (uncontrolled)"
        defaultValue={parseDate(
            '2020-02-03'
        )}
    />
<DatePicker
    label="Date (controlled)"
    value={value}
    onChange={setValue}
/>
</Flex>
</Variant>
<Variant name="Time zones">
<DatePicker
    label="Event date"
    defaultValue={parseZonedDateTime('2022-11-07T00:45[America/Los_Angeles]')}
/>
</Variant>
<Variant name="Time zones1">
<DatePicker
    label="Event date"
    defaultValue={parseZonedDateTime(
        '2022-11-07T00:45[America/Los_Angeles]'
    )}
/>
</Variant>
<Variant name="Time zones12">
<DatePicker
    label="Event date"
    defaultValue={parseZonedDateTime(
        '2022-11-07T00:45[America/Los_Angeles]'
    )}
/>
</Variant>
<Variant name="Time zones123">
<DatePicker
    label="Event date"
    defaultValue={parseAbsoluteToLocal('2021-11-07T07:45:00Z')}
/>
</Variant>
<Variant name="Time zones1234">
<DatePicker
    label="Event date"
    defaultValue={parseAbsoluteToLocal(
        '2021-11-07T07:45:00Z'
    )}
/>
</Variant>
<Variant name="Time zones12345">
<DatePicker
    label="Event date"
    defaultValue={parseAbsoluteToLocal(
        '2021-11-07T07:45:00Z'
    )}
/>
</Variant>
<Variant name="Granularity">
<Flex gap="size-150" wrap>
    <DatePicker
        label="Date and time"
        granularity="second"
        value={date}
        onChange={setDate}
    />
<DatePicker
    label="Date"
    granularity="day"
    value={date}
    onChange={setDate}
/>
</Flex>
</Variant>
<Variant name="Granularity1">
<Flex gap="size-150" wrap>
    <DatePicker
        label="Date and time"
        granularity="second"
        value={date}
        onChange={setDate}
    />
<DatePicker
    label="Date"
    granularity="day"
    value={date}
    onChange={setDate}
/>
</Flex>
</Variant>
<Variant name="Granularity12">
<Flex
    gap="size-150"
    wrap
>
    <DatePicker
        label="Date and time"
        granularity="second"
        value={date}
        onChange={setDate}
    />
<DatePicker
    label="Date"
    granularity="day"
    value={date}
    onChange={setDate}
/>
</Flex>
</Variant>
<Variant name="Granularity123">
<Flex gap="size-150" wrap>
  <DatePicker
      label="Event date"
      granularity="second"/>
  <DatePicker
      label="Event date"
      placeholderValue={now('America/New_York')}
      granularity="second"/>
</Flex>
</Variant>
<Variant name="Granularity1234">
<Flex gap="size-150" wrap>
  <DatePicker
      label="Event date"
      granularity="second"/>
  <DatePicker
      label="Event date"
      placeholderValue={now('America/New_York')}
      granularity="second"/>
</Flex>
</Variant>
<Variant name="Granularity12345">
<Flex
    gap="size-150"
    wrap
>
  <DatePicker
      label="Event date"
      granularity="second"
  />
  <DatePicker
      label="Event date"
      placeholderValue={now(
          'America/New_York'
      )}
      granularity="second"
  />
</Flex>
</Variant>
<Variant name="International calendars">
<Provider locale="hi-IN-u-ca-indian">
    <DatePicker label="Date" value={date} onChange={setDate}/>
<p>Selected date: {date?.toString()}</p>
</Provider>
</Variant>
<Variant name="International calendars1">
<Provider locale="hi-IN-u-ca-indian">
    <DatePicker
        label="Date"
        value={date}
        onChange={setDate}
    />
<p>Selected date: {date?.toString()}</p>
</Provider>
</Variant>
<Variant name="International calendars12">
<Provider locale="hi-IN-u-ca-indian">
    <DatePicker
        label="Date"
        value={date}
        onChange={setDate}
    />
<p>
        Selected date:
    {' '}
    {date
        ?.toString()}
      </p>
</Provider>
</Variant>
<Variant name="HTML forms">
<DatePicker label="Birth date" name="birthday"/>
</Variant>
<Variant name="HTML forms1">
<DatePicker label="Birth date" name="birthday"/>
</Variant>
<Variant name="HTML forms12">
<DatePicker
    label="Birth date"
    name="birthday"
/>
</Variant>
<Variant name="Labeling">
<Flex gap="size-150" wrap>
  <DatePicker label="Birth date"/>
  <DatePicker label="Birth date" isRequired necessityIndicator="icon"/>
  <DatePicker label="Birth date" isRequired necessityIndicator="label"/>
  <DatePicker label="Birth date" necessityIndicator="label"/>
</Flex>
</Variant>
<Variant name="Labeling1">
<Flex gap="size-150" wrap>
  <DatePicker label="Birth date"/>
  <DatePicker
      label="Birth date"
      isRequired
      necessityIndicator="icon"
  />
  <DatePicker
      label="Birth date"
      isRequired
      necessityIndicator="label"
  />
  <DatePicker
      label="Birth date"
      necessityIndicator="label"
  />
</Flex>
</Variant>
<Variant name="Labeling12">
<Flex
    gap="size-150"
    wrap
>
  <DatePicker label="Birth date"/>
  <DatePicker
      label="Birth date"
      isRequired
      necessityIndicator="icon"
  />
  <DatePicker
      label="Birth date"
      isRequired
      necessityIndicator="label"
  />
  <DatePicker
      label="Birth date"
      necessityIndicator="label"
  />
</Flex>
</Variant>
<Variant name="Events">
<>
    <DatePicker label="Birth date" value={date} onChange={setDate}/>
<p>
        Selected date:{' '}
    {date ? formatter.format(date.toDate(getLocalTimeZone())) : '--'}
      </p>
</>
</Variant>
<Variant name="Events1">
<>
    <DatePicker
        label="Birth date"
        value={date}
        onChange={setDate}
    />
<p>
        Selected date: {date
    ? formatter.format(
        date.toDate(getLocalTimeZone())
    )
    : '--'}
      </p>
</>
</Variant>
<Variant name="Events12">
<>
    <DatePicker
        label="Birth date"
        value={date}
        onChange={setDate}
    />
<p>
        Selected date:
    {' '}
    {date
        ? formatter
            .format(
                date
                    .toDate(
                        getLocalTimeZone()
                    )
            )
        : '--'}
      </p>
</>
</Variant>
<Variant name="Validation">
<Form validationBehavior="native" maxWidth="size-3000">
  <DatePicker label="Appointment date" name="date" isRequired/>  <ButtonGroup>
    <Button type="submit" variant="primary">Submit</Button>
    <Button type="reset" variant="secondary">Reset</Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Validation1">
<Form validationBehavior="native" maxWidth="size-3000">
  <DatePicker
      label="Appointment date"
      name="date"
      isRequired
  />  <ButtonGroup>
    <Button type="submit" variant="primary">
      Submit
    </Button>
    <Button type="reset" variant="secondary">
      Reset
    </Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Validation12">
<Form
    validationBehavior="native"
    maxWidth="size-3000"
>
  <DatePicker
      label="Appointment date"
      name="date"
      isRequired
  />  <ButtonGroup>
    <Button
        type="submit"
        variant="primary"
    >
      Submit
    </Button>
    <Button
        type="reset"
        variant="secondary"
    >
      Reset
    </Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Minimum and maximum values">
<Form validationBehavior="native" maxWidth="size-3000">
  <DatePicker
      label="Appointment date"
      minValue={today(getLocalTimeZone())} defaultValue={parseDate('2022-02-03')}/>
  <ButtonGroup>
    <Button type="submit" variant="primary">Submit</Button>
    <Button type="reset" variant="secondary">Reset</Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Minimum and maximum values1">
<Form validationBehavior="native" maxWidth="size-3000">
  <DatePicker
      label="Appointment date"
      minValue={today(getLocalTimeZone())} defaultValue={parseDate('2022-02-03')}/>
  <ButtonGroup>
    <Button type="submit" variant="primary">Submit</Button>
    <Button type="reset" variant="secondary">Reset</Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Minimum and maximum values12">
<Form
    validationBehavior="native"
    maxWidth="size-3000"
>
  <DatePicker
      label="Appointment date"
      minValue={today(
          getLocalTimeZone()
      )} defaultValue={parseDate(
      '2022-02-03'
  )}
  />
  <ButtonGroup>
    <Button
        type="submit"
        variant="primary"
    >
      Submit
    </Button>
    <Button
        type="reset"
        variant="secondary"
    >
      Reset
    </Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Unavailable dates">
<DatePicker
    label="Appointment date"
    minValue={today(getLocalTimeZone())}
    isDateUnavailable={(date) =>
        isWeekend(date, locale) || disabledRanges.some((interval) =>
            date.compare(interval[0]) >= 0 && date.compare(interval[1]) <= 0
        )} validationBehavior="native"
/>
</Variant>
<Variant name="Unavailable dates1">
<DatePicker
    label="Appointment date"
    minValue={today(getLocalTimeZone())}
    isDateUnavailable={(date) =>
        isWeekend(date, locale) ||
        disabledRanges.some((interval) =>
            date.compare(interval[0]) >= 0 &&
            date.compare(interval[1]) <= 0
        )} validationBehavior="native"
/>
</Variant>
<Variant name="Unavailable dates12">
<DatePicker
    label="Appointment date"
    minValue={today(
        getLocalTimeZone()
    )}
    isDateUnavailable={(date) =>
        isWeekend(
            date,
            locale
        ) ||
        disabledRanges
            .some((
                    interval
                ) =>
                    date.compare(
                        interval[
                            0
                            ]
                    ) >= 0 &&
                    date.compare(
                        interval[
                            1
                            ]
                    ) <= 0
            )} validationBehavior="native"
/>
</Variant>
<Variant name="Custom validation">
<Form validationBehavior="native" maxWidth="size-3000">
    <DatePicker
        label="Appointment date"
        validate={(date) =>
            date && isWeekend(date, locale) ? 'We are closed on weekends.' : null}
        defaultValue={parseDate('2023-10-28')}
    />
<ButtonGroup>
        <Button type="submit" variant="primary">Submit</Button>
        <Button type="reset" variant="secondary">Reset</Button>
      </ButtonGroup>
</Form>
</Variant>
<Variant name="Custom validation1">
<Form validationBehavior="native" maxWidth="size-3000">
    <DatePicker
        label="Appointment date"
        validate={(date) =>
            date && isWeekend(date, locale)
                ? 'We are closed on weekends.'
                : null} defaultValue={parseDate('2023-10-28')}
    />
<ButtonGroup>
        <Button type="submit" variant="primary">
          Submit
        </Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </ButtonGroup>
</Form>
</Variant>
<Variant name="Custom validation12">
<Form
    validationBehavior="native"
    maxWidth="size-3000"
>
    <DatePicker
        label="Appointment date"
        validate={(date) =>
            date &&
            isWeekend(
                date,
                locale
            )
                ? 'We are closed on weekends.'
                : null} defaultValue={parseDate(
        '2023-10-28'
    )}
    />
<ButtonGroup>
        <Button
            type="submit"
            variant="primary"
        >
          Submit
        </Button>
        <Button
            type="reset"
            variant="secondary"
        >
          Reset
        </Button>
      </ButtonGroup>
</Form>
</Variant>
<Variant name="Quiet">
<DatePicker label="Birth date" isQuiet/>
</Variant>
<Variant name="Quiet1">
<DatePicker label="Birth date" isQuiet/>
</Variant>
<Variant name="Quiet12">
<DatePicker
    label="Birth date"
    isQuiet
/>
</Variant>
<Variant name="Disabled">
<DatePicker label="Birth date" isDisabled/>
</Variant>
<Variant name="Disabled1">
<DatePicker label="Birth date" isDisabled/>
</Variant>
<Variant name="Disabled12">
<DatePicker
    label="Birth date"
    isDisabled
/>
</Variant>
<Variant name="Read only">
<DatePicker label="Birth date" value={today(getLocalTimeZone())} isReadOnly/>
</Variant>
<Variant name="Read only1">
<DatePicker
    label="Birth date"
    value={today(getLocalTimeZone())}
    isReadOnly
/>
</Variant>
<Variant name="Read only12">
<DatePicker
    label="Birth date"
    value={today(
        getLocalTimeZone()
    )}
    isReadOnly
/>
</Variant>
<Variant name="Label alignment and position">
<DatePicker label="Birth date" labelPosition="side" labelAlign="end"/>
</Variant>
<Variant name="Label alignment and position1">
<DatePicker
    label="Birth date"
    labelPosition="side"
    labelAlign="end"
/>
</Variant>
<Variant name="Label alignment and position12">
<DatePicker
    label="Birth date"
    labelPosition="side"
    labelAlign="end"
/>
</Variant>
<Variant name="Help text">
<Flex gap="size-100" wrap>
  <DatePicker
      label="Date"
      defaultValue={today(getLocalTimeZone())}
      validationState="valid"
      description="Select a meeting date."
  />
  <DatePicker
      label="Date"
      validationState="invalid"
      errorMessage="Empty input is not allowed."
  />
</Flex>
</Variant>
<Variant name="Help text1">
<Flex gap="size-100" wrap>
  <DatePicker
      label="Date"
      defaultValue={today(getLocalTimeZone())}
      validationState="valid"
      description="Select a meeting date."
  />
  <DatePicker
      label="Date"
      validationState="invalid"
      errorMessage="Empty input is not allowed."
  />
</Flex>
</Variant>
<Variant name="Help text12">
<Flex
    gap="size-100"
    wrap
>
  <DatePicker
      label="Date"
      defaultValue={today(
          getLocalTimeZone()
      )}
      validationState="valid"
      description="Select a meeting date."
  />
  <DatePicker
      label="Date"
      validationState="invalid"
      errorMessage="Empty input is not allowed."
  />
</Flex>
</Variant>
<Variant name="Help text123">
<DatePicker label="Birth date" showFormatHelpText/>
</Variant>
<Variant name="Help text1234">
<DatePicker label="Birth date" showFormatHelpText/>
</Variant>
<Variant name="Help text12345">
<DatePicker
    label="Birth date"
    showFormatHelpText
/>
</Variant>
<Variant name="Contextual help">
<DatePicker
    label="Appointment date"
    contextualHelp={
        <ContextualHelp variant="info">
      <Heading>Appointment changes</Heading>
      <Content>
        Your appointment date cannot be changed once it is scheduled.
      </Content>
    </ContextualHelp>
    }
/>
</Variant>
<Variant name="Contextual help1">
<DatePicker
    label="Appointment date"
    contextualHelp={
        <ContextualHelp variant="info">
      <Heading>Appointment changes</Heading>
      <Content>
        Your appointment date cannot be changed once it is
        scheduled.
      </Content>
    </ContextualHelp>
    }
/>
</Variant>
<Variant name="Contextual help12">
<DatePicker
    label="Appointment date"
    contextualHelp={
        <ContextualHelp variant="info">
      <Heading>
        Appointment
        changes
      </Heading>
      <Content>
        Your
        appointment
        date cannot be
        changed once it
        is scheduled.
      </Content>
    </ContextualHelp>
    }
/>
</Variant>
<Variant name="Placeholder value">
<DatePicker
    label="Birth date"
    placeholderValue={new CalendarDate(1980, 1, 1)}
/>
</Variant>
<Variant name="Placeholder value1">
<DatePicker
    label="Birth date"
    placeholderValue={new CalendarDate(1980, 1, 1)}
/>
</Variant>
<Variant name="Placeholder value12">
<DatePicker
    label="Birth date"
    placeholderValue={new CalendarDate(
        1980,
        1,
        1
    )}
/>
</Variant>
<Variant name="Maximum visible months">
<DatePicker label="Appointment date" maxVisibleMonths={3}/>
</Variant>
<Variant name="Maximum visible months1">
<DatePicker label="Appointment date" maxVisibleMonths={3}/>
</Variant>
<Variant name="Maximum visible months12">
<DatePicker
    label="Appointment date"
    maxVisibleMonths={3}
/>
</Variant>
<Variant name="Page behavior">
<DatePicker
    label="Appointment date"
    maxVisibleMonths={3}
    pageBehavior="single"
/>
</Variant>
<Variant name="Page behavior1">
<DatePicker
    label="Appointment date"
    maxVisibleMonths={3}
    pageBehavior="single"
/>
</Variant>
<Variant name="Page behavior12">
<DatePicker
    label="Appointment date"
    maxVisibleMonths={3}
    pageBehavior="single"
/>
</Variant>
<Variant name="Hide time zone">
<DatePicker
    label="Appointment time"
    defaultValue={parseZonedDateTime('2022-11-07T10:45[America/Los_Angeles]')}
    hideTimeZone/>
</Variant>
<Variant name="Hide time zone1">
<DatePicker
    label="Appointment time"
    defaultValue={parseZonedDateTime(
        '2022-11-07T10:45[America/Los_Angeles]'
    )}
    hideTimeZone
/>
</Variant>
<Variant name="Hide time zone12">
<DatePicker
    label="Appointment time"
    defaultValue={parseZonedDateTime(
        '2022-11-07T10:45[America/Los_Angeles]'
    )}
    hideTimeZone
/>
</Variant>
<Variant name="Hour cycle">
<DatePicker
    label="Appointment time"
    granularity="minute"
    hourCycle={24}/>
</Variant>
<Variant name="Hour cycle1">
<DatePicker
    label="Appointment time"
    granularity="minute"
    hourCycle={24}/>
</Variant>
<Variant name="Hour cycle12">
<DatePicker
    label="Appointment time"
    granularity="minute"
    hourCycle={24}
/>
</Variant>
</Component>
<Component name="DateRangePicker" docURL="https://react-spectrum.adobe.com/react-spectrum/DateRangePicker.html">
<Variant name="Example">
<DateRangePicker label="Date range"/>
</Variant>
<Variant name="Example1">
<DateRangePicker label="Date range"/>
</Variant>
<Variant name="Example12">
<DateRangePicker label="Date range"/>
</Variant>
<Variant name="Value">
<Flex gap="size-150" wrap>
        <DateRangePicker
            label="Date range (uncontrolled)"
            defaultValue={{
                start: parseDate('2020-02-03'),
                end: parseDate('2020-02-08')
            }}/>
      <DateRangePicker
          label="Date range (controlled)"
          value={value}
          onChange={setValue}/>
    </Flex>
</Variant>
<Variant name="Value1">
<Flex gap="size-150" wrap>
    <DateRangePicker
        label="Date range (uncontrolled)"
        defaultValue={{
            start: parseDate('2020-02-03'),
            end: parseDate('2020-02-08')
        }}/>
<DateRangePicker
    label="Date range (controlled)"
    value={value}
    onChange={setValue}/>
</Flex>
</Variant>
<Variant name="Value12">
<Flex
    gap="size-150"
    wrap
>
    <DateRangePicker
        label="Date range (uncontrolled)"
        defaultValue={{
            start:
                parseDate(
                    '2020-02-03'
                ),
            end: parseDate(
                '2020-02-08'
            )
        }}
    />
<DateRangePicker
    label="Date range (controlled)"
    value={value}
    onChange={setValue}
/>
</Flex>
</Variant>
<Variant name="Time zones">
<DateRangePicker
    label="Date range"
    defaultValue={{
        start: parseZonedDateTime('2022-11-07T00:45[America/Los_Angeles]'),
        end: parseZonedDateTime('2022-11-08T11:15[America/Los_Angeles]')
    }}/>
</Variant>
<Variant name="Time zones1">
<DateRangePicker
    label="Date range"
    defaultValue={{
        start: parseZonedDateTime(
            '2022-11-07T00:45[America/Los_Angeles]'
        ),
        end: parseZonedDateTime(
            '2022-11-08T11:15[America/Los_Angeles]'
        )
    }}
/>
</Variant>
<Variant name="Time zones12">
<DateRangePicker
    label="Date range"
    defaultValue={{
        start:
            parseZonedDateTime(
                '2022-11-07T00:45[America/Los_Angeles]'
            ),
        end:
            parseZonedDateTime(
                '2022-11-08T11:15[America/Los_Angeles]'
            )
    }}
/>
</Variant>
<Variant name="Time zones123">
<DateRangePicker
    label="Date range"
    defaultValue={{
        start: parseAbsoluteToLocal('2021-11-07T07:45:00Z'),
        end: parseAbsoluteToLocal('2021-11-08T14:25:00Z')
    }}
/>
</Variant>
<Variant name="Time zones1234">
<DateRangePicker
    label="Date range"
    defaultValue={{
        start: parseAbsoluteToLocal('2021-11-07T07:45:00Z'),
        end: parseAbsoluteToLocal('2021-11-08T14:25:00Z')
    }}
/>
</Variant>
<Variant name="Time zones12345">
<DateRangePicker
    label="Date range"
    defaultValue={{
        start:
            parseAbsoluteToLocal(
                '2021-11-07T07:45:00Z'
            ),
        end:
            parseAbsoluteToLocal(
                '2021-11-08T14:25:00Z'
            )
    }}
/>
</Variant>
<Variant name="Granularity">
<Flex gap="size-150" wrap>
    <DateRangePicker
        label="Date and time range"
        granularity="second"
        value={date}
        onChange={setDate}/>
<DateRangePicker
    label="Date range"
    granularity="day"
    value={date}
    onChange={setDate}/>
</Flex>
</Variant>
<Variant name="Granularity1">
<Flex gap="size-150" wrap>
    <DateRangePicker
        label="Date and time range"
        granularity="second"
        value={date}
        onChange={setDate}/>
<DateRangePicker
    label="Date range"
    granularity="day"
    value={date}
    onChange={setDate}/>
</Flex>
</Variant>
<Variant name="Granularity12">
<Flex
    gap="size-150"
    wrap
>
    <DateRangePicker
        label="Date and time range"
        granularity="second"
        value={date}
        onChange={setDate}
    />
<DateRangePicker
    label="Date range"
    granularity="day"
    value={date}
    onChange={setDate}
/>
</Flex>
</Variant>
<Variant name="Granularity123">
<Flex gap="size-150" wrap>
  <DateRangePicker
      label="Date range"
      granularity="second"/>
  <DateRangePicker
      label="Date range"
      placeholderValue={now('America/New_York')}
      granularity="second"/>
</Flex>
</Variant>
<Variant name="Granularity1234">
<Flex gap="size-150" wrap>
  <DateRangePicker
      label="Date range"
      granularity="second"/>
  <DateRangePicker
      label="Date range"
      placeholderValue={now('America/New_York')}
      granularity="second"/>
</Flex>
</Variant>
<Variant name="Granularity12345">
<Flex
    gap="size-150"
    wrap
>
  <DateRangePicker
      label="Date range"
      granularity="second"
  />
  <DateRangePicker
      label="Date range"
      placeholderValue={now(
          'America/New_York'
      )}
      granularity="second"
  />
</Flex>
</Variant>
<Variant name="International calendars">
<Provider locale="hi-IN-u-ca-indian">
    <DateRangePicker label="Date range" value={range} onChange={setRange}/>
<p>Start date: {range?.start.toString()}</p>
<p>End date: {range?.end.toString()}</p>
</Provider>
</Variant>
<Variant name="International calendars1">
<Provider locale="hi-IN-u-ca-indian">
    <DateRangePicker
        label="Date range"
        value={range}
        onChange={setRange}
    />
<p>Start date: {range?.start.toString()}</p>
<p>End date: {range?.end.toString()}</p>
</Provider>
</Variant>
<Variant name="International calendars12">
<Provider locale="hi-IN-u-ca-indian">
    <DateRangePicker
        label="Date range"
        value={range}
        onChange={setRange}
    />
<p>
        Start date:{' '}
    {range?.start
        .toString()}
      </p>
<p>
        End date:{' '}
    {range?.end
        .toString()}
      </p>
</Provider>
</Variant>
<Variant name="HTML forms">
<DateRangePicker label="Trip dates" startName="startDate" endName="endDate"/>
</Variant>
<Variant name="HTML forms1">
<DateRangePicker
    label="Trip dates"
    startName="startDate"
    endName="endDate"
/>
</Variant>
<Variant name="HTML forms12">
<DateRangePicker
    label="Trip dates"
    startName="startDate"
    endName="endDate"
/>
</Variant>
<Variant name="Labeling">
<Flex gap="size-150" wrap>
  <DateRangePicker label="Date range"/>
  <DateRangePicker label="Date range" isRequired necessityIndicator="icon"/>
  <DateRangePicker label="Date range" isRequired necessityIndicator="label"/>
  <DateRangePicker label="Date range" necessityIndicator="label"/>
</Flex>
</Variant>
<Variant name="Labeling1">
<Flex gap="size-150" wrap>
  <DateRangePicker label="Date range"/>
  <DateRangePicker
      label="Date range"
      isRequired
      necessityIndicator="icon"
  />
  <DateRangePicker
      label="Date range"
      isRequired
      necessityIndicator="label"
  />
  <DateRangePicker
      label="Date range"
      necessityIndicator="label"
  />
</Flex>
</Variant>
<Variant name="Labeling12">
<Flex
    gap="size-150"
    wrap
>
  <DateRangePicker label="Date range"/>
  <DateRangePicker
      label="Date range"
      isRequired
      necessityIndicator="icon"
  />
  <DateRangePicker
      label="Date range"
      isRequired
      necessityIndicator="label"
  />
  <DateRangePicker
      label="Date range"
      necessityIndicator="label"
  />
</Flex>
</Variant>
<Variant name="Events">
<>
    <DateRangePicker label="Date range" value={range} onChange={setRange}/>
<p>
        Selected date: {range
    ? formatter.formatRange(
        range.start.toDate(getLocalTimeZone()),
        range.end.toDate(getLocalTimeZone())
    )
    : '--'}
      </p>
</>
</Variant>
<Variant name="Events1">
<>
    <DateRangePicker
        label="Date range"
        value={range}
        onChange={setRange}
    />
<p>
        Selected date: {range
    ? formatter.formatRange(
        range.start.toDate(getLocalTimeZone()),
        range.end.toDate(getLocalTimeZone())
    )
    : '--'}
      </p>
</>
</Variant>
<Variant name="Events12">
<>
    <DateRangePicker
        label="Date range"
        value={range}
        onChange={setRange}
    />
<p>
        Selected date:
    {' '}
    {range
        ? formatter
            .formatRange(
                range.start
                    .toDate(
                        getLocalTimeZone()
                    ),
                range.end
                    .toDate(
                        getLocalTimeZone()
                    )
            )
        : '--'}
      </p>
</>
</Variant>
<Variant name="Validation">
<Form validationBehavior="native" maxWidth="size-3000">
  <DateRangePicker
      label="Date range"
      startName="startDate"
      endName="endDate"
      isRequired
  />  <ButtonGroup>
    <Button type="submit" variant="primary">Submit</Button>
    <Button type="reset" variant="secondary">Reset</Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Validation1">
<Form validationBehavior="native" maxWidth="size-3000">
  <DateRangePicker
      label="Date range"
      startName="startDate"
      endName="endDate"
      isRequired
  />  <ButtonGroup>
    <Button type="submit" variant="primary">
      Submit
    </Button>
    <Button type="reset" variant="secondary">
      Reset
    </Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Validation12">
<Form
    validationBehavior="native"
    maxWidth="size-3000"
>
  <DateRangePicker
      label="Date range"
      startName="startDate"
      endName="endDate"
      isRequired
  />  <ButtonGroup>
    <Button
        type="submit"
        variant="primary"
    >
      Submit
    </Button>
    <Button
        type="reset"
        variant="secondary"
    >
      Reset
    </Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Minimum and maximum values">
<Form validationBehavior="native" maxWidth="size-3000">
  <DateRangePicker
      label="Trip dates"
      minValue={today(getLocalTimeZone())} defaultValue={{
      start: parseDate('2022-02-03'),
      end: parseDate('2022-05-03')
  }}/>
  <ButtonGroup>
    <Button type="submit" variant="primary">Submit</Button>
    <Button type="reset" variant="secondary">Reset</Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Minimum and maximum values1">
<Form validationBehavior="native" maxWidth="size-3000">
  <DateRangePicker
      label="Trip dates"
      minValue={today(getLocalTimeZone())} defaultValue={{
      start: parseDate('2022-02-03'),
      end: parseDate('2022-05-03')
  }}/>
  <ButtonGroup>
    <Button type="submit" variant="primary">Submit</Button>
    <Button type="reset" variant="secondary">Reset</Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Minimum and maximum values12">
<Form
    validationBehavior="native"
    maxWidth="size-3000"
>
  <DateRangePicker
      label="Trip dates"
      minValue={today(
          getLocalTimeZone()
      )} defaultValue={{
      start: parseDate(
          '2022-02-03'
      ),
      end: parseDate(
          '2022-05-03'
      )
  }}
  />
  <ButtonGroup>
    <Button
        type="submit"
        variant="primary"
    >
      Submit
    </Button>
    <Button
        type="reset"
        variant="secondary"
    >
      Reset
    </Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Custom validation">
<Form validationBehavior="native" maxWidth="size-3000">
  <DateRangePicker
      label="Trip dates"
      validate={(range) =>
          range?.end.compare(range.start) > 7
              ? 'Maximum stay duration is 1 week.'
              : null} defaultValue={{
      start: today(getLocalTimeZone()),
      end: today(getLocalTimeZone()).add({weeks: 1, days: 3})
  }}
  />
  <ButtonGroup>
    <Button type="submit" variant="primary">Submit</Button>
    <Button type="reset" variant="secondary">Reset</Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Custom validation1">
<Form validationBehavior="native" maxWidth="size-3000">
  <DateRangePicker
      label="Trip dates"
      validate={(range) =>
          range?.end.compare(range.start) > 7
              ? 'Maximum stay duration is 1 week.'
              : null} defaultValue={{
      start: today(getLocalTimeZone()),
      end: today(getLocalTimeZone()).add({
          weeks: 1,
          days: 3
      })
  }}
  />
  <ButtonGroup>
    <Button type="submit" variant="primary">
      Submit
    </Button>
    <Button type="reset" variant="secondary">
      Reset
    </Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Custom validation12">
<Form
    validationBehavior="native"
    maxWidth="size-3000"
>
  <DateRangePicker
      label="Trip dates"
      validate={(range) =>
          range?.end
              .compare(
                  range.start
              ) > 7
              ? 'Maximum stay duration is 1 week.'
              : null} defaultValue={{
      start: today(
          getLocalTimeZone()
      ),
      end: today(
          getLocalTimeZone()
      ).add({
          weeks: 1,
          days: 3
      })
  }}
  />
  <ButtonGroup>
    <Button
        type="submit"
        variant="primary"
    >
      Submit
    </Button>
    <Button
        type="reset"
        variant="secondary"
    >
      Reset
    </Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Unavailable dates">
<DateRangePicker
    label="Trip dates"
    minValue={today(getLocalTimeZone())}
    isDateUnavailable={(date) =>
        disabledRanges.some((interval) =>
            date.compare(interval[0]) >= 0 && date.compare(interval[1]) <= 0
        )}
    validate={(value) =>
        disabledRanges.some((interval) =>
            value && value.end.compare(interval[0]) >= 0 &&
            value.start.compare(interval[1]) <= 0
        )
            ? 'Selected date range may not include unavailable dates.'
            : null} validationBehavior="native"
/>
</Variant>
<Variant name="Unavailable dates1">
<DateRangePicker
    label="Trip dates"
    minValue={today(getLocalTimeZone())}
    isDateUnavailable={(date) =>
        disabledRanges.some((interval) =>
            date.compare(interval[0]) >= 0 &&
            date.compare(interval[1]) <= 0
        )}
    validate={(value) =>
        disabledRanges.some((interval) =>
            value && value.end.compare(interval[0]) >= 0 &&
            value.start.compare(interval[1]) <= 0
        )
            ? 'Selected date range may not include unavailable dates.'
            : null} validationBehavior="native"
/>
</Variant>
<Variant name="Unavailable dates12">
<DateRangePicker
    label="Trip dates"
    minValue={today(
        getLocalTimeZone()
    )}
    isDateUnavailable={(date) =>
        disabledRanges
            .some((
                    interval
                ) =>
                    date.compare(
                        interval[
                            0
                            ]
                    ) >= 0 &&
                    date.compare(
                        interval[
                            1
                            ]
                    ) <= 0
            )}
    validate={(value) =>
        disabledRanges
            .some(
                (interval) =>
                    value &&
                    value.end
                        .compare(
                            interval[
                                0
                                ]
                        ) >=
                    0 &&
                    value
                        .start
                        .compare(
                            interval[
                                1
                                ]
                        ) <=
                    0
            )
            ? 'Selected date range may not include unavailable dates.'
            : null} validationBehavior="native"
/>
</Variant>
<Variant name="Non-contiguous ranges">
<DateRangePicker
    label="Time off request"
    isDateUnavailable={(date) => isWeekend(date, locale)}
    allowsNonContiguousRanges
/>
</Variant>
<Variant name="Non-contiguous ranges1">
<DateRangePicker
    label="Time off request"
    isDateUnavailable={(date) => isWeekend(date, locale)}
    allowsNonContiguousRanges
/>
</Variant>
<Variant name="Non-contiguous ranges12">
<DateRangePicker
    label="Time off request"
    isDateUnavailable={(date) =>
        isWeekend(
            date,
            locale
        )}
    allowsNonContiguousRanges
/>
</Variant>
<Variant name="Quiet">
<DateRangePicker label="Date range" isQuiet/>
</Variant>
<Variant name="Quiet1">
<DateRangePicker label="Date range" isQuiet/>
</Variant>
<Variant name="Quiet12">
<DateRangePicker
    label="Date range"
    isQuiet
/>
</Variant>
<Variant name="Disabled">
<DateRangePicker label="Date range" isDisabled/>
</Variant>
<Variant name="Disabled1">
<DateRangePicker label="Date range" isDisabled/>
</Variant>
<Variant name="Disabled12">
<DateRangePicker
    label="Date range"
    isDisabled
/>
</Variant>
<Variant name="Read only">
<DateRangePicker
    label="Date range"
    value={{
        start: today(getLocalTimeZone()),
        end: today(getLocalTimeZone()).add({weeks: 1})
    }}
    isReadOnly
/>
</Variant>
<Variant name="Read only1">
<DateRangePicker
    label="Date range"
    value={{
        start: today(getLocalTimeZone()),
        end: today(getLocalTimeZone()).add({weeks: 1})
    }}
    isReadOnly
/>
</Variant>
<Variant name="Read only12">
<DateRangePicker
    label="Date range"
    value={{
        start: today(
            getLocalTimeZone()
        ),
        end: today(
            getLocalTimeZone()
        ).add({
            weeks: 1
        })
    }}
    isReadOnly
/>
</Variant>
<Variant name="Label alignment and position">
<DateRangePicker label="Date range" labelPosition="side" labelAlign="end"/>
</Variant>
<Variant name="Label alignment and position1">
<DateRangePicker
    label="Date range"
    labelPosition="side"
    labelAlign="end"
/>
</Variant>
<Variant name="Label alignment and position12">
<DateRangePicker
    label="Date range"
    labelPosition="side"
    labelAlign="end"
/>
</Variant>
<Variant name="Help text">
<Flex gap="size-100" wrap>
  <DateRangePicker
      label="Date range"
      defaultValue={{
          start: today(getLocalTimeZone()),
          end: today(getLocalTimeZone()).add({weeks: 1})
      }}
      validationState="valid"
      description="Select your trip dates."
  />
  <DateRangePicker
      label="Date range"
      validationState="invalid"
      errorMessage="Empty input is not allowed."
  />
</Flex>
</Variant>
<Variant name="Help text1">
<Flex gap="size-100" wrap>
  <DateRangePicker
      label="Date range"
      defaultValue={{
          start: today(getLocalTimeZone()),
          end: today(getLocalTimeZone()).add({weeks: 1})
      }}
      validationState="valid"
      description="Select your trip dates."
  />
  <DateRangePicker
      label="Date range"
      validationState="invalid"
      errorMessage="Empty input is not allowed."
  />
</Flex>
</Variant>
<Variant name="Help text12">
<Flex
    gap="size-100"
    wrap
>
  <DateRangePicker
      label="Date range"
      defaultValue={{
          start: today(
              getLocalTimeZone()
          ),
          end: today(
              getLocalTimeZone()
          ).add({
              weeks: 1
          })
      }}
      validationState="valid"
      description="Select your trip dates."
  />
  <DateRangePicker
      label="Date range"
      validationState="invalid"
      errorMessage="Empty input is not allowed."
  />
</Flex>
</Variant>
<Variant name="Help text123">
<DateRangePicker label="Date range" showFormatHelpText/>
</Variant>
<Variant name="Help text1234">
<DateRangePicker label="Date range" showFormatHelpText/>
</Variant>
<Variant name="Help text12345">
<DateRangePicker
    label="Date range"
    showFormatHelpText
/>
</Variant>
<Variant name="Contextual help">
<DateRangePicker
    label="Trip dates"
    contextualHelp={
        <ContextualHelp variant="info">
      <Heading>Date changes</Heading>
      <Content>Your trip dates cannot be changed once scheduled.</Content>
    </ContextualHelp>
    }/>
</Variant>
<Variant name="Contextual help1">
<DateRangePicker
    label="Trip dates"
    contextualHelp={
        <ContextualHelp variant="info">
      <Heading>Date changes</Heading>
      <Content>
        Your trip dates cannot be changed once scheduled.
      </Content>
    </ContextualHelp>
    }
/>
</Variant>
<Variant name="Contextual help12">
<DateRangePicker
    label="Trip dates"
    contextualHelp={
        <ContextualHelp variant="info">
      <Heading>
        Date changes
      </Heading>
      <Content>
        Your trip dates
        cannot be
        changed once
        scheduled.
      </Content>
    </ContextualHelp>
    }
/>
</Variant>
<Variant name="Placeholder value">
<DateRangePicker
    label="Date range"
    placeholderValue={new CalendarDate(1980, 1, 1)}
/>
</Variant>
<Variant name="Placeholder value1">
<DateRangePicker
    label="Date range"
    placeholderValue={new CalendarDate(1980, 1, 1)}
/>
</Variant>
<Variant name="Placeholder value12">
<DateRangePicker
    label="Date range"
    placeholderValue={new CalendarDate(
        1980,
        1,
        1
    )}
/>
</Variant>
<Variant name="Maximum visible months">
<DateRangePicker label="Date range" maxVisibleMonths={3}/>
</Variant>
<Variant name="Maximum visible months1">
<DateRangePicker label="Date range" maxVisibleMonths={3}/>
</Variant>
<Variant name="Maximum visible months12">
<DateRangePicker
    label="Date range"
    maxVisibleMonths={3}
/>
</Variant>
<Variant name="Page behavior">
<DateRangePicker
    label="Date range"
    maxVisibleMonths={3}
    pageBehavior="single"
/>
</Variant>
<Variant name="Page behavior1">
<DateRangePicker
    label="Date range"
    maxVisibleMonths={3}
    pageBehavior="single"
/>
</Variant>
<Variant name="Page behavior12">
<DateRangePicker
    label="Date range"
    maxVisibleMonths={3}
    pageBehavior="single"
/>
</Variant>
<Variant name="Hide time zone">
<DateRangePicker
    label="Date range"
    defaultValue={{
        start: parseZonedDateTime('2022-11-07T10:45[America/Los_Angeles]'),
        end: parseZonedDateTime('2022-11-08T19:45[America/Los_Angeles]')
    }}
    hideTimeZone/>
</Variant>
<Variant name="Hide time zone1">
<DateRangePicker
    label="Date range"
    defaultValue={{
        start: parseZonedDateTime(
            '2022-11-07T10:45[America/Los_Angeles]'
        ),
        end: parseZonedDateTime(
            '2022-11-08T19:45[America/Los_Angeles]'
        )
    }}
    hideTimeZone
/>
</Variant>
<Variant name="Hide time zone12">
<DateRangePicker
    label="Date range"
    defaultValue={{
        start:
            parseZonedDateTime(
                '2022-11-07T10:45[America/Los_Angeles]'
            ),
        end:
            parseZonedDateTime(
                '2022-11-08T19:45[America/Los_Angeles]'
            )
    }}
    hideTimeZone
/>
</Variant>
<Variant name="Hour cycle">
<DateRangePicker
    label="Date range"
    granularity="minute"
    hourCycle={24}/>
</Variant>
<Variant name="Hour cycle1">
<DateRangePicker
    label="Date range"
    granularity="minute"
    hourCycle={24}/>
</Variant>
<Variant name="Hour cycle12">
<DateRangePicker
    label="Date range"
    granularity="minute"
    hourCycle={24}/>
</Variant>
</Component>
<Component name="RangeCalendar" docURL="https://react-spectrum.adobe.com/react-spectrum/RangeCalendar.html">
<Variant name="Example">
<RangeCalendar aria-label="Trip dates"/>
</Variant>
<Variant name="Example1">
<RangeCalendar aria-label="Trip dates"/>
</Variant>
<Variant name="Example12">
<RangeCalendar aria-label="Trip dates"/>
</Variant>
<Variant name="Value">
<Flex gap="size-300" wrap>
        <RangeCalendar
            aria-label="Date range (uncontrolled)"
            defaultValue={{
                start: parseDate('2020-02-03'),
                end: parseDate('2020-02-12')
            }}/>
      <RangeCalendar
          aria-label="Date range (controlled)"
          value={value}
          onChange={setValue}/>
    </Flex>
</Variant>
<Variant name="Value1">
<Flex gap="size-300" wrap>
    <RangeCalendar
        aria-label="Date range (uncontrolled)"
        defaultValue={{
            start: parseDate('2020-02-03'),
            end: parseDate('2020-02-12')
        }}/>
<RangeCalendar
    aria-label="Date range (controlled)"
    value={value}
    onChange={setValue}/>
</Flex>
</Variant>
<Variant name="Value12">
<Flex
    gap="size-300"
    wrap
>
    <RangeCalendar
        aria-label="Date range (uncontrolled)"
        defaultValue={{
            start:
                parseDate(
                    '2020-02-03'
                ),
            end: parseDate(
                '2020-02-12'
            )
        }}
    />
<RangeCalendar
    aria-label="Date range (controlled)"
    value={value}
    onChange={setValue}
/>
</Flex>
</Variant>
<Variant name="International calendars">
<Provider locale="hi-IN-u-ca-indian">
    <RangeCalendar
        aria-label="Date range"
        value={range}
        onChange={setRange}
    />
<p>Start date: {range?.start.toString()}</p>
<p>End date: {range?.end.toString()}</p>
</Provider>
</Variant>
<Variant name="International calendars1">
<Provider locale="hi-IN-u-ca-indian">
    <RangeCalendar
        aria-label="Date range"
        value={range}
        onChange={setRange}
    />
<p>Start date: {range?.start.toString()}</p>
<p>End date: {range?.end.toString()}</p>
</Provider>
</Variant>
<Variant name="International calendars12">
<Provider locale="hi-IN-u-ca-indian">
    <RangeCalendar
        aria-label="Date range"
        value={range}
        onChange={setRange}
    />
<p>
        Start date:{' '}
    {range?.start
        .toString()}
      </p>
<p>
        End date:{' '}
    {range?.end
        .toString()}
      </p>
</Provider>
</Variant>
<Variant name="Events">
<>
    <RangeCalendar
        aria-label="Date range"
        value={range}
        onChange={setRange}
    />
<p>
        Selected date: {formatter.formatRange(
    range.start.toDate(getLocalTimeZone()),
    range.end.toDate(getLocalTimeZone())
)}
      </p>
</>
</Variant>
<Variant name="Events1">
<>
    <RangeCalendar
        aria-label="Date range"
        value={range}
        onChange={setRange}
    />
<p>
        Selected date: {formatter.formatRange(
    range.start.toDate(getLocalTimeZone()),
    range.end.toDate(getLocalTimeZone())
)}
      </p>
</>
</Variant>
<Variant name="Events12">
<>
    <RangeCalendar
        aria-label="Date range"
        value={range}
        onChange={setRange}
    />
<p>
        Selected date:
    {' '}
    {formatter
        .formatRange(
            range.start
                .toDate(
                    getLocalTimeZone()
                ),
            range.end
                .toDate(
                    getLocalTimeZone()
                )
        )}
      </p>
</>
</Variant>
<Variant name="Validation">
<RangeCalendar aria-label="Trip dates" minValue={today(getLocalTimeZone())}/>
</Variant>
<Variant name="Validation1">
<RangeCalendar
    aria-label="Trip dates"
    minValue={today(getLocalTimeZone())}
/>
</Variant>
<Variant name="Validation12">
<RangeCalendar
    aria-label="Trip dates"
    minValue={today(
        getLocalTimeZone()
    )}
/>
</Variant>
<Variant name="Unavailable dates">
<RangeCalendar
    aria-label="Trip dates"
    minValue={today(getLocalTimeZone())}
    isDateUnavailable={isDateUnavailable}
/>
</Variant>
<Variant name="Unavailable dates1">
<RangeCalendar
    aria-label="Trip dates"
    minValue={today(getLocalTimeZone())}
    isDateUnavailable={isDateUnavailable}
/>
</Variant>
<Variant name="Unavailable dates12">
<RangeCalendar
    aria-label="Trip dates"
    minValue={today(
        getLocalTimeZone()
    )}
    isDateUnavailable={isDateUnavailable}
/>
</Variant>
<Variant name="Non-contiguous ranges">
<RangeCalendar
    aria-label="Time off request"
    isDateUnavailable={(date) => isWeekend(date, locale)}
    allowsNonContiguousRanges
/>
</Variant>
<Variant name="Non-contiguous ranges1">
<RangeCalendar
    aria-label="Time off request"
    isDateUnavailable={(date) => isWeekend(date, locale)}
    allowsNonContiguousRanges
/>
</Variant>
<Variant name="Non-contiguous ranges12">
<RangeCalendar
    aria-label="Time off request"
    isDateUnavailable={(date) =>
        isWeekend(
            date,
            locale
        )}
    allowsNonContiguousRanges
/>
</Variant>
<Variant name="Controlling the focused date">
<Flex direction="column" alignItems="start" gap="size-200">
    <ActionButton onPress={() => setFocusedDate(defaultDate)}>
        Reset focused date
      </ActionButton>
<RangeCalendar
    focusedValue={focusedDate}
    onFocusChange={setFocusedDate}
/>
</Flex>
</Variant>
<Variant name="Controlling the focused date1">
<Flex
    direction="column"
    alignItems="start"
    gap="size-200"
>
    <ActionButton
        onPress={() => setFocusedDate(defaultDate)}
    >
        Reset focused date
      </ActionButton>
<RangeCalendar
    focusedValue={focusedDate}
    onFocusChange={setFocusedDate}
/>
</Flex>
</Variant>
<Variant name="Controlling the focused date12">
<Flex
    direction="column"
    alignItems="start"
    gap="size-200"
>
    <ActionButton
        onPress={() =>
            setFocusedDate(
                defaultDate
            )}
    >
        Reset focused
        date
      </ActionButton>
<RangeCalendar
    focusedValue={focusedDate}
    onFocusChange={setFocusedDate}
/>
</Flex>
</Variant>
<Variant name="Disabled">
<RangeCalendar aria-label="Trip dates" isDisabled/>
</Variant>
<Variant name="Disabled1">
<RangeCalendar aria-label="Trip dates" isDisabled/>
</Variant>
<Variant name="Disabled12">
<RangeCalendar
    aria-label="Trip dates"
    isDisabled
/>
</Variant>
<Variant name="Read only">
<RangeCalendar
    aria-label="Trip dates"
    value={{
        start: today(getLocalTimeZone()),
        end: today(getLocalTimeZone()).add({weeks: 1})
    }}
    isReadOnly
/>
</Variant>
<Variant name="Read only1">
<RangeCalendar
    aria-label="Trip dates"
    value={{
        start: today(getLocalTimeZone()),
        end: today(getLocalTimeZone()).add({weeks: 1})
    }}
    isReadOnly
/>
</Variant>
<Variant name="Read only12">
<RangeCalendar
    aria-label="Trip dates"
    value={{
        start: today(
            getLocalTimeZone()
        ),
        end: today(
            getLocalTimeZone()
        ).add({
            weeks: 1
        })
    }}
    isReadOnly
/>
</Variant>
<Variant name="Visible months">
<div style={{maxWidth: '100%', overflow: 'auto'}}>
  <RangeCalendar aria-label="Trip dates" visibleMonths={3}/>
</div>
</Variant>
<Variant name="Visible months1">
<div style={{maxWidth: '100%', overflow: 'auto'}}>
  <RangeCalendar
      aria-label="Trip dates"
      visibleMonths={3}
  />
</div>
</Variant>
<Variant name="Visible months12">
<div
    style={{
        maxWidth: '100%',
        overflow: 'auto'
    }}
>
  <RangeCalendar
      aria-label="Trip dates"
      visibleMonths={3}
  />
</div>
</Variant>
<Variant name="Page behavior">
<div style={{maxWidth: '100%', overflow: 'auto'}}>
  <RangeCalendar
      aria-label="Trip dates"
      visibleMonths={3}
      pageBehavior="single"
  />
</div>
</Variant>
<Variant name="Page behavior1">
<div style={{maxWidth: '100%', overflow: 'auto'}}>
  <RangeCalendar
      aria-label="Trip dates"
      visibleMonths={3}
      pageBehavior="single"
  />
</div>
</Variant>
<Variant name="Page behavior12">
<div
    style={{
        maxWidth: '100%',
        overflow: 'auto'
    }}
>
  <RangeCalendar
      aria-label="Trip dates"
      visibleMonths={3}
      pageBehavior="single"
  />
</div>
</Variant>
</Component>
<Component name="TimeField" docURL="https://react-spectrum.adobe.com/react-spectrum/TimeField.html">
<Variant name="Example">
<TimeField label="Event time"/>
</Variant>
<Variant name="Example1">
<TimeField label="Event time"/>
</Variant>
<Variant name="Example12">
<TimeField label="Event time"/>
</Variant>
<Variant name="Value">
<Flex gap="size-150" wrap>
        <TimeField
            label="Time (uncontrolled)"
            defaultValue={new Time(11, 45)}/>
      <TimeField
          label="Time (controlled)"
          value={value}
          onChange={setValue}/>
    </Flex>
</Variant>
<Variant name="Value1">
<Flex gap="size-150" wrap>
    <TimeField
        label="Time (uncontrolled)"
        defaultValue={new Time(11, 45)}/>
<TimeField
    label="Time (controlled)"
    value={value}
    onChange={setValue}/>
</Flex>
</Variant>
<Variant name="Value12">
<Flex
    gap="size-150"
    wrap
>
    <TimeField
        label="Time (uncontrolled)"
        defaultValue={new Time(
            11,
            45
        )}
    />
<TimeField
    label="Time (controlled)"
    value={value}
    onChange={setValue}
/>
</Flex>
</Variant>
<Variant name="Time zones">
<TimeField
    label="Event time"
    defaultValue={parseZonedDateTime('2022-11-07T00:45[America/Los_Angeles]')}
/>
</Variant>
<Variant name="Time zones1">
<TimeField
    label="Event time"
    defaultValue={parseZonedDateTime(
        '2022-11-07T00:45[America/Los_Angeles]'
    )}
/>
</Variant>
<Variant name="Time zones12">
<TimeField
    label="Event time"
    defaultValue={parseZonedDateTime(
        '2022-11-07T00:45[America/Los_Angeles]'
    )}
/>
</Variant>
<Variant name="Time zones123">
<TimeField
    label="Event time"
    defaultValue={parseAbsoluteToLocal('2021-11-07T07:45:00Z')}
/>
</Variant>
<Variant name="Time zones1234">
<TimeField
    label="Event time"
    defaultValue={parseAbsoluteToLocal(
        '2021-11-07T07:45:00Z'
    )}
/>
</Variant>
<Variant name="Time zones12345">
<TimeField
    label="Event time"
    defaultValue={parseAbsoluteToLocal(
        '2021-11-07T07:45:00Z'
    )}
/>
</Variant>
<Variant name="Granularity">
<TimeField
    label="Event time"
    granularity="second"
    defaultValue={parseAbsoluteToLocal('2021-04-07T18:45:22Z')}/>
</Variant>
<Variant name="Granularity1">
<TimeField
    label="Event time"
    granularity="second"
    defaultValue={parseAbsoluteToLocal(
        '2021-04-07T18:45:22Z'
    )}
/>
</Variant>
<Variant name="Granularity12">
<TimeField
    label="Event time"
    granularity="second"
    defaultValue={parseAbsoluteToLocal(
        '2021-04-07T18:45:22Z'
    )}
/>
</Variant>
<Variant name="HTML forms">
<TimeField label="Meeting time" name="meetingTime"/>
</Variant>
<Variant name="HTML forms1">
<TimeField label="Meeting time" name="meetingTime"/>
</Variant>
<Variant name="HTML forms12">
<TimeField
    label="Meeting time"
    name="meetingTime"
/>
</Variant>
<Variant name="Labeling">
<Flex gap="size-150" wrap>
  <TimeField label="Event time"/>
  <TimeField label="Event time" isRequired necessityIndicator="icon"/>
  <TimeField label="Event time" isRequired necessityIndicator="label"/>
  <TimeField label="Event time" necessityIndicator="label"/>
</Flex>
</Variant>
<Variant name="Labeling1">
<Flex gap="size-150" wrap>
  <TimeField label="Event time"/>
  <TimeField
      label="Event time"
      isRequired
      necessityIndicator="icon"
  />
  <TimeField
      label="Event time"
      isRequired
      necessityIndicator="label"
  />
  <TimeField
      label="Event time"
      necessityIndicator="label"
  />
</Flex>
</Variant>
<Variant name="Labeling12">
<Flex
    gap="size-150"
    wrap
>
  <TimeField label="Event time"/>
  <TimeField
      label="Event time"
      isRequired
      necessityIndicator="icon"
  />
  <TimeField
      label="Event time"
      isRequired
      necessityIndicator="label"
  />
  <TimeField
      label="Event time"
      necessityIndicator="label"
  />
</Flex>
</Variant>
<Variant name="Events">
<>
    <TimeField label="Time" value={date} onChange={setDate}/>
<p>
        Selected date and time:{' '}
    {(date?.toDate && formatter.format(date.toDate())) ||
        (date && date.toString()) || '--'}
      </p>
</>
</Variant>
<Variant name="Events1">
<>
    <TimeField
        label="Time"
        value={date}
        onChange={setDate}
    />
<p>
        Selected date and time:{' '}
    {(date?.toDate &&
            formatter.format(date.toDate())) ||
        (date && date.toString()) || '--'}
      </p>
</>
</Variant>
<Variant name="Events12">
<>
    <TimeField
        label="Time"
        value={date}
        onChange={setDate}
    />
<p>
        Selected date and
        time:{' '}
    {(date?.toDate &&
            formatter
                .format(
                    date
                        .toDate()
                )) ||
        (date &&
            date
                .toString()) ||
        '--'}
      </p>
</>
</Variant>
<Variant name="Validation">
<Form validationBehavior="native" maxWidth="size-3000">
  <TimeField label="Meeting time" name="time" isRequired/>  <ButtonGroup>
    <Button type="submit" variant="primary">Submit</Button>
    <Button type="reset" variant="secondary">Reset</Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Validation1">
<Form validationBehavior="native" maxWidth="size-3000">
  <TimeField
      label="Meeting time"
      name="time"
      isRequired
  />  <ButtonGroup>
    <Button type="submit" variant="primary">
      Submit
    </Button>
    <Button type="reset" variant="secondary">
      Reset
    </Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Validation12">
<Form
    validationBehavior="native"
    maxWidth="size-3000"
>
  <TimeField
      label="Meeting time"
      name="time"
      isRequired
  />  <ButtonGroup>
    <Button
        type="submit"
        variant="primary"
    >
      Submit
    </Button>
    <Button
        type="reset"
        variant="secondary"
    >
      Reset
    </Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Minimum and maximum values">
<Form validationBehavior="native" maxWidth="size-3000">
  <TimeField
      label="Meeting time"
      minValue={new Time(9)}
      maxValue={new Time(17)} defaultValue={new Time(8)}/>
  <ButtonGroup>
    <Button type="submit" variant="primary">Submit</Button>
    <Button type="reset" variant="secondary">Reset</Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Minimum and maximum values1">
<Form validationBehavior="native" maxWidth="size-3000">
  <TimeField
      label="Meeting time"
      minValue={new Time(9)}
      maxValue={new Time(17)} defaultValue={new Time(8)}/>
  <ButtonGroup>
    <Button type="submit" variant="primary">Submit</Button>
    <Button type="reset" variant="secondary">Reset</Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Minimum and maximum values12">
<Form
    validationBehavior="native"
    maxWidth="size-3000"
>
  <TimeField
      label="Meeting time"
      minValue={new Time(
          9
      )}
      maxValue={new Time(
          17
      )} defaultValue={new Time(
      8
  )}
  />
  <ButtonGroup>
    <Button
        type="submit"
        variant="primary"
    >
      Submit
    </Button>
    <Button
        type="reset"
        variant="secondary"
    >
      Reset
    </Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Custom validation">
<Form validationBehavior="native" maxWidth="size-3000">
  <TimeField
      label="Meeting time"
      validate={(time) =>
          time?.minute % 15 !== 0 ? 'Meetings start every 15 minutes.' : null} defaultValue={new Time(9, 25)}
  />
  <ButtonGroup>
    <Button type="submit" variant="primary">Submit</Button>
    <Button type="reset" variant="secondary">Reset</Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Custom validation1">
<Form validationBehavior="native" maxWidth="size-3000">
  <TimeField
      label="Meeting time"
      validate={(time) =>
          time?.minute % 15 !== 0
              ? 'Meetings start every 15 minutes.'
              : null} defaultValue={new Time(9, 25)}
  />
  <ButtonGroup>
    <Button type="submit" variant="primary">
      Submit
    </Button>
    <Button type="reset" variant="secondary">
      Reset
    </Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Custom validation12">
<Form
    validationBehavior="native"
    maxWidth="size-3000"
>
  <TimeField
      label="Meeting time"
      validate={(time) =>
          time?.minute %
          15 !== 0
              ? 'Meetings start every 15 minutes.'
              : null} defaultValue={new Time(
      9,
      25
  )}
  />
  <ButtonGroup>
    <Button
        type="submit"
        variant="primary"
    >
      Submit
    </Button>
    <Button
        type="reset"
        variant="secondary"
    >
      Reset
    </Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Quiet">
<TimeField label="Event time" isQuiet/>
</Variant>
<Variant name="Quiet1">
<TimeField label="Event time" isQuiet/>
</Variant>
<Variant name="Quiet12">
<TimeField
    label="Event time"
    isQuiet
/>
</Variant>
<Variant name="Disabled">
<TimeField label="Event time" isDisabled/>
</Variant>
<Variant name="Disabled1">
<TimeField label="Event time" isDisabled/>
</Variant>
<Variant name="Disabled12">
<TimeField
    label="Event time"
    isDisabled
/>
</Variant>
<Variant name="Read only">
<TimeField label="Event time" value={new Time(11)} isReadOnly/>
</Variant>
<Variant name="Read only1">
<TimeField
    label="Event time"
    value={new Time(11)}
    isReadOnly
/>
</Variant>
<Variant name="Read only12">
<TimeField
    label="Event time"
    value={new Time(11)}
    isReadOnly
/>
</Variant>
<Variant name="Label alignment and position">
<TimeField label="Event time" labelPosition="side" labelAlign="end"/>
</Variant>
<Variant name="Label alignment and position1">
<TimeField
    label="Event time"
    labelPosition="side"
    labelAlign="end"
/>
</Variant>
<Variant name="Label alignment and position12">
<TimeField
    label="Event time"
    labelPosition="side"
    labelAlign="end"
/>
</Variant>
<Variant name="Help text">
<Flex gap="size-100" wrap>
  <TimeField
      label="Time"
      defaultValue={new Time(9)}
      validationState="valid"
      description="Select a meeting time."
  />
  <TimeField
      label="Time"
      validationState="invalid"
      errorMessage="Empty input is not allowed."
  />
</Flex>
</Variant>
<Variant name="Help text1">
<Flex gap="size-100" wrap>
  <TimeField
      label="Time"
      defaultValue={new Time(9)}
      validationState="valid"
      description="Select a meeting time."
  />
  <TimeField
      label="Time"
      validationState="invalid"
      errorMessage="Empty input is not allowed."
  />
</Flex>
</Variant>
<Variant name="Help text12">
<Flex
    gap="size-100"
    wrap
>
  <TimeField
      label="Time"
      defaultValue={new Time(
          9
      )}
      validationState="valid"
      description="Select a meeting time."
  />
  <TimeField
      label="Time"
      validationState="invalid"
      errorMessage="Empty input is not allowed."
  />
</Flex>
</Variant>
<Variant name="Contextual help">
<TimeField
    label="Appointment time"
    contextualHelp={
        <ContextualHelp variant="info">
      <Heading>Appointment changes</Heading>
      <Content>
        Your appointment time cannot be changed once it is scheduled.
      </Content>
    </ContextualHelp>
    }
/>
</Variant>
<Variant name="Contextual help1">
<TimeField
    label="Appointment time"
    contextualHelp={
        <ContextualHelp variant="info">
      <Heading>Appointment changes</Heading>
      <Content>
        Your appointment time cannot be changed once it is
        scheduled.
      </Content>
    </ContextualHelp>
    }
/>
</Variant>
<Variant name="Contextual help12">
<TimeField
    label="Appointment time"
    contextualHelp={
        <ContextualHelp variant="info">
      <Heading>
        Appointment
        changes
      </Heading>
      <Content>
        Your
        appointment
        time cannot be
        changed once it
        is scheduled.
      </Content>
    </ContextualHelp>
    }
/>
</Variant>
<Variant name="Placeholder value">
<TimeField label="Appointment time" placeholderValue={new Time(9)}/>
</Variant>
<Variant name="Placeholder value1">
<TimeField
    label="Appointment time"
    placeholderValue={new Time(9)}
/>
</Variant>
<Variant name="Placeholder value12">
<TimeField
    label="Appointment time"
    placeholderValue={new Time(
        9
    )}
/>
</Variant>
<Variant name="Hide time zone">
<TimeField
    label="Appointment time"
    defaultValue={parseZonedDateTime('2022-11-07T10:45[America/Los_Angeles]')}
    hideTimeZone/>
</Variant>
<Variant name="Hide time zone1">
<TimeField
    label="Appointment time"
    defaultValue={parseZonedDateTime(
        '2022-11-07T10:45[America/Los_Angeles]'
    )}
    hideTimeZone
/>
</Variant>
<Variant name="Hide time zone12">
<TimeField
    label="Appointment time"
    defaultValue={parseZonedDateTime(
        '2022-11-07T10:45[America/Los_Angeles]'
    )}
    hideTimeZone
/>
</Variant>
<Variant name="Hour cycle">
<TimeField
    label="Appointment time"
    hourCycle={24}/>
</Variant>
<Variant name="Hour cycle1">
<TimeField
    label="Appointment time"
    hourCycle={24}/>
</Variant>
<Variant name="Hour cycle12">
<TimeField
    label="Appointment time"
    hourCycle={24}
/>
</Variant>
</Component>
</Category>
<Category name="Drag and drop">
<Component name="DropZonerc" docURL="https://react-spectrum.adobe.com/react-spectrum/DropZone.html">
<Variant name="Example">
<>
        <Draggable/>
        <DropZone
            maxWidth="size-3000"
            isFilled={isFilled}
            onDrop={() => setIsFilled(true)}>
        <IllustratedMessage>
          <Upload/>
          <Heading>
            <Text slot="label">
              {isFilled ? 'You dropped something!' : 'Drag and drop your file'}
            </Text>
          </Heading>
        </IllustratedMessage>
      </DropZone>
    </>
</Variant>
<Variant name="Example1">
<>
    <Draggable/>
    <DropZone
        maxWidth="size-3000"
        isFilled={isFilled}
        onDrop={() => setIsFilled(true)}
    >
        <IllustratedMessage>
          <Upload/>
          <Heading>
            <Text slot="label">
              {isFilled
                  ? 'You dropped something!'
                  : 'Drag and drop your file'}
            </Text>
          </Heading>
        </IllustratedMessage>
      </DropZone>
</>
</Variant>
<Variant name="Example12">
<>
    <Draggable/>
    <DropZone
        maxWidth="size-3000"
        isFilled={isFilled}
        onDrop={() =>
            setIsFilled(
                true
            )}
    >
        <IllustratedMessage>
          <Upload/>
          <Heading>
            <Text slot="label">
              {isFilled
                  ? 'You dropped something!'
                  : 'Drag and drop your file'}
            </Text>
          </Heading>
        </IllustratedMessage>
      </DropZone>
</>
</Variant>
<Variant name="Example123">
<div
    {...dragProps}
    role="button"
    tabIndex={0}
    className={`draggable ${isDragging ? 'dragging' : ''}`}
>
      Drag me
    </div>
</Variant>
<Variant name="Example1234">
<div
    {...dragProps}
    role="button"
    tabIndex={0}
    className={`draggable ${
        isDragging ? 'dragging' : ''
    }`}
>
      Drag me
    </div>
</Variant>
<Variant name="Example12345">
<div
    {...dragProps}
    role="button"
    tabIndex={0}
    className={`draggable ${
        isDragging
            ? 'dragging'
            : ''
    }`}
>
      Drag me
    </div>
</Variant>
<Variant name="Content">
<>
    <Draggable/>
    <DropZone
        maxWidth="size-3000"
        isFilled={isFilled}
        onDrop={() => setIsFilled(true)}>
        <IllustratedMessage>
          <Upload/>
          <Heading>
            <Text slot="label">
              {isFilled ? 'You dropped something!' : 'Drag and drop here'}
            </Text>
          </Heading>
          <Content>
            <FileTrigger
                onSelect={() => setIsFilled(true)}>
              <Button variant="primary">Browse</Button>
            </FileTrigger>
          </Content>
        </IllustratedMessage>
      </DropZone>
</>
</Variant>
<Variant name="Content1">
<>
    <Draggable/>
    <DropZone
        maxWidth="size-3000"
        isFilled={isFilled}
        onDrop={() => setIsFilled(true)}
    >
        <IllustratedMessage>
          <Upload/>
          <Heading>
            <Text slot="label">
              {isFilled
                  ? 'You dropped something!'
                  : 'Drag and drop here'}
            </Text>
          </Heading>
          <Content>
            <FileTrigger
                onSelect={() => setIsFilled(true)}
            >
              <Button variant="primary">Browse</Button>
            </FileTrigger>
          </Content>
        </IllustratedMessage>
      </DropZone>
</>
</Variant>
<Variant name="Content12">
<>
    <Draggable/>
    <DropZone
        maxWidth="size-3000"
        isFilled={isFilled}
        onDrop={() =>
            setIsFilled(
                true
            )}
    >
        <IllustratedMessage>
          <Upload/>
          <Heading>
            <Text slot="label">
              {isFilled
                  ? 'You dropped something!'
                  : 'Drag and drop here'}
            </Text>
          </Heading>
          <Content>
            <FileTrigger
                onSelect={() =>
                    setIsFilled(
                        true
                    )}
            >
              <Button variant="primary">
                Browse
              </Button>
            </FileTrigger>
          </Content>
        </IllustratedMessage>
      </DropZone>
</>
</Variant>
<Variant name="Events">
<>
    <Draggable/>
    <DropZone
        maxWidth="size-3000"
        isFilled={!!filledSrc}
        onDrop={async (e) => {
            e.items.find(async (item) => {
                if (item.kind === 'file') {
                    setFilledSrc(item.name);
                } else if (item.kind === 'text' && item.types.has('text/plain')) {
                    setFilledSrc(await item.getText('text/plain'));
                }
            });
        }}
    >
        {filledSrc
            ? (
                <Flex
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    gap="size-100"
                >
              <File/>
                    {filledSrc}
            </Flex>
            )
            : (
                <IllustratedMessage>
              <Upload/>
              <Heading>
                <Text slot="label">
                  Drag and drop here
                </Text>
              </Heading>
            </IllustratedMessage>
            )}
      </DropZone>
</>
</Variant>
<Variant name="Events1">
<>
    <Draggable/>
    <DropZone
        maxWidth="size-3000"
        isFilled={!!filledSrc}
        onDrop={async (e) => {
            e.items.find(async (item) => {
                if (item.kind === 'file') {
                    setFilledSrc(item.name);
                } else if (
                    item.kind === 'text' &&
                    item.types.has('text/plain')
                ) {
                    setFilledSrc(
                        await item.getText('text/plain')
                    );
                }
            });
        }}
    >
        {filledSrc
            ? (
                <Flex
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    gap="size-100"
                >
              <File/>
                    {filledSrc}
            </Flex>
            )
            : (
                <IllustratedMessage>
              <Upload/>
              <Heading>
                <Text slot="label">
                  Drag and drop here
                </Text>
              </Heading>
            </IllustratedMessage>
            )}
      </DropZone>
</>
</Variant>
<Variant name="Filled state">
<>
    <DraggableImage/>
    <DropZone
        isFilled={!!filledSrc}
        maxWidth="size-3000"
        height="size-2400"
        getDropOperation={(types) =>
            (types.has('image/png') || types.has('image/jpeg'))
                ? 'copy'
                : 'cancel'}
        onDrop={async (e) => {
            e.items.find(async (item) => {
                if (item.kind === 'file') {
                    if (item.type === 'image/jpeg' || item.type === 'image/png') {
                        setFilledSrc(URL.createObjectURL(await item.getFile()));
                    }
                } else if (item.kind === 'text') {
                    setFilledSrc(await item.getText('image/jpeg'));
                }
            });
        }}
    >
        {filledSrc
            ? <img className="images" alt="" src={filledSrc}/>
            : (
                <IllustratedMessage>
              <Upload/>
              <Heading>
                <Text slot="label">
                  Drag and drop photos
                </Text>
              </Heading>
            </IllustratedMessage>
            )}
      </DropZone>
</>
</Variant>
<Variant name="Filled state1">
<>
    <DraggableImage/>
    <DropZone
        isFilled={!!filledSrc}
        maxWidth="size-3000"
        height="size-2400"
        getDropOperation={(types) =>
            (types.has('image/png') ||
                types.has('image/jpeg'))
                ? 'copy'
                : 'cancel'}
        onDrop={async (e) => {
            e.items.find(async (item) => {
                if (item.kind === 'file') {
                    if (
                        item.type === 'image/jpeg' ||
                        item.type === 'image/png'
                    ) {
                        setFilledSrc(
                            URL.createObjectURL(await item.getFile())
                        );
                    }
                } else if (item.kind === 'text') {
                    setFilledSrc(
                        await item.getText('image/jpeg')
                    );
                }
            });
        }}
    >
        {filledSrc
            ? (
                <img
                    className="images"
                    alt=""
                    src={filledSrc}
                />
            )
            : (
                <IllustratedMessage>
              <Upload/>
              <Heading>
                <Text slot="label">
                  Drag and drop photos
                </Text>
              </Heading>
            </IllustratedMessage>
            )}
      </DropZone>
</>
</Variant>
<Variant name="Filled state1234567">
<div
    {...dragProps}
    role="button"
    tabIndex={0}
    className={`draggable ${
        isDragging ? 'dragging' : ''
    }`}
>
      <img
          width="150px"
          height="100px"
          alt="Traditional Roof"
          src="https://i.imgur.com/Z7AzH2c.jpg"
      />
    </div>
</Variant>
<Variant name="Filled state12345678">
<div
    {...dragProps}
    role="button"
    tabIndex={0}
    className={`draggable ${
        isDragging
            ? 'dragging'
            : ''
    }`}
>
      <img
          width="150px"
          height="100px"
          alt="Traditional Roof"
          src="https://i.imgur.com/Z7AzH2c.jpg"
      />
    </div>
</Variant>
<Variant name="Replace message">
<>
    <Draggable/>
    <DropZone
        isFilled={isFilled}
        maxWidth="size-3000"
        replaceMessage="This is a custom message"
        onDrop={() => setIsFilled(true)}>
        <IllustratedMessage>
          <Upload/>
          <Heading>
            <Text slot="label">
              {isFilled ? 'You dropped something!' : 'Drag and drop here'}
            </Text>
          </Heading>
        </IllustratedMessage>
      </DropZone>
</>
</Variant>
<Variant name="Replace message1">
<>
    <Draggable/>
    <DropZone
        isFilled={isFilled}
        maxWidth="size-3000"
        replaceMessage="This is a custom message"
        onDrop={() => setIsFilled(true)}
    >
        <IllustratedMessage>
          <Upload/>
          <Heading>
            <Text slot="label">
              {isFilled
                  ? 'You dropped something!'
                  : 'Drag and drop here'}
            </Text>
          </Heading>
        </IllustratedMessage>
      </DropZone>
</>
</Variant>
<Variant name="Replace message12">
<>
    <Draggable/>
    <DropZone
        isFilled={isFilled}
        maxWidth="size-3000"
        replaceMessage="This is a custom message"
        onDrop={() =>
            setIsFilled(
                true
            )}
    >
        <IllustratedMessage>
          <Upload/>
          <Heading>
            <Text slot="label">
              {isFilled
                  ? 'You dropped something!'
                  : 'Drag and drop here'}
            </Text>
          </Heading>
        </IllustratedMessage>
      </DropZone>
</>
</Variant>
<Variant name="Visual feedback">
<>
    <Draggable/>
    <DraggableImage/>
    <DropZone
        maxWidth="size-3000"
        isFilled={!!filledSrc}
        getDropOperation={(types) =>
            types.has('image/jpeg') ? 'copy' : 'cancel'}
        onDrop={async (e) => {
            e.items.find(async (item) => {
                if (item.kind === 'file') {
                    if (item.type === 'image/jpeg') {

                        setFilledSrc({
                            type: file.type,
                            name: file.name
                        });
                    }
                } else if (item.kind === 'text') {

                    setFilledSrc({
                        type: 'image/jpeg',
                        name: file
                    });
                }
            });
        }}
    >
        <IllustratedMessage>
          <Upload/>
          <Heading>
            <Text slot="label">
              {filledSrc
                  ? `${filledSrc.type} ${filledSrc.name}`
                  : 'Drag and drop here'}
            </Text>
          </Heading>
          <Content>
            <FileTrigger
                acceptedFileTypes={['image/jpeg']}
                onSelect={(e) => {

                    if (file) {
                        setFilledSrc({
                            type: file.type,
                            name: file.name
                        });
                    }
                }}
            >
              <Button variant="primary">Browse</Button>
            </FileTrigger>
          </Content>
        </IllustratedMessage>
      </DropZone>
</>
</Variant>
<Variant name="Visual feedback1">
<>
    <Draggable/>
    <DraggableImage/>
    <DropZone
        maxWidth="size-3000"
        isFilled={!!filledSrc}
        getDropOperation={(types) =>
            types.has('image/jpeg') ? 'copy' : 'cancel'}
        onDrop={async (e) => {
            e.items.find(async (item) => {
                if (item.kind === 'file') {
                    if (item.type === 'image/jpeg') {

                        setFilledSrc({
                            type: file.type,
                            name: file.name
                        });
                    }
                } else if (item.kind === 'text') {

                    setFilledSrc({
                        type: 'image/jpeg',
                        name: file
                    });
                }
            });
        }}
    >
        <IllustratedMessage>
          <Upload/>
          <Heading>
            <Text slot="label">
              {filledSrc
                  ? `${filledSrc.type} ${filledSrc.name}`
                  : 'Drag and drop here'}
            </Text>
          </Heading>
          <Content>
            <FileTrigger
                acceptedFileTypes={['image/jpeg']}
                onSelect={(e) => {

                    if (file) {
                        setFilledSrc({
                            type: file.type,
                            name: file.name
                        });
                    }
                }}
            >
              <Button variant="primary">Browse</Button>
            </FileTrigger>
          </Content>
        </IllustratedMessage>
      </DropZone>
</>
</Variant>
</Component>
</Category>
<Category name="Forms">
<Component name="Checkbox" docURL="https://react-spectrum.adobe.com/react-spectrum/Checkbox.html">
<Variant name="Example">
<Checkbox>Unsubscribe</Checkbox>
</Variant>
<Variant name="Example1">
<Checkbox>Unsubscribe</Checkbox>
</Variant>
<Variant name="Example12">
<Checkbox>
  Unsubscribe
</Checkbox>
</Variant>
<Variant name="Value">
<Flex direction="row">
        <Checkbox defaultSelected>Subscribe (uncontrolled)</Checkbox>
        <Checkbox isSelected={selected} onChange={setSelected}>
        Subscribe (controlled)
      </Checkbox>
    </Flex>
</Variant>
<Variant name="Value1">
<Flex direction="row">
    <Checkbox defaultSelected>
    Subscribe (uncontrolled)
    </Checkbox>
    <Checkbox
        isSelected={selected}
        onChange={setSelected}
    >
        Subscribe (controlled)
      </Checkbox>
</Flex>
</Variant>
<Variant name="Value12">
<Flex direction="row">
    <Checkbox
        defaultSelected
    >
    Subscribe
    (uncontrolled)
    </Checkbox>
    <Checkbox
        isSelected={selected}
        onChange={setSelected}
    >
        Subscribe
        (controlled)
      </Checkbox>
</Flex>
</Variant>
<Variant name="Indeterminate">
<Checkbox isIndeterminate>Subscribe</Checkbox>
</Variant>
<Variant name="Indeterminate1">
<Checkbox isIndeterminate>Subscribe</Checkbox>
</Variant>
<Variant name="Indeterminate12">
<Checkbox
    isIndeterminate
>
  Subscribe
</Checkbox>
</Variant>
<Variant name="HTML forms">
<Checkbox name="newsletter" value="subscribe">Subscribe</Checkbox>
</Variant>
<Variant name="HTML forms1">
<Checkbox name="newsletter" value="subscribe">
  Subscribe
</Checkbox>
</Variant>
<Variant name="HTML forms12">
<Checkbox
    name="newsletter"
    value="subscribe"
>
  Subscribe
</Checkbox>
</Variant>
<Variant name="Events">
<Flex direction="column">
    <Checkbox isSelected={selected} onChange={setSelection}>
        Subscribe
      </Checkbox>
<View>{`You are ${selected ? 'subscribed' : 'unsubscribed'}`}</View>
</Flex>
</Variant>
<Variant name="Events1">
<Flex direction="column">
    <Checkbox
        isSelected={selected}
        onChange={setSelection}
    >
        Subscribe
      </Checkbox>
<View>
        {`You are ${
            selected ? 'subscribed' : 'unsubscribed'
        }`}
      </View>
</Flex>
</Variant>
<Variant name="Events12">
<Flex direction="column">
    <Checkbox
        isSelected={selected}
        onChange={setSelection}
    >
        Subscribe
      </Checkbox>
<View>
        {`You are ${
            selected
                ? 'subscribed'
                : 'unsubscribed'
        }`}
      </View>
</Flex>
</Variant>
<Variant name="Validation">
<Checkbox isInvalid>I accept the terms and conditions</Checkbox>
</Variant>
<Variant name="Validation1">
<Checkbox isInvalid>
  I accept the terms and conditions
</Checkbox>
</Variant>
<Variant name="Validation12">
<Checkbox isInvalid>
  I accept the terms
  and conditions
</Checkbox>
</Variant>
<Variant name="Disabled">
<Checkbox isDisabled>Subscribe</Checkbox>
</Variant>
<Variant name="Disabled1">
<Checkbox isDisabled>Subscribe</Checkbox>
</Variant>
<Variant name="Disabled12">
<Checkbox isDisabled>
  Subscribe
</Checkbox>
</Variant>
<Variant name="Emphasized">
<Checkbox isEmphasized defaultSelected>Subscribe</Checkbox>
</Variant>
<Variant name="Emphasized1">
<Checkbox isEmphasized defaultSelected>Subscribe</Checkbox>
</Variant>
<Variant name="Emphasized12">
<Checkbox
    isEmphasized
    defaultSelected
>
  Subscribe
</Checkbox>
</Variant>
</Component>
<Component name="CheckboxGroup" docURL="https://react-spectrum.adobe.com/react-spectrum/CheckboxGroup.html">
<Variant name="Example">
<CheckboxGroup label="Favorite sports">
  <Checkbox value="soccer">Soccer</Checkbox>
  <Checkbox value="baseball">Baseball</Checkbox>
  <Checkbox value="basketball">Basketball</Checkbox>
</CheckboxGroup>
</Variant>
<Variant name="Example1">
<CheckboxGroup label="Favorite sports">
  <Checkbox value="soccer">Soccer</Checkbox>
  <Checkbox value="baseball">Baseball</Checkbox>
  <Checkbox value="basketball">Basketball</Checkbox>
</CheckboxGroup>
</Variant>
<Variant name="Example12">
<CheckboxGroup label="Favorite sports">
  <Checkbox value="soccer">
    Soccer
  </Checkbox>
  <Checkbox value="baseball">
    Baseball
  </Checkbox>
  <Checkbox value="basketball">
    Basketball
  </Checkbox>
</CheckboxGroup>
</Variant>
<Variant name="Value">
<Flex gap="size-300">
        <CheckboxGroup
            label="Favorite sports (uncontrolled)"
            defaultValue={['soccer', 'baseball']}
        >
        <Checkbox value="soccer">Soccer</Checkbox>
        <Checkbox value="baseball">Baseball</Checkbox>
        <Checkbox value="basketball">Basketball</Checkbox>
      </CheckboxGroup>

      <CheckboxGroup
          label="Favorite sports (controlled)"
          value={selected}
          onChange={setSelected}
      >
        <Checkbox value="soccer">Soccer</Checkbox>
        <Checkbox value="baseball">Baseball</Checkbox>
        <Checkbox value="basketball">Basketball</Checkbox>
      </CheckboxGroup>
    </Flex>
</Variant>
<Variant name="Value1">
<Flex gap="size-300">
    <CheckboxGroup
        label="Favorite sports (uncontrolled)"
        defaultValue={['soccer', 'baseball']}
    >
        <Checkbox value="soccer">Soccer</Checkbox>
        <Checkbox value="baseball">Baseball</Checkbox>
        <Checkbox value="basketball">Basketball</Checkbox>
      </CheckboxGroup>

<CheckboxGroup
    label="Favorite sports (controlled)"
    value={selected}
    onChange={setSelected}
>
        <Checkbox value="soccer">Soccer</Checkbox>
        <Checkbox value="baseball">Baseball</Checkbox>
        <Checkbox value="basketball">Basketball</Checkbox>
      </CheckboxGroup>
</Flex>
</Variant>
<Variant name="Value12">
<Flex gap="size-300">
    <CheckboxGroup
        label="Favorite sports (uncontrolled)"
        defaultValue={[
            'soccer',
            'baseball'
        ]}
    >
        <Checkbox value="soccer">
          Soccer
        </Checkbox>
        <Checkbox value="baseball">
          Baseball
        </Checkbox>
        <Checkbox value="basketball">
          Basketball
        </Checkbox>
      </CheckboxGroup>

<CheckboxGroup
    label="Favorite sports (controlled)"
    value={selected}
    onChange={setSelected}
>
        <Checkbox value="soccer">
          Soccer
        </Checkbox>
        <Checkbox value="baseball">
          Baseball
        </Checkbox>
        <Checkbox value="basketball">
          Basketball
        </Checkbox>
      </CheckboxGroup>
</Flex>
</Variant>
<Variant name="HTML forms">
<CheckboxGroup label="Condiments" name="condiments">
  <Checkbox value="mayo">Mayo</Checkbox>
  <Checkbox value="mustart">Mustard</Checkbox>
  <Checkbox value="ketchup">Ketchup</Checkbox>
</CheckboxGroup>
</Variant>
<Variant name="HTML forms1">
<CheckboxGroup label="Condiments" name="condiments">
  <Checkbox value="mayo">Mayo</Checkbox>
  <Checkbox value="mustart">Mustard</Checkbox>
  <Checkbox value="ketchup">Ketchup</Checkbox>
</CheckboxGroup>
</Variant>
<Variant name="HTML forms12">
<CheckboxGroup
    label="Condiments"
    name="condiments"
>
  <Checkbox value="mayo">
    Mayo
  </Checkbox>
  <Checkbox value="mustart">
    Mustard
  </Checkbox>
  <Checkbox value="ketchup">
    Ketchup
  </Checkbox>
</CheckboxGroup>
</Variant>
<Variant name="Labeling">
<Flex gap="size-300" wrap>
  <CheckboxGroup label="Favorite sports">
    <Checkbox value="soccer">Soccer</Checkbox>
    <Checkbox value="baseball">Baseball</Checkbox>
    <Checkbox value="basketball">Basketball</Checkbox>
  </CheckboxGroup>
  <CheckboxGroup label="Favorite sports" isRequired necessityIndicator="icon">
    <Checkbox value="soccer">Soccer</Checkbox>
    <Checkbox value="baseball">Baseball</Checkbox>
    <Checkbox value="basketball">Basketball</Checkbox>
  </CheckboxGroup>
  <CheckboxGroup label="Favorite sports" isRequired necessityIndicator="label">
    <Checkbox value="soccer">Soccer</Checkbox>
    <Checkbox value="baseball">Baseball</Checkbox>
    <Checkbox value="basketball">Basketball</Checkbox>
  </CheckboxGroup>
  <CheckboxGroup label="Favorite sports" necessityIndicator="label">
    <Checkbox value="soccer">Soccer</Checkbox>
    <Checkbox value="baseball">Baseball</Checkbox>
    <Checkbox value="basketball">Basketball</Checkbox>
  </CheckboxGroup>
</Flex>
</Variant>
<Variant name="Labeling1">
<Flex gap="size-300" wrap>
  <CheckboxGroup label="Favorite sports">
    <Checkbox value="soccer">Soccer</Checkbox>
    <Checkbox value="baseball">Baseball</Checkbox>
    <Checkbox value="basketball">Basketball</Checkbox>
  </CheckboxGroup>
  <CheckboxGroup
      label="Favorite sports"
      isRequired
      necessityIndicator="icon"
  >
    <Checkbox value="soccer">Soccer</Checkbox>
    <Checkbox value="baseball">Baseball</Checkbox>
    <Checkbox value="basketball">Basketball</Checkbox>
  </CheckboxGroup>
  <CheckboxGroup
      label="Favorite sports"
      isRequired
      necessityIndicator="label"
  >
    <Checkbox value="soccer">Soccer</Checkbox>
    <Checkbox value="baseball">Baseball</Checkbox>
    <Checkbox value="basketball">Basketball</Checkbox>
  </CheckboxGroup>
  <CheckboxGroup
      label="Favorite sports"
      necessityIndicator="label"
  >
    <Checkbox value="soccer">Soccer</Checkbox>
    <Checkbox value="baseball">Baseball</Checkbox>
    <Checkbox value="basketball">Basketball</Checkbox>
  </CheckboxGroup>
</Flex>
</Variant>
<Variant name="Labeling12">
<Flex
    gap="size-300"
    wrap
>
  <CheckboxGroup label="Favorite sports">
    <Checkbox value="soccer">
      Soccer
    </Checkbox>
    <Checkbox value="baseball">
      Baseball
    </Checkbox>
    <Checkbox value="basketball">
      Basketball
    </Checkbox>
  </CheckboxGroup>
  <CheckboxGroup
      label="Favorite sports"
      isRequired
      necessityIndicator="icon"
  >
    <Checkbox value="soccer">
      Soccer
    </Checkbox>
    <Checkbox value="baseball">
      Baseball
    </Checkbox>
    <Checkbox value="basketball">
      Basketball
    </Checkbox>
  </CheckboxGroup>
  <CheckboxGroup
      label="Favorite sports"
      isRequired
      necessityIndicator="label"
  >
    <Checkbox value="soccer">
      Soccer
    </Checkbox>
    <Checkbox value="baseball">
      Baseball
    </Checkbox>
    <Checkbox value="basketball">
      Basketball
    </Checkbox>
  </CheckboxGroup>
  <CheckboxGroup
      label="Favorite sports"
      necessityIndicator="label"
  >
    <Checkbox value="soccer">
      Soccer
    </Checkbox>
    <Checkbox value="baseball">
      Baseball
    </Checkbox>
    <Checkbox value="basketball">
      Basketball
    </Checkbox>
  </CheckboxGroup>
</Flex>
</Variant>
<Variant name="Events">
<>
    <CheckboxGroup
        label="Favorite sports"
        value={selected}
        onChange={setSelected}
    >
        <Checkbox value="soccer">Soccer</Checkbox>
        <Checkbox value="baseball">Baseball</Checkbox>
        <Checkbox value="basketball">Basketball</Checkbox>
      </CheckboxGroup>
<div>You have selected: {selected.join(', ')}</div>
</>
</Variant>
<Variant name="Events1">
<>
    <CheckboxGroup
        label="Favorite sports"
        value={selected}
        onChange={setSelected}
    >
        <Checkbox value="soccer">Soccer</Checkbox>
        <Checkbox value="baseball">Baseball</Checkbox>
        <Checkbox value="basketball">Basketball</Checkbox>
      </CheckboxGroup>
<div>You have selected: {selected.join(', ')}</div>
</>
</Variant>
<Variant name="Events12">
<>
    <CheckboxGroup
        label="Favorite sports"
        value={selected}
        onChange={setSelected}
    >
        <Checkbox value="soccer">
          Soccer
        </Checkbox>
        <Checkbox value="baseball">
          Baseball
        </Checkbox>
        <Checkbox value="basketball">
          Basketball
        </Checkbox>
      </CheckboxGroup>
<div>
        You have
        selected:{' '}
    {selected.join(
        ', '
    )}
      </div>
</>
</Variant>
<Variant name="Group validation">
<Form validationBehavior="native">
  <CheckboxGroup label="Sandwich condiments"
      name="condiments"
      isRequired>    <Checkbox value="lettuce">Lettuce</Checkbox>
    <Checkbox value="tomato">Tomato</Checkbox>
    <Checkbox value="onion">Onion</Checkbox>
    <Checkbox value="sprouts">Sprouts</Checkbox>
  </CheckboxGroup>
  <ButtonGroup>
    <Button type="submit" variant="primary">Submit</Button>
    <Button type="reset" variant="secondary">Reset</Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Group validation1">
<Form validationBehavior="native">
  <CheckboxGroup
      label="Sandwich condiments"
      name="condiments"
      isRequired
  >    <Checkbox value="lettuce">Lettuce</Checkbox>
    <Checkbox value="tomato">Tomato</Checkbox>
    <Checkbox value="onion">Onion</Checkbox>
    <Checkbox value="sprouts">Sprouts</Checkbox>
  </CheckboxGroup>
  <ButtonGroup>
    <Button type="submit" variant="primary">
      Submit
    </Button>
    <Button type="reset" variant="secondary">
      Reset
    </Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Group validation12">
<Form validationBehavior="native">
  <CheckboxGroup
      label="Sandwich condiments"
      name="condiments"
      isRequired
  >    <Checkbox value="lettuce">
      Lettuce
    </Checkbox>
    <Checkbox value="tomato">
      Tomato
    </Checkbox>
    <Checkbox value="onion">
      Onion
    </Checkbox>
    <Checkbox value="sprouts">
      Sprouts
    </Checkbox>
  </CheckboxGroup>
  <ButtonGroup>
    <Button
        type="submit"
        variant="primary"
    >
      Submit
    </Button>
    <Button
        type="reset"
        variant="secondary"
    >
      Reset
    </Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Individual Checkbox validation">
<Form validationBehavior="native">
  <CheckboxGroup label="Agree to the following" isRequired>
    <Checkbox value="terms" isRequired>Terms and conditions</Checkbox>
    <Checkbox value="privacy" isRequired>Privacy policy</Checkbox>
    <Checkbox value="cookies" isRequired>Cookie policy</Checkbox>  </CheckboxGroup>
  <ButtonGroup>
    <Button type="submit" variant="primary">Submit</Button>
    <Button type="reset" variant="secondary">Reset</Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Individual Checkbox validation1">
<Form validationBehavior="native">
  <CheckboxGroup
      label="Agree to the following"
      isRequired
  >
    <Checkbox value="terms" isRequired>
      Terms and conditions
    </Checkbox>
    <Checkbox value="privacy" isRequired>
      Privacy policy
    </Checkbox>
    <Checkbox value="cookies" isRequired>
      Cookie policy
    </Checkbox>  </CheckboxGroup>
  <ButtonGroup>
    <Button type="submit" variant="primary">
      Submit
    </Button>
    <Button type="reset" variant="secondary">
      Reset
    </Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Individual Checkbox validation12">
<Form validationBehavior="native">
  <CheckboxGroup
      label="Agree to the following"
      isRequired
  >
    <Checkbox
        value="terms"
        isRequired
    >
      Terms and
      conditions
    </Checkbox>
    <Checkbox
        value="privacy"
        isRequired
    >
      Privacy policy
    </Checkbox>
    <Checkbox
        value="cookies"
        isRequired
    >
      Cookie policy
    </Checkbox>  </CheckboxGroup>
  <ButtonGroup>
    <Button
        type="submit"
        variant="primary"
    >
      Submit
    </Button>
    <Button
        type="reset"
        variant="secondary"
    >
      Reset
    </Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Orientation">
<CheckboxGroup label="Favorite sports" orientation="horizontal">
  <Checkbox value="soccer">Soccer</Checkbox>
  <Checkbox value="baseball">Baseball</Checkbox>
  <Checkbox value="basketball">Basketball</Checkbox>
</CheckboxGroup>
</Variant>
<Variant name="Orientation1">
<CheckboxGroup
    label="Favorite sports"
    orientation="horizontal"
>
  <Checkbox value="soccer">Soccer</Checkbox>
  <Checkbox value="baseball">Baseball</Checkbox>
  <Checkbox value="basketball">Basketball</Checkbox>
</CheckboxGroup>
</Variant>
<Variant name="Orientation12">
<CheckboxGroup
    label="Favorite sports"
    orientation="horizontal"
>
  <Checkbox value="soccer">
    Soccer
  </Checkbox>
  <Checkbox value="baseball">
    Baseball
  </Checkbox>
  <Checkbox value="basketball">
    Basketball
  </Checkbox>
</CheckboxGroup>
</Variant>
<Variant name="Label position and alignment">
<CheckboxGroup label="Favorite sports" labelPosition="side" labelAlign="end">
  <Checkbox value="soccer">Soccer</Checkbox>
  <Checkbox value="baseball">Baseball</Checkbox>
  <Checkbox value="basketball">Basketball</Checkbox>
</CheckboxGroup>
</Variant>
<Variant name="Label position and alignment1">
<CheckboxGroup
    label="Favorite sports"
    labelPosition="side"
    labelAlign="end"
>
  <Checkbox value="soccer">Soccer</Checkbox>
  <Checkbox value="baseball">Baseball</Checkbox>
  <Checkbox value="basketball">Basketball</Checkbox>
</CheckboxGroup>
</Variant>
<Variant name="Label position and alignment12">
<CheckboxGroup
    label="Favorite sports"
    labelPosition="side"
    labelAlign="end"
>
  <Checkbox value="soccer">
    Soccer
  </Checkbox>
  <Checkbox value="baseball">
    Baseball
  </Checkbox>
  <Checkbox value="basketball">
    Basketball
  </Checkbox>
</CheckboxGroup>
</Variant>
<Variant name="Help text">
<CheckboxGroup
    label="Pets"
    onChange={setChecked}
    value={checked}
    isInvalid={!isValid}
    description="Select your pets."
    errorMessage={checked.includes('cats')
        ? 'No cats allowed.'
        : 'Select only dogs and dragons.'}
>
      <Checkbox value="dogs">Dogs</Checkbox>
      <Checkbox value="cats">Cats</Checkbox>
      <Checkbox value="dragons">Dragons</Checkbox>
    </CheckboxGroup>
</Variant>
<Variant name="Help text1">
<CheckboxGroup
    label="Pets"
    onChange={setChecked}
    value={checked}
    isInvalid={!isValid}
    description="Select your pets."
    errorMessage={checked.includes('cats')
        ? 'No cats allowed.'
        : 'Select only dogs and dragons.'}
>
      <Checkbox value="dogs">Dogs</Checkbox>
      <Checkbox value="cats">Cats</Checkbox>
      <Checkbox value="dragons">Dragons</Checkbox>
    </CheckboxGroup>
</Variant>
<Variant name="Help text12">
<CheckboxGroup
    label="Pets"
    onChange={setChecked}
    value={checked}
    isInvalid={!isValid}
    description="Select your pets."
    errorMessage={checked
        .includes(
            'cats'
        )
        ? 'No cats allowed.'
        : 'Select only dogs and dragons.'}
>
      <Checkbox value="dogs">
        Dogs
      </Checkbox>
      <Checkbox value="cats">
        Cats
      </Checkbox>
      <Checkbox value="dragons">
        Dragons
      </Checkbox>
    </CheckboxGroup>
</Variant>
<Variant name="Contextual help">
<CheckboxGroup
    label="Favorite genres"
    contextualHelp={
        <ContextualHelp>
      <Heading>What does this do?</Heading>
      <Content>
        Your musical taste is used to train our machine learning
        recommendation algorithm.
      </Content>
    </ContextualHelp>
    }
>
  <Checkbox value="rock">Rock</Checkbox>
  <Checkbox value="pop">Pop</Checkbox>
  <Checkbox value="classical">Classical</Checkbox>
</CheckboxGroup>
</Variant>
<Variant name="Contextual help1">
<CheckboxGroup
    label="Favorite genres"
    contextualHelp={
        <ContextualHelp>
      <Heading>What does this do?</Heading>
      <Content>
        Your musical taste is used to train our machine
        learning recommendation algorithm.
      </Content>
    </ContextualHelp>
    }
>
  <Checkbox value="rock">Rock</Checkbox>
  <Checkbox value="pop">Pop</Checkbox>
  <Checkbox value="classical">Classical</Checkbox>
</CheckboxGroup>
</Variant>
<Variant name="Contextual help12">
<CheckboxGroup
    label="Favorite genres"
    contextualHelp={
        <ContextualHelp>
      <Heading>
        What does this
        do?
      </Heading>
      <Content>
        Your musical
        taste is used
        to train our
        machine
        learning
        recommendation
        algorithm.
      </Content>
    </ContextualHelp>
    }
>
  <Checkbox value="rock">
    Rock
  </Checkbox>
  <Checkbox value="pop">
    Pop
  </Checkbox>
  <Checkbox value="classical">
    Classical
  </Checkbox>
</CheckboxGroup>
</Variant>
<Variant name="Disabled">
<CheckboxGroup label="Favorite sports" isDisabled>
  <Checkbox value="soccer">Soccer</Checkbox>
  <Checkbox value="baseball">Baseball</Checkbox>
  <Checkbox value="basketball">Basketball</Checkbox>
</CheckboxGroup>
</Variant>
<Variant name="Disabled1">
<CheckboxGroup label="Favorite sports" isDisabled>
  <Checkbox value="soccer">Soccer</Checkbox>
  <Checkbox value="baseball">Baseball</Checkbox>
  <Checkbox value="basketball">Basketball</Checkbox>
</CheckboxGroup>
</Variant>
<Variant name="Disabled12">
<CheckboxGroup
    label="Favorite sports"
    isDisabled
>
  <Checkbox value="soccer">
    Soccer
  </Checkbox>
  <Checkbox value="baseball">
    Baseball
  </Checkbox>
  <Checkbox value="basketball">
    Basketball
  </Checkbox>
</CheckboxGroup>
</Variant>
<Variant name="Disabled123">
<CheckboxGroup label="Favorite sports">
  <Checkbox value="soccer">Soccer</Checkbox>
  <Checkbox value="baseball" isDisabled>Baseball</Checkbox>
  <Checkbox value="basketball">Basketball</Checkbox>
</CheckboxGroup>
</Variant>
<Variant name="Disabled1234">
<CheckboxGroup label="Favorite sports">
  <Checkbox value="soccer">Soccer</Checkbox>
  <Checkbox value="baseball" isDisabled>Baseball</Checkbox>
  <Checkbox value="basketball">Basketball</Checkbox>
</CheckboxGroup>
</Variant>
<Variant name="Disabled12345">
<CheckboxGroup label="Favorite sports">
  <Checkbox value="soccer">
    Soccer
  </Checkbox>
  <Checkbox
      value="baseball"
      isDisabled
  >
    Baseball
  </Checkbox>
  <Checkbox value="basketball">
    Basketball
  </Checkbox>
</CheckboxGroup>
</Variant>
<Variant name="Read only">
<CheckboxGroup label="Favorite sports" defaultValue={['baseball']} isReadOnly>
  <Checkbox value="soccer">Soccer</Checkbox>
  <Checkbox value="baseball">Baseball</Checkbox>
  <Checkbox value="basketball">Basketball</Checkbox>
</CheckboxGroup>
</Variant>
<Variant name="Read only1">
<CheckboxGroup
    label="Favorite sports"
    defaultValue={['baseball']}
    isReadOnly
>
  <Checkbox value="soccer">Soccer</Checkbox>
  <Checkbox value="baseball">Baseball</Checkbox>
  <Checkbox value="basketball">Basketball</Checkbox>
</CheckboxGroup>
</Variant>
<Variant name="Read only12">
<CheckboxGroup
    label="Favorite sports"
    defaultValue={[
        'baseball'
    ]}
    isReadOnly
>
  <Checkbox value="soccer">
    Soccer
  </Checkbox>
  <Checkbox value="baseball">
    Baseball
  </Checkbox>
  <Checkbox value="basketball">
    Basketball
  </Checkbox>
</CheckboxGroup>
</Variant>
<Variant name="Emphasized">
<CheckboxGroup
    label="Favorite sports"
    defaultValue={['soccer', 'baseball']}
    isEmphasized
>
  <Checkbox value="soccer">Soccer</Checkbox>
  <Checkbox value="baseball">Baseball</Checkbox>
  <Checkbox value="basketball">Basketball</Checkbox>
</CheckboxGroup>
</Variant>
<Variant name="Emphasized1">
<CheckboxGroup
    label="Favorite sports"
    defaultValue={['soccer', 'baseball']}
    isEmphasized
>
  <Checkbox value="soccer">Soccer</Checkbox>
  <Checkbox value="baseball">Baseball</Checkbox>
  <Checkbox value="basketball">Basketball</Checkbox>
</CheckboxGroup>
</Variant>
<Variant name="Emphasized12">
<CheckboxGroup
    label="Favorite sports"
    defaultValue={[
        'soccer',
        'baseball'
    ]}
    isEmphasized
>
  <Checkbox value="soccer">
    Soccer
  </Checkbox>
  <Checkbox value="baseball">
    Baseball
  </Checkbox>
  <Checkbox value="basketball">
    Basketball
  </Checkbox>
</CheckboxGroup>
</Variant>
</Component>
<Component name="Form" docURL="https://react-spectrum.adobe.com/react-spectrum/Form.html">
<Variant name="Example">
<Form maxWidth="size-3600">
  <TextField label="Email"/>
  <TextField label="Password"/>
  <Checkbox>Remember me</Checkbox>
</Form>
</Variant>
<Variant name="Example1">
<Form maxWidth="size-3600">
  <TextField label="Email"/>
  <TextField label="Password"/>
  <Checkbox>Remember me</Checkbox>
</Form>
</Variant>
<Variant name="Example12">
<Form maxWidth="size-3600">
  <TextField label="Email"/>
  <TextField label="Password"/>
  <Checkbox>
    Remember me
  </Checkbox>
</Form>
</Variant>
<Variant name="Content">
<Form maxWidth="size-3600" isRequired necessityIndicator="label">
  <TextField label="Name"/>
  <TextField label="Email"/>
  <TextField label="Address" isRequired={false}/>
</Form>
</Variant>
<Variant name="Content1">
<Form
    maxWidth="size-3600"
    isRequired
    necessityIndicator="label"
>
  <TextField label="Name"/>
  <TextField label="Email"/>
  <TextField label="Address" isRequired={false}/>
</Form>
</Variant>
<Variant name="Content12">
<Form
    maxWidth="size-3600"
    isRequired
    necessityIndicator="label"
>
  <TextField label="Name"/>
  <TextField label="Email"/>
  <TextField
      label="Address"
      isRequired={false}
  />
</Form>
</Variant>
<Variant name="Accessibility">
<h3 id="label-3">Personal Information</h3>
</Variant>
<Variant name="Accessibility1">
<h3 id="label-3">Personal Information</h3>
</Variant>
<Variant name="Accessibility12">
<h3 id="label-3">
  Personal Information
</h3>
</Variant>
<Variant name="Validation">
<Form
    validationErrors={{username: 'Sorry, this username is taken.'}}
    maxWidth="size-3000"
>
  <TextField label="Username" name="username"/>
</Form>
</Variant>
<Variant name="Validation1">
<Form
    validationErrors={{
        username: 'Sorry, this username is taken.'
    }}
    maxWidth="size-3000"
>
  <TextField label="Username" name="username"/>
</Form>
</Variant>
<Variant name="Validation12">
<Form
    validationErrors={{
        username:
            'Sorry, this username is taken.'
    }}
    maxWidth="size-3000"
>
  <TextField
      label="Username"
      name="username"
  />
</Form>
</Variant>
<Variant name="Validation behavior">
<Form validationBehavior="native" maxWidth="size-3000">
  <TextField label="Email" name="email" type="email" isRequired/>
  <ButtonGroup>
    <Button type="submit" variant="primary">Submit</Button>
    <Button type="reset" variant="secondary">Reset</Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Validation behavior1">
<Form validationBehavior="native" maxWidth="size-3000">
  <TextField
      label="Email"
      name="email"
      type="email"
      isRequired
  />
  <ButtonGroup>
    <Button type="submit" variant="primary">
      Submit
    </Button>
    <Button type="reset" variant="secondary">
      Reset
    </Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Validation behavior12">
<Form
    validationBehavior="native"
    maxWidth="size-3000"
>
  <TextField
      label="Email"
      name="email"
      type="email"
      isRequired
  />
  <ButtonGroup>
    <Button
        type="submit"
        variant="primary"
    >
      Submit
    </Button>
    <Button
        type="reset"
        variant="secondary"
    >
      Reset
    </Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Focus management">
<Form
    validationBehavior="native"
    onInvalid={e => {
        e.preventDefault();
        setInvalid(true);
    }} onSubmit={e => {
    e.preventDefault();
    setInvalid(false);
}}
    onReset={() => setInvalid(false)}
    maxWidth="size-3600">
      {isInvalid &&
          <InlineAlert variant="negative" autoFocus>          <Heading>Unable to submit</Heading>
          <Content>
            Please fix the validation errors below, and re-submit the form.
          </Content>
        </InlineAlert>
      }
    <TextField label="First Name" isRequired/>
      <TextField label="Last Name" isRequired/>
      <ButtonGroup>
        <Button type="submit" variant="primary">Submit</Button>
        <Button type="reset" variant="secondary">Reset</Button>
      </ButtonGroup>
    </Form>
</Variant>
<Variant name="Focus management1">
<Form
    validationBehavior="native"
    onInvalid={(e) => {
        e.preventDefault();
        setInvalid(true);
    }} onSubmit={(e) => {
    e.preventDefault();
    setInvalid(false);
}}
    onReset={() => setInvalid(false)}
    maxWidth="size-3600"
>
      {isInvalid && <InlineAlert variant="negative" autoFocus>          <Heading>Unable to submit</Heading>
          <Content>
            Please fix the validation errors below, and
            re-submit the form.
          </Content>
        </InlineAlert>}
    <TextField label="First Name" isRequired/>
      <TextField label="Last Name" isRequired/>
      <ButtonGroup>
        <Button type="submit" variant="primary">
          Submit
        </Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </ButtonGroup>
    </Form>
</Variant>
<Variant name="Focus management12">
<Form
    validationBehavior="native"
    onInvalid={(e) => {
        e.preventDefault();
        setInvalid(true);
    }} onSubmit={(e) => {
    e.preventDefault();
    setInvalid(
        false
    );
}}
    onReset={() =>
        setInvalid(
            false
        )}
    maxWidth="size-3600"
>
      {isInvalid && <InlineAlert
          variant="negative"
          autoFocus
      >          <Heading>
            Unable to
            submit
          </Heading>
          <Content>
            Please fix
            the
            validation
            errors below,
            and re-submit
            the form.
          </Content>
        </InlineAlert>}
    <TextField
        label="First Name"
        isRequired
    />
      <TextField
          label="Last Name"
          isRequired
      />
      <ButtonGroup>
        <Button
            type="submit"
            variant="primary"
        >
          Submit
        </Button>
        <Button
            type="reset"
            variant="secondary"
        >
          Reset
        </Button>
      </ButtonGroup>
    </Form>
</Variant>
<Variant name="Label position and alignment">
<Form
    labelPosition="top"
    labelAlign="start"
    aria-label="Top position, start alignment example"
    maxWidth="size-3600">
  <TextField label="Name"/>
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">Dogs</Radio>
    <Radio value="cats">Cats</Radio>
  </RadioGroup>
</Form>
</Variant>
<Variant name="Label position and alignment1">
<Form
    labelPosition="top"
    labelAlign="start"
    aria-label="Top position, start alignment example"
    maxWidth="size-3600">
  <TextField label="Name"/>
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">Dogs</Radio>
    <Radio value="cats">Cats</Radio>
  </RadioGroup>
</Form>
</Variant>
<Variant name="Label position and alignment12">
<Form
    labelPosition="top"
    labelAlign="start"
    aria-label="Top position, start alignment example"
    maxWidth="size-3600"
>
  <TextField label="Name"/>
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">
      Dogs
    </Radio>
    <Radio value="cats">
      Cats
    </Radio>
  </RadioGroup>
</Form>
</Variant>
<Variant name="Label position and alignment123">
<Form
    labelPosition="side"
    labelAlign="start"
    aria-label="Side position, start alignment example"
    maxWidth="size-3600">
  <TextField label="Name"/>
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">Dogs</Radio>
    <Radio value="cats">Cats</Radio>
  </RadioGroup>
</Form>
</Variant>
<Variant name="Label position and alignment1234">
<Form
    labelPosition="side"
    labelAlign="start"
    aria-label="Side position, start alignment example"
    maxWidth="size-3600">
  <TextField label="Name"/>
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">Dogs</Radio>
    <Radio value="cats">Cats</Radio>
  </RadioGroup>
</Form>
</Variant>
<Variant name="Label position and alignment12345">
<Form
    labelPosition="side"
    labelAlign="start"
    aria-label="Side position, start alignment example"
    maxWidth="size-3600"
>
  <TextField label="Name"/>
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">
      Dogs
    </Radio>
    <Radio value="cats">
      Cats
    </Radio>
  </RadioGroup>
</Form>
</Variant>
<Variant name="Label position and alignment123456">
<Form
    labelPosition="side"
    labelAlign="end"
    aria-label="Side position, end alignment example"
    maxWidth="size-3600">
  <TextField label="Name"/>
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">Dogs</Radio>
    <Radio value="cats">Cats</Radio>
  </RadioGroup>
</Form>
</Variant>
<Variant name="Label position and alignment1234567">
<Form
    labelPosition="side"
    labelAlign="end"
    aria-label="Side position, end alignment example"
    maxWidth="size-3600">
  <TextField label="Name"/>
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">Dogs</Radio>
    <Radio value="cats">Cats</Radio>
  </RadioGroup>
</Form>
</Variant>
<Variant name="Label position and alignment12345678">
<Form
    labelPosition="side"
    labelAlign="end"
    aria-label="Side position, end alignment example"
    maxWidth="size-3600"
>
  <TextField label="Name"/>
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">
      Dogs
    </Radio>
    <Radio value="cats">
      Cats
    </Radio>
  </RadioGroup>
</Form>
</Variant>
<Variant name="Quiet">
<Form
    isQuiet
    aria-label="Quiet example"
    maxWidth="size-3600">
  <TextField label="Name"/>
  <TextField label="Address"/>
</Form>
</Variant>
<Variant name="Quiet1">
<Form
    isQuiet
    aria-label="Quiet example"
    maxWidth="size-3600">
  <TextField label="Name"/>
  <TextField label="Address"/>
</Form>
</Variant>
<Variant name="Quiet12">
<Form
    isQuiet
    aria-label="Quiet example"
    maxWidth="size-3600"
>
  <TextField label="Name"/>
  <TextField label="Address"/>
</Form>
</Variant>
<Variant name="Emphasized">
<Form
    isEmphasized
    aria-label="Emphasized example"
    maxWidth="size-3600">
  <TextField label="Name"/>
  <RadioGroup label="Favorite pet" defaultValue="dogs">
    <Radio value="dogs">Dogs</Radio>
    <Radio value="cats">Cats</Radio>
  </RadioGroup>
</Form>
</Variant>
<Variant name="Emphasized1">
<Form
    isEmphasized
    aria-label="Emphasized example"
    maxWidth="size-3600">
  <TextField label="Name"/>
  <RadioGroup label="Favorite pet" defaultValue="dogs">
    <Radio value="dogs">Dogs</Radio>
    <Radio value="cats">Cats</Radio>
  </RadioGroup>
</Form>
</Variant>
<Variant name="Emphasized12">
<Form
    isEmphasized
    aria-label="Emphasized example"
    maxWidth="size-3600"
>
  <TextField label="Name"/>
  <RadioGroup
      label="Favorite pet"
      defaultValue="dogs"
  >
    <Radio value="dogs">
      Dogs
    </Radio>
    <Radio value="cats">
      Cats
    </Radio>
  </RadioGroup>
</Form>
</Variant>
<Variant name="Disabled">
<Form
    isDisabled
    aria-label="Disabled example"
    maxWidth="size-3600">
  <TextField label="Name"/>
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">Dogs</Radio>
    <Radio value="cats">Cats</Radio>
  </RadioGroup>
</Form>
</Variant>
<Variant name="Disabled1">
<Form
    isDisabled
    aria-label="Disabled example"
    maxWidth="size-3600">
  <TextField label="Name"/>
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">Dogs</Radio>
    <Radio value="cats">Cats</Radio>
  </RadioGroup>
</Form>
</Variant>
<Variant name="Disabled12">
<Form
    isDisabled
    aria-label="Disabled example"
    maxWidth="size-3600"
>
  <TextField label="Name"/>
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">
      Dogs
    </Radio>
    <Radio value="cats">
      Cats
    </Radio>
  </RadioGroup>
</Form>
</Variant>
<Variant name="Required and necessity indicator">
<Form
    necessityIndicator="label"
    aria-label="Optional with label example"
    maxWidth="size-3600">
  <TextField label="Name"/>
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">Dogs</Radio>
    <Radio value="cats">Cats</Radio>
  </RadioGroup>
</Form>
</Variant>
<Variant name="Required and necessity indicator1">
<Form
    necessityIndicator="label"
    aria-label="Optional with label example"
    maxWidth="size-3600">
  <TextField label="Name"/>
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">Dogs</Radio>
    <Radio value="cats">Cats</Radio>
  </RadioGroup>
</Form>
</Variant>
<Variant name="Required and necessity indicator12">
<Form
    necessityIndicator="label"
    aria-label="Optional with label example"
    maxWidth="size-3600"
>
  <TextField label="Name"/>
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">
      Dogs
    </Radio>
    <Radio value="cats">
      Cats
    </Radio>
  </RadioGroup>
</Form>
</Variant>
<Variant name="Required and necessity indicator123">
<Form
    isRequired
    necessityIndicator="label"
    aria-label="Required with label example"
    maxWidth="size-3600">
  <TextField label="Name"/>
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">Dogs</Radio>
    <Radio value="cats">Cats</Radio>
  </RadioGroup>
</Form>
</Variant>
<Variant name="Required and necessity indicator1234">
<Form
    isRequired
    necessityIndicator="label"
    aria-label="Required with label example"
    maxWidth="size-3600">
  <TextField label="Name"/>
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">Dogs</Radio>
    <Radio value="cats">Cats</Radio>
  </RadioGroup>
</Form>
</Variant>
<Variant name="Required and necessity indicator12345">
<Form
    isRequired
    necessityIndicator="label"
    aria-label="Required with label example"
    maxWidth="size-3600"
>
  <TextField label="Name"/>
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">
      Dogs
    </Radio>
    <Radio value="cats">
      Cats
    </Radio>
  </RadioGroup>
</Form>
</Variant>
<Variant name="Required and necessity indicator123456">
<Form
    isRequired
    necessityIndicator="icon"
    aria-label="Required with asterisk example"
    maxWidth="size-3600">
  <TextField label="Name"/>
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">Dogs</Radio>
    <Radio value="cats">Cats</Radio>
  </RadioGroup>
</Form>
</Variant>
<Variant name="Required and necessity indicator1234567">
<Form
    isRequired
    necessityIndicator="icon"
    aria-label="Required with asterisk example"
    maxWidth="size-3600">
  <TextField label="Name"/>
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">Dogs</Radio>
    <Radio value="cats">Cats</Radio>
  </RadioGroup>
</Form>
</Variant>
<Variant name="Required and necessity indicator12345678">
<Form
    isRequired
    necessityIndicator="icon"
    aria-label="Required with asterisk example"
    maxWidth="size-3600"
>
  <TextField label="Name"/>
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">
      Dogs
    </Radio>
    <Radio value="cats">
      Cats
    </Radio>
  </RadioGroup>
</Form>
</Variant>
<Variant name="Read only">
<Form
    isReadOnly
    aria-label="isReadOnly example"
    maxWidth="size-3600">
  <TextField label="Name" value="John Smith"/>
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">Dogs</Radio>
    <Radio value="cats">Cats</Radio>
  </RadioGroup>
</Form>
</Variant>
<Variant name="Read only1">
<Form
    isReadOnly
    aria-label="isReadOnly example"
    maxWidth="size-3600">
  <TextField label="Name" value="John Smith"/>
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">Dogs</Radio>
    <Radio value="cats">Cats</Radio>
  </RadioGroup>
</Form>
</Variant>
<Variant name="Read only12">
<Form
    isReadOnly
    aria-label="isReadOnly example"
    maxWidth="size-3600"
>
  <TextField
      label="Name"
      value="John Smith"
  />
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">
      Dogs
    </Radio>
    <Radio value="cats">
      Cats
    </Radio>
  </RadioGroup>
</Form>
</Variant>
<Variant name="Validation state">
<Form
    validationState="invalid"
    aria-label="Invalid validationState example"
    maxWidth="size-3600"
    marginBottom="size-300">
  <TextField label="Name"/>
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">Dogs</Radio>
    <Radio value="cats">Cats</Radio>
  </RadioGroup>
</Form>
</Variant>
<Variant name="Validation state1">
<Form
    validationState="invalid"
    aria-label="Invalid validationState example"
    maxWidth="size-3600"
    marginBottom="size-300">
  <TextField label="Name"/>
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">Dogs</Radio>
    <Radio value="cats">Cats</Radio>
  </RadioGroup>
</Form>
</Variant>
<Variant name="Validation state12">
<Form
    validationState="invalid"
    aria-label="Invalid validationState example"
    maxWidth="size-3600"
    marginBottom="size-300"
>
  <TextField label="Name"/>
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">
      Dogs
    </Radio>
    <Radio value="cats">
      Cats
    </Radio>
  </RadioGroup>
</Form>
</Variant>
<Variant name="Validation state123">
<Form
    validationState="valid"
    aria-label="Valid validationState example"
    maxWidth="size-3600">
  <TextField label="Name"/>
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">Dogs</Radio>
    <Radio value="cats">Cats</Radio>
  </RadioGroup>
</Form>
</Variant>
<Variant name="Validation state1234">
<Form
    validationState="valid"
    aria-label="Valid validationState example"
    maxWidth="size-3600">
  <TextField label="Name"/>
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">Dogs</Radio>
    <Radio value="cats">Cats</Radio>
  </RadioGroup>
</Form>
</Variant>
<Variant name="Validation state12345">
<Form
    validationState="valid"
    aria-label="Valid validationState example"
    maxWidth="size-3600"
>
  <TextField label="Name"/>
  <RadioGroup label="Favorite pet">
    <Radio value="dogs">
      Dogs
    </Radio>
    <Radio value="cats">
      Cats
    </Radio>
  </RadioGroup>
</Form>
</Variant>
</Component>
<Component name="NumberField" docURL="https://react-spectrum.adobe.com/react-spectrum/NumberField.html">
<Variant name="Example">
<NumberField label="Width" defaultValue={1024} minValue={0}/>
</Variant>
<Variant name="Example1">
<NumberField
    label="Width"
    defaultValue={1024}
    minValue={0}
/>
</Variant>
<Variant name="Example12">
<NumberField
    label="Width"
    defaultValue={1024}
    minValue={0}
/>
</Variant>
<Variant name="Value">
<Flex gap="size-150" wrap>
        <NumberField
            label="Cookies (Uncontrolled)"
            defaultValue={15}
            minValue={0}/>

      <NumberField
          label="Cookies (Controlled)"
          value={value}
          onChange={setValue}
          minValue={0}/>
    </Flex>
</Variant>
<Variant name="Value1">
<Flex gap="size-150" wrap>
    <NumberField
        label="Cookies (Uncontrolled)"
        defaultValue={15}
        minValue={0}/>

<NumberField
    label="Cookies (Controlled)"
    value={value}
    onChange={setValue}
    minValue={0}/>
</Flex>
</Variant>
<Variant name="Value12">
<Flex
    gap="size-150"
    wrap
>
    <NumberField
        label="Cookies (Uncontrolled)"
        defaultValue={15}
        minValue={0}
    />

<NumberField
    label="Cookies (Controlled)"
    value={value}
    onChange={setValue}
    minValue={0}
/>
</Flex>
</Variant>
<Variant name="HTML forms">
<NumberField
    label="Transaction amount"
    name="amount"
    defaultValue={45}
    formatOptions={{
        style: 'currency',
        currency: 'USD'
    }}/>
</Variant>
<Variant name="HTML forms1">
<NumberField
    label="Transaction amount"
    name="amount"
    defaultValue={45}
    formatOptions={{
        style: 'currency',
        currency: 'USD'
    }}/>
</Variant>
<Variant name="HTML forms12">
<NumberField
    label="Transaction amount"
    name="amount"
    defaultValue={45}
    formatOptions={{
        style: 'currency',
        currency: 'USD'
    }}
/>
</Variant>
<Variant name="Labeling">
<Flex gap="size-150" wrap>
  <NumberField label="Cookies" minValue={0}/>
  <NumberField
      label="Cookies"
      isRequired
      necessityIndicator="icon"
      minValue={0}
  />
  <NumberField
      label="Cookies"
      isRequired
      necessityIndicator="label"
      minValue={0}
  />
  <NumberField label="Cookies" necessityIndicator="label" minValue={0}/>
</Flex>
</Variant>
<Variant name="Labeling1">
<Flex gap="size-150" wrap>
  <NumberField label="Cookies" minValue={0}/>
  <NumberField
      label="Cookies"
      isRequired
      necessityIndicator="icon"
      minValue={0}
  />
  <NumberField
      label="Cookies"
      isRequired
      necessityIndicator="label"
      minValue={0}
  />
  <NumberField
      label="Cookies"
      necessityIndicator="label"
      minValue={0}
  />
</Flex>
</Variant>
<Variant name="Labeling12">
<Flex
    gap="size-150"
    wrap
>
  <NumberField
      label="Cookies"
      minValue={0}
  />
  <NumberField
      label="Cookies"
      isRequired
      necessityIndicator="icon"
      minValue={0}
  />
  <NumberField
      label="Cookies"
      isRequired
      necessityIndicator="label"
      minValue={0}
  />
  <NumberField
      label="Cookies"
      necessityIndicator="label"
      minValue={0}
  />
</Flex>
</Variant>
<Variant name="Decimals">
<NumberField
    label="Adjust exposure"
    formatOptions={{
        signDisplay: 'exceptZero',
        minimumFractionDigits: 1,
        maximumFractionDigits: 2
    }}
    defaultValue={0}/>
</Variant>
<Variant name="Decimals1">
<NumberField
    label="Adjust exposure"
    formatOptions={{
        signDisplay: 'exceptZero',
        minimumFractionDigits: 1,
        maximumFractionDigits: 2
    }}
    defaultValue={0}/>
</Variant>
<Variant name="Decimals12">
<NumberField
    label="Adjust exposure"
    formatOptions={{
        signDisplay:
            'exceptZero',
        minimumFractionDigits:
            1,
        maximumFractionDigits:
            2
    }}
    defaultValue={0}
/>
</Variant>
<Variant name="Percentages">
<NumberField
    label="Sales tax"
    formatOptions={{style: 'percent'}}
    minValue={0}
    defaultValue={0.05}/>
</Variant>
<Variant name="Percentages1">
<NumberField
    label="Sales tax"
    formatOptions={{style: 'percent'}}
    minValue={0}
    defaultValue={0.05}/>
</Variant>
<Variant name="Percentages12">
<NumberField
    label="Sales tax"
    formatOptions={{
        style: 'percent'
    }}
    minValue={0}
    defaultValue={0.05}
/>
</Variant>
<Variant name="Currency values">
<NumberField
    label="Transaction amount"
    defaultValue={45}
    formatOptions={{
        style: 'currency',
        currency: 'EUR',
        currencyDisplay: 'code',
        currencySign: 'accounting'
    }}/>
</Variant>
<Variant name="Currency values1">
<NumberField
    label="Transaction amount"
    defaultValue={45}
    formatOptions={{
        style: 'currency',
        currency: 'EUR',
        currencyDisplay: 'code',
        currencySign: 'accounting'
    }}/>
</Variant>
<Variant name="Currency values12">
<NumberField
    label="Transaction amount"
    defaultValue={45}
    formatOptions={{
        style: 'currency',
        currency: 'EUR',
        currencyDisplay:
            'code',
        currencySign:
            'accounting'
    }}
/>
</Variant>
<Variant name="Units">
<NumberField
    label="Package width"
    defaultValue={4}
    minValue={0}
    formatOptions={{
        style: 'unit',
        unit: 'inch',
        unitDisplay: 'long'
    }}/>
</Variant>
<Variant name="Units1">
<NumberField
    label="Package width"
    defaultValue={4}
    minValue={0}
    formatOptions={{
        style: 'unit',
        unit: 'inch',
        unitDisplay: 'long'
    }}/>
</Variant>
<Variant name="Units12">
<NumberField
    label="Package width"
    defaultValue={4}
    minValue={0}
    formatOptions={{
        style: 'unit',
        unit: 'inch',
        unitDisplay: 'long'
    }}/>
</Variant>
<Variant name="Minimum and maximum values">
<NumberField
    label="Enter your age"
    minValue={0}/>
</Variant>
<Variant name="Minimum and maximum values1">
<NumberField
    label="Enter your age"
    minValue={0}/>
</Variant>
<Variant name="Minimum and maximum values12">
<NumberField
    label="Enter your age"
    minValue={0}/>
</Variant>
<Variant name="Step values">
<Flex direction="column" gap="size-150">
  <NumberField
      label="Step"
      step={10}/>
  <NumberField
      label="Step + minValue"
      minValue={2}
      step={3}/>
  <NumberField
      label="Step + minValue + maxValue"
      minValue={2}
      maxValue={21}
      step={3}/>
</Flex>
</Variant>
<Variant name="Step values1">
<Flex direction="column" gap="size-150">
  <NumberField
      label="Step"
      step={10}/>
  <NumberField
      label="Step + minValue"
      minValue={2}
      step={3}/>
  <NumberField
      label="Step + minValue + maxValue"
      minValue={2}
      maxValue={21}
      step={3}/>
</Flex>
</Variant>
<Variant name="Step values12">
<Flex
    direction="column"
    gap="size-150"
>
  <NumberField
      label="Step"
      step={10}
  />
  <NumberField
      label="Step + minValue"
      minValue={2}
      step={3}
  />
  <NumberField
      label="Step + minValue + maxValue"
      minValue={2}
      maxValue={21}
      step={3}
  />
</Flex>
</Variant>
<Variant name="Events">
<Flex direction="column" gap="size-150">
    <NumberField
        onChange={setValue}
        label="Number of cookies to buy"
        minValue={0}/>
<pre>How many cookies you are ordering: {isNaN(value) ? 0 : value}</pre>
</Flex>
</Variant>
<Variant name="Events1">
<Flex direction="column" gap="size-150">
    <NumberField
        onChange={setValue}
        label="Number of cookies to buy"
        minValue={0}
    />
<pre>How many cookies you are ordering: {isNaN(value) ? 0 : value}</pre>
</Flex>
</Variant>
<Variant name="Events12">
<Flex
    direction="column"
    gap="size-150"
>
    <NumberField
        onChange={setValue}
        label="Number of cookies to buy"
        minValue={0}
    />
<pre>How many cookies you are ordering: {isNaN(value) ? 0 : value}</pre>
</Flex>
</Variant>
<Variant name="Validation">
<Form validationBehavior="native" maxWidth="size-3000">
  <NumberField label="Width" name="width" isRequired/>  <ButtonGroup>
    <Button type="submit" variant="primary">Submit</Button>
    <Button type="reset" variant="secondary">Reset</Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Validation1">
<Form validationBehavior="native" maxWidth="size-3000">
  <NumberField label="Width" name="width" isRequired/>  <ButtonGroup>
    <Button type="submit" variant="primary">
      Submit
    </Button>
    <Button type="reset" variant="secondary">
      Reset
    </Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Validation12">
<Form
    validationBehavior="native"
    maxWidth="size-3000"
>
  <NumberField
      label="Width"
      name="width"
      isRequired
  />  <ButtonGroup>
    <Button
        type="submit"
        variant="primary"
    >
      Submit
    </Button>
    <Button
        type="reset"
        variant="secondary"
    >
      Reset
    </Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Quiet">
<NumberField label="Cookies" isQuiet minValue={0}/>
</Variant>
<Variant name="Quiet1">
<NumberField label="Cookies" isQuiet minValue={0}/>
</Variant>
<Variant name="Quiet12">
<NumberField
    label="Cookies"
    isQuiet
    minValue={0}
/>
</Variant>
<Variant name="Hidden Steppers">
<NumberField label="Cookies" hideStepper minValue={0}/>
</Variant>
<Variant name="Hidden Steppers1">
<NumberField label="Cookies" hideStepper minValue={0}/>
</Variant>
<Variant name="Hidden Steppers12">
<NumberField
    label="Cookies"
    hideStepper
    minValue={0}
/>
</Variant>
<Variant name="Disabled">
<NumberField label="Cookies" isDisabled minValue={0}/>
</Variant>
<Variant name="Disabled1">
<NumberField label="Cookies" isDisabled minValue={0}/>
</Variant>
<Variant name="Disabled12">
<NumberField
    label="Cookies"
    isDisabled
    minValue={0}
/>
</Variant>
<Variant name="Read only">
<NumberField label="Cookies" defaultValue={15} isReadOnly minValue={0}/>
</Variant>
<Variant name="Read only1">
<NumberField
    label="Cookies"
    defaultValue={15}
    isReadOnly
    minValue={0}
/>
</Variant>
<Variant name="Read only12">
<NumberField
    label="Cookies"
    defaultValue={15}
    isReadOnly
    minValue={0}
/>
</Variant>
<Variant name="Label alignment and position">
<NumberField
    label="Cookies"
    labelPosition="side"
    labelAlign="end"
    minValue={0}
/>
</Variant>
<Variant name="Label alignment and position1">
<NumberField
    label="Cookies"
    labelPosition="side"
    labelAlign="end"
    minValue={0}
/>
</Variant>
<Variant name="Label alignment and position12">
<NumberField
    label="Cookies"
    labelPosition="side"
    labelAlign="end"
    minValue={0}
/>
</Variant>
<Variant name="Help text">
<NumberField
    validationState={Number.isNaN(value)
        ? undefined
        : (isValid ? 'valid' : 'invalid')}
    value={value}
    onChange={setValue}
    label="Positive numbers only"
    description="Enter a positive number."
    errorMessage={value === 0
        ? 'Is zero positive?'
        : 'Positive numbers are bigger than 0.'}
/>
</Variant>
<Variant name="Help text1">
<NumberField
    validationState={Number.isNaN(value)
        ? undefined
        : (isValid ? 'valid' : 'invalid')}
    value={value}
    onChange={setValue}
    label="Positive numbers only"
    description="Enter a positive number."
    errorMessage={value === 0
        ? 'Is zero positive?'
        : 'Positive numbers are bigger than 0.'}
/>
</Variant>
<Variant name="Help text12">
<NumberField
    validationState={Number
        .isNaN(value)
        ? undefined
        : (isValid
            ? 'valid'
            : 'invalid')}
    value={value}
    onChange={setValue}
    label="Positive numbers only"
    description="Enter a positive number."
    errorMessage={value ===
    0
        ? 'Is zero positive?'
        : 'Positive numbers are bigger than 0.'}
/>
</Variant>
<Variant name="Contextual help">
<NumberField
    label="Exposure"
    formatOptions={{
        signDisplay: 'exceptZero',
        minimumFractionDigits: 1,
        maximumFractionDigits: 2
    }}
    defaultValue={0}
    contextualHelp={
        <ContextualHelp>
      <Heading>What is exposure?</Heading>
      <Content>Exposure adjusts how bright the image is.</Content>
    </ContextualHelp>
    }/>
</Variant>
<Variant name="Contextual help1">
<NumberField
    label="Exposure"
    formatOptions={{
        signDisplay: 'exceptZero',
        minimumFractionDigits: 1,
        maximumFractionDigits: 2
    }}
    defaultValue={0}
    contextualHelp={
        <ContextualHelp>
      <Heading>What is exposure?</Heading>
      <Content>
        Exposure adjusts how bright the image is.
      </Content>
    </ContextualHelp>
    }
/>
</Variant>
<Variant name="Contextual help12">
<NumberField
    label="Exposure"
    formatOptions={{
        signDisplay:
            'exceptZero',
        minimumFractionDigits:
            1,
        maximumFractionDigits:
            2
    }}
    defaultValue={0}
    contextualHelp={
        <ContextualHelp>
      <Heading>
        What is
        exposure?
      </Heading>
      <Content>
        Exposure
        adjusts how
        bright the
        image is.
      </Content>
    </ContextualHelp>
    }
/>
</Variant>
<Variant name="Custom width">
<NumberField label="Cookies" width="size-3600" maxWidth="100%" minValue={0}/>
</Variant>
<Variant name="Custom width1">
<NumberField
    label="Cookies"
    width="size-3600"
    maxWidth="100%"
    minValue={0}
/>
</Variant>
<Variant name="Custom width12">
<NumberField
    label="Cookies"
    width="size-3600"
    maxWidth="100%"
    minValue={0}
/>
</Variant>
</Component>
<Component name="RadioGroup" docURL="https://react-spectrum.adobe.com/react-spectrum/RadioGroup.html">
<Variant name="Example">
<RadioGroup label="Favorite pet">
  <Radio value="dogs">Dogs</Radio>
  <Radio value="cats">Cats</Radio>
</RadioGroup>
</Variant>
<Variant name="Example1">
<RadioGroup label="Favorite pet">
  <Radio value="dogs">Dogs</Radio>
  <Radio value="cats">Cats</Radio>
</RadioGroup>
</Variant>
<Variant name="Example12">
<RadioGroup label="Favorite pet">
  <Radio value="dogs">
    Dogs
  </Radio>
  <Radio value="cats">
    Cats
  </Radio>
</RadioGroup>
</Variant>
<Variant name="Value">
<Flex gap="size-300">
        <RadioGroup label="Are you a wizard? (uncontrolled)" defaultValue="yes">
        <Radio value="yes">Yes</Radio>
        <Radio value="no">No</Radio>
        </RadioGroup>

        <RadioGroup
            label="Are you a wizard? (controlled)"
            value={selected}
            onChange={setSelected}
        >
        <Radio value="yes">Yes</Radio>
        <Radio value="no">No</Radio>
      </RadioGroup>
    </Flex>
</Variant>
<Variant name="Value1">
<Flex gap="size-300">
    <RadioGroup
        label="Are you a wizard? (uncontrolled)"
        defaultValue="yes"
    >
    <Radio value="yes">Yes</Radio>
    <Radio value="no">No</Radio>
    </RadioGroup>

    <RadioGroup
        label="Are you a wizard? (controlled)"
        value={selected}
        onChange={setSelected}
    >
        <Radio value="yes">Yes</Radio>
        <Radio value="no">No</Radio>
      </RadioGroup>
</Flex>
</Variant>
<Variant name="Value12">
<Flex gap="size-300">
    <RadioGroup
        label="Are you a wizard? (uncontrolled)"
        defaultValue="yes"
    >
    <Radio value="yes">
    Yes
    </Radio>
    <Radio value="no">
    No
    </Radio>
    </RadioGroup>

    <RadioGroup
        label="Are you a wizard? (controlled)"
        value={selected}
        onChange={setSelected}
    >
        <Radio value="yes">
          Yes
        </Radio>
        <Radio value="no">
          No
        </Radio>
      </RadioGroup>
</Flex>
</Variant>
<Variant name="HTML forms">
<RadioGroup label="Favorite pet" name="pet">
  <Radio value="dogs">Dogs</Radio>
  <Radio value="cats">Cats</Radio>
</RadioGroup>
</Variant>
<Variant name="HTML forms1">
<RadioGroup label="Favorite pet" name="pet">
  <Radio value="dogs">Dogs</Radio>
  <Radio value="cats">Cats</Radio>
</RadioGroup>
</Variant>
<Variant name="HTML forms12">
<RadioGroup
    label="Favorite pet"
    name="pet"
>
  <Radio value="dogs">
    Dogs
  </Radio>
  <Radio value="cats">
    Cats
  </Radio>
</RadioGroup>
</Variant>
<Variant name="Labeling">
<Flex gap="size-300" wrap>
  <RadioGroup label="Favorite avatar">
    <Radio value="wizard">Wizard</Radio>
    <Radio value="dragon">Dragon</Radio>
  </RadioGroup>

  <RadioGroup label="Favorite avatar" isRequired necessityIndicator="icon">
    <Radio value="wizard">Wizard</Radio>
    <Radio value="dragon">Dragon</Radio>
  </RadioGroup>

  <RadioGroup label="Favorite avatar" isRequired necessityIndicator="label">
    <Radio value="wizard">Wizard</Radio>
    <Radio value="dragon">Dragon</Radio>
  </RadioGroup>

  <RadioGroup label="Favorite avatar" necessityIndicator="label">
   <Radio value="wizard">Wizard</Radio>
   <Radio value="dragon">Dragon</Radio>
  </RadioGroup>
</Flex>
</Variant>
<Variant name="Labeling1">
<Flex gap="size-300" wrap>
  <RadioGroup label="Favorite avatar">
    <Radio value="wizard">Wizard</Radio>
    <Radio value="dragon">Dragon</Radio>
  </RadioGroup>
   <RadioGroup
       label="Favorite avatar"
       isRequired
       necessityIndicator="icon"
   >
    <Radio value="wizard">Wizard</Radio>
    <Radio value="dragon">Dragon</Radio>
  </RadioGroup>
   <RadioGroup
       label="Favorite avatar"
       isRequired
       necessityIndicator="label"
   >
    <Radio value="wizard">Wizard</Radio>
    <Radio value="dragon">Dragon</Radio>
  </RadioGroup>
   <RadioGroup
       label="Favorite avatar"
       necessityIndicator="label"
   >
    <Radio value="wizard">Wizard</Radio>
    <Radio value="dragon">Dragon</Radio>
  </RadioGroup>
</Flex>
</Variant>
<Variant name="Labeling12">
<Flex
    gap="size-300"
    wrap
>
  <RadioGroup label="Favorite avatar">
    <Radio value="wizard">
      Wizard
    </Radio>
    <Radio value="dragon">
      Dragon
    </Radio>
  </RadioGroup>
   <RadioGroup
       label="Favorite avatar"
       isRequired
       necessityIndicator="icon"
   >
    <Radio value="wizard">
      Wizard
    </Radio>
    <Radio value="dragon">
      Dragon
    </Radio>
  </RadioGroup>
   <RadioGroup
       label="Favorite avatar"
       isRequired
       necessityIndicator="label"
   >
    <Radio value="wizard">
      Wizard
    </Radio>
    <Radio value="dragon">
      Dragon
    </Radio>
  </RadioGroup>
   <RadioGroup
       label="Favorite avatar"
       necessityIndicator="label"
   >
    <Radio value="wizard">
      Wizard
    </Radio>
    <Radio value="dragon">
      Dragon
    </Radio>
  </RadioGroup>
</Flex>
</Variant>
<Variant name="Events">
<>
    <RadioGroup
        label="Favorite avatar"
        value={selected}
        onChange={setSelected}
    >
        <Radio value="wizard">Wizard</Radio>
        <Radio value="dragon">Dragon</Radio>
      </RadioGroup>
<div>You have selected: {selected}</div>
</>
</Variant>
<Variant name="Events1">
<>
    <RadioGroup
        label="Favorite avatar"
        value={selected}
        onChange={setSelected}
    >
        <Radio value="wizard">Wizard</Radio>
        <Radio value="dragon">Dragon</Radio>
      </RadioGroup>
<div>You have selected: {selected}</div>
</>
</Variant>
<Variant name="Events12">
<>
    <RadioGroup
        label="Favorite avatar"
        value={selected}
        onChange={setSelected}
    >
        <Radio value="wizard">
          Wizard
        </Radio>
        <Radio value="dragon">
          Dragon
        </Radio>
      </RadioGroup>
<div>
        You have
        selected:{' '}
    {selected}
      </div>
</>
</Variant>
<Variant name="Validation">
<Form validationBehavior="native">
  <RadioGroup label="Favorite pet" name="pet" isRequired>    <Radio value="dogs">Dog</Radio>
    <Radio value="cats">Cat</Radio>
    <Radio value="dragon">Dragon</Radio>
  </RadioGroup>
  <ButtonGroup>
    <Button type="submit" variant="primary">Submit</Button>
    <Button type="reset" variant="secondary">Reset</Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Validation1">
<Form validationBehavior="native">
  <RadioGroup label="Favorite pet" name="pet" isRequired>    <Radio value="dogs">Dog</Radio>
    <Radio value="cats">Cat</Radio>
    <Radio value="dragon">Dragon</Radio>
  </RadioGroup>
  <ButtonGroup>
    <Button type="submit" variant="primary">
      Submit
    </Button>
    <Button type="reset" variant="secondary">
      Reset
    </Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Validation12">
<Form validationBehavior="native">
  <RadioGroup
      label="Favorite pet"
      name="pet"
      isRequired
  >    <Radio value="dogs">
      Dog
    </Radio>
    <Radio value="cats">
      Cat
    </Radio>
    <Radio value="dragon">
      Dragon
    </Radio>
  </RadioGroup>
  <ButtonGroup>
    <Button
        type="submit"
        variant="primary"
    >
      Submit
    </Button>
    <Button
        type="reset"
        variant="secondary"
    >
      Reset
    </Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Orientation">
<RadioGroup label="Favorite avatar" orientation="horizontal">
  <Radio value="wizard">Wizard</Radio>
  <Radio value="dragon">Dragon</Radio>
</RadioGroup>
</Variant>
<Variant name="Orientation1">
<RadioGroup
    label="Favorite avatar"
    orientation="horizontal"
>
  <Radio value="wizard">Wizard</Radio>
  <Radio value="dragon">Dragon</Radio>
</RadioGroup>
</Variant>
<Variant name="Orientation12">
<RadioGroup
    label="Favorite avatar"
    orientation="horizontal"
>
  <Radio value="wizard">
    Wizard
  </Radio>
  <Radio value="dragon">
    Dragon
  </Radio>
</RadioGroup>
</Variant>
<Variant name="Label position and alignment">
<RadioGroup label="Favorite avatar" labelPosition="side" labelAlign="end">
  <Radio value="wizard">Wizard</Radio>
  <Radio value="dragon">Dragon</Radio>
</RadioGroup>
</Variant>
<Variant name="Label position and alignment1">
<RadioGroup
    label="Favorite avatar"
    labelPosition="side"
    labelAlign="end"
>
  <Radio value="wizard">Wizard</Radio>
  <Radio value="dragon">Dragon</Radio>
</RadioGroup>
</Variant>
<Variant name="Label position and alignment12">
<RadioGroup
    label="Favorite avatar"
    labelPosition="side"
    labelAlign="end"
>
  <Radio value="wizard">
    Wizard
  </Radio>
  <Radio value="dragon">
    Dragon
  </Radio>
</RadioGroup>
</Variant>
<Variant name="Help text">
<RadioGroup
    aria-label="Favorite pet"
    onChange={setSelected}
    isInvalid={!isValid}
    description="Please select a pet."
    errorMessage={
        selected === 'cats'
            ? 'No cats allowed.'
            : 'Please select dogs.'
    }>
      <Radio value="dogs">
        Dogs
      </Radio>
      <Radio value="cats">
        Cats
      </Radio>
      <Radio value="dragons">
        Dragons
      </Radio>
    </RadioGroup>
</Variant>
<Variant name="Help text1">
<RadioGroup
    aria-label="Favorite pet"
    onChange={setSelected}
    isInvalid={!isValid}
    description="Please select a pet."
    errorMessage={
        selected === 'cats'
            ? 'No cats allowed.'
            : 'Please select dogs.'
    }>
      <Radio value="dogs">
        Dogs
      </Radio>
      <Radio value="cats">
        Cats
      </Radio>
      <Radio value="dragons">
        Dragons
      </Radio>
    </RadioGroup>
</Variant>
<Variant name="Help text12">
<RadioGroup
    aria-label="Favorite pet"
    onChange={setSelected}
    isInvalid={!isValid}
    description="Please select a pet."
    errorMessage={selected ===
    'cats'
        ? 'No cats allowed.'
        : 'Please select dogs.'}
>
      <Radio value="dogs">
        Dogs
      </Radio>
      <Radio value="cats">
        Cats
      </Radio>
      <Radio value="dragons">
        Dragons
      </Radio>
    </RadioGroup>
</Variant>
<Variant name="Contextual help">
<RadioGroup
    label="T-shirt size"
    contextualHelp={
        <ContextualHelp variant="info">
      <Heading>Size and fit</Heading>
      <Content>
        Our sizes run on the small side. Choose a size up from your usual.
      </Content>
    </ContextualHelp>
    }
>
  <Radio value="S">Small</Radio>
  <Radio value="M">Medium</Radio>
  <Radio value="L">Large</Radio>
</RadioGroup>
</Variant>
<Variant name="Contextual help1">
<RadioGroup
    label="T-shirt size"
    contextualHelp={
        <ContextualHelp variant="info">
      <Heading>Size and fit</Heading>
      <Content>
        Our sizes run on the small side. Choose a size up
        from your usual.
      </Content>
    </ContextualHelp>
    }
>
  <Radio value="S">Small</Radio>
  <Radio value="M">Medium</Radio>
  <Radio value="L">Large</Radio>
</RadioGroup>
</Variant>
<Variant name="Contextual help12">
<RadioGroup
    label="T-shirt size"
    contextualHelp={
        <ContextualHelp variant="info">
      <Heading>
        Size and fit
      </Heading>
      <Content>
        Our sizes run
        on the small
        side. Choose a
        size up from
        your usual.
      </Content>
    </ContextualHelp>
    }
>
  <Radio value="S">
    Small
  </Radio>
  <Radio value="M">
    Medium
  </Radio>
  <Radio value="L">
    Large
  </Radio>
</RadioGroup>
</Variant>
<Variant name="Disabled">
<RadioGroup label="Favorite avatar" isDisabled>
  <Radio value="wizard">Wizard</Radio>
  <Radio value="dragon">Dragon</Radio>
</RadioGroup>
</Variant>
<Variant name="Disabled1">
<RadioGroup label="Favorite avatar" isDisabled>
  <Radio value="wizard">Wizard</Radio>
  <Radio value="dragon">Dragon</Radio>
</RadioGroup>
</Variant>
<Variant name="Disabled12">
<RadioGroup
    label="Favorite avatar"
    isDisabled
>
  <Radio value="wizard">
    Wizard
  </Radio>
  <Radio value="dragon">
    Dragon
  </Radio>
</RadioGroup>
</Variant>
<Variant name="Disabled123">
<RadioGroup label="Favorite avatar">
  <Radio value="wizard">Wizard</Radio>
  <Radio value="dragon" isDisabled>Dragon</Radio>
</RadioGroup>
</Variant>
<Variant name="Disabled1234">
<RadioGroup label="Favorite avatar">
  <Radio value="wizard">Wizard</Radio>
  <Radio value="dragon" isDisabled>Dragon</Radio>
</RadioGroup>
</Variant>
<Variant name="Disabled12345">
<RadioGroup label="Favorite avatar">
  <Radio value="wizard">
    Wizard
  </Radio>
  <Radio
      value="dragon"
      isDisabled
  >
    Dragon
  </Radio>
</RadioGroup>
</Variant>
<Variant name="Read only">
<RadioGroup label="Favorite avatar" defaultValue="wizard" isReadOnly>
  <Radio value="wizard">Wizard</Radio>
  <Radio value="dragon">Dragon</Radio>
</RadioGroup>
</Variant>
<Variant name="Read only1">
<RadioGroup
    label="Favorite avatar"
    defaultValue="wizard"
    isReadOnly
>
  <Radio value="wizard">Wizard</Radio>
  <Radio value="dragon">Dragon</Radio>
</RadioGroup>
</Variant>
<Variant name="Read only12">
<RadioGroup
    label="Favorite avatar"
    defaultValue="wizard"
    isReadOnly
>
  <Radio value="wizard">
    Wizard
  </Radio>
  <Radio value="dragon">
    Dragon
  </Radio>
</RadioGroup>
</Variant>
<Variant name="Emphasized">
<RadioGroup label="Favorite avatar" defaultValue="dragon" isEmphasized>
  <Radio value="wizard">Wizard</Radio>
  <Radio value="dragon">Dragon</Radio>
</RadioGroup>
</Variant>
<Variant name="Emphasized1">
<RadioGroup
    label="Favorite avatar"
    defaultValue="dragon"
    isEmphasized
>
  <Radio value="wizard">Wizard</Radio>
  <Radio value="dragon">Dragon</Radio>
</RadioGroup>
</Variant>
<Variant name="Emphasized12">
<RadioGroup
    label="Favorite avatar"
    defaultValue="dragon"
    isEmphasized
>
  <Radio value="wizard">
    Wizard
  </Radio>
  <Radio value="dragon">
    Dragon
  </Radio>
</RadioGroup>
</Variant>
</Component>
<Component name="RangeSlider" docURL="https://react-spectrum.adobe.com/react-spectrum/RangeSlider.html">
<Variant name="Example">
<RangeSlider label="Range" defaultValue={{start: 12, end: 36}}/>
</Variant>
<Variant name="Example1">
<RangeSlider
    label="Range"
    defaultValue={{start: 12, end: 36}}
/>
</Variant>
<Variant name="Example12">
<RangeSlider
    label="Range"
    defaultValue={{
        start: 12,
        end: 36
    }}
/>
</Variant>
<Variant name="Value">
<Flex gap="size-150" wrap>
        <RangeSlider
            label="Range (uncontrolled)"
            defaultValue={{start: 25, end: 75}}/>
      <RangeSlider
          label="Range (controlled)"
          value={value}
          onChange={setValue}/>
    </Flex>
</Variant>
<Variant name="Value1">
<Flex gap="size-150" wrap>
    <RangeSlider
        label="Range (uncontrolled)"
        defaultValue={{start: 25, end: 75}}
    />
<RangeSlider
    label="Range (controlled)"
    value={value}
    onChange={setValue}
/>
</Flex>
</Variant>
<Variant name="Value12">
<Flex
    gap="size-150"
    wrap
>
    <RangeSlider
        label="Range (uncontrolled)"
        defaultValue={{
            start: 25,
            end: 75
        }}
    />
<RangeSlider
    label="Range (controlled)"
    value={value}
    onChange={setValue}
/>
</Flex>
</Variant>
<Variant name="Value123">
<RangeSlider
    label="Range"
    minValue={50}
    maxValue={150}
    defaultValue={{start: 75, end: 100}}/>
</Variant>
<Variant name="Value1234">
<RangeSlider
    label="Range"
    minValue={50}
    maxValue={150}
    defaultValue={{start: 75, end: 100}}/>
</Variant>
<Variant name="Value12345">
<RangeSlider
    label="Range"
    minValue={50}
    maxValue={150}
    defaultValue={{
        start: 75,
        end: 100
    }}
/>
</Variant>
<Variant name="Value123456">
<RangeSlider
    label="Price range"
    formatOptions={{style: 'currency', currency: 'JPY'}}
    defaultValue={{start: 75, end: 100}}/>
</Variant>
<Variant name="Value1234567">
<RangeSlider
    label="Price range"
    formatOptions={{style: 'currency', currency: 'JPY'}}
    defaultValue={{start: 75, end: 100}}/>
</Variant>
<Variant name="Value12345678">
<RangeSlider
    label="Price range"
    formatOptions={{
        style: 'currency',
        currency: 'JPY'
    }}
    defaultValue={{
        start: 75,
        end: 100
    }}
/>
</Variant>
<Variant name="HTML forms">
<RangeSlider
    label="Range"
    defaultValue={{start: 12, end: 36}}
    startName="start"
    endName="end"/>
</Variant>
<Variant name="HTML forms1">
<RangeSlider
    label="Range"
    defaultValue={{start: 12, end: 36}}
    startName="start"
    endName="end"/>
</Variant>
<Variant name="HTML forms12">
<RangeSlider
    label="Range"
    defaultValue={{
        start: 12,
        end: 36
    }}
    startName="start"
    endName="end"
/>
</Variant>
<Variant name="Labeling">
<Flex direction="column" maxWidth="size-5000" gap="size-300">
  <RangeSlider
      label="Jeans price range"
      formatOptions={{style: 'currency', currency: 'USD'}}
      defaultValue={{start: 75, end: 100}}
  />
  <RangeSlider
      label="Shoes price range"
      formatOptions={{style: 'currency', currency: 'USD'}}
      labelPosition="side"
      defaultValue={{start: 50, end: 100}}
  />
  <RangeSlider
      label="Hats price range"
      formatOptions={{style: 'currency', currency: 'USD'}}
      showValueLabel={false}
      defaultValue={{start: 15, end: 30}}
  />
</Flex>
</Variant>
<Variant name="Labeling1">
<Flex
    direction="column"
    maxWidth="size-5000"
    gap="size-300"
>
  <RangeSlider
      label="Jeans price range"
      formatOptions={{style: 'currency', currency: 'USD'}}
      defaultValue={{start: 75, end: 100}}
  />
  <RangeSlider
      label="Shoes price range"
      formatOptions={{style: 'currency', currency: 'USD'}}
      labelPosition="side"
      defaultValue={{start: 50, end: 100}}
  />
  <RangeSlider
      label="Hats price range"
      formatOptions={{style: 'currency', currency: 'USD'}}
      showValueLabel={false}
      defaultValue={{start: 15, end: 30}}
  />
</Flex>
</Variant>
<Variant name="Labeling12">
<Flex
    direction="column"
    maxWidth="size-5000"
    gap="size-300"
>
  <RangeSlider
      label="Jeans price range"
      formatOptions={{
          style:
              'currency',
          currency: 'USD'
      }}
      defaultValue={{
          start: 75,
          end: 100
      }}
  />
  <RangeSlider
      label="Shoes price range"
      formatOptions={{
          style:
              'currency',
          currency: 'USD'
      }}
      labelPosition="side"
      defaultValue={{
          start: 50,
          end: 100
      }}
  />
  <RangeSlider
      label="Hats price range"
      formatOptions={{
          style:
              'currency',
          currency: 'USD'
      }}
      showValueLabel={false}
      defaultValue={{
          start: 15,
          end: 30
      }}
  />
</Flex>
</Variant>
<Variant name="Labeling123">
<Flex direction="column" maxWidth="size-3000" gap="size-300">
  <RangeSlider
      label="Level range"
      showValueLabel={false}
      defaultValue={{start: 75, end: 100}}/>

  <RangeSlider
      label="Cacao percentage"
      maxValue={1}
      step={0.001}
      formatOptions={{style: 'percent', minimumFractionDigits: 1}}
      defaultValue={{start: .75, end: 1}}/>

  <RangeSlider
      label="Search radius"
      maxValue={200}
      getValueLabel={meters => `${meters.start}m to ${meters.end}m away`}
      defaultValue={{start: 15, end: 60}}/>
</Flex>
</Variant>
<Variant name="Labeling1234">
<Flex
    direction="column"
    maxWidth="size-3000"
    gap="size-300"
>
  <RangeSlider
      label="Level range"
      showValueLabel={false}
      defaultValue={{start: 75, end: 100}}
  />
   <RangeSlider
       label="Cacao percentage"
       maxValue={1}
       step={0.001}
       formatOptions={{
           style: 'percent',
           minimumFractionDigits: 1
       }}
       defaultValue={{start: .75, end: 1}}
   />
   <RangeSlider
       label="Search radius"
       maxValue={200}
       getValueLabel={(meters) =>
           `${meters.start}m to ${meters.end}m away`}
       defaultValue={{start: 15, end: 60}}
   />
</Flex>
</Variant>
<Variant name="Labeling12345">
<Flex
    direction="column"
    maxWidth="size-3000"
    gap="size-300"
>
  <RangeSlider
      label="Level range"
      showValueLabel={false}
      defaultValue={{
          start: 75,
          end: 100
      }}
  />
   <RangeSlider
       label="Cacao percentage"
       maxValue={1}
       step={0.001}
       formatOptions={{
           style: 'percent',
           minimumFractionDigits:
               1
       }}
       defaultValue={{
           start: .75,
           end: 1
       }}
   />
   <RangeSlider
       label="Search radius"
       maxValue={200}
       getValueLabel={(meters) =>
           `${meters.start}m to ${meters.end}m away`}
       defaultValue={{
           start: 15,
           end: 60
       }}
   />
</Flex>
</Variant>
<Variant name="Contextual help">
<RangeSlider
    label="Search radius"
    formatOptions={{style: 'unit', unit: 'mile'}}
    defaultValue={{start: 15, end: 60}}
    contextualHelp={
        <ContextualHelp variant="info">
      <Heading>Ranking</Heading>
      <Content>Search results are sorted by distance from city center.</Content>
    </ContextualHelp>
    }/>
</Variant>
<Variant name="Contextual help1">
<RangeSlider
    label="Search radius"
    formatOptions={{style: 'unit', unit: 'mile'}}
    defaultValue={{start: 15, end: 60}}
    contextualHelp={
        <ContextualHelp variant="info">
      <Heading>Ranking</Heading>
      <Content>
        Search results are sorted by distance from city
        center.
      </Content>
    </ContextualHelp>
    }
/>
</Variant>
<Variant name="Contextual help12">
<RangeSlider
    label="Search radius"
    formatOptions={{
        style: 'unit',
        unit: 'mile'
    }}
    defaultValue={{
        start: 15,
        end: 60
    }}
    contextualHelp={
        <ContextualHelp variant="info">
      <Heading>
        Ranking
      </Heading>
      <Content>
        Search results
        are sorted by
        distance from
        city center.
      </Content>
    </ContextualHelp>
    }
/>
</Variant>
<Variant name="Disabled">
<RangeSlider
    label="Price filter"
    defaultValue={{start: 25, end: 50}}
    isDisabled
/>
</Variant>
<Variant name="Disabled1">
<RangeSlider
    label="Price filter"
    defaultValue={{start: 25, end: 50}}
    isDisabled
/>
</Variant>
<Variant name="Disabled12">
<RangeSlider
    label="Price filter"
    defaultValue={{
        start: 25,
        end: 50
    }}
    isDisabled
/>
</Variant>
</Component>
<Component name="SearchField" docURL="https://react-spectrum.adobe.com/react-spectrum/SearchField.html">
<Variant name="Example">
<>
        <SearchField
            label="Search"
            onSubmit={setSubmittedText}/>
      <p>Submitted text: {submittedText}</p>
    </>
</Variant>
<Variant name="Example1">
<>
    <SearchField
        label="Search"
        onSubmit={setSubmittedText}
    />
<p>Submitted text: {submittedText}</p>
</>
</Variant>
<Variant name="Example12">
<>
    <SearchField
        label="Search"
        onSubmit={setSubmittedText}
    />
<p>
        Submitted text:
    {' '}
    {submittedText}
      </p>
</>
</Variant>
<Variant name="Value">
<Flex gap="size-300">
    <SearchField
        defaultValue="puppies"
        label="Search (uncontrolled)"/>

    <SearchField
        value={searchValue}
        onChange={setSearchValue}
        label="Search (controlled)"/>
</Flex>
</Variant>
<Variant name="Value1">
<Flex gap="size-300">
    <SearchField
        defaultValue="puppies"
        label="Search (uncontrolled)"
    />

    <SearchField
        value={searchValue}
        onChange={setSearchValue}
        label="Search (controlled)"
    />
</Flex>
</Variant>
<Variant name="Value12">
<Flex gap="size-300">
    <SearchField
        defaultValue="puppies"
        label="Search (uncontrolled)"
    />

    <SearchField
        value={searchValue}
        onChange={setSearchValue}
        label="Search (controlled)"
    />
</Flex>
</Variant>
<Variant name="HTML forms">
<SearchField label="Email" name="email" type="email"/>
</Variant>
<Variant name="HTML forms1">
<SearchField label="Email" name="email" type="email"/>
</Variant>
<Variant name="HTML forms12">
<SearchField
    label="Email"
    name="email"
    type="email"
/>
</Variant>
<Variant name="Labeling">
<Flex gap="size-300" wrap>
  <SearchField label="Search"/>
  <SearchField label="Search" isRequired necessityIndicator="icon"/>
  <SearchField label="Search" isRequired necessityIndicator="label"/>
  <SearchField label="Search" necessityIndicator="label"/>
</Flex>
</Variant>
<Variant name="Labeling1">
<Flex gap="size-300" wrap>
  <SearchField label="Search"/>
  <SearchField
      label="Search"
      isRequired
      necessityIndicator="icon"
  />
  <SearchField
      label="Search"
      isRequired
      necessityIndicator="label"
  />
  <SearchField
      label="Search"
      necessityIndicator="label"
  />
</Flex>
</Variant>
<Variant name="Labeling12">
<Flex
    gap="size-300"
    wrap
>
  <SearchField label="Search"/>
  <SearchField
      label="Search"
      isRequired
      necessityIndicator="icon"
  />
  <SearchField
      label="Search"
      isRequired
      necessityIndicator="label"
  />
  <SearchField
      label="Search"
      necessityIndicator="label"
  />
</Flex>
</Variant>
<Variant name="Events">
<div>
    <SearchField
        onClear={() => setCurrentText('')}
        onChange={setCurrentText}
        onSubmit={setSubmittedText}
        label="Your text"
        value={currentText}
    />
<pre>Mirrored text: {currentText}</pre>
<pre>Submitted text: {submittedText}</pre>
</div>
</Variant>
<Variant name="Events1">
<div>
    <SearchField
        onClear={() => setCurrentText('')}
        onChange={setCurrentText}
        onSubmit={setSubmittedText}
        label="Your text"
        value={currentText}
    />
<pre>Mirrored text: {currentText}</pre>
<pre>Submitted text: {submittedText}</pre>
</div>
</Variant>
<Variant name="Events12">
<div>
    <SearchField
        onClear={() =>
            setCurrentText(
                ''
            )}
        onChange={setCurrentText}
        onSubmit={setSubmittedText}
        label="Your text"
        value={currentText}
    />
<pre>Mirrored text: {currentText}</pre>
<pre>Submitted text: {submittedText}</pre>
</div>
</Variant>
<Variant name="Validation">
<Form validationBehavior="native" maxWidth="size-3000">
  <SearchField label="Search" name="search" isRequired/>  <ButtonGroup>
    <Button type="submit" variant="primary">Submit</Button>
    <Button type="reset" variant="secondary">Reset</Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Validation1">
<Form validationBehavior="native" maxWidth="size-3000">
  <SearchField label="Search" name="search" isRequired/>  <ButtonGroup>
    <Button type="submit" variant="primary">
      Submit
    </Button>
    <Button type="reset" variant="secondary">
      Reset
    </Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Validation12">
<Form
    validationBehavior="native"
    maxWidth="size-3000"
>
  <SearchField
      label="Search"
      name="search"
      isRequired
  />  <ButtonGroup>
    <Button
        type="submit"
        variant="primary"
    >
      Submit
    </Button>
    <Button
        type="reset"
        variant="secondary"
    >
      Reset
    </Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Quiet">
<SearchField label="Search" isQuiet/>
</Variant>
<Variant name="Quiet1">
<SearchField label="Search" isQuiet/>
</Variant>
<Variant name="Quiet12">
<SearchField
    label="Search"
    isQuiet
/>
</Variant>
<Variant name="Disabled">
<SearchField label="Search" isDisabled/>
</Variant>
<Variant name="Disabled1">
<SearchField label="Search" isDisabled/>
</Variant>
<Variant name="Disabled12">
<SearchField
    label="Search"
    isDisabled
/>
</Variant>
<Variant name="Read only">
<SearchField label="Search" defaultValue="abc@adobe.com" isReadOnly/>
</Variant>
<Variant name="Read only1">
<SearchField
    label="Search"
    defaultValue="abc@adobe.com"
    isReadOnly
/>
</Variant>
<Variant name="Read only12">
<SearchField
    label="Search"
    defaultValue="abc@adobe.com"
    isReadOnly
/>
</Variant>
<Variant name="Label alignment and position">
<SearchField label="Search" labelPosition="side" labelAlign="end"/>
</Variant>
<Variant name="Label alignment and position1">
<SearchField
    label="Search"
    labelPosition="side"
    labelAlign="end"
/>
</Variant>
<Variant name="Label alignment and position12">
<SearchField
    label="Search"
    labelPosition="side"
    labelAlign="end"
/>
</Variant>
<Variant name="Help text">
<Flex gap="size-100" wrap>
  <SearchField
      label="Search"
      defaultValue="Burritos"
      validationState="valid"
      description="Enter a query."
  />
  <SearchField
      label="Search"
      validationState="invalid"
      errorMessage="Empty input is not allowed."
  />
</Flex>
</Variant>
<Variant name="Help text1">
<Flex gap="size-100" wrap>
  <SearchField
      label="Search"
      defaultValue="Burritos"
      validationState="valid"
      description="Enter a query."
  />
  <SearchField
      label="Search"
      validationState="invalid"
      errorMessage="Empty input is not allowed."
  />
</Flex>
</Variant>
<Variant name="Help text12">
<Flex
    gap="size-100"
    wrap
>
  <SearchField
      label="Search"
      defaultValue="Burritos"
      validationState="valid"
      description="Enter a query."
  />
  <SearchField
      label="Search"
      validationState="invalid"
      errorMessage="Empty input is not allowed."
  />
</Flex>
</Variant>
<Variant name="Contextual help">
<SearchField
    label="Search"
    contextualHelp={
        <ContextualHelp variant="info">
      <Heading>Search tips</Heading>
      <Content>
        You can use modifiers like "date:" and "from:" to search by specific
        attributes.
      </Content>
    </ContextualHelp>
    }
/>
</Variant>
<Variant name="Contextual help1">
<SearchField
    label="Search"
    contextualHelp={
        <ContextualHelp variant="info">
      <Heading>Search tips</Heading>
      <Content>
        You can use modifiers like "date:" and "from:" to
        search by specific attributes.
      </Content>
    </ContextualHelp>
    }
/>
</Variant>
<Variant name="Contextual help12">
<SearchField
    label="Search"
    contextualHelp={
        <ContextualHelp variant="info">
      <Heading>
        Search tips
      </Heading>
      <Content>
        You can use
        modifiers like
        "date:" and
        "from:" to
        search by
        specific
        attributes.
      </Content>
    </ContextualHelp>
    }
/>
</Variant>
<Variant name="Custom width">
<SearchField label="Search" width="size-3600"/>
</Variant>
<Variant name="Custom width1">
<SearchField label="Search" width="size-3600"/>
</Variant>
<Variant name="Custom width12">
<SearchField
    label="Search"
    width="size-3600"
/>
</Variant>
<Variant name="Custom icon">
<SearchField label="Search for users" icon={<User/>}/>
</Variant>
<Variant name="Custom icon1">
<SearchField label="Search for users" icon={<User/>}/>
</Variant>
<Variant name="Custom icon12">
<SearchField
    label="Search for users"
    icon={<User/>}
/>
</Variant>
</Component>
<Component name="Slider" docURL="https://react-spectrum.adobe.com/react-spectrum/Slider.html">
<Variant name="Example">
<Slider label="Cookies to buy" defaultValue={12}/>
</Variant>
<Variant name="Example1">
<Slider label="Cookies to buy" defaultValue={12}/>
</Variant>
<Variant name="Example12">
<Slider
    label="Cookies to buy"
    defaultValue={12}
/>
</Variant>
<Variant name="Value">
<Flex gap="size-150" wrap>
        <Slider
            label="Cookies to buy (Uncontrolled)"
            defaultValue={25}/>
      <Slider
          label="Cookies to buy (Controlled)"
          value={value}
          onChange={setValue}/>
    </Flex>
</Variant>
<Variant name="Value1">
<Flex gap="size-150" wrap>
    <Slider
        label="Cookies to buy (Uncontrolled)"
        defaultValue={25}/>
<Slider
    label="Cookies to buy (Controlled)"
    value={value}
    onChange={setValue}/>
</Flex>
</Variant>
<Variant name="Value12">
<Flex
    gap="size-150"
    wrap
>
    <Slider
        label="Cookies to buy (Uncontrolled)"
        defaultValue={25}
    />
<Slider
    label="Cookies to buy (Controlled)"
    value={value}
    onChange={setValue}
/>
</Flex>
</Variant>
<Variant name="Value123">
<Slider
    label="Cookies to buy"
    minValue={50}
    maxValue={150}
    defaultValue={100}/>
</Variant>
<Variant name="Value1234">
<Slider
    label="Cookies to buy"
    minValue={50}
    maxValue={150}
    defaultValue={100}/>
</Variant>
<Variant name="Value12345">
<Slider
    label="Cookies to buy"
    minValue={50}
    maxValue={150}
    defaultValue={100}/>
</Variant>
<Variant name="Value123456">
<Slider
    label="Currency"
    formatOptions={{style: 'currency', currency: 'JPY'}}
    defaultValue={60}/>
</Variant>
<Variant name="Value1234567">
<Slider
    label="Currency"
    formatOptions={{style: 'currency', currency: 'JPY'}}
    defaultValue={60}/>
</Variant>
<Variant name="Value12345678">
<Slider
    label="Currency"
    formatOptions={{
        style: 'currency',
        currency: 'JPY'
    }}
    defaultValue={60}
/>
</Variant>
<Variant name="HTML forms">
<Slider
    label="Opacity"
    defaultValue={50}
    name="opacity"/>
</Variant>
<Variant name="HTML forms1">
<Slider
    label="Opacity"
    defaultValue={50}
    name="opacity"/>
</Variant>
<Variant name="HTML forms12">
<Slider
    label="Opacity"
    defaultValue={50}
    name="opacity"/>
</Variant>
<Variant name="Labeling">
<Flex direction="column" maxWidth="size-5000" gap="size-300">
  <Slider label="Cookies to buy" defaultValue={25}/>
  <Slider label="Donuts to buy" labelPosition="side" defaultValue={25}/>
  <Slider label="Pastries to buy" showValueLabel={false} defaultValue={25}/>
</Flex>
</Variant>
<Variant name="Labeling1">
<Flex
    direction="column"
    maxWidth="size-5000"
    gap="size-300"
>
  <Slider label="Cookies to buy" defaultValue={25}/>
  <Slider
      label="Donuts to buy"
      labelPosition="side"
      defaultValue={25}
  />
  <Slider
      label="Pastries to buy"
      showValueLabel={false}
      defaultValue={25}
  />
</Flex>
</Variant>
<Variant name="Labeling12">
<Flex
    direction="column"
    maxWidth="size-5000"
    gap="size-300"
>
  <Slider
      label="Cookies to buy"
      defaultValue={25}
  />
  <Slider
      label="Donuts to buy"
      labelPosition="side"
      defaultValue={25}
  />
  <Slider
      label="Pastries to buy"
      showValueLabel={false}
      defaultValue={25}
  />
</Flex>
</Variant>
<Variant name="Labeling123">
<Flex direction="column" maxWidth="size-3000" gap="size-300">
  <Slider
      label="Cookies to buy"
      showValueLabel={false}
      defaultValue={90}/>
  <Slider
      label="Percent donus eaten"
      maxValue={1}
      step={0.001}
      formatOptions={{style: 'percent', minimumFractionDigits: 1}}
      defaultValue={0.891}/>
  <Slider
      label="Donuts to buy"
      maxValue={60}
      getValueLabel={donuts => `${donuts} of 60 Donuts`}/>
</Flex>
</Variant>
<Variant name="Labeling1234">
<Flex
    direction="column"
    maxWidth="size-3000"
    gap="size-300"
>
  <Slider
      label="Cookies to buy"
      showValueLabel={false}
      defaultValue={90}
  />
  <Slider
      label="Percent donus eaten"
      maxValue={1}
      step={0.001}
      formatOptions={{
          style: 'percent',
          minimumFractionDigits: 1
      }}
      defaultValue={0.891}
  />
  <Slider
      label="Donuts to buy"
      maxValue={60}
      getValueLabel={(donuts) => `${donuts} of 60 Donuts`}
  />
</Flex>
</Variant>
<Variant name="Labeling12345">
<Flex
    direction="column"
    maxWidth="size-3000"
    gap="size-300"
>
  <Slider
      label="Cookies to buy"
      showValueLabel={false}
      defaultValue={90}
  />
  <Slider
      label="Percent donus eaten"
      maxValue={1}
      step={0.001}
      formatOptions={{
          style: 'percent',
          minimumFractionDigits:
              1
      }}
      defaultValue={0.891}
  />
  <Slider
      label="Donuts to buy"
      maxValue={60}
      getValueLabel={(donuts) =>
          `${donuts} of 60 Donuts`}
  />
</Flex>
</Variant>
<Variant name="Fill">
<Flex direction="column" gap="size-300">
  <Slider
      label="Opacity"
      maxValue={1}
      formatOptions={{style: 'percent'}}
      defaultValue={0.9}
      step={0.01}
      isFilled
  />
  <Slider
      label="Exposure"
      minValue={-5}
      maxValue={5}
      defaultValue={1.83}
      formatOptions={{signDisplay: 'always'}}
      step={0.01}
      fillOffset={0}
      isFilled
  />
</Flex>
</Variant>
<Variant name="Fill1">
<Flex direction="column" gap="size-300">
  <Slider
      label="Opacity"
      maxValue={1}
      formatOptions={{style: 'percent'}}
      defaultValue={0.9}
      step={0.01}
      isFilled
  />
  <Slider
      label="Exposure"
      minValue={-5}
      maxValue={5}
      defaultValue={1.83}
      formatOptions={{signDisplay: 'always'}}
      step={0.01}
      fillOffset={0}
      isFilled
  />
</Flex>
</Variant>
<Variant name="Fill12">
<Flex
    direction="column"
    gap="size-300"
>
  <Slider
      label="Opacity"
      maxValue={1}
      formatOptions={{
          style: 'percent'
      }}
      defaultValue={0.9}
      step={0.01}
      isFilled
  />
  <Slider
      label="Exposure"
      minValue={-5}
      maxValue={5}
      defaultValue={1.83}
      formatOptions={{
          signDisplay:
              'always'
      }}
      step={0.01}
      fillOffset={0}
      isFilled
  />
</Flex>
</Variant>
<Variant name="Gradient">
<Slider
    label="Filter density"
    trackGradient={['white', 'rgba(177,141,32,1)']}
    defaultValue={.3}
    maxValue={1}
    step={0.01}
    formatOptions={{style: 'percent'}}
    isFilled
/>
</Variant>
<Variant name="Gradient1">
<Slider
    label="Filter density"
    trackGradient={['white', 'rgba(177,141,32,1)']}
    defaultValue={.3}
    maxValue={1}
    step={0.01}
    formatOptions={{style: 'percent'}}
    isFilled
/>
</Variant>
<Variant name="Gradient12">
<Slider
    label="Filter density"
    trackGradient={[
        'white',
        'rgba(177,141,32,1)'
    ]}
    defaultValue={.3}
    maxValue={1}
    step={0.01}
    formatOptions={{
        style: 'percent'
    }}
    isFilled
/>
</Variant>
<Variant name="Contextual help">
<Slider
    label="Exposure"
    minValue={-100}
    maxValue={100}
    defaultValue={0}
    formatOptions={{signDisplay: 'always'}}
    isFilled
    fillOffset={0}
    contextualHelp={
        <ContextualHelp>
      <Heading>What is exposure?</Heading>
      <Content>Exposure adjusts how bright the image is.</Content>
    </ContextualHelp>
    }/>
</Variant>
<Variant name="Contextual help1">
<Slider
    label="Exposure"
    minValue={-100}
    maxValue={100}
    defaultValue={0}
    formatOptions={{signDisplay: 'always'}}
    isFilled
    fillOffset={0}
    contextualHelp={
        <ContextualHelp>
      <Heading>What is exposure?</Heading>
      <Content>
        Exposure adjusts how bright the image is.
      </Content>
    </ContextualHelp>
    }
/>
</Variant>
<Variant name="Contextual help12">
<Slider
    label="Exposure"
    minValue={-100}
    maxValue={100}
    defaultValue={0}
    formatOptions={{
        signDisplay:
            'always'
    }}
    isFilled
    fillOffset={0}
    contextualHelp={
        <ContextualHelp>
      <Heading>
        What is
        exposure?
      </Heading>
      <Content>
        Exposure
        adjusts how
        bright the
        image is.
      </Content>
    </ContextualHelp>
    }
/>
</Variant>
<Variant name="Disabled">
<Slider label="Cookies to share" defaultValue={25} isDisabled/>
</Variant>
<Variant name="Disabled1">
<Slider
    label="Cookies to share"
    defaultValue={25}
    isDisabled
/>
</Variant>
<Variant name="Disabled12">
<Slider
    label="Cookies to share"
    defaultValue={25}
    isDisabled
/>
</Variant>
</Component>
<Component name="Switch" docURL="https://react-spectrum.adobe.com/react-spectrum/Switch.html">
<Variant name="Example">
<Switch>Low power mode</Switch>
</Variant>
<Variant name="Example1">
<Switch>Low power mode</Switch>
</Variant>
<Variant name="Example12">
<Switch>
  Low power mode
</Switch>
</Variant>
<Variant name="Accessibility">
<Switch aria-label="Low power mode"/>
</Variant>
<Variant name="Accessibility1">
<Switch aria-label="Low power mode"/>
</Variant>
<Variant name="Accessibility12">
<Switch aria-label="Low power mode"/>
</Variant>
<Variant name="Value1">
<>
    <Switch
        defaultSelected>
    Low power mode (uncontrolled)
    </Switch>

    <Switch
        isSelected={selected}
        onChange={setSelection}>
        Low power mode (controlled)
      </Switch>
</>
</Variant>
<Variant name="Value12">
<>
    <Switch
        defaultSelected
    >
    Low power mode
    (uncontrolled)
    </Switch>

    <Switch
        isSelected={selected}
        onChange={setSelection}
    >
        Low power mode
        (controlled)
      </Switch>
</>
</Variant>
<Variant name="HTML forms">
<Switch name="power" value="low">Low power mode</Switch>
</Variant>
<Variant name="HTML forms1">
<Switch name="power" value="low">Low power mode</Switch>
</Variant>
<Variant name="HTML forms12">
<Switch
    name="power"
    value="low"
>
  Low power mode
</Switch>
</Variant>
<Variant name="Events">
<>
    <Switch onChange={setSelection}>
        Switch Label
      </Switch>
<div>The Switch is on: {selected.toString()}</div>
</>
</Variant>
<Variant name="Events1">
<>
    <Switch onChange={setSelection}>
        Switch Label
      </Switch>
<div>The Switch is on: {selected.toString()}</div>
</>
</Variant>
<Variant name="Events12">
<>
    <Switch
        onChange={setSelection}
    >
        Switch Label
      </Switch>
<div>
        The Switch is on:
    {' '}
    {selected
        .toString()}
      </div>
</>
</Variant>
<Variant name="Disabled">
<Switch isDisabled>Switch Label</Switch>
</Variant>
<Variant name="Disabled1">
<Switch isDisabled>Switch Label</Switch>
</Variant>
<Variant name="Disabled12">
<Switch isDisabled>
  Switch Label
</Switch>
</Variant>
<Variant name="Emphasized">
<Switch isEmphasized defaultSelected>Switch Label</Switch>
</Variant>
<Variant name="Emphasized1">
<Switch isEmphasized defaultSelected>Switch Label</Switch>
</Variant>
<Variant name="Emphasized12">
<Switch
    isEmphasized
    defaultSelected
>
  Switch Label
</Switch>
</Variant>
<Variant name="Read only">
<Switch isReadOnly isSelected>Switch Label</Switch>
</Variant>
<Variant name="Read only1">
<Switch isReadOnly isSelected>Switch Label</Switch>
</Variant>
<Variant name="Read only12">
<Switch
    isReadOnly
    isSelected
>
  Switch Label
</Switch>
</Variant>
</Component>
<Component name="TextArea" docURL="https://react-spectrum.adobe.com/react-spectrum/TextArea.html">
<Variant name="Example">
<TextArea label="Description"/>
</Variant>
<Variant name="Example1">
<TextArea label="Description"/>
</Variant>
<Variant name="Example12">
<TextArea label="Description"/>
</Variant>
<Variant name="Value">
<Flex gap="size-150" wrap>
        <TextArea
            label="Notes (Uncontrolled)"
            defaultValue="This is on a wait list"/>

        <TextArea
            label="Notes (Controlled)"
            value={value}
            onChange={setValue}/>
    </Flex>
</Variant>
<Variant name="Value1">
<Flex gap="size-150" wrap>
    <TextArea
        label="Notes (Uncontrolled)"
        defaultValue="This is on a wait list"
    />

    <TextArea
        label="Notes (Controlled)"
        value={value}
        onChange={setValue}
    />
</Flex>
</Variant>
<Variant name="Value12">
<Flex
    gap="size-150"
    wrap
>
    <TextArea
        label="Notes (Uncontrolled)"
        defaultValue="This is on a wait list"
    />

    <TextArea
        label="Notes (Controlled)"
        value={value}
        onChange={setValue}
    />
</Flex>
</Variant>
<Variant name="HTML forms">
<TextArea label="Comment" name="comment"/>
</Variant>
<Variant name="HTML forms1">
<TextArea label="Comment" name="comment"/>
</Variant>
<Variant name="HTML forms12">
<TextArea
    label="Comment"
    name="comment"
/>
</Variant>
<Variant name="Labeling">
<Flex gap="size-150" wrap>
  <TextArea label="Address"/>
  <TextArea label="Address" isRequired necessityIndicator="icon"/>
  <TextArea label="Address" isRequired necessityIndicator="label"/>
  <TextArea label="Address" necessityIndicator="label"/>
</Flex>
</Variant>
<Variant name="Labeling1">
<Flex gap="size-150" wrap>
  <TextArea label="Address"/>
  <TextArea
      label="Address"
      isRequired
      necessityIndicator="icon"
  />
  <TextArea
      label="Address"
      isRequired
      necessityIndicator="label"
  />
  <TextArea label="Address" necessityIndicator="label"/>
</Flex>
</Variant>
<Variant name="Labeling12">
<Flex
    gap="size-150"
    wrap
>
  <TextArea label="Address"/>
  <TextArea
      label="Address"
      isRequired
      necessityIndicator="icon"
  />
  <TextArea
      label="Address"
      isRequired
      necessityIndicator="label"
  />
  <TextArea
      label="Address"
      necessityIndicator="label"
  />
</Flex>
</Variant>
<Variant name="Events">
<Flex direction="column">
    <TextArea
        onChange={setText}
        label="Your text"
    />
<pre>Mirrored text: {text}</pre>
</Flex>
</Variant>
<Variant name="Events1">
<Flex direction="column">
    <TextArea
        onChange={setText}
        label="Your text"
    />
<pre>Mirrored text: {text}</pre>
</Flex>
</Variant>
<Variant name="Events12">
<Flex direction="column">
    <TextArea
        onChange={setText}
        label="Your text"
    />
<pre>Mirrored text: {text}</pre>
</Flex>
</Variant>
<Variant name="Validation">
<Form validationBehavior="native" maxWidth="size-3000">
  <TextArea label="Comment" name="comment" isRequired minLength={10}/>  <ButtonGroup>
    <Button type="submit" variant="primary">Submit</Button>
    <Button type="reset" variant="secondary">Reset</Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Validation1">
<Form validationBehavior="native" maxWidth="size-3000">
  <TextArea
      label="Comment"
      name="comment"
      isRequired
      minLength={10}
  />  <ButtonGroup>
    <Button type="submit" variant="primary">
      Submit
    </Button>
    <Button type="reset" variant="secondary">
      Reset
    </Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Validation12">
<Form
    validationBehavior="native"
    maxWidth="size-3000"
>
  <TextArea
      label="Comment"
      name="comment"
      isRequired
      minLength={10}
  />  <ButtonGroup>
    <Button
        type="submit"
        variant="primary"
    >
      Submit
    </Button>
    <Button
        type="reset"
        variant="secondary"
    >
      Reset
    </Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Quiet">
<TextArea label="Email" isQuiet/>
</Variant>
<Variant name="Quiet1">
<TextArea label="Email" isQuiet/>
</Variant>
<Variant name="Quiet12">
<TextArea
    label="Email"
    isQuiet
/>
</Variant>
<Variant name="Disabled">
<TextArea label="Email" isDisabled/>
</Variant>
<Variant name="Disabled1">
<TextArea label="Email" isDisabled/>
</Variant>
<Variant name="Disabled12">
<TextArea
    label="Email"
    isDisabled
/>
</Variant>
<Variant name="Read only">
<TextArea label="Email" defaultValue="abc@adobe.com" isReadOnly/>
</Variant>
<Variant name="Read only1">
<TextArea
    label="Email"
    defaultValue="abc@adobe.com"
    isReadOnly
/>
</Variant>
<Variant name="Read only12">
<TextArea
    label="Email"
    defaultValue="abc@adobe.com"
    isReadOnly
/>
</Variant>
<Variant name="Label alignment and position">
<TextArea label="Search" labelPosition="side" labelAlign="end"/>
</Variant>
<Variant name="Label alignment and position1">
<TextArea
    label="Search"
    labelPosition="side"
    labelAlign="end"
/>
</Variant>
<Variant name="Label alignment and position12">
<TextArea
    label="Search"
    labelPosition="side"
    labelAlign="end"
/>
</Variant>
<Variant name="Help text">
<Flex gap="size-100" wrap>
  <TextArea
      label="Comment"
      defaultValue="Awesome!"
      validationState="valid"
      description="Enter a comment."
  />
  <TextArea
      label="Comment"
      validationState="invalid"
      errorMessage="Empty input is not allowed."
  />
</Flex>
</Variant>
<Variant name="Help text1">
<Flex gap="size-100" wrap>
  <TextArea
      label="Comment"
      defaultValue="Awesome!"
      validationState="valid"
      description="Enter a comment."
  />
  <TextArea
      label="Comment"
      validationState="invalid"
      errorMessage="Empty input is not allowed."
  />
</Flex>
</Variant>
<Variant name="Help text12">
<Flex
    gap="size-100"
    wrap
>
  <TextArea
      label="Comment"
      defaultValue="Awesome!"
      validationState="valid"
      description="Enter a comment."
  />
  <TextArea
      label="Comment"
      validationState="invalid"
      errorMessage="Empty input is not allowed."
  />
</Flex>
</Variant>
<Variant name="Contextual help">
<TextArea
    label="Comment"
    contextualHelp={
        <ContextualHelp variant="info">
      <Heading>Comment tips</Heading>
      <Content>
        Comments will be screened prior to being published. Please be nice!
      </Content>
    </ContextualHelp>
    }
/>
</Variant>
<Variant name="Contextual help1">
<TextArea
    label="Comment"
    contextualHelp={
        <ContextualHelp variant="info">
      <Heading>Comment tips</Heading>
      <Content>
        Comments will be screened prior to being
        published. Please be nice!
      </Content>
    </ContextualHelp>
    }
/>
</Variant>
<Variant name="Contextual help12">
<TextArea
    label="Comment"
    contextualHelp={
        <ContextualHelp variant="info">
      <Heading>
        Comment tips
      </Heading>
      <Content>
        Comments will
        be screened
        prior to being
        published.
        Please be nice!
      </Content>
    </ContextualHelp>
    }
/>
</Variant>
<Variant name="Custom width">
<TextArea label="Email" width="size-3600" maxWidth="100%"/>
</Variant>
<Variant name="Custom width1">
<TextArea label="Email" width="size-3600" maxWidth="100%"/>
</Variant>
<Variant name="Custom width12">
<TextArea
    label="Email"
    width="size-3600"
    maxWidth="100%"
/>
</Variant>
</Component>
<Component name="TextField" docURL="https://react-spectrum.adobe.com/react-spectrum/TextField.html">
<Variant name="Example">
<TextField label="Name"/>
</Variant>
<Variant name="Example1">
<TextField label="Name"/>
</Variant>
<Variant name="Example12">
<TextField label="Name"/>
</Variant>
<Variant name="Value">
<Flex gap="size-150" wrap>
        <TextField
            label="Email (Uncontrolled)"
            defaultValue="me@email.com"/>

        <TextField
            label="Email (Controlled)"
            value={value}
            onChange={setValue}/>
    </Flex>
</Variant>
<Variant name="Value1">
<Flex gap="size-150" wrap>
    <TextField
        label="Email (Uncontrolled)"
        defaultValue="me@email.com"/>

    <TextField
        label="Email (Controlled)"
        value={value}
        onChange={setValue}/>
</Flex>
</Variant>
<Variant name="Value12">
<Flex
    gap="size-150"
    wrap
>
    <TextField
        label="Email (Uncontrolled)"
        defaultValue="me@email.com"
    />

    <TextField
        label="Email (Controlled)"
        value={value}
        onChange={setValue}
    />
</Flex>
</Variant>
<Variant name="HTML forms">
<TextField label="Email" name="email" type="email"/>
</Variant>
<Variant name="HTML forms1">
<TextField label="Email" name="email" type="email"/>
</Variant>
<Variant name="HTML forms12">
<TextField
    label="Email"
    name="email"
    type="email"
/>
</Variant>
<Variant name="Labeling">
<Flex gap="size-150" wrap>
  <TextField label="Street address"/>
  <TextField label="Street address" isRequired necessityIndicator="icon"/>
  <TextField label="Street address" isRequired necessityIndicator="label"/>
  <TextField label="Street address" necessityIndicator="label"/>
</Flex>
</Variant>
<Variant name="Labeling1">
<Flex gap="size-150" wrap>
  <TextField label="Street address"/>
  <TextField
      label="Street address"
      isRequired
      necessityIndicator="icon"
  />
  <TextField
      label="Street address"
      isRequired
      necessityIndicator="label"
  />
  <TextField
      label="Street address"
      necessityIndicator="label"
  />
</Flex>
</Variant>
<Variant name="Labeling12">
<Flex
    gap="size-150"
    wrap
>
  <TextField label="Street address"/>
  <TextField
      label="Street address"
      isRequired
      necessityIndicator="icon"
  />
  <TextField
      label="Street address"
      isRequired
      necessityIndicator="label"
  />
  <TextField
      label="Street address"
      necessityIndicator="label"
  />
</Flex>
</Variant>
<Variant name="Events">
<Flex direction="column" gap="size-150">
    <TextField
        onChange={setText}
        label="Your text"/>
<pre>Mirrored text: {text}</pre>
</Flex>
</Variant>
<Variant name="Events1">
<Flex direction="column" gap="size-150">
    <TextField
        onChange={setText}
        label="Your text"/>
<pre>Mirrored text: {text}</pre>
</Flex>
</Variant>
<Variant name="Events12">
<Flex
    direction="column"
    gap="size-150"
>
    <TextField
        onChange={setText}
        label="Your text"
    />
<pre>Mirrored text: {text}</pre>
</Flex>
</Variant>
<Variant name="Validation">
<Form validationBehavior="native" maxWidth="size-3000">
  <TextField label="Email" name="email" type="email" isRequired/>  <ButtonGroup>
    <Button type="submit" variant="primary">Submit</Button>
    <Button type="reset" variant="secondary">Reset</Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Validation1">
<Form validationBehavior="native" maxWidth="size-3000">
  <TextField
      label="Email"
      name="email"
      type="email"
      isRequired
  />  <ButtonGroup>
    <Button type="submit" variant="primary">
      Submit
    </Button>
    <Button type="reset" variant="secondary">
      Reset
    </Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Validation12">
<Form
    validationBehavior="native"
    maxWidth="size-3000"
>
  <TextField
      label="Email"
      name="email"
      type="email"
      isRequired
  />  <ButtonGroup>
    <Button
        type="submit"
        variant="primary"
    >
      Submit
    </Button>
    <Button
        type="reset"
        variant="secondary"
    >
      Reset
    </Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Quiet">
<TextField label="Email" isQuiet/>
</Variant>
<Variant name="Quiet1">
<TextField label="Email" isQuiet/>
</Variant>
<Variant name="Quiet12">
<TextField
    label="Email"
    isQuiet
/>
</Variant>
<Variant name="Disabled">
<TextField label="Email" isDisabled/>
</Variant>
<Variant name="Disabled1">
<TextField label="Email" isDisabled/>
</Variant>
<Variant name="Disabled12">
<TextField
    label="Email"
    isDisabled
/>
</Variant>
<Variant name="Read only">
<TextField label="Email" defaultValue="abc@adobe.com" isReadOnly/>
</Variant>
<Variant name="Read only1">
<TextField
    label="Email"
    defaultValue="abc@adobe.com"
    isReadOnly
/>
</Variant>
<Variant name="Read only12">
<TextField
    label="Email"
    defaultValue="abc@adobe.com"
    isReadOnly
/>
</Variant>
<Variant name="Label alignment and position">
<TextField label="Search" labelPosition="side" labelAlign="end"/>
</Variant>
<Variant name="Label alignment and position1">
<TextField
    label="Search"
    labelPosition="side"
    labelAlign="end"
/>
</Variant>
<Variant name="Label alignment and position12">
<TextField
    label="Search"
    labelPosition="side"
    labelAlign="end"
/>
</Variant>
<Variant name="Help text">
<Flex gap="size-100" wrap>
  <TextField
      label="Name"
      defaultValue="John"
      validationState="valid"
      description="Enter your name."
  />
  <TextField
      label="Name"
      validationState="invalid"
      errorMessage="Empty input is not allowed."
  />
</Flex>
</Variant>
<Variant name="Help text1">
<Flex gap="size-100" wrap>
  <TextField
      label="Name"
      defaultValue="John"
      validationState="valid"
      description="Enter your name."
  />
  <TextField
      label="Name"
      validationState="invalid"
      errorMessage="Empty input is not allowed."
  />
</Flex>
</Variant>
<Variant name="Help text12">
<Flex
    gap="size-100"
    wrap
>
  <TextField
      label="Name"
      defaultValue="John"
      validationState="valid"
      description="Enter your name."
  />
  <TextField
      label="Name"
      validationState="invalid"
      errorMessage="Empty input is not allowed."
  />
</Flex>
</Variant>
<Variant name="Contextual help">
<TextField
    label="Password"
    type="password"
    contextualHelp={
        <ContextualHelp>
      <Heading>Need help?</Heading>
      <Content>
        If you're having trouble accessing your account, contact our customer
        support team for help.
      </Content>
    </ContextualHelp>
    }
/>
</Variant>
<Variant name="Contextual help1">
<TextField
    label="Password"
    type="password"
    contextualHelp={
        <ContextualHelp>
      <Heading>Need help?</Heading>
      <Content>
        If you're having trouble accessing your account,
        contact our customer support team for help.
      </Content>
    </ContextualHelp>
    }
/>
</Variant>
<Variant name="Contextual help12">
<TextField
    label="Password"
    type="password"
    contextualHelp={
        <ContextualHelp>
      <Heading>
        Need help?
      </Heading>
      <Content>
        If you're
        having trouble
        accessing your
        account,
        contact our
        customer
        support team
        for help.
      </Content>
    </ContextualHelp>
    }
/>
</Variant>
<Variant name="Custom width">
<TextField label="Email" width="size-3600" maxWidth="100%"/>
</Variant>
<Variant name="Custom width1">
<TextField
    label="Email"
    width="size-3600"
    maxWidth="100%"
/>
</Variant>
<Variant name="Custom width12">
<TextField
    label="Email"
    width="size-3600"
    maxWidth="100%"
/>
</Variant>
</Component>
</Category>
<Category name="Icons">
<Component name="Custom Icons" docURL="https://react-spectrum.adobe.com/react-spectrum/custom-icons.html">
<Variant name="Example">
<Icon {...props}>
      <svg viewBox="0 0 36 36">
        <path d="M18.477.593,22.8,12.029l12.212.578a.51.51,0,0,1,.3.908l-9.54,7.646,3.224,11.793a.51.51,0,0,1-.772.561L18,26.805,7.78,33.515a.51.51,0,0,1-.772-.561l3.224-11.793L.692,13.515a.51.51,0,0,1,.3-.908L13.2,12.029,17.523.593A.51.51,0,0,1,18.477.593Z"/>
      </svg>
    </Icon>
</Variant>
<Variant name="Example1">
<Icon {...props}>
      <svg viewBox="0 0 36 36">
        <path d="M18.477.593,22.8,12.029l12.212.578a.51.51,0,0,1,.3.908l-9.54,7.646,3.224,11.793a.51.51,0,0,1-.772.561L18,26.805,7.78,33.515a.51.51,0,0,1-.772-.561l3.224-11.793L.692,13.515a.51.51,0,0,1,.3-.908L13.2,12.029,17.523.593A.51.51,0,0,1,18.477.593Z"/>
      </svg>
    </Icon>
</Variant>
<Variant name="Example12">
<Icon {...props}>
      <svg viewBox="0 0 36 36">
        <path d="M18.477.593,22.8,12.029l12.212.578a.51.51,0,0,1,.3.908l-9.54,7.646,3.224,11.793a.51.51,0,0,1-.772.561L18,26.805,7.78,33.515a.51.51,0,0,1-.772-.561l3.224-11.793L.692,13.515a.51.51,0,0,1,.3-.908L13.2,12.029,17.523.593A.51.51,0,0,1,18.477.593Z"/>
      </svg>
    </Icon>
</Variant>
<Variant name="Example123">
<Button variant="primary">
    <CustomIcon/>
    <Text>Favorite</Text>
    </Button>
</Variant>
<Variant name="Example1234">
<Button variant="primary">
    <CustomIcon/>
    <Text>Favorite</Text>
    </Button>
</Variant>
<Variant name="Example12345">
<Button variant="primary">
    <CustomIcon/>
    <Text>Favorite</Text>
    </Button>
</Variant>
<Variant name="Sizing">
<Flex gap="size-100">
    <CustomIcon aria-label="XXS Star" size="XXS"/>
    <CustomIcon aria-label="XS Star" size="XS"/>
    <CustomIcon aria-label="S Star" size="S"/>
    <CustomIcon aria-label="M Star" size="M"/>
    <CustomIcon aria-label="L Star" size="L"/>
    <CustomIcon aria-label="XL Star" size="XL"/>
    <CustomIcon aria-label="XXL Star" size="XXL"/>
    </Flex>
</Variant>
<Variant name="Sizing1">
<Flex gap="size-100">
    <CustomIcon aria-label="XXS Star" size="XXS"/>
    <CustomIcon aria-label="XS Star" size="XS"/>
    <CustomIcon aria-label="S Star" size="S"/>
    <CustomIcon aria-label="M Star" size="M"/>
    <CustomIcon aria-label="L Star" size="L"/>
    <CustomIcon aria-label="XL Star" size="XL"/>
    <CustomIcon aria-label="XXL Star" size="XXL"/>
    </Flex>
</Variant>
<Variant name="Sizing12">
<Flex gap="size-100">
    <CustomIcon
        aria-label="XXS Star"
        size="XXS"
    />
    <CustomIcon
        aria-label="XS Star"
        size="XS"
    />
    <CustomIcon
        aria-label="S Star"
        size="S"
    />
    <CustomIcon
        aria-label="M Star"
        size="M"
    />
    <CustomIcon
        aria-label="L Star"
        size="L"
    />
    <CustomIcon
        aria-label="XL Star"
        size="XL"
    />
    <CustomIcon
        aria-label="XXL Star"
        size="XXL"
    />
    </Flex>
</Variant>
<Variant name="Coloring">
<Flex gap="size-100">
    <CustomIcon aria-label="Default Star"/>
    <CustomIcon aria-label="Negative Star" color="negative"/>
    <CustomIcon aria-label="Notification Star" color="notice"/>
    <CustomIcon aria-label="Positive Star" color="positive"/>
    <CustomIcon aria-label="Informative Star" color="informative"/>
    </Flex>
</Variant>
<Variant name="Coloring1">
<Flex gap="size-100">
    <CustomIcon aria-label="Default Star"/>
    <CustomIcon
        aria-label="Negative Star"
        color="negative"
    />
    <CustomIcon
        aria-label="Notification Star"
        color="notice"
    />
    <CustomIcon
        aria-label="Positive Star"
        color="positive"
    />
    <CustomIcon
        aria-label="Informative Star"
        color="informative"
    />
    </Flex>
</Variant>
<Variant name="Coloring12">
<Flex gap="size-100">
    <CustomIcon aria-label="Default Star"/>
    <CustomIcon
        aria-label="Negative Star"
        color="negative"
    />
    <CustomIcon
        aria-label="Notification Star"
        color="notice"
    />
    <CustomIcon
        aria-label="Positive Star"
        color="positive"
    />
    <CustomIcon
        aria-label="Informative Star"
        color="informative"
    />
    </Flex>
</Variant>
</Component>
<Component name="Workflow Icons" docURL="https://react-spectrum.adobe.com/react-spectrum/workflow-icons.html">
<Variant name="Example">
<Airplane aria-label="Airplane"/>
</Variant>
<Variant name="Example1">
<Airplane aria-label="Airplane"/>
</Variant>
<Variant name="Example12">
<Airplane aria-label="Airplane"/>
</Variant>
<Variant name="Sizing">
<Flex gap="size-100">
    <Beaker aria-label="XXS Beaker" size="XXS"/>
    <Beaker aria-label="XS Beaker" size="XS"/>
    <Beaker aria-label="S Beaker" size="S"/>
    <Beaker aria-label="M Beaker" size="M"/>
    <Beaker aria-label="L Beaker" size="L"/>
    <Beaker aria-label="XL Beaker" size="XL"/>
    <Beaker aria-label="XXL Beaker" size="XXL"/>
    </Flex>
</Variant>
<Variant name="Sizing1">
<Flex gap="size-100">
    <Beaker aria-label="XXS Beaker" size="XXS"/>
    <Beaker aria-label="XS Beaker" size="XS"/>
    <Beaker aria-label="S Beaker" size="S"/>
    <Beaker aria-label="M Beaker" size="M"/>
    <Beaker aria-label="L Beaker" size="L"/>
    <Beaker aria-label="XL Beaker" size="XL"/>
    <Beaker aria-label="XXL Beaker" size="XXL"/>
    </Flex>
</Variant>
<Variant name="Sizing12">
<Flex gap="size-100">
    <Beaker
        aria-label="XXS Beaker"
        size="XXS"
    />
    <Beaker
        aria-label="XS Beaker"
        size="XS"
    />
    <Beaker
        aria-label="S Beaker"
        size="S"
    />
    <Beaker
        aria-label="M Beaker"
        size="M"
    />
    <Beaker
        aria-label="L Beaker"
        size="L"
    />
    <Beaker
        aria-label="XL Beaker"
        size="XL"
    />
    <Beaker
        aria-label="XXL Beaker"
        size="XXL"
    />
    </Flex>
</Variant>
<Variant name="Coloring">
<Flex gap="size-100">
    <Alert aria-label="Default Alert"/>
    <Alert aria-label="Negative Alert" color="negative"/>
    <Alert aria-label="Notification Alert" color="notice"/>
    <Alert aria-label="Positive Alert" color="positive"/>
    <Alert aria-label="Informative Alert" color="informative"/>
    </Flex>
</Variant>
<Variant name="Coloring1">
<Flex gap="size-100">
    <Alert aria-label="Default Alert"/>
    <Alert aria-label="Negative Alert" color="negative"/>
    <Alert aria-label="Notification Alert" color="notice"/>
    <Alert aria-label="Positive Alert" color="positive"/>
    <Alert
        aria-label="Informative Alert"
        color="informative"
    />
    </Flex>
</Variant>
<Variant name="Coloring12">
<Flex gap="size-100">
    <Alert aria-label="Default Alert"/>
    <Alert
        aria-label="Negative Alert"
        color="negative"
    />
    <Alert
        aria-label="Notification Alert"
        color="notice"
    />
    <Alert
        aria-label="Positive Alert"
        color="positive"
    />
    <Alert
        aria-label="Informative Alert"
        color="informative"
    />
    </Flex>
</Variant>
<Variant name="Labeling">
<LockClosed aria-label="Locked"/>
</Variant>
<Variant name="Labeling1">
<LockClosed aria-label="Locked"/>
</Variant>
<Variant name="Labeling12">
<LockClosed aria-label="Locked"/>
</Variant>
</Component>
</Category>
<Category name="Navigation">
<Component name="Breadcrumbs" docURL="https://react-spectrum.adobe.com/react-spectrum/Breadcrumbs.html">
<Variant name="Example">
<Breadcrumbs>
    <Item key="home">Home</Item>
    <Item key="trendy">Trendy</Item>
    <Item key="march 2020 assets">March 2020 Assets</Item>
    </Breadcrumbs>
</Variant>
<Variant name="Example1">
<Breadcrumbs>
    <Item key="home">Home</Item>
    <Item key="trendy">Trendy</Item>
    <Item key="march 2020 assets">March 2020 Assets</Item>
    </Breadcrumbs>
</Variant>
<Variant name="Example12">
<Breadcrumbs>
    <Item key="home">
    Home
    </Item>
    <Item key="trendy">
    Trendy
    </Item>
    <Item key="march 2020 assets">
    March 2020 Assets
    </Item>
    </Breadcrumbs>
</Variant>
<Variant name="Events">
<div>
    <Breadcrumbs onAction={(a) => setFolderId(a)}>
        {folders.map(f => <Item key={f.id}>{f.label}</Item>)}
      </Breadcrumbs>
      <p>You pressed folder ID: {folderId}</p>
    </div>
</Variant>
<Variant name="Events1">
<div>
    <Breadcrumbs onAction={(a) => setFolderId(a)}>
        {folders.map((f) => (
            <Item key={f.id}>{f.label}</Item>
        ))}
      </Breadcrumbs>
<p>You pressed folder ID: {folderId}</p>
</div>
</Variant>
<Variant name="Events12">
<div>
    <Breadcrumbs
        onAction={(a) =>
            setFolderId(a)}
    >
        {folders.map(
            (f) => (
                <Item
                    key={f.id}
                >
              {f.label}
            </Item>
            )
        )}
      </Breadcrumbs>
<p>
        You pressed
        folder ID:{' '}
    {folderId}
      </p>
</div>
</Variant>
<Variant name="Links">
<Breadcrumbs>
  <Item href="/">Home</Item>
  <Item href="/react-spectrum/">React Spectrum</Item>
  <Item href="/react-spectrum/Breadcrumbs.html">Breadcrumbs</Item>
</Breadcrumbs>
</Variant>
<Variant name="Links1">
<Breadcrumbs>
  <Item href="/">Home</Item>
  <Item href="/react-spectrum/">React Spectrum</Item>
  <Item href="/react-spectrum/Breadcrumbs.html">
    Breadcrumbs
  </Item>
</Breadcrumbs>
</Variant>
<Variant name="Links12">
<Breadcrumbs>
  <Item href="/">
    Home
  </Item>
  <Item href="/react-spectrum/">
    React Spectrum
  </Item>
  <Item href="/react-spectrum/Breadcrumbs.html">
    Breadcrumbs
  </Item>
</Breadcrumbs>
</Variant>
<Variant name="Size">
<Breadcrumbs size="S">
  <Item key="home">Home</Item>
  <Item key="trendy">Trendy</Item>
</Breadcrumbs>
</Variant>
<Variant name="Size1">
<Breadcrumbs size="S">
  <Item key="home">Home</Item>
  <Item key="trendy">Trendy</Item>
</Breadcrumbs>
</Variant>
<Variant name="Size12">
<Breadcrumbs size="S">
  <Item key="home">
    Home
  </Item>
  <Item key="trendy">
    Trendy
  </Item>
</Breadcrumbs>
</Variant>
<Variant name="Size123">
<Breadcrumbs size="M">
  <Item key="home">Home</Item>
  <Item key="trendy">Trendy</Item>
</Breadcrumbs>
</Variant>
<Variant name="Size1234">
<Breadcrumbs size="M">
  <Item key="home">Home</Item>
  <Item key="trendy">Trendy</Item>
</Breadcrumbs>
</Variant>
<Variant name="Size12345">
<Breadcrumbs size="M">
  <Item key="home">
    Home
  </Item>
  <Item key="trendy">
    Trendy
  </Item>
</Breadcrumbs>
</Variant>
<Variant name="Size123456">
<Breadcrumbs size="L">
  <Item key="home">Home</Item>
  <Item key="trendy">Trendy</Item>
</Breadcrumbs>
</Variant>
<Variant name="Size1234567">
<Breadcrumbs size="L">
  <Item key="home">Home</Item>
  <Item key="trendy">Trendy</Item>
</Breadcrumbs>
</Variant>
<Variant name="Size12345678">
<Breadcrumbs size="L">
  <Item key="home">
    Home
  </Item>
  <Item key="trendy">
    Trendy
  </Item>
</Breadcrumbs>
</Variant>
<Variant name="Multiline">
<Breadcrumbs isMultiline>
  <Item key="home">Home</Item>
  <Item key="trendy">Trendy</Item>
  <Item key="march 2020 assets">March 2020 Assets</Item>
</Breadcrumbs>
</Variant>
<Variant name="Multiline1">
<Breadcrumbs isMultiline>
  <Item key="home">Home</Item>
  <Item key="trendy">Trendy</Item>
  <Item key="march 2020 assets">March 2020 Assets</Item>
</Breadcrumbs>
</Variant>
<Variant name="Multiline12">
<Breadcrumbs
    isMultiline
>
  <Item key="home">
    Home
  </Item>
  <Item key="trendy">
    Trendy
  </Item>
  <Item key="march 2020 assets">
    March 2020 Assets
  </Item>
</Breadcrumbs>
</Variant>
<Variant name="Root context">
<View overflow="hidden" width="200px">
  <Breadcrumbs showRoot>
    <Item key="home">Home</Item>
    <Item key="trendy">Trendy</Item>
    <Item key="2020 assets">March 2020 Assets</Item>
    <Item key="winter">Winter</Item>
    <Item key="holiday">Holiday</Item>
  </Breadcrumbs>
</View>
</Variant>
<Variant name="Root context1">
<View overflow="hidden" width="200px">
  <Breadcrumbs showRoot>
    <Item key="home">Home</Item>
    <Item key="trendy">Trendy</Item>
    <Item key="2020 assets">March 2020 Assets</Item>
    <Item key="winter">Winter</Item>
    <Item key="holiday">Holiday</Item>
  </Breadcrumbs>
</View>
</Variant>
<Variant name="Root context12">
<View
    overflow="hidden"
    width="200px"
>
  <Breadcrumbs
      showRoot
  >
    <Item key="home">
      Home
    </Item>
    <Item key="trendy">
      Trendy
    </Item>
    <Item key="2020 assets">
      March 2020 Assets
    </Item>
    <Item key="winter">
      Winter
    </Item>
    <Item key="holiday">
      Holiday
    </Item>
  </Breadcrumbs>
</View>
</Variant>
<Variant name="Disabled">
<Breadcrumbs isDisabled>
  <Item key="home">Home</Item>
  <Item key="trendy">Trendy</Item>
  <Item key="march 2020 assets">March 2020 Assets</Item>
</Breadcrumbs>
</Variant>
<Variant name="Disabled1">
<Breadcrumbs isDisabled>
  <Item key="home">Home</Item>
  <Item key="trendy">Trendy</Item>
  <Item key="march 2020 assets">March 2020 Assets</Item>
</Breadcrumbs>
</Variant>
<Variant name="Disabled12">
<Breadcrumbs
    isDisabled
>
  <Item key="home">
    Home
  </Item>
  <Item key="trendy">
    Trendy
  </Item>
  <Item key="march 2020 assets">
    March 2020 Assets
  </Item>
</Breadcrumbs>
</Variant>
<Variant name="Visible items (overflow behavior)">
<Breadcrumbs>
  <Item key="shared">My Shared Documents</Item>
  <Item key="catalogue">North America Spring Catalogue</Item>
  <Item key="march 2020">March 2020</Item>
  <Item key="assets">
    Downloaded Screenshots and Assets (approval required)
  </Item>
  <Item key="streetwear">Streetwear</Item>
  <Item key="jackets">Jackets</Item>
</Breadcrumbs>
</Variant>
<Variant name="Visible items (overflow behavior)1">
<Breadcrumbs>
  <Item key="shared">My Shared Documents</Item>
  <Item key="catalogue">
    North America Spring Catalogue
  </Item>
  <Item key="march 2020">March 2020</Item>
  <Item key="assets">
    Downloaded Screenshots and Assets (approval required)
  </Item>
  <Item key="streetwear">Streetwear</Item>
  <Item key="jackets">Jackets</Item>
</Breadcrumbs>
</Variant>
<Variant name="Visible items (overflow behavior)12">
<Breadcrumbs>
  <Item key="shared">
    My Shared Documents
  </Item>
  <Item key="catalogue">
    North America
    Spring Catalogue
  </Item>
  <Item key="march 2020">
    March 2020
  </Item>
  <Item key="assets">
    Downloaded
    Screenshots and
    Assets (approval
    required)
  </Item>
  <Item key="streetwear">
    Streetwear
  </Item>
  <Item key="jackets">
    Jackets
  </Item>
</Breadcrumbs>
</Variant>
<Variant name="Visible items (overflow behavior)123">
<Breadcrumbs showRoot>
  <Item key="shared">My Shared Documents</Item>
  <Item key="catalogue">North America Spring Catalogue</Item>
  <Item key="march 2020">March 2020</Item>
  <Item key="assets">
    Downloaded Screenshots and Assets (approval required)
  </Item>
</Breadcrumbs>
</Variant>
<Variant name="Visible items (overflow behavior)1234">
<Breadcrumbs showRoot>
  <Item key="shared">My Shared Documents</Item>
  <Item key="catalogue">
    North America Spring Catalogue
  </Item>
  <Item key="march 2020">March 2020</Item>
  <Item key="assets">
    Downloaded Screenshots and Assets (approval required)
  </Item>
</Breadcrumbs>
</Variant>
<Variant name="Visible items (overflow behavior)12345">
<Breadcrumbs showRoot>
  <Item key="shared">
    My Shared Documents
  </Item>
  <Item key="catalogue">
    North America
    Spring Catalogue
  </Item>
  <Item key="march 2020">
    March 2020
  </Item>
  <Item key="assets">
    Downloaded
    Screenshots and
    Assets (approval
    required)
  </Item>
</Breadcrumbs>
</Variant>
</Component>
<Component name="Link" docURL="https://react-spectrum.adobe.com/react-spectrum/Link.html">
<Variant name="Example">
<Link href="https://www.imdb.com/title/tt6348138/" target="_blank">
  The missing link.
</Link>
</Variant>
<Variant name="Example1">
<Link
    href="https://www.imdb.com/title/tt6348138/"
    target="_blank"
>
  The missing link.
</Link>
</Variant>
<Variant name="Example12">
<Link
    href="https://www.imdb.com/title/tt6348138/"
    target="_blank"
>
  The missing link.
</Link>
</Variant>
<Variant name="Content">
<Link href="https://adobe.com" target="_blank">Adobe.com</Link>
</Variant>
<Variant name="Content1">
<Link href="https://adobe.com" target="_blank">
  Adobe.com
</Link>
</Variant>
<Variant name="Content12">
<Link
    href="https://adobe.com"
    target="_blank"
>
  Adobe.com
</Link>
</Variant>
<Variant name="JavaScript handled links">
<Link onPress={() => alert('Pressed link')}>Adobe</Link>
</Variant>
<Variant name="JavaScript handled links1">
<Link onPress={() => alert('Pressed link')}>Adobe</Link>
</Variant>
<Variant name="JavaScript handled links12">
<Link
    onPress={() =>
        alert(
            'Pressed link'
        )}
>
  Adobe
</Link>
</Variant>
<Variant name="Accessibility">
<Link onPress={e => alert(`clicked "${e.target.textContent}" Link`)}>
  I forgot my password
</Link>
</Variant>
<Variant name="Accessibility1">
<Link
    onPress={(e) =>
        alert(`clicked "${e.target.textContent}" Link`)}
>
  I forgot my password
</Link>
</Variant>
<Variant name="Accessibility12">
<Link
    onPress={(e) =>
        alert(
            `clicked "${e.target.textContent}" Link`
        )}
>
  I forgot my password
</Link>
</Variant>
<Variant name="Primary">
<p>
  Would you like to <Link variant="primary">learn more</Link>{' '}
  about this fine component?
</p>
</Variant>
<Variant name="Primary1">
<p>
  Would you like to{' '}
    <Link variant="primary">learn more</Link>{' '}
  about this fine component?
</p>
</Variant>
<Variant name="Primary12">
<p>
  Would you like to
    {' '}
    <Link variant="primary">
    learn more
  </Link>{' '}
  about this fine
  component?
</p>
</Variant>
<Variant name="Secondary">
<p>
  Would you like to <Link variant="secondary">learn more</Link>{' '}
  about this fine component?
</p>
</Variant>
<Variant name="Secondary1">
<p>
  Would you like to{' '}
    <Link variant="secondary">learn more</Link>{' '}
  about this fine component?
</p>
</Variant>
<Variant name="Secondary12">
<p>
  Would you like to
    {' '}
    <Link variant="secondary">
    learn more
  </Link>{' '}
  about this fine
  component?
</p>
</Variant>
<Variant name="Over background">
<View backgroundColor="positive" padding="size-300">
  <Link variant="overBackground">Learn more here!</Link>
</View>
</Variant>
<Variant name="Over background1">
<View backgroundColor="positive" padding="size-300">
  <Link variant="overBackground">Learn more here!</Link>
</View>
</Variant>
<Variant name="Over background12">
<View
    backgroundColor="positive"
    padding="size-300"
>
  <Link variant="overBackground">
    Learn more here!
  </Link>
</View>
</Variant>
<Variant name="Quiet">
<p>
  Would you like to <Link isQuiet>learn more</Link> about this fine component?
</p>
</Variant>
<Variant name="Quiet1">
<p>
  Would you like to <Link isQuiet>learn more</Link>{' '}
  about this fine component?
</p>
</Variant>
<Variant name="Quiet12">
<p>
  Would you like to
    {' '}
    <Link isQuiet>
    learn more
  </Link>{' '}
  about this fine
  component?
</p>
</Variant>
</Component>
<Component name="Tabs" docURL="https://react-spectrum.adobe.com/react-spectrum/Tabs.html">
<Variant name="Example">
<Tabs aria-label="History of Ancient Rome">
  <TabList>
    <Item key="FoR">Founding of Rome</Item>
    <Item key="MaR">Monarchy and Republic</Item>
    <Item key="Emp">Empire</Item>
  </TabList>
  <TabPanels>
    <Item key="FoR">
      Arma virumque cano, Troiae qui primus ab oris.
    </Item>
    <Item key="MaR">
      Senatus Populusque Romanus.
    </Item>
    <Item key="Emp">
      Alea jacta est.
    </Item>
  </TabPanels>
</Tabs>
</Variant>
<Variant name="Example1">
<Tabs aria-label="History of Ancient Rome">
  <TabList>
    <Item key="FoR">Founding of Rome</Item>
    <Item key="MaR">Monarchy and Republic</Item>
    <Item key="Emp">Empire</Item>
  </TabList>
  <TabPanels>
    <Item key="FoR">
      Arma virumque cano, Troiae qui primus ab oris.
    </Item>
    <Item key="MaR">
      Senatus Populusque Romanus.
    </Item>
    <Item key="Emp">
      Alea jacta est.
    </Item>
  </TabPanels>
</Tabs>
</Variant>
<Variant name="Example12">
<Tabs aria-label="History of Ancient Rome">
  <TabList>
    <Item key="FoR">
      Founding of Rome
    </Item>
    <Item key="MaR">
      Monarchy and
      Republic
    </Item>
    <Item key="Emp">
      Empire
    </Item>
  </TabList>
  <TabPanels>
    <Item key="FoR">
      Arma virumque
      cano, Troiae qui
      primus ab oris.
    </Item>
    <Item key="MaR">
      Senatus
      Populusque
      Romanus.
    </Item>
    <Item key="Emp">
      Alea jacta est.
    </Item>
  </TabPanels>
</Tabs>
</Variant>
<Variant name="Content">
<>
        <p>Current tab id: {tabId}</p>
      <Tabs
          aria-label="History of Ancient Rome"
          items={tabs}
          onSelectionChange={setTabId}
      >
        <TabList>
          {(item) => (
              <Item>
              {item.name}
            </Item>
          )}
        </TabList>
        <TabPanels>
          {(item) => (
              <Item>
              {item.children}
            </Item>
          )}
        </TabPanels>
      </Tabs>
    </>
</Variant>
<Variant name="Content1">
<>
    <p>Current tab id: {tabId}</p>
<Tabs
    aria-label="History of Ancient Rome"
    items={tabs}
    onSelectionChange={setTabId}
>
        <TabList>
          {(item) => (
              <Item>
              {item.name}
            </Item>
          )}
        </TabList>
        <TabPanels>
          {(item) => (
              <Item>
              {item.children}
            </Item>
          )}
        </TabPanels>
      </Tabs>
</>
</Variant>
<Variant name="Content12">
<>
    <p>
    Current tab id:
        {' '}
        {tabId}
      </p>
<Tabs
    aria-label="History of Ancient Rome"
    items={tabs}
    onSelectionChange={setTabId}
>
        <TabList>
          {(
              item
          ) => (
              <Item>
              {item.name}
            </Item>
          )}
        </TabList>
        <TabPanels>
          {(
              item
          ) => (
              <Item>
              {item
                  .children}
            </Item>
          )}
        </TabPanels>
      </Tabs>
</>
</Variant>
<Variant name="Icons in tabs">
<Tabs aria-label="History of Ancient Rome">
  <TabList>
    <Item key="FoR"><Bookmark/><Text>Founding of Rome</Text></Item>
    <Item key="MaR"><Calendar/><Text>Monarchy and Republic</Text></Item>
    <Item key="Emp"><Dashboard/><Text>Empire</Text></Item>
  </TabList>
  <TabPanels>
    <Item key="FoR">
      Arma virumque cano, Troiae qui primus ab oris.
    </Item>
    <Item key="MaR">
      Senatus Populusque Romanus.
    </Item>
    <Item key="Emp">
      Alea jacta est.
    </Item>
  </TabPanels>
</Tabs>
</Variant>
<Variant name="Icons in tabs1">
<Tabs aria-label="History of Ancient Rome">
  <TabList>
    <Item key="FoR">
      <Bookmark/>
      <Text>Founding of Rome</Text>
    </Item>
    <Item key="MaR">
      <Calendar/>
      <Text>Monarchy and Republic</Text>
    </Item>
    <Item key="Emp">
      <Dashboard/>
      <Text>Empire</Text>
    </Item>
  </TabList>
  <TabPanels>
    <Item key="FoR">
      Arma virumque cano, Troiae qui primus ab oris.
    </Item>
    <Item key="MaR">
      Senatus Populusque Romanus.
    </Item>
    <Item key="Emp">
      Alea jacta est.
    </Item>
  </TabPanels>
</Tabs>
</Variant>
<Variant name="Icons in tabs12">
<Tabs aria-label="History of Ancient Rome">
  <TabList>
    <Item key="FoR">
      <Bookmark/>
      <Text>
        Founding of
        Rome
      </Text>
    </Item>
    <Item key="MaR">
      <Calendar/>
      <Text>
        Monarchy and
        Republic
      </Text>
    </Item>
    <Item key="Emp">
      <Dashboard/>
      <Text>
        Empire
      </Text>
    </Item>
  </TabList>
  <TabPanels>
    <Item key="FoR">
      Arma virumque
      cano, Troiae qui
      primus ab oris.
    </Item>
    <Item key="MaR">
      Senatus
      Populusque
      Romanus.
    </Item>
    <Item key="Emp">
      Alea jacta est.
    </Item>
  </TabPanels>
</Tabs>
</Variant>
<Variant name="Customizing layout">
<Tabs aria-label="Tab example" items={tabs}>
      <Flex>
        <TabList flex="1 1 auto" minWidth="0px">
          {(item) => (
              <Item key={item.name}>
              {item.name}
            </Item>
          )}
        </TabList>
        <div
            style={{
                display: 'flex',
                flex: '0 0 auto',
                borderBottom:
                    'var(--spectrum-alias-border-size-thick) solid var(--spectrum-global-color-gray-300)'
            }}
        >
          <ActionGroup
              disabledKeys={tabs.length === 1 ? ['remove'] : undefined}
              onAction={(val) => val === 'add' ? addTab() : removeTab()}
          >
            <Item key="add">
              Add Tab
            </Item>
            <Item key="remove">
              Remove Tab
            </Item>
          </ActionGroup>
        </div>
      </Flex>
      <TabPanels>
        {(item) => (
            <Item key={item.name}>
            {item.children}
          </Item>
        )}
      </TabPanels>
    </Tabs>
</Variant>
<Variant name="Customizing layout1">
<Tabs aria-label="Tab example" items={tabs}>
      <Flex>
        <TabList flex="1 1 auto" minWidth="0px">
          {(item) => (
              <Item key={item.name}>
              {item.name}
            </Item>
          )}
        </TabList>
        <div
            style={{
                display: 'flex',
                flex: '0 0 auto',
                borderBottom:
                    'var(--spectrum-alias-border-size-thick) solid var(--spectrum-global-color-gray-300)'
            }}
        >
          <ActionGroup
              disabledKeys={tabs.length === 1
                  ? ['remove']
                  : undefined}
              onAction={(val) =>
                  val === 'add' ? addTab() : removeTab()}
          >
            <Item key="add">
              Add Tab
            </Item>
            <Item key="remove">
              Remove Tab
            </Item>
          </ActionGroup>
        </div>
      </Flex>
      <TabPanels>
        {(item) => (
            <Item key={item.name}>
            {item.children}
          </Item>
        )}
      </TabPanels>
    </Tabs>
</Variant>
<Variant name="Customizing layout12">
<Tabs
    aria-label="Tab example"
    items={tabs}
>
      <Flex>
        <TabList
            flex="1 1 auto"
            minWidth="0px"
        >
          {(
              item
          ) => (
              <Item
                  key={item
                      .name}
              >
              {item.name}
            </Item>
          )}
        </TabList>
        <div
            style={{
                display:
                    'flex',
                flex:
                    '0 0 auto',
                borderBottom:
                    'var(--spectrum-alias-border-size-thick) solid var(--spectrum-global-color-gray-300)'
            }}
        >
          <ActionGroup
              disabledKeys={tabs
                  .length ===
              1
                  ? [
                      'remove'
                  ]
                  : undefined}
              onAction={(val) =>
                  val ===
                  'add'
                      ? addTab()
                      : removeTab()}
          >
            <Item key="add">
              Add Tab
            </Item>
            <Item key="remove">
              Remove Tab
            </Item>
          </ActionGroup>
        </div>
      </Flex>
      <TabPanels>
        {(item) => (
            <Item
                key={item
                    .name}
            >
            {item
                .children}
          </Item>
        )}
      </TabPanels>
    </Tabs>
</Variant>
<Variant name="Selection">
<Flex gap="size-150" wrap>
    <span id="label-2">Settings (uncontrolled)</span>
    <Tabs
        aria-labelledby="label-2"
        items={tabs}
        defaultSelectedKey={2}
        marginBottom="size-400"
    >
        <TabList>
          {(item) => (
              <Item>
              {item.name}
            </Item>
          )}
        </TabList>
        <TabPanels>
          {(item) => (
              <Item>
              {item.children}
            </Item>
          )}
        </TabPanels>
      </Tabs>
<span id="label-3">Settings (controlled)</span>
<Tabs
    aria-labelledby="label-3"
    items={tabs}
    selectedKey={tab}
    onSelectionChange={setTab}
>
        <TabList>
          {(item) => (
              <Item>
              {item.name}
            </Item>
          )}
        </TabList>
        <TabPanels>
          {(item) => (
              <Item>
              {item.children}
            </Item>
          )}
        </TabPanels>
      </Tabs>
</Flex>
</Variant>
<Variant name="Selection1">
<Flex gap="size-150" wrap>
    <span id="label-2">Settings (uncontrolled)</span>
    <Tabs
        aria-labelledby="label-2"
        items={tabs}
        defaultSelectedKey={2}
        marginBottom="size-400"
    >
        <TabList>
          {(item) => (
              <Item>
              {item.name}
            </Item>
          )}
        </TabList>
        <TabPanels>
          {(item) => (
              <Item>
              {item.children}
            </Item>
          )}
        </TabPanels>
      </Tabs>
<span id="label-3">Settings (controlled)</span>
<Tabs
    aria-labelledby="label-3"
    items={tabs}
    selectedKey={tab}
    onSelectionChange={setTab}
>
        <TabList>
          {(item) => (
              <Item>
              {item.name}
            </Item>
          )}
        </TabList>
        <TabPanels>
          {(item) => (
              <Item>
              {item.children}
            </Item>
          )}
        </TabPanels>
      </Tabs>
</Flex>
</Variant>
<Variant name="Selection12">
<Flex
    gap="size-150"
    wrap
>
    <span id="label-2">
    Settings
    (uncontrolled)
    </span>
    <Tabs
        aria-labelledby="label-2"
        items={tabs}
        defaultSelectedKey={2}
        marginBottom="size-400"
    >
        <TabList>
          {(
              item
          ) => (
              <Item>
              {item.name}
            </Item>
          )}
        </TabList>
        <TabPanels>
          {(
              item
          ) => (
              <Item>
              {item
                  .children}
            </Item>
          )}
        </TabPanels>
      </Tabs>
<span id="label-3">
        Settings
        (controlled)
      </span>
<Tabs
    aria-labelledby="label-3"
    items={tabs}
    selectedKey={tab}
    onSelectionChange={setTab}
>
        <TabList>
          {(
              item
          ) => (
              <Item>
              {item.name}
            </Item>
          )}
        </TabList>
        <TabPanels>
          {(
              item
          ) => (
              <Item>
              {item
                  .children}
            </Item>
          )}
        </TabPanels>
      </Tabs>
</Flex>
</Variant>
<Variant name="Events">
<>
    <p>Selected time period: {timePeriod}</p>
<Tabs
    aria-label="Mesozoic time periods"
    items={tabs}
    selectedKey={timePeriod}
    onSelectionChange={setTimePeriod}
>
        <TabList>
          {(item) => (
              <Item key={item.name}>
              {item.name}
            </Item>
          )}
        </TabList>
        <TabPanels>
          {(item) => (
              <Item key={item.name}>
              {item.children}
            </Item>
          )}
        </TabPanels>
      </Tabs>
</>
</Variant>
<Variant name="Events1">
<>
    <p>Selected time period: {timePeriod}</p>
<Tabs
    aria-label="Mesozoic time periods"
    items={tabs}
    selectedKey={timePeriod}
    onSelectionChange={setTimePeriod}
>
        <TabList>
          {(item) => (
              <Item key={item.name}>
              {item.name}
            </Item>
          )}
        </TabList>
        <TabPanels>
          {(item) => (
              <Item key={item.name}>
              {item.children}
            </Item>
          )}
        </TabPanels>
      </Tabs>
</>
</Variant>
<Variant name="Events12">
<>
    <p>
    Selected time
    period:{' '}
        {timePeriod}
      </p>
<Tabs
    aria-label="Mesozoic time periods"
    items={tabs}
    selectedKey={timePeriod}
    onSelectionChange={setTimePeriod}
>
        <TabList>
          {(
              item
          ) => (
              <Item
                  key={item
                      .name}
              >
              {item.name}
            </Item>
          )}
        </TabList>
        <TabPanels>
          {(
              item
          ) => (
              <Item
                  key={item
                      .name}
              >
              {item
                  .children}
            </Item>
          )}
        </TabPanels>
      </Tabs>
</>
</Variant>
<Variant name="Keyboard Activation">
<Tabs
    aria-label="Mesozoic time periods"
    items={tabs}
    keyboardActivation="manual"
>
      <TabList>
        {(item) => (
            <Item key={item.name}>
            {item.name}
          </Item>
        )}
      </TabList>
      <TabPanels>
        {(item) => (
            <Item key={item.name}>
            {item.children}
          </Item>
        )}
      </TabPanels>
    </Tabs>
</Variant>
<Variant name="Keyboard Activation1">
<Tabs
    aria-label="Mesozoic time periods"
    items={tabs}
    keyboardActivation="manual"
>
      <TabList>
        {(item) => (
            <Item key={item.name}>
            {item.name}
          </Item>
        )}
      </TabList>
      <TabPanels>
        {(item) => (
            <Item key={item.name}>
            {item.children}
          </Item>
        )}
      </TabPanels>
    </Tabs>
</Variant>
<Variant name="Keyboard Activation12">
<Tabs
    aria-label="Mesozoic time periods"
    items={tabs}
    keyboardActivation="manual"
>
      <TabList>
        {(item) => (
            <Item
                key={item
                    .name}
            >
            {item.name}
          </Item>
        )}
      </TabList>
      <TabPanels>
        {(item) => (
            <Item
                key={item
                    .name}
            >
            {item
                .children}
          </Item>
        )}
      </TabPanels>
    </Tabs>
</Variant>
<Variant name="Links">
<Tabs selectedKey={pathname}>
      <TabList aria-label="Tabs">
        <Item key="/" href="/">Home</Item>
        <Item key="/shared" href="/shared">Shared</Item>
        <Item key="/deleted" href="/deleted">Deleted</Item>
      </TabList>
      <TabPanels>
        <Item key="/">
          <Outlet/>
        </Item>
        <Item key="/shared">
          <Outlet/>
        </Item>
        <Item key="/deleted">
          <Outlet/>
        </Item>
      </TabPanels>
    </Tabs>
</Variant>
<Variant name="Links1">
<Tabs selectedKey={pathname}>
      <TabList aria-label="Tabs">
        <Item key="/" href="/">Home</Item>
        <Item key="/shared" href="/shared">Shared</Item>
        <Item key="/deleted" href="/deleted">Deleted</Item>
      </TabList>
      <TabPanels>
        <Item key="/">
          <Outlet/>
        </Item>
        <Item key="/shared">
          <Outlet/>
        </Item>
        <Item key="/deleted">
          <Outlet/>
        </Item>
      </TabPanels>
    </Tabs>
</Variant>
<Variant name="Links12">
<Tabs
    selectedKey={pathname}
>
      <TabList aria-label="Tabs">
        <Item
            key="/"
            href="/"
        >
          Home
        </Item>
        <Item
            key="/shared"
            href="/shared"
        >
          Shared
        </Item>
        <Item
            key="/deleted"
            href="/deleted"
        >
          Deleted
        </Item>
      </TabList>
      <TabPanels>
        <Item key="/">
          <Outlet/>
        </Item>
        <Item key="/shared">
          <Outlet/>
        </Item>
        <Item key="/deleted">
          <Outlet/>
        </Item>
      </TabPanels>
    </Tabs>
</Variant>
<Variant name="Density">
<Tabs aria-label="Chat log density example" density="compact">
  <TabList>
    <Item key="item1">
      John Doe
    </Item>
    <Item key="item2">
      Jane Doe
    </Item>
    <Item key="item3">
      Joe Bloggs
    </Item>
  </TabList>
  <TabPanels>
    <Item key="item1">
      There is no prior chat history with John Doe.
    </Item>
    <Item key="item2">
      There is no prior chat history with Jane Doe.
    </Item>
    <Item key="item3">
      There is no prior chat history with Joe Bloggs.
    </Item>
  </TabPanels>
</Tabs>
</Variant>
<Variant name="Density1">
<Tabs
    aria-label="Chat log density example"
    density="compact"
>
  <TabList>
    <Item key="item1">
      John Doe
    </Item>
    <Item key="item2">
      Jane Doe
    </Item>
    <Item key="item3">
      Joe Bloggs
    </Item>
  </TabList>
  <TabPanels>
    <Item key="item1">
      There is no prior chat history with John Doe.
    </Item>
    <Item key="item2">
      There is no prior chat history with Jane Doe.
    </Item>
    <Item key="item3">
      There is no prior chat history with Joe Bloggs.
    </Item>
  </TabPanels>
</Tabs>
</Variant>
<Variant name="Density12">
<Tabs
    aria-label="Chat log density example"
    density="compact"
>
  <TabList>
    <Item key="item1">
      John Doe
    </Item>
    <Item key="item2">
      Jane Doe
    </Item>
    <Item key="item3">
      Joe Bloggs
    </Item>
  </TabList>
  <TabPanels>
    <Item key="item1">
      There is no prior
      chat history with
      John Doe.
    </Item>
    <Item key="item2">
      There is no prior
      chat history with
      Jane Doe.
    </Item>
    <Item key="item3">
      There is no prior
      chat history with
      Joe Bloggs.
    </Item>
  </TabPanels>
</Tabs>
</Variant>
<Variant name="Quiet">
<Tabs aria-label="Chat log quiet example" isQuiet>
  <TabList>
    <Item key="item1">
      John Doe
    </Item>
    <Item key="item2">
      Jane Doe
    </Item>
    <Item key="item3">
      Joe Bloggs
    </Item>
  </TabList>
  <TabPanels>
    <Item key="item1">
      There is no prior chat history with John Doe.
    </Item>
    <Item key="item2">
      There is no prior chat history with Jane Doe.
    </Item>
    <Item key="item3">
      There is no prior chat history with Joe Bloggs.
    </Item>
  </TabPanels>
</Tabs>
</Variant>
<Variant name="Quiet1">
<Tabs aria-label="Chat log quiet example" isQuiet>
  <TabList>
    <Item key="item1">
      John Doe
    </Item>
    <Item key="item2">
      Jane Doe
    </Item>
    <Item key="item3">
      Joe Bloggs
    </Item>
  </TabList>
  <TabPanels>
    <Item key="item1">
      There is no prior chat history with John Doe.
    </Item>
    <Item key="item2">
      There is no prior chat history with Jane Doe.
    </Item>
    <Item key="item3">
      There is no prior chat history with Joe Bloggs.
    </Item>
  </TabPanels>
</Tabs>
</Variant>
<Variant name="Quiet12">
<Tabs
    aria-label="Chat log quiet example"
    isQuiet
>
  <TabList>
    <Item key="item1">
      John Doe
    </Item>
    <Item key="item2">
      Jane Doe
    </Item>
    <Item key="item3">
      Joe Bloggs
    </Item>
  </TabList>
  <TabPanels>
    <Item key="item1">
      There is no prior
      chat history with
      John Doe.
    </Item>
    <Item key="item2">
      There is no prior
      chat history with
      Jane Doe.
    </Item>
    <Item key="item3">
      There is no prior
      chat history with
      Joe Bloggs.
    </Item>
  </TabPanels>
</Tabs>
</Variant>
<Variant name="Disabled">
<Flex direction="column" rowGap="size-150">
  <Tabs
      aria-label="Chat log single tab disabled example"
      disabledKeys={['item2']}
  >
    <TabList>
      <Item key="item1">
        John Doe
      </Item>
      <Item key="item2">
        Jane Doe
      </Item>
      <Item key="item3">
        Joe Bloggs
      </Item>
    </TabList>
    <TabPanels>
      <Item key="item1">
        There is no prior chat history with John Doe.
      </Item>
      <Item key="item2">
        There is no prior chat history with Jane Doe.
      </Item>
      <Item key="item3">
        There is no prior chat history with Joe Bloggs.
      </Item>
    </TabPanels>
  </Tabs>
  <Tabs aria-label="Chat log all tabs disabled example" isDisabled>
    <TabList>
      <Item key="item1">
        John Doe
      </Item>
      <Item key="item2">
        Jane Doe
      </Item>
      <Item key="item3">
        Joe Bloggs
      </Item>
    </TabList>
    <TabPanels>
      <Item key="item1">
        There is no prior chat history with John Doe.
      </Item>
      <Item key="item2">
        There is no prior chat history with Jane Doe.
      </Item>
      <Item key="item3">
        There is no prior chat history with Joe Bloggs.
      </Item>
    </TabPanels>
  </Tabs>
</Flex>
</Variant>
<Variant name="Disabled1">
<Flex direction="column" rowGap="size-150">
  <Tabs
      aria-label="Chat log single tab disabled example"
      disabledKeys={['item2']}
  >
    <TabList>
      <Item key="item1">
        John Doe
      </Item>
      <Item key="item2">
        Jane Doe
      </Item>
      <Item key="item3">
        Joe Bloggs
      </Item>
    </TabList>
    <TabPanels>
      <Item key="item1">
        There is no prior chat history with John Doe.
      </Item>
      <Item key="item2">
        There is no prior chat history with Jane Doe.
      </Item>
      <Item key="item3">
        There is no prior chat history with Joe Bloggs.
      </Item>
    </TabPanels>
  </Tabs>
  <Tabs
      aria-label="Chat log all tabs disabled example"
      isDisabled
  >
    <TabList>
      <Item key="item1">
        John Doe
      </Item>
      <Item key="item2">
        Jane Doe
      </Item>
      <Item key="item3">
        Joe Bloggs
      </Item>
    </TabList>
    <TabPanels>
      <Item key="item1">
        There is no prior chat history with John Doe.
      </Item>
      <Item key="item2">
        There is no prior chat history with Jane Doe.
      </Item>
      <Item key="item3">
        There is no prior chat history with Joe Bloggs.
      </Item>
    </TabPanels>
  </Tabs>
</Flex>
</Variant>
<Variant name="Disabled12">
<Flex
    direction="column"
    rowGap="size-150"
>
  <Tabs
      aria-label="Chat log single tab disabled example"
      disabledKeys={[
          'item2'
      ]}
  >
    <TabList>
      <Item key="item1">
        John Doe
      </Item>
      <Item key="item2">
        Jane Doe
      </Item>
      <Item key="item3">
        Joe Bloggs
      </Item>
    </TabList>
    <TabPanels>
      <Item key="item1">
        There is no
        prior chat
        history with
        John Doe.
      </Item>
      <Item key="item2">
        There is no
        prior chat
        history with
        Jane Doe.
      </Item>
      <Item key="item3">
        There is no
        prior chat
        history with
        Joe Bloggs.
      </Item>
    </TabPanels>
  </Tabs>
  <Tabs
      aria-label="Chat log all tabs disabled example"
      isDisabled
  >
    <TabList>
      <Item key="item1">
        John Doe
      </Item>
      <Item key="item2">
        Jane Doe
      </Item>
      <Item key="item3">
        Joe Bloggs
      </Item>
    </TabList>
    <TabPanels>
      <Item key="item1">
        There is no
        prior chat
        history with
        John Doe.
      </Item>
      <Item key="item2">
        There is no
        prior chat
        history with
        Jane Doe.
      </Item>
      <Item key="item3">
        There is no
        prior chat
        history with
        Joe Bloggs.
      </Item>
    </TabPanels>
  </Tabs>
</Flex>
</Variant>
<Variant name="Orientation">
<Tabs aria-label="Chat log orientation example" orientation="vertical">
  <TabList>
    <Item key="item1">
      John Doe
    </Item>
    <Item key="item2">
      Jane Doe
    </Item>
    <Item key="item3">
      Joe Bloggs
    </Item>
  </TabList>
  <TabPanels>
    <Item key="item1">
      There is no prior chat history with John Doe.
    </Item>
    <Item key="item2">
      There is no prior chat history with Jane Doe.
    </Item>
    <Item key="item3">
      There is no prior chat history with Joe Bloggs.
    </Item>
  </TabPanels>
</Tabs>
</Variant>
<Variant name="Orientation1">
<Tabs
    aria-label="Chat log orientation example"
    orientation="vertical"
>
  <TabList>
    <Item key="item1">
      John Doe
    </Item>
    <Item key="item2">
      Jane Doe
    </Item>
    <Item key="item3">
      Joe Bloggs
    </Item>
  </TabList>
  <TabPanels>
    <Item key="item1">
      There is no prior chat history with John Doe.
    </Item>
    <Item key="item2">
      There is no prior chat history with Jane Doe.
    </Item>
    <Item key="item3">
      There is no prior chat history with Joe Bloggs.
    </Item>
  </TabPanels>
</Tabs>
</Variant>
<Variant name="Orientation12">
<Tabs
    aria-label="Chat log orientation example"
    orientation="vertical"
>
  <TabList>
    <Item key="item1">
      John Doe
    </Item>
    <Item key="item2">
      Jane Doe
    </Item>
    <Item key="item3">
      Joe Bloggs
    </Item>
  </TabList>
  <TabPanels>
    <Item key="item1">
      There is no prior
      chat history with
      John Doe.
    </Item>
    <Item key="item2">
      There is no prior
      chat history with
      Jane Doe.
    </Item>
    <Item key="item3">
      There is no prior
      chat history with
      Joe Bloggs.
    </Item>
  </TabPanels>
</Tabs>
</Variant>
<Variant name="Collapse (overflow behavior)">
<>
    <div
        style={{
            width: collapse ? '150px' : '300px',
            marginBottom: '50px',
            height: '150px',
            maxWidth: '100%'
        }}
    >
        <Tabs aria-label="Chat log collapse example">
          <TabList>
            <Item key="item1">
              John Doe
            </Item>
            <Item key="item2">
              Jane Doe
            </Item>
            <Item key="item3">
              Joe Bloggs
            </Item>
          </TabList>
          <TabPanels>
            <Item key="item1">
              There is no prior chat history with John Doe.
            </Item>
            <Item key="item2">
              There is no prior chat history with Jane Doe.
            </Item>
            <Item key="item3">
              There is no prior chat history with Joe Bloggs.
            </Item>
          </TabPanels>
        </Tabs>
      </div>
<Button
    variant="primary"
    onPress={() => setCollapse((collapse) => !collapse)}
>
        Toggle tab container size.
      </Button>
</>
</Variant>
<Variant name="Collapse (overflow behavior)1">
<>
    <div
        style={{
            width: collapse ? '150px' : '300px',
            marginBottom: '50px',
            height: '150px',
            maxWidth: '100%'
        }}
    >
        <Tabs aria-label="Chat log collapse example">
          <TabList>
            <Item key="item1">
              John Doe
            </Item>
            <Item key="item2">
              Jane Doe
            </Item>
            <Item key="item3">
              Joe Bloggs
            </Item>
          </TabList>
          <TabPanels>
            <Item key="item1">
              There is no prior chat history with John Doe.
            </Item>
            <Item key="item2">
              There is no prior chat history with Jane Doe.
            </Item>
            <Item key="item3">
              There is no prior chat history with Joe
              Bloggs.
            </Item>
          </TabPanels>
        </Tabs>
      </div>
<Button
    variant="primary"
    onPress={() => setCollapse((collapse) => !collapse)}
>
        Toggle tab container size.
      </Button>
</>
</Variant>
<Variant name="Collapse (overflow behavior)12">
<>
    <div
        style={{
            width: collapse
                ? '150px'
                : '300px',
            marginBottom:
                '50px',
            height:
                '150px',
            maxWidth:
                '100%'
        }}
    >
        <Tabs aria-label="Chat log collapse example">
          <TabList>
            <Item key="item1">
              John Doe
            </Item>
            <Item key="item2">
              Jane Doe
            </Item>
            <Item key="item3">
              Joe Bloggs
            </Item>
          </TabList>
          <TabPanels>
            <Item key="item1">
              There is no
              prior chat
              history
              with John
              Doe.
            </Item>
            <Item key="item2">
              There is no
              prior chat
              history
              with Jane
              Doe.
            </Item>
            <Item key="item3">
              There is no
              prior chat
              history
              with Joe
              Bloggs.
            </Item>
          </TabPanels>
        </Tabs>
      </div>
<Button
    variant="primary"
    onPress={() =>
        setCollapse((
                collapse
            ) =>
                !collapse
        )}
>
        Toggle tab
        container size.
      </Button>
</>
</Variant>
<Variant name="Emphasized">
<Tabs aria-label="Chat log emphasized example" isEmphasized>
  <TabList>
    <Item key="item1">
      John Doe
    </Item>
    <Item key="item2">
      Jane Doe
    </Item>
    <Item key="item3">
      Joe Bloggs
    </Item>
  </TabList>
  <TabPanels>
    <Item key="item1">
      There is no prior chat history with John Doe.
    </Item>
    <Item key="item2">
      There is no prior chat history with Jane Doe.
    </Item>
    <Item key="item3">
      There is no prior chat history with Joe Bloggs.
    </Item>
  </TabPanels>
</Tabs>
</Variant>
<Variant name="Emphasized1">
<Tabs aria-label="Chat log emphasized example" isEmphasized>
  <TabList>
    <Item key="item1">
      John Doe
    </Item>
    <Item key="item2">
      Jane Doe
    </Item>
    <Item key="item3">
      Joe Bloggs
    </Item>
  </TabList>
  <TabPanels>
    <Item key="item1">
      There is no prior chat history with John Doe.
    </Item>
    <Item key="item2">
      There is no prior chat history with Jane Doe.
    </Item>
    <Item key="item3">
      There is no prior chat history with Joe Bloggs.
    </Item>
  </TabPanels>
</Tabs>
</Variant>
<Variant name="Emphasized12">
<Tabs
    aria-label="Chat log emphasized example"
    isEmphasized
>
  <TabList>
    <Item key="item1">
      John Doe
    </Item>
    <Item key="item2">
      Jane Doe
    </Item>
    <Item key="item3">
      Joe Bloggs
    </Item>
  </TabList>
  <TabPanels>
    <Item key="item1">
      There is no prior
      chat history with
      John Doe.
    </Item>
    <Item key="item2">
      There is no prior
      chat history with
      Jane Doe.
    </Item>
    <Item key="item3">
      There is no prior
      chat history with
      Joe Bloggs.
    </Item>
  </TabPanels>
</Tabs>
</Variant>
</Component>
</Category>
<Category name="Overlays">
<Component name="AlertDialog" docURL="https://react-spectrum.adobe.com/react-spectrum/AlertDialog.html">
<Variant name="Example">
<DialogTrigger>
  <ActionButton>Save</ActionButton>
  <AlertDialog
      title="Low Disk Space"
      variant="warning"
      primaryActionLabel="Confirm">
    You are running low on disk space.
    Delete unnecessary files to free up space.
  </AlertDialog>
</DialogTrigger>
</Variant>
<Variant name="Example1">
<DialogTrigger>
  <ActionButton>Save</ActionButton>
  <AlertDialog
      title="Low Disk Space"
      variant="warning"
      primaryActionLabel="Confirm">
    You are running low on disk space.
    Delete unnecessary files to free up space.
  </AlertDialog>
</DialogTrigger>
</Variant>
<Variant name="Example12">
<DialogTrigger>
  <ActionButton>
    Save
  </ActionButton>
  <AlertDialog
      title="Low Disk Space"
      variant="warning"
      primaryActionLabel="Confirm"
  >
    You are running low
    on disk space.
    Delete unnecessary
    files to free up
    space.
  </AlertDialog>
</DialogTrigger>
</Variant>
<Variant name="Content">
<DialogTrigger>
  <ActionButton>Exit</ActionButton>
  <AlertDialog
      variant="information"
      title="Register profile"
      primaryActionLabel="Register"
      secondaryActionLabel="Remind me later"
      cancelLabel="Cancel">
    You have not saved your profile information
    for this account. Would you like to register now?
  </AlertDialog>
</DialogTrigger>
</Variant>
<Variant name="Content1">
<DialogTrigger>
  <ActionButton>Exit</ActionButton>
  <AlertDialog
      variant="information"
      title="Register profile"
      primaryActionLabel="Register"
      secondaryActionLabel="Remind me later"
      cancelLabel="Cancel">
    You have not saved your profile information
    for this account. Would you like to register now?
  </AlertDialog>
</DialogTrigger>
</Variant>
<Variant name="Content12">
<DialogTrigger>
  <ActionButton>
    Exit
  </ActionButton>
  <AlertDialog
      variant="information"
      title="Register profile"
      primaryActionLabel="Register"
      secondaryActionLabel="Remind me later"
      cancelLabel="Cancel"
  >
    You have not saved
    your profile
    information for
    this account. Would
    you like to
    register now?
  </AlertDialog>
</DialogTrigger>
</Variant>
<Variant name="Accessibility">
<DialogTrigger>
  <ActionButton>Save</ActionButton>
  <AlertDialog
      variant="confirmation"
      title="Save file"
      primaryActionLabel="Save"
      cancelLabel="Cancel"
      autoFocusButton="primary">
    A file with the same name already exists. Overwrite?
  </AlertDialog>
</DialogTrigger>
</Variant>
<Variant name="Accessibility1">
<DialogTrigger>
  <ActionButton>Save</ActionButton>
  <AlertDialog
      variant="confirmation"
      title="Save file"
      primaryActionLabel="Save"
      cancelLabel="Cancel"
      autoFocusButton="primary">
    A file with the same name already exists. Overwrite?
  </AlertDialog>
</DialogTrigger>
</Variant>
<Variant name="Accessibility12">
<DialogTrigger>
  <ActionButton>
    Save
  </ActionButton>
  <AlertDialog
      variant="confirmation"
      title="Save file"
      primaryActionLabel="Save"
      cancelLabel="Cancel"
      autoFocusButton="primary"
  >
    A file with the
    same name already
    exists. Overwrite?
  </AlertDialog>
</DialogTrigger>
</Variant>
<Variant name="Events">
<DialogTrigger>
        <ActionButton>
        Publish
        </ActionButton>
        <AlertDialog
            variant="confirmation"
            title="Confirm Publish"
            primaryActionLabel="Publish"
            secondaryActionLabel="Save as draft"
            cancelLabel="Cancel"
            onCancel={alertCancel}
            onPrimaryAction={onPrimaryAction}
            onSecondaryAction={onSecondaryAction}>
        Are you sure you want to publish this document?
      </AlertDialog>
    </DialogTrigger>
</Variant>
<Variant name="Events1">
<DialogTrigger>
    <ActionButton>
    Publish
    </ActionButton>
    <AlertDialog
        variant="confirmation"
        title="Confirm Publish"
        primaryActionLabel="Publish"
        secondaryActionLabel="Save as draft"
        cancelLabel="Cancel"
        onCancel={alertCancel}
        onPrimaryAction={onPrimaryAction}
        onSecondaryAction={onSecondaryAction}
    >
        Are you sure you want to publish this document?
      </AlertDialog>
</DialogTrigger>
</Variant>
<Variant name="Events12">
<DialogTrigger>
    <ActionButton>
    Publish
    </ActionButton>
    <AlertDialog
        variant="confirmation"
        title="Confirm Publish"
        primaryActionLabel="Publish"
        secondaryActionLabel="Save as draft"
        cancelLabel="Cancel"
        onCancel={alertCancel}
        onPrimaryAction={onPrimaryAction}
        onSecondaryAction={onSecondaryAction}
    >
        Are you sure you
        want to publish
        this document?
      </AlertDialog>
</DialogTrigger>
</Variant>
<Variant name="Variant">
<DialogTrigger>
  <ActionButton>Exit</ActionButton>
  <AlertDialog
      variant="confirmation"
      title="Exit instance?"
      primaryActionLabel="Confirm"
      cancelLabel="Cancel">
    Exit dungeon instance and return to main hub?
  </AlertDialog>
</DialogTrigger>
</Variant>
<Variant name="Variant1">
<DialogTrigger>
  <ActionButton>Exit</ActionButton>
  <AlertDialog
      variant="confirmation"
      title="Exit instance?"
      primaryActionLabel="Confirm"
      cancelLabel="Cancel">
    Exit dungeon instance and return to main hub?
  </AlertDialog>
</DialogTrigger>
</Variant>
<Variant name="Variant12">
<DialogTrigger>
  <ActionButton>
    Exit
  </ActionButton>
  <AlertDialog
      variant="confirmation"
      title="Exit instance?"
      primaryActionLabel="Confirm"
      cancelLabel="Cancel"
  >
    Exit dungeon
    instance and return
    to main hub?
  </AlertDialog>
</DialogTrigger>
</Variant>
<Variant name="Variant123">
<DialogTrigger>
  <ActionButton>New file</ActionButton>
  <AlertDialog
      variant="information"
      title="Connect your account"
      primaryActionLabel="Continue"
      cancelLabel="Cancel">
    Please connect an existing account to sync any new files.
  </AlertDialog>
</DialogTrigger>
</Variant>
<Variant name="Variant1234">
<DialogTrigger>
  <ActionButton>New file</ActionButton>
  <AlertDialog
      variant="information"
      title="Connect your account"
      primaryActionLabel="Continue"
      cancelLabel="Cancel"
  >
    Please connect an existing account to sync any new
    files.
  </AlertDialog>
</DialogTrigger>
</Variant>
<Variant name="Variant12345">
<DialogTrigger>
  <ActionButton>
    New file
  </ActionButton>
  <AlertDialog
      variant="information"
      title="Connect your account"
      primaryActionLabel="Continue"
      cancelLabel="Cancel"
  >
    Please connect an
    existing account to
    sync any new files.
  </AlertDialog>
</DialogTrigger>
</Variant>
<Variant name="Variant123456">
<DialogTrigger>
  <ActionButton>Delete</ActionButton>
  <AlertDialog
      variant="destructive"
      title="Delete file"
      primaryActionLabel="Delete"
      cancelLabel="Cancel">
    This will permanently delete the selected file. Continue?
  </AlertDialog>
</DialogTrigger>
</Variant>
<Variant name="Variant1234567">
<DialogTrigger>
  <ActionButton>Delete</ActionButton>
  <AlertDialog
      variant="destructive"
      title="Delete file"
      primaryActionLabel="Delete"
      cancelLabel="Cancel"
  >
    This will permanently delete the selected file.
    Continue?
  </AlertDialog>
</DialogTrigger>
</Variant>
<Variant name="Variant12345678">
<DialogTrigger>
  <ActionButton>
    Delete
  </ActionButton>
  <AlertDialog
      variant="destructive"
      title="Delete file"
      primaryActionLabel="Delete"
      cancelLabel="Cancel"
  >
    This will
    permanently delete
    the selected file.
    Continue?
  </AlertDialog>
</DialogTrigger>
</Variant>
<Variant name="Variant123456789">
<DialogTrigger>
  <ActionButton>Login</ActionButton>
  <AlertDialog
      variant="error"
      title="Unable to connect"
      primaryActionLabel="Retry"
      cancelLabel="Cancel">
    Something went wrong while connecting to the server.
    Please try again in a couple minutes.
  </AlertDialog>
</DialogTrigger>
</Variant>
<Variant name="Variant12345678910">
<DialogTrigger>
  <ActionButton>Login</ActionButton>
  <AlertDialog
      variant="error"
      title="Unable to connect"
      primaryActionLabel="Retry"
      cancelLabel="Cancel">
    Something went wrong while connecting to the server.
    Please try again in a couple minutes.
  </AlertDialog>
</DialogTrigger>
</Variant>
<Variant name="Variant1234567891011">
<DialogTrigger>
  <ActionButton>
    Login
  </ActionButton>
  <AlertDialog
      variant="error"
      title="Unable to connect"
      primaryActionLabel="Retry"
      cancelLabel="Cancel"
  >
    Something went
    wrong while
    connecting to the
    server. Please try
    again in a couple
    minutes.
  </AlertDialog>
</DialogTrigger>
</Variant>
<Variant name="Variant123456789101112">
<DialogTrigger>
  <ActionButton>Enter</ActionButton>
  <AlertDialog
      variant="warning"
      title="Raid instance"
      primaryActionLabel="Confirm"
      cancelLabel="Cancel">
    The following encounter meant for parties of 4 or more. Enter anyways?
  </AlertDialog>
</DialogTrigger>
</Variant>
<Variant name="Variant12345678910111213">
<DialogTrigger>
  <ActionButton>Enter</ActionButton>
  <AlertDialog
      variant="warning"
      title="Raid instance"
      primaryActionLabel="Confirm"
      cancelLabel="Cancel"
  >
    The following encounter meant for parties of 4 or
    more. Enter anyways?
  </AlertDialog>
</DialogTrigger>
</Variant>
<Variant name="Variant1234567891011121314">
<DialogTrigger>
  <ActionButton>
    Enter
  </ActionButton>
  <AlertDialog
      variant="warning"
      title="Raid instance"
      primaryActionLabel="Confirm"
      cancelLabel="Cancel"
  >
    The following
    encounter meant for
    parties of 4 or
    more. Enter
    anyways?
  </AlertDialog>
</DialogTrigger>
</Variant>
<Variant name="Primary action disabled">
<DialogTrigger>
  <ActionButton>Upgrade</ActionButton>
  <AlertDialog
      isPrimaryActionDisabled
      variant="confirmation"
      title="Upgrade subscription"
      primaryActionLabel="Upgrade"
      cancelLabel="Cancel">
    Upgrade subscription for an additional $14.99 a month?
  </AlertDialog>
</DialogTrigger>
</Variant>
<Variant name="Primary action disabled1">
<DialogTrigger>
  <ActionButton>Upgrade</ActionButton>
  <AlertDialog
      isPrimaryActionDisabled
      variant="confirmation"
      title="Upgrade subscription"
      primaryActionLabel="Upgrade"
      cancelLabel="Cancel">
    Upgrade subscription for an additional $14.99 a month?
  </AlertDialog>
</DialogTrigger>
</Variant>
<Variant name="Primary action disabled12">
<DialogTrigger>
  <ActionButton>
    Upgrade
  </ActionButton>
  <AlertDialog
      isPrimaryActionDisabled
      variant="confirmation"
      title="Upgrade subscription"
      primaryActionLabel="Upgrade"
      cancelLabel="Cancel"
  >
    Upgrade
    subscription for an
    additional $14.99 a
    month?
  </AlertDialog>
</DialogTrigger>
</Variant>
<Variant name="Secondary action disabled">
<DialogTrigger>
  <ActionButton>Upgrade</ActionButton>
  <AlertDialog
      isSecondaryActionDisabled
      variant="confirmation"
      title="Upgrade subscription"
      primaryActionLabel="Upgrade"
      secondaryActionLabel="Apply Coupon"
      cancelLabel="Cancel">
    Upgrade subscription for an additional $14.99 a month?
  </AlertDialog>
</DialogTrigger>
</Variant>
<Variant name="Secondary action disabled1">
<DialogTrigger>
  <ActionButton>Upgrade</ActionButton>
  <AlertDialog
      isSecondaryActionDisabled
      variant="confirmation"
      title="Upgrade subscription"
      primaryActionLabel="Upgrade"
      secondaryActionLabel="Apply Coupon"
      cancelLabel="Cancel">
    Upgrade subscription for an additional $14.99 a month?
  </AlertDialog>
</DialogTrigger>
</Variant>
<Variant name="Secondary action disabled12">
<DialogTrigger>
  <ActionButton>
    Upgrade
  </ActionButton>
  <AlertDialog
      isSecondaryActionDisabled
      variant="confirmation"
      title="Upgrade subscription"
      primaryActionLabel="Upgrade"
      secondaryActionLabel="Apply Coupon"
      cancelLabel="Cancel"
  >
    Upgrade
    subscription for an
    additional $14.99 a
    month?
  </AlertDialog>
</DialogTrigger>
</Variant>
</Component>
<Component name="ContextualHelp" docURL="https://react-spectrum.adobe.com/react-spectrum/ContextualHelp.html">
<Variant name="Example">
<ContextualHelp variant="info">
  <Heading>Need help?</Heading>
  <Content>
    <Text>
      If you're having issues accessing your account, contact our customer
      support team for help.
    </Text>
  </Content>
</ContextualHelp>
</Variant>
<Variant name="Example1">
<ContextualHelp variant="info">
  <Heading>Need help?</Heading>
  <Content>
    <Text>
      If you're having issues accessing your account,
      contact our customer support team for help.
    </Text>
  </Content>
</ContextualHelp>
</Variant>
<Variant name="Example12">
<ContextualHelp variant="info">
  <Heading>
    Need help?
  </Heading>
  <Content>
    <Text>
      If you're having
      issues accessing
      your account,
      contact our
      customer support
      team for help.
    </Text>
  </Content>
</ContextualHelp>
</Variant>
<Variant name="Content">
<ContextualHelp variant="help">
  <Heading>What is a segment?</Heading>
  <Content>
    <Text>
      Segments identify who your visitors are, what devices and services they
      use, where they navigated from, and much more.
    </Text>
  </Content>
  <Footer>
    <Link>Learn more about segments</Link>
  </Footer>
</ContextualHelp>
</Variant>
<Variant name="Content1">
<ContextualHelp variant="help">
  <Heading>What is a segment?</Heading>
  <Content>
    <Text>
      Segments identify who your visitors are, what
      devices and services they use, where they navigated
      from, and much more.
    </Text>
  </Content>
  <Footer>
    <Link>Learn more about segments</Link>
  </Footer>
</ContextualHelp>
</Variant>
<Variant name="Content12">
<ContextualHelp variant="help">
  <Heading>
    What is a segment?
  </Heading>
  <Content>
    <Text>
      Segments identify
      who your visitors
      are, what devices
      and services they
      use, where they
      navigated from,
      and much more.
    </Text>
  </Content>
  <Footer>
    <Link>
      Learn more about
      segments
    </Link>
  </Footer>
</ContextualHelp>
</Variant>
<Variant name="Placement">
<ContextualHelp variant="info" placement="top start">
  <Heading>Placement</Heading>
  <Content>
    <Text>
      The placement of this contextual help popover has been customized to use
      top start.
    </Text>
  </Content>
</ContextualHelp>
</Variant>
<Variant name="Placement1">
<ContextualHelp variant="info" placement="top start">
  <Heading>Placement</Heading>
  <Content>
    <Text>
      The placement of this contextual help popover has
      been customized to use top start.
    </Text>
  </Content>
</ContextualHelp>
</Variant>
<Variant name="Placement12">
<ContextualHelp
    variant="info"
    placement="top start"
>
  <Heading>
    Placement
  </Heading>
  <Content>
    <Text>
      The placement of
      this contextual
      help popover has
      been customized
      to use top start.
    </Text>
  </Content>
</ContextualHelp>
</Variant>
<Variant name="Events">
<Flex alignItems="center" gap="size-100">
        <ContextualHelp
            variant="info"
            onOpenChange={(isOpen) => setState(isOpen)}
        >
        <Heading>Permission required</Heading>
        <Content>
          <Text>
            Your admin must grant you permission before you can create a
            segment.
          </Text>
        </Content>
      </ContextualHelp>
      <Text>Current open state: {state.toString()}</Text>
    </Flex>
</Variant>
<Variant name="Events1">
<Flex alignItems="center" gap="size-100">
    <ContextualHelp
        variant="info"
        onOpenChange={(isOpen) => setState(isOpen)}
    >
        <Heading>Permission required</Heading>
        <Content>
          <Text>
            Your admin must grant you permission before you
            can create a segment.
          </Text>
        </Content>
      </ContextualHelp>
<Text>Current open state: {state.toString()}</Text>
</Flex>
</Variant>
<Variant name="Events12">
<Flex
    alignItems="center"
    gap="size-100"
>
    <ContextualHelp
        variant="info"
        onOpenChange={(
            isOpen
        ) =>
            setState(
                isOpen
            )}
    >
        <Heading>
          Permission
          required
        </Heading>
        <Content>
          <Text>
            Your admin
            must grant
            you
            permission
            before you
            can create a
            segment.
          </Text>
        </Content>
      </ContextualHelp>
<Text>
        Current open
        state:{' '}
    {state
        .toString()}
      </Text>
</Flex>
</Variant>
<Variant name="Info">
<ContextualHelp variant="info">
  <Heading>Permission required</Heading>
  <Content>
    <Text>
      Your admin must grant you permission before you can create a segment.
    </Text>
  </Content>
</ContextualHelp>
</Variant>
<Variant name="Info1">
<ContextualHelp variant="info">
  <Heading>Permission required</Heading>
  <Content>
    <Text>
      Your admin must grant you permission before you can
      create a segment.
    </Text>
  </Content>
</ContextualHelp>
</Variant>
<Variant name="Info12">
<ContextualHelp variant="info">
  <Heading>
    Permission required
  </Heading>
  <Content>
    <Text>
      Your admin must
      grant you
      permission before
      you can create a
      segment.
    </Text>
  </Content>
</ContextualHelp>
</Variant>
<Variant name="Help">
<ContextualHelp variant="help">
  <Heading>What is a segment?</Heading>
  <Content>
    <Text>
      Segments identify who your visitors are, what devices and services they
      use, where they navigated from, and much more.
    </Text>
  </Content>
  <Footer>
    <Link>Learn more about segments</Link>
  </Footer>
</ContextualHelp>
</Variant>
<Variant name="Help1">
<ContextualHelp variant="help">
  <Heading>What is a segment?</Heading>
  <Content>
    <Text>
      Segments identify who your visitors are, what
      devices and services they use, where they navigated
      from, and much more.
    </Text>
  </Content>
  <Footer>
    <Link>Learn more about segments</Link>
  </Footer>
</ContextualHelp>
</Variant>
<Variant name="Help12">
<ContextualHelp variant="help">
  <Heading>
    What is a segment?
  </Heading>
  <Content>
    <Text>
      Segments identify
      who your visitors
      are, what devices
      and services they
      use, where they
      navigated from,
      and much more.
    </Text>
  </Content>
  <Footer>
    <Link>
      Learn more about
      segments
    </Link>
  </Footer>
</ContextualHelp>
</Variant>
</Component>
<Component name="Dialog" docURL="https://react-spectrum.adobe.com/react-spectrum/Dialog.html">
<Variant name="Example">
<DialogTrigger>
  <ActionButton>Check connectivity</ActionButton>
    {(close) => (
        <Dialog>
      <Heading>Internet Speed Test</Heading>
      <Header>Connection status: Connected</Header>
      <Divider/>
      <Content>
        <Text>
          Start speed test?
        </Text>
      </Content>
      <ButtonGroup>
        <Button variant="secondary" onPress={close}>Cancel</Button>
        <Button variant="accent" onPress={close}>Confirm</Button>
      </ButtonGroup>
    </Dialog>
    )}
</DialogTrigger>
</Variant>
<Variant name="Example1">
<DialogTrigger>
  <ActionButton>Check connectivity</ActionButton>
    {(close) => (
        <Dialog>
      <Heading>Internet Speed Test</Heading>
      <Header>Connection status: Connected</Header>
      <Divider/>
      <Content>
        <Text>
          Start speed test?
        </Text>
      </Content>
      <ButtonGroup>
        <Button variant="secondary" onPress={close}>
          Cancel
        </Button>
        <Button variant="accent" onPress={close}>
          Confirm
        </Button>
      </ButtonGroup>
    </Dialog>
    )}
</DialogTrigger>
</Variant>
<Variant name="Example12">
<DialogTrigger>
  <ActionButton>
    Check connectivity
  </ActionButton>
    {(close) => (
        <Dialog>
      <Heading>
        Internet Speed
        Test
      </Heading>
      <Header>
        Connection
        status:
        Connected
      </Header>
      <Divider/>
      <Content>
        <Text>
          Start speed
          test?
        </Text>
      </Content>
      <ButtonGroup>
        <Button
            variant="secondary"
            onPress={close}
        >
          Cancel
        </Button>
        <Button
            variant="accent"
            onPress={close}
        >
          Confirm
        </Button>
      </ButtonGroup>
    </Dialog>
    )}
</DialogTrigger>
</Variant>
<Variant name="Examples">
<DialogTrigger>
  <ActionButton>Publish</ActionButton>
    {(close) => (
        <Dialog>
      <Heading>Publish 3 pages</Heading>
      <Divider/>
      <Content>Confirm publish?</Content>
      <ButtonGroup>
        <Button variant="secondary" onPress={close}>Cancel</Button>
        <Button variant="accent" onPress={close} autoFocus>Confirm</Button>
      </ButtonGroup>
    </Dialog>
    )}
</DialogTrigger>
</Variant>
<Variant name="Examples1">
<DialogTrigger>
  <ActionButton>Publish</ActionButton>
    {(close) => (
        <Dialog>
      <Heading>Publish 3 pages</Heading>
      <Divider/>
      <Content>Confirm publish?</Content>
      <ButtonGroup>
        <Button variant="secondary" onPress={close}>
          Cancel
        </Button>
        <Button
            variant="accent"
            onPress={close}
            autoFocus
        >
          Confirm
        </Button>
      </ButtonGroup>
    </Dialog>
    )}
</DialogTrigger>
</Variant>
<Variant name="Examples12">
<DialogTrigger>
  <ActionButton>
    Publish
  </ActionButton>
    {(close) => (
        <Dialog>
      <Heading>
        Publish 3 pages
      </Heading>
      <Divider/>
      <Content>
        Confirm
        publish?
      </Content>
      <ButtonGroup>
        <Button
            variant="secondary"
            onPress={close}
        >
          Cancel
        </Button>
        <Button
            variant="accent"
            onPress={close}
            autoFocus
        >
          Confirm
        </Button>
      </ButtonGroup>
    </Dialog>
    )}
</DialogTrigger>
</Variant>
<Variant name="Examples123">
<DialogTrigger isDismissable>
  <ActionButton>Status</ActionButton>
  <Dialog>
    <Heading>Status</Heading>
    <Divider/>
    <Content>Printer Status: Connected</Content>
  </Dialog>
</DialogTrigger>
</Variant>
<Variant name="Examples1234">
<DialogTrigger isDismissable>
  <ActionButton>Status</ActionButton>
  <Dialog>
    <Heading>Status</Heading>
    <Divider/>
    <Content>Printer Status: Connected</Content>
  </Dialog>
</DialogTrigger>
</Variant>
<Variant name="Examples12345">
<DialogTrigger
    isDismissable
>
  <ActionButton>
    Status
  </ActionButton>
  <Dialog>
    <Heading>
      Status
    </Heading>
    <Divider/>
    <Content>
      Printer Status:
      Connected
    </Content>
  </Dialog>
</DialogTrigger>
</Variant>
<Variant name="Examples123456">
<DialogTrigger>
  <ActionButton>Register</ActionButton>
    {(close) => (
        <Dialog>
      <Heading>
        <Flex alignItems="center" gap="size-100">
          <Book size="S"/>
          <Text>
            Register for newsletter
          </Text>
        </Flex>
      </Heading>
      <Header>
        <Link>
          <a href="//example.com" target="_blank">What is this?</a>
        </Link>
      </Header>
      <Divider/>
      <Content>
        <Form>
          <TextField label="First Name" autoFocus/>
          <TextField label="Last Name"/>
          <TextField label="Street Address"/>
          <TextField label="City"/>
        </Form>
      </Content>
      <Footer>
        <Checkbox>
          I want to receive updates for exclusive offers in my area.
        </Checkbox>
      </Footer>
      <ButtonGroup>
        <Button variant="secondary" onPress={close}>Cancel</Button>
        <Button variant="accent" onPress={close}>Register</Button>
      </ButtonGroup>
    </Dialog>
    )}
</DialogTrigger>
</Variant>
<Variant name="Examples1234567">
<DialogTrigger>
  <ActionButton>Register</ActionButton>
    {(close) => (
        <Dialog>
      <Heading>
        <Flex alignItems="center" gap="size-100">
          <Book size="S"/>
          <Text>
            Register for newsletter
          </Text>
        </Flex>
      </Heading>
      <Header>
        <Link>
          <a href="//example.com" target="_blank">
            What is this?
          </a>
        </Link>
      </Header>
      <Divider/>
      <Content>
        <Form>
          <TextField label="First Name" autoFocus/>
          <TextField label="Last Name"/>
          <TextField label="Street Address"/>
          <TextField label="City"/>
        </Form>
      </Content>
      <Footer>
        <Checkbox>
          I want to receive updates for exclusive offers
          in my area.
        </Checkbox>
      </Footer>
      <ButtonGroup>
        <Button variant="secondary" onPress={close}>
          Cancel
        </Button>
        <Button variant="accent" onPress={close}>
          Register
        </Button>
      </ButtonGroup>
    </Dialog>
    )}
</DialogTrigger>
</Variant>
<Variant name="Examples12345678">
<DialogTrigger>
  <ActionButton>
    Register
  </ActionButton>
    {(close) => (
        <Dialog>
      <Heading>
        <Flex
            alignItems="center"
            gap="size-100"
        >
          <Book size="S"/>
          <Text>
            Register
            for
            newsletter
          </Text>
        </Flex>
      </Heading>
      <Header>
        <Link>
          <a
              href="//example.com"
              target="_blank"
          >
            What is
            this?
          </a>
        </Link>
      </Header>
      <Divider/>
      <Content>
        <Form>
          <TextField
              label="First Name"
              autoFocus
          />
          <TextField label="Last Name"/>
          <TextField label="Street Address"/>
          <TextField label="City"/>
        </Form>
      </Content>
      <Footer>
        <Checkbox>
          I want to
          receive
          updates for
          exclusive
          offers in my
          area.
        </Checkbox>
      </Footer>
      <ButtonGroup>
        <Button
            variant="secondary"
            onPress={close}
        >
          Cancel
        </Button>
        <Button
            variant="accent"
            onPress={close}
        >
          Register
        </Button>
      </ButtonGroup>
    </Dialog>
    )}
</DialogTrigger>
</Variant>
<Variant name="Examples123456789">
<DialogTrigger>
  <ActionButton>Upload</ActionButton>
    {(close) => (
        <Dialog>
      <Image
          slot="hero"
          alt=""
          src="https://i.imgur.com/Z7AzH2c.png"
          objectFit="cover"
      />
      <Heading>Upload file</Heading>
      <Divider/>
      <Content>Are you sure you want to upload this file?</Content>
      <ButtonGroup>
        <Button variant="secondary" onPress={close}>Cancel</Button>
        <Button variant="accent" onPress={close} autoFocus>Confirm</Button>
      </ButtonGroup>
    </Dialog>
    )}
</DialogTrigger>
</Variant>
<Variant name="Examples12345678910">
<DialogTrigger>
  <ActionButton>Upload</ActionButton>
    {(close) => (
        <Dialog>
      <Image
          slot="hero"
          alt=""
          src="https://i.imgur.com/Z7AzH2c.png"
          objectFit="cover"
      />
      <Heading>Upload file</Heading>
      <Divider/>
      <Content>
        Are you sure you want to upload this file?
      </Content>
      <ButtonGroup>
        <Button variant="secondary" onPress={close}>
          Cancel
        </Button>
        <Button
            variant="accent"
            onPress={close}
            autoFocus
        >
          Confirm
        </Button>
      </ButtonGroup>
    </Dialog>
    )}
</DialogTrigger>
</Variant>
<Variant name="Examples1234567891011">
<DialogTrigger>
  <ActionButton>
    Upload
  </ActionButton>
    {(close) => (
        <Dialog>
      <Image
          slot="hero"
          alt=""
          src="https://i.imgur.com/Z7AzH2c.png"
          objectFit="cover"
      />
      <Heading>
        Upload file
      </Heading>
      <Divider/>
      <Content>
        Are you sure
        you want to
        upload this
        file?
      </Content>
      <ButtonGroup>
        <Button
            variant="secondary"
            onPress={close}
        >
          Cancel
        </Button>
        <Button
            variant="accent"
            onPress={close}
            autoFocus
        >
          Confirm
        </Button>
      </ButtonGroup>
    </Dialog>
    )}
</DialogTrigger>
</Variant>
<Variant name="Events">
<DialogTrigger>
        <ActionButton>Set Profile</ActionButton>
    {(close) => (
        <Dialog>
        <Heading>Profile</Heading>
        <Divider/>
        <ButtonGroup>
        <Button variant="secondary" onPress={() => alertCancel(close)}>
              Cancel
            </Button>
            <Button autoFocus variant="accent" onPress={() => alertSave(close)}>
              Save
            </Button>
          </ButtonGroup>
<Content>
            <Form>
              <TextField label="Name"/>
              <Checkbox>Make private</Checkbox>
            </Form>
          </Content>
</Dialog>
    )}
</DialogTrigger>
</Variant>
<Variant name="Events1">
<DialogTrigger>
    <ActionButton>Set Profile</ActionButton>
    {(close) => (
        <Dialog>
    <Heading>Profile</Heading>
    <Divider/>
    <ButtonGroup>
    <Button
        variant="secondary"
        onPress={() => alertCancel(close)}
    >
              Cancel
            </Button>
<Button
    autoFocus
    variant="accent"
    onPress={() => alertSave(close)}
>
              Save
            </Button>
</ButtonGroup>
<Content>
            <Form>
              <TextField label="Name"/>
              <Checkbox>Make private</Checkbox>
            </Form>
          </Content>
</Dialog>
    )}
</DialogTrigger>
</Variant>
<Variant name="Events12">
<DialogTrigger>
    <ActionButton>
    Set Profile
    </ActionButton>
    {(close) => (
        <Dialog>
    <Heading>
    Profile
    </Heading>
    <Divider/>
    <ButtonGroup>
    <Button
        variant="secondary"
        onPress={() =>
            alertCancel(
                close
            )}
    >
              Cancel
            </Button>
<Button
    autoFocus
    variant="accent"
    onPress={() =>
        alertSave(
            close
        )}
>
              Save
            </Button>
</ButtonGroup>
<Content>
            <Form>
              <TextField label="Name"/>
              <Checkbox>
                Make
                private
              </Checkbox>
            </Form>
          </Content>
</Dialog>
    )}
</DialogTrigger>
</Variant>
<Variant name="Dismissable dialogs">
<DialogTrigger isDismissable>
    <ActionButton>Info</ActionButton>
    {(close) => (
        <Dialog onDismiss={() => alertDismiss(close)}>
          <Heading>Version Info</Heading>
          <Divider/>
          <Content>
            <Text>
              Version 1.0.0, Copyright 2020
            </Text>
          </Content>
        </Dialog>
    )}
</DialogTrigger>
</Variant>
<Variant name="Dismissable dialogs1">
<DialogTrigger isDismissable>
    <ActionButton>Info</ActionButton>
    {(close) => (
        <Dialog onDismiss={() => alertDismiss(close)}>
          <Heading>Version Info</Heading>
          <Divider/>
          <Content>
            <Text>
              Version 1.0.0, Copyright 2020
            </Text>
          </Content>
        </Dialog>
    )}
</DialogTrigger>
</Variant>
<Variant name="Dismissable dialogs12">
<DialogTrigger
    isDismissable
>
    <ActionButton>
    Info
    </ActionButton>
    {(close) => (
        <Dialog
            onDismiss={() =>
                alertDismiss(
                    close
                )}
        >
          <Heading>
            Version Info
          </Heading>
          <Divider/>
          <Content>
            <Text>
              Version
              1.0.0,
              Copyright
              2020
            </Text>
          </Content>
        </Dialog>
    )}
</DialogTrigger>
</Variant>
<Variant name="Dialog types">
<DialogTrigger isDismissable type="modal">
  <ActionButton>Trigger Modal</ActionButton>
  <Dialog>
    <Heading>Modal</Heading>
    <Divider/>
    <Content>
      <Text>
        This is a modal.
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
</Variant>
<Variant name="Dialog types1">
<DialogTrigger isDismissable type="modal">
  <ActionButton>Trigger Modal</ActionButton>
  <Dialog>
    <Heading>Modal</Heading>
    <Divider/>
    <Content>
      <Text>
        This is a modal.
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
</Variant>
<Variant name="Dialog types12">
<DialogTrigger
    isDismissable
    type="modal"
>
  <ActionButton>
    Trigger Modal
  </ActionButton>
  <Dialog>
    <Heading>
      Modal
    </Heading>
    <Divider/>
    <Content>
      <Text>
        This is a
        modal.
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
</Variant>
<Variant name="Dialog types123">
<DialogTrigger type="popover">
  <ActionButton>Trigger Popover</ActionButton>
  <Dialog>
    <Heading>Popover</Heading>
    <Divider/>
    <Content>
      <Text>
        This is a popover.
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
</Variant>
<Variant name="Dialog types1234">
<DialogTrigger type="popover">
  <ActionButton>Trigger Popover</ActionButton>
  <Dialog>
    <Heading>Popover</Heading>
    <Divider/>
    <Content>
      <Text>
        This is a popover.
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
</Variant>
<Variant name="Dialog types12345">
<DialogTrigger type="popover">
  <ActionButton>
    Trigger Popover
  </ActionButton>
  <Dialog>
    <Heading>
      Popover
    </Heading>
    <Divider/>
    <Content>
      <Text>
        This is a
        popover.
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
</Variant>
<Variant name="Dialog types123456">
<DialogTrigger type="tray">
  <ActionButton>Trigger Tray</ActionButton>
  <Dialog>
    <Heading>Tray</Heading>
    <Divider/>
    <Content>
      <Text>
        This is a tray.
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
</Variant>
<Variant name="Dialog types1234567">
<DialogTrigger type="tray">
  <ActionButton>Trigger Tray</ActionButton>
  <Dialog>
    <Heading>Tray</Heading>
    <Divider/>
    <Content>
      <Text>
        This is a tray.
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
</Variant>
<Variant name="Dialog types12345678">
<DialogTrigger type="tray">
  <ActionButton>
    Trigger Tray
  </ActionButton>
  <Dialog>
    <Heading>
      Tray
    </Heading>
    <Divider/>
    <Content>
      <Text>
        This is a tray.
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
</Variant>
<Variant name="Size">
<DialogTrigger>
  <ActionButton>Small</ActionButton>
    {(close) => (
        <Dialog size="S">
      <Heading>Profile</Heading>
      <Divider/>
      <ButtonGroup>
        <Button variant="secondary" onPress={close}>Cancel</Button>
        <Button autoFocus variant="accent" onPress={close}>Save</Button>
      </ButtonGroup>
      <Content>
        <Form>
          <TextField label="Name"/>
          <Checkbox>Make private</Checkbox>
        </Form>
      </Content>
    </Dialog>
    )}
</DialogTrigger>
</Variant>
<Variant name="Size1">
<DialogTrigger>
  <ActionButton>Small</ActionButton>
    {(close) => (
        <Dialog size="S">
      <Heading>Profile</Heading>
      <Divider/>
      <ButtonGroup>
        <Button variant="secondary" onPress={close}>
          Cancel
        </Button>
        <Button
            autoFocus
            variant="accent"
            onPress={close}
        >
          Save
        </Button>
      </ButtonGroup>
      <Content>
        <Form>
          <TextField label="Name"/>
          <Checkbox>Make private</Checkbox>
        </Form>
      </Content>
    </Dialog>
    )}
</DialogTrigger>
</Variant>
<Variant name="Size12">
<DialogTrigger>
  <ActionButton>
    Small
  </ActionButton>
    {(close) => (
        <Dialog size="S">
      <Heading>
        Profile
      </Heading>
      <Divider/>
      <ButtonGroup>
        <Button
            variant="secondary"
            onPress={close}
        >
          Cancel
        </Button>
        <Button
            autoFocus
            variant="accent"
            onPress={close}
        >
          Save
        </Button>
      </ButtonGroup>
      <Content>
        <Form>
          <TextField label="Name"/>
          <Checkbox>
            Make
            private
          </Checkbox>
        </Form>
      </Content>
    </Dialog>
    )}
</DialogTrigger>
</Variant>
<Variant name="Size123">
<DialogTrigger>
  <ActionButton>Medium</ActionButton>
    {(close) => (
        <Dialog size="M">
      <Heading>Profile</Heading>
      <Divider/>
      <ButtonGroup>
        <Button variant="secondary" onPress={close}>Cancel</Button>
        <Button autoFocus variant="accent" onPress={close}>Save</Button>
      </ButtonGroup>
      <Content>
        <Form>
          <TextField label="Name"/>
          <Checkbox>Make private</Checkbox>
        </Form>
      </Content>
    </Dialog>
    )}
</DialogTrigger>
</Variant>
<Variant name="Size1234">
<DialogTrigger>
  <ActionButton>Medium</ActionButton>
    {(close) => (
        <Dialog size="M">
      <Heading>Profile</Heading>
      <Divider/>
      <ButtonGroup>
        <Button variant="secondary" onPress={close}>
          Cancel
        </Button>
        <Button
            autoFocus
            variant="accent"
            onPress={close}
        >
          Save
        </Button>
      </ButtonGroup>
      <Content>
        <Form>
          <TextField label="Name"/>
          <Checkbox>Make private</Checkbox>
        </Form>
      </Content>
    </Dialog>
    )}
</DialogTrigger>
</Variant>
<Variant name="Size12345">
<DialogTrigger>
  <ActionButton>
    Medium
  </ActionButton>
    {(close) => (
        <Dialog size="M">
      <Heading>
        Profile
      </Heading>
      <Divider/>
      <ButtonGroup>
        <Button
            variant="secondary"
            onPress={close}
        >
          Cancel
        </Button>
        <Button
            autoFocus
            variant="accent"
            onPress={close}
        >
          Save
        </Button>
      </ButtonGroup>
      <Content>
        <Form>
          <TextField label="Name"/>
          <Checkbox>
            Make
            private
          </Checkbox>
        </Form>
      </Content>
    </Dialog>
    )}
</DialogTrigger>
</Variant>
<Variant name="Size123456">
<DialogTrigger>
  <ActionButton>Large</ActionButton>
    {(close) => (
        <Dialog size="L">
      <Heading>Profile</Heading>
      <Divider/>
      <ButtonGroup>
        <Button variant="secondary" onPress={close}>Cancel</Button>
        <Button autoFocus variant="accent" onPress={close}>Save</Button>
      </ButtonGroup>
      <Content>
        <Form>
          <TextField label="Name"/>
          <Checkbox>Make private</Checkbox>
        </Form>
      </Content>
    </Dialog>
    )}
</DialogTrigger>
</Variant>
<Variant name="Size1234567">
<DialogTrigger>
  <ActionButton>Large</ActionButton>
    {(close) => (
        <Dialog size="L">
      <Heading>Profile</Heading>
      <Divider/>
      <ButtonGroup>
        <Button variant="secondary" onPress={close}>
          Cancel
        </Button>
        <Button
            autoFocus
            variant="accent"
            onPress={close}
        >
          Save
        </Button>
      </ButtonGroup>
      <Content>
        <Form>
          <TextField label="Name"/>
          <Checkbox>Make private</Checkbox>
        </Form>
      </Content>
    </Dialog>
    )}
</DialogTrigger>
</Variant>
<Variant name="Size12345678">
<DialogTrigger>
  <ActionButton>
    Large
  </ActionButton>
    {(close) => (
        <Dialog size="L">
      <Heading>
        Profile
      </Heading>
      <Divider/>
      <ButtonGroup>
        <Button
            variant="secondary"
            onPress={close}
        >
          Cancel
        </Button>
        <Button
            autoFocus
            variant="accent"
            onPress={close}
        >
          Save
        </Button>
      </ButtonGroup>
      <Content>
        <Form>
          <TextField label="Name"/>
          <Checkbox>
            Make
            private
          </Checkbox>
        </Form>
      </Content>
    </Dialog>
    )}
</DialogTrigger>
</Variant>
</Component>
<Component name="DialogContainer" docURL="https://react-spectrum.adobe.com/react-spectrum/DialogContainer.html">
<Variant name="Example">
<>
        <ActionButton onPress={() => setOpen(true)}>
        <Delete/>
        <Text>Delete</Text>
      </ActionButton>
      <DialogContainer onDismiss={() => setOpen(false)} {...props}>
        {isOpen &&
            <AlertDialog
                title="Delete"
                variant="destructive"
                primaryActionLabel="Delete">
            Are you sure you want to delete this item?
          </AlertDialog>
        }
      </DialogContainer>
    </>
</Variant>
<Variant name="Example1">
<>
        <ActionButton onPress={() => setOpen(true)}>
        <Delete/>
        <Text>Delete</Text>
      </ActionButton>
<DialogContainer
    onDismiss={() => setOpen(false)}
    {...props}
>
        {isOpen &&
            (
                <AlertDialog
                    title="Delete"
                    variant="destructive"
                    primaryActionLabel="Delete"
                >
              Are you sure you want to delete this item?
            </AlertDialog>
            )}
      </DialogContainer>
</>
</Variant>
<Variant name="Example12">
<>
    <ActionButton
        onPress={() =>
            setOpen(true)}
    >
        <Delete/>
        <Text>
          Delete
        </Text>
      </ActionButton>
<DialogContainer
    onDismiss={() =>
        setOpen(false)}
    {...props}
>
        {isOpen &&
            (
                <AlertDialog
                    title="Delete"
                    variant="destructive"
                    primaryActionLabel="Delete"
                >
              Are you
              sure you
              want to
              delete this
              item?
            </AlertDialog>
            )}
      </DialogContainer>
</>
</Variant>
<Variant name="Dialog triggered by a menu item">
<>
    <MenuTrigger>
    <ActionButton aria-label="Actions">
    <More/>
    </ActionButton>
    <Menu onAction={setDialog}>
          <Item key="edit">Edit...</Item>
          <Item key="delete">Delete...</Item>
        </Menu>
</MenuTrigger>
<DialogContainer onDismiss={() => setDialog(null)}>
        {dialog === 'edit' &&
            <EditDialog/>}
    {dialog === 'delete' &&
        (
            <AlertDialog
                title="Delete"
                variant="destructive"
                primaryActionLabel="Delete"
            >
              Are you sure you want to delete this item?
            </AlertDialog>
        )}
      </DialogContainer>
</>
</Variant>
<Variant name="Dialog triggered by a menu item1">
<>
    <MenuTrigger>
    <ActionButton aria-label="Actions">
    <More/>
    </ActionButton>
    <Menu onAction={setDialog}>
          <Item key="edit">Edit...</Item>
          <Item key="delete">Delete...</Item>
        </Menu>
</MenuTrigger>
<DialogContainer onDismiss={() => setDialog(null)}>
        {dialog === 'edit' &&
            <EditDialog/>}
    {dialog === 'delete' &&
        (
            <AlertDialog
                title="Delete"
                variant="destructive"
                primaryActionLabel="Delete"
            >
              Are you sure you want to delete this item?
            </AlertDialog>
        )}
      </DialogContainer>
</>
</Variant>
<Variant name="Dialog triggered by a menu item12">
<>
    <MenuTrigger>
    <ActionButton aria-label="Actions">
    <More/>
    </ActionButton>
    <Menu
        onAction={setDialog}
    >
          <Item key="edit">
            Edit...
          </Item>
          <Item key="delete">
            Delete...
          </Item>
        </Menu>
</MenuTrigger>
<DialogContainer
    onDismiss={() =>
        setDialog(
            null
        )}
>
        {dialog ===
            'edit' &&
            <EditDialog/>}
    {dialog ===
        'delete' &&
        (
            <AlertDialog
                title="Delete"
                variant="destructive"
                primaryActionLabel="Delete"
            >
              Are you
              sure you
              want to
              delete this
              item?
            </AlertDialog>
        )}
      </DialogContainer>
</>
</Variant>
<Variant name="Full screen">
<>
    <ActionButton onPress={() => setOpen(true)}>
        <Edit/>
        <Text>Edit</Text>
      </ActionButton>
<DialogContainer
    type="fullscreen"
    onDismiss={() => setOpen(false)}
    {...props}
>
        {isOpen &&
            <EditDialog/>}
      </DialogContainer>
</>
</Variant>
<Variant name="Full screen1">
<>
    <ActionButton onPress={() => setOpen(true)}>
        <Edit/>
        <Text>Edit</Text>
      </ActionButton>
<DialogContainer
    type="fullscreen"
    onDismiss={() => setOpen(false)}
    {...props}
>
        {isOpen &&
            <EditDialog/>}
      </DialogContainer>
</>
</Variant>
<Variant name="Full screen12">
<>
    <ActionButton
        onPress={() =>
            setOpen(true)}
    >
        <Edit/>
        <Text>Edit</Text>
      </ActionButton>
<DialogContainer
    type="fullscreen"
    onDismiss={() =>
        setOpen(false)}
    {...props}
>
        {isOpen &&
            <EditDialog/>}
      </DialogContainer>
</>
</Variant>
<Variant name="Full screen takeover">
<>
    <ActionButton onPress={() => setOpen(true)}>
        <Edit/>
        <Text>Edit</Text>
      </ActionButton>
<DialogContainer
    type="fullscreenTakeover"
    onDismiss={() => setOpen(false)}
    {...props}
>
        {isOpen &&
            <EditDialog/>}
      </DialogContainer>
</>
</Variant>
</Component>
<Component name="DialogTrigger" docURL="https://react-spectrum.adobe.com/react-spectrum/DialogTrigger.html">
<Variant name="Example">
<DialogTrigger type="popover">
  <ActionButton>Disk Status</ActionButton>
  <Dialog>
    <Heading>C://</Heading>
    <Divider/>
    <Content>
      <Text>
        50% disk space remaining.
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
</Variant>
<Variant name="Example1">
<DialogTrigger type="popover">
  <ActionButton>Disk Status</ActionButton>
  <Dialog>
    <Heading>C://</Heading>
    <Divider/>
    <Content>
      <Text>
        50% disk space remaining.
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
</Variant>
<Variant name="Example12">
<DialogTrigger type="popover">
  <ActionButton>
    Disk Status
  </ActionButton>
  <Dialog>
    <Heading>
      C://
    </Heading>
    <Divider/>
    <Content>
      <Text>
        50% disk space
        remaining.
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
</Variant>
<Variant name="Content">
<DialogTrigger>
  <ActionButton>Checkout</ActionButton>
    {(close) => (
        <Dialog>
      <Heading>Confirm checkout?</Heading>
      <Divider/>
      <Content>
        <Text>
          You have 5 items in your cart. Proceed to checkout?
        </Text>
      </Content>
      <ButtonGroup>
        <Button variant="secondary" onPress={close}>Cancel</Button>
        <Button variant="accent" onPress={close} autoFocus>Confirm</Button>
      </ButtonGroup>
    </Dialog>
    )}
</DialogTrigger>
</Variant>
<Variant name="Content1">
<DialogTrigger>
  <ActionButton>Checkout</ActionButton>
    {(close) => (
        <Dialog>
      <Heading>Confirm checkout?</Heading>
      <Divider/>
      <Content>
        <Text>
          You have 5 items in your cart. Proceed to
          checkout?
        </Text>
      </Content>
      <ButtonGroup>
        <Button variant="secondary" onPress={close}>
          Cancel
        </Button>
        <Button
            variant="accent"
            onPress={close}
            autoFocus
        >
          Confirm
        </Button>
      </ButtonGroup>
    </Dialog>
    )}
</DialogTrigger>
</Variant>
<Variant name="Content12">
<DialogTrigger>
  <ActionButton>
    Checkout
  </ActionButton>
    {(close) => (
        <Dialog>
      <Heading>
        Confirm
        checkout?
      </Heading>
      <Divider/>
      <Content>
        <Text>
          You have 5
          items in your
          cart. Proceed
          to checkout?
        </Text>
      </Content>
      <ButtonGroup>
        <Button
            variant="secondary"
            onPress={close}
        >
          Cancel
        </Button>
        <Button
            variant="accent"
            onPress={close}
            autoFocus
        >
          Confirm
        </Button>
      </ButtonGroup>
    </Dialog>
    )}
</DialogTrigger>
</Variant>
<Variant name="Modal">
<DialogTrigger type="modal">
  <ActionButton>Unlink</ActionButton>
    {(close) => (
        <Dialog>
      <Heading>Unlinking email</Heading>
      <Divider/>
      <Content>
        <Text>
          This will unlink your email from your profile "TestUser". Are you
          sure?
        </Text>
      </Content>
      <ButtonGroup>
        <Button variant="secondary" onPress={close}>Cancel</Button>
        <Button variant="accent" onPress={close} autoFocus>Confirm</Button>
      </ButtonGroup>
    </Dialog>
    )}
</DialogTrigger>
</Variant>
<Variant name="Modal1">
<DialogTrigger type="modal">
  <ActionButton>Unlink</ActionButton>
    {(close) => (
        <Dialog>
      <Heading>Unlinking email</Heading>
      <Divider/>
      <Content>
        <Text>
          This will unlink your email from your profile
          "TestUser". Are you sure?
        </Text>
      </Content>
      <ButtonGroup>
        <Button variant="secondary" onPress={close}>
          Cancel
        </Button>
        <Button
            variant="accent"
            onPress={close}
            autoFocus
        >
          Confirm
        </Button>
      </ButtonGroup>
    </Dialog>
    )}
</DialogTrigger>
</Variant>
<Variant name="Modal12">
<DialogTrigger type="modal">
  <ActionButton>
    Unlink
  </ActionButton>
    {(close) => (
        <Dialog>
      <Heading>
        Unlinking email
      </Heading>
      <Divider/>
      <Content>
        <Text>
          This will
          unlink your
          email from
          your profile
          "TestUser".
          Are you sure?
        </Text>
      </Content>
      <ButtonGroup>
        <Button
            variant="secondary"
            onPress={close}
        >
          Cancel
        </Button>
        <Button
            variant="accent"
            onPress={close}
            autoFocus
        >
          Confirm
        </Button>
      </ButtonGroup>
    </Dialog>
    )}
</DialogTrigger>
</Variant>
<Variant name="Popover">
<DialogTrigger type="popover">
  <ActionButton>Info</ActionButton>
  <Dialog>
    <Heading>Version Info</Heading>
    <Divider/>
    <Content>
      <Text>
        Version 1.0.0, Copyright 2020
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
</Variant>
<Variant name="Popover1">
<DialogTrigger type="popover">
  <ActionButton>Info</ActionButton>
  <Dialog>
    <Heading>Version Info</Heading>
    <Divider/>
    <Content>
      <Text>
        Version 1.0.0, Copyright 2020
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
</Variant>
<Variant name="Popover12">
<DialogTrigger type="popover">
  <ActionButton>
    Info
  </ActionButton>
  <Dialog>
    <Heading>
      Version Info
    </Heading>
    <Divider/>
    <Content>
      <Text>
        Version 1.0.0,
        Copyright 2020
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
</Variant>
<Variant name="Tray">
<DialogTrigger type="tray">
  <ActionButton>Check Messages</ActionButton>
  <Dialog>
    <Heading>New Messages</Heading>
    <Divider/>
    <Content>
      <Text>
        You have 5 new messages.
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
</Variant>
<Variant name="Tray1">
<DialogTrigger type="tray">
  <ActionButton>Check Messages</ActionButton>
  <Dialog>
    <Heading>New Messages</Heading>
    <Divider/>
    <Content>
      <Text>
        You have 5 new messages.
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
</Variant>
<Variant name="Tray12">
<DialogTrigger type="tray">
  <ActionButton>
    Check Messages
  </ActionButton>
  <Dialog>
    <Heading>
      New Messages
    </Heading>
    <Divider/>
    <Content>
      <Text>
        You have 5 new
        messages.
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
</Variant>
<Variant name="Fullscreen">
<DialogTrigger type="fullscreen">
  <ActionButton>See Details</ActionButton>
    {(close) => (
        <Dialog>
      <Heading>Package details</Heading>
      <Divider/>
      <Content>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit
          amet tristique risus. In sit amet suscipit lorem. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. In condimentum imperdiet metus non condimentum. Duis
          eu velit et quam accumsan tempus at id velit. Duis elementum
          elementum purus, id tempus mauris posuere a. Nunc vestibulum sapien
          pellentesque lectus commodo ornare.
        </Text>
      </Content>
      <ButtonGroup>
        <Button variant="secondary" onPress={close}>Cancel</Button>
        <Button variant="accent" onPress={close} autoFocus>Buy</Button>
      </ButtonGroup>
    </Dialog>
    )}
</DialogTrigger>
</Variant>
<Variant name="Fullscreen1">
<DialogTrigger type="fullscreen">
  <ActionButton>See Details</ActionButton>
    {(close) => (
        <Dialog>
      <Heading>Package details</Heading>
      <Divider/>
      <Content>
        <Text>
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Proin sit amet tristique risus.
          In sit amet suscipit lorem. Orci varius natoque
          penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. In condimentum imperdiet
          metus non condimentum. Duis eu velit et quam
          accumsan tempus at id velit. Duis elementum
          elementum purus, id tempus mauris posuere a.
          Nunc vestibulum sapien pellentesque lectus
          commodo ornare.
        </Text>
      </Content>
      <ButtonGroup>
        <Button variant="secondary" onPress={close}>
          Cancel
        </Button>
        <Button
            variant="accent"
            onPress={close}
            autoFocus
        >
          Buy
        </Button>
      </ButtonGroup>
    </Dialog>
    )}
</DialogTrigger>
</Variant>
<Variant name="Fullscreen12">
<DialogTrigger type="fullscreen">
  <ActionButton>
    See Details
  </ActionButton>
    {(close) => (
        <Dialog>
      <Heading>
        Package details
      </Heading>
      <Divider/>
      <Content>
        <Text>
          Lorem ipsum
          dolor sit
          amet,
          consectetur
          adipiscing
          elit. Proin
          sit amet
          tristique
          risus. In sit
          amet suscipit
          lorem. Orci
          varius
          natoque
          penatibus et
          magnis dis
          parturient
          montes,
          nascetur
          ridiculus
          mus. In
          condimentum
          imperdiet
          metus non
          condimentum.
          Duis eu velit
          et quam
          accumsan
          tempus at id
          velit. Duis
          elementum
          elementum
          purus, id
          tempus mauris
          posuere a.
          Nunc
          vestibulum
          sapien
          pellentesque
          lectus
          commodo
          ornare.
        </Text>
      </Content>
      <ButtonGroup>
        <Button
            variant="secondary"
            onPress={close}
        >
          Cancel
        </Button>
        <Button
            variant="accent"
            onPress={close}
            autoFocus
        >
          Buy
        </Button>
      </ButtonGroup>
    </Dialog>
    )}
</DialogTrigger>
</Variant>
<Variant name="Fullscreen takeover">
<DialogTrigger type="fullscreenTakeover">
  <ActionButton>Register</ActionButton>
    {(close) => (
        <Dialog>
      <Heading>Register a new account</Heading>
      <Divider/>
      <Content>
        <Form>
          <TextField label="Name"/>
          <TextField label="Email address"/>
          <Checkbox>Make profile private</Checkbox>
        </Form>
      </Content>
      <ButtonGroup>
        <Button variant="secondary" onPress={close}>Cancel</Button>
        <Button variant="accent" onPress={close} autoFocus>Confirm</Button>
      </ButtonGroup>
    </Dialog>
    )}
</DialogTrigger>
</Variant>
<Variant name="Fullscreen takeover1">
<DialogTrigger type="fullscreenTakeover">
  <ActionButton>Register</ActionButton>
    {(close) => (
        <Dialog>
      <Heading>Register a new account</Heading>
      <Divider/>
      <Content>
        <Form>
          <TextField label="Name"/>
          <TextField label="Email address"/>
          <Checkbox>Make profile private</Checkbox>
        </Form>
      </Content>
      <ButtonGroup>
        <Button variant="secondary" onPress={close}>
          Cancel
        </Button>
        <Button
            variant="accent"
            onPress={close}
            autoFocus
        >
          Confirm
        </Button>
      </ButtonGroup>
    </Dialog>
    )}
</DialogTrigger>
</Variant>
<Variant name="Fullscreen takeover12">
<DialogTrigger type="fullscreenTakeover">
  <ActionButton>
    Register
  </ActionButton>
    {(close) => (
        <Dialog>
      <Heading>
        Register a new
        account
      </Heading>
      <Divider/>
      <Content>
        <Form>
          <TextField label="Name"/>
          <TextField label="Email address"/>
          <Checkbox>
            Make
            profile
            private
          </Checkbox>
        </Form>
      </Content>
      <ButtonGroup>
        <Button
            variant="secondary"
            onPress={close}
        >
          Cancel
        </Button>
        <Button
            variant="accent"
            onPress={close}
            autoFocus
        >
          Confirm
        </Button>
      </ButtonGroup>
    </Dialog>
    )}
</DialogTrigger>
</Variant>
<Variant name="Dismissable">
<DialogTrigger isDismissable type="modal">
  <ActionButton>User Status</ActionButton>
  <Dialog>
    <Heading>Status: Bob</Heading>
    <Divider/>
    <Content>
      <Text>
        Last Login: December 12, 1989
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
</Variant>
<Variant name="Dismissable1">
<DialogTrigger isDismissable type="modal">
  <ActionButton>User Status</ActionButton>
  <Dialog>
    <Heading>Status: Bob</Heading>
    <Divider/>
    <Content>
      <Text>
        Last Login: December 12, 1989
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
</Variant>
<Variant name="Dismissable12">
<DialogTrigger
    isDismissable
    type="modal"
>
  <ActionButton>
    User Status
  </ActionButton>
  <Dialog>
    <Heading>
      Status: Bob
    </Heading>
    <Divider/>
    <Content>
      <Text>
        Last Login:
        December 12,
        1989
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
</Variant>
<Variant name="Mobile type">
<DialogTrigger type="popover" mobileType="tray">
  <ActionButton>Info</ActionButton>
  <Dialog>
    <Heading>Version Info</Heading>
    <Divider/>
    <Content>
      <Text>
        Version 1.0.0, Copyright 2020
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
</Variant>
<Variant name="Mobile type1">
<DialogTrigger type="popover" mobileType="tray">
  <ActionButton>Info</ActionButton>
  <Dialog>
    <Heading>Version Info</Heading>
    <Divider/>
    <Content>
      <Text>
        Version 1.0.0, Copyright 2020
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
</Variant>
<Variant name="Mobile type12">
<DialogTrigger
    type="popover"
    mobileType="tray"
>
  <ActionButton>
    Info
  </ActionButton>
  <Dialog>
    <Heading>
      Version Info
    </Heading>
    <Divider/>
    <Content>
      <Text>
        Version 1.0.0,
        Copyright 2020
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
</Variant>
<Variant name="Dialog anchor12">
<Flex gap="size-1000">
    <DialogTrigger
        type="popover"
        targetRef={ref}
    >
        <ActionButton>
          Trigger
        </ActionButton>
        <Dialog>
          <Heading>
            The Heading
          </Heading>
          <Divider/>
          <Content>
            <Text>
              This is a
              popover
              anchored to
              the span.
            </Text>
          </Content>
        </Dialog>
      </DialogTrigger>
<span
    ref={ref}
    style={{
        width: '100px'
    }}
>
        Popover appears
        over here
      </span>
</Flex>
</Variant>
<Variant name="Placement">
<DialogTrigger type="popover" placement="right top">
  <ActionButton>Trigger</ActionButton>
  <Dialog>
    <Heading>The Heading</Heading>
    <Divider/>
    <Content>
      <Text>
        This is a popover placed to the right of its
        trigger and offset so the arrow is at the top of the dialog.
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
</Variant>
<Variant name="Placement1">
<DialogTrigger type="popover" placement="right top">
  <ActionButton>Trigger</ActionButton>
  <Dialog>
    <Heading>The Heading</Heading>
    <Divider/>
    <Content>
      <Text>
        This is a popover placed to the right of its
        trigger and offset so the arrow is at the top of
        the dialog.
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
</Variant>
<Variant name="Placement12">
<DialogTrigger
    type="popover"
    placement="right top"
>
  <ActionButton>
    Trigger
  </ActionButton>
  <Dialog>
    <Heading>
      The Heading
    </Heading>
    <Divider/>
    <Content>
      <Text>
        This is a
        popover placed
        to the right of
        its trigger and
        offset so the
        arrow is at the
        top of the
        dialog.
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
</Variant>
<Variant name="Offset and cross offset">
<DialogTrigger type="popover" placement="top" offset={50}>
  <ActionButton>Trigger</ActionButton>
  <Dialog>
    <Heading>Offset</Heading>
    <Divider/>
    <Content>
      <Text>
        Offset by an additional 50px.
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
</Variant>
<Variant name="Offset and cross offset1">
<DialogTrigger type="popover" placement="top" offset={50}>
  <ActionButton>Trigger</ActionButton>
  <Dialog>
    <Heading>Offset</Heading>
    <Divider/>
    <Content>
      <Text>
        Offset by an additional 50px.
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
</Variant>
<Variant name="Offset and cross offset12">
<DialogTrigger
    type="popover"
    placement="top"
    offset={50}
>
  <ActionButton>
    Trigger
  </ActionButton>
  <Dialog>
    <Heading>
      Offset
    </Heading>
    <Divider/>
    <Content>
      <Text>
        Offset by an
        additional
        50px.
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
</Variant>
<Variant name="Offset and cross offset123">
<DialogTrigger type="popover" placement="top" crossOffset={100}>
  <ActionButton>Trigger</ActionButton>
  <Dialog>
    <Heading>Cross offset</Heading>
    <Divider/>
    <Content>
      <Text>
        Offset by an additional 100px.
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
</Variant>
<Variant name="Offset and cross offset1234">
<DialogTrigger
    type="popover"
    placement="top"
    crossOffset={100}
>
  <ActionButton>Trigger</ActionButton>
  <Dialog>
    <Heading>Cross offset</Heading>
    <Divider/>
    <Content>
      <Text>
        Offset by an additional 100px.
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
</Variant>
<Variant name="Offset and cross offset12345">
<DialogTrigger
    type="popover"
    placement="top"
    crossOffset={100}
>
  <ActionButton>
    Trigger
  </ActionButton>
  <Dialog>
    <Heading>
      Cross offset
    </Heading>
    <Divider/>
    <Content>
      <Text>
        Offset by an
        additional
        100px.
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
</Variant>
<Variant name="Flipping">
<Flex gap="size-100" wrap>
  <DialogTrigger type="popover" placement="bottom">
    <ActionButton>Default DialogTrigger</ActionButton>
    <Dialog>
      <Heading>The Heading</Heading>
      <Divider/>
      <Content>
        <Text>
          This is a popover that will flip if it can't fully render below the
          button.
        </Text>
      </Content>
    </Dialog>
  </DialogTrigger>
   <DialogTrigger type="popover" placement="bottom" shouldFlip={false}>
    <ActionButton>DialogTrigger with shouldFlip=false</ActionButton>
    <Dialog>
      <Heading>The Heading</Heading>
      <Divider/>
      <Content>
        <Text>
          This is a popover that won't flip if it can't fully render below the
          button.
        </Text>
      </Content>
    </Dialog>
  </DialogTrigger>
</Flex>
</Variant>
<Variant name="Flipping1">
<Flex gap="size-100" wrap>
  <DialogTrigger type="popover" placement="bottom">
    <ActionButton>Default DialogTrigger</ActionButton>
    <Dialog>
      <Heading>The Heading</Heading>
      <Divider/>
      <Content>
        <Text>
          This is a popover that will flip if it can't
          fully render below the button.
        </Text>
      </Content>
    </Dialog>
  </DialogTrigger>
   <DialogTrigger
       type="popover"
       placement="bottom"
       shouldFlip={false}
   >
    <ActionButton>
      DialogTrigger with shouldFlip=false
    </ActionButton>
    <Dialog>
      <Heading>The Heading</Heading>
      <Divider/>
      <Content>
        <Text>
          This is a popover that won't flip if it can't
          fully render below the button.
        </Text>
      </Content>
    </Dialog>
  </DialogTrigger>
</Flex>
</Variant>
<Variant name="Flipping12">
<Flex
    gap="size-100"
    wrap
>
  <DialogTrigger
      type="popover"
      placement="bottom"
  >
    <ActionButton>
      Default
      DialogTrigger
    </ActionButton>
    <Dialog>
      <Heading>
        The Heading
      </Heading>
      <Divider/>
      <Content>
        <Text>
          This is a
          popover that
          will flip if
          it can't
          fully render
          below the
          button.
        </Text>
      </Content>
    </Dialog>
  </DialogTrigger>
   <DialogTrigger
       type="popover"
       placement="bottom"
       shouldFlip={false}
   >
    <ActionButton>
      DialogTrigger
      with
      shouldFlip=false
    </ActionButton>
    <Dialog>
      <Heading>
        The Heading
      </Heading>
      <Divider/>
      <Content>
        <Text>
          This is a
          popover that
          won't flip if
          it can't
          fully render
          below the
          button.
        </Text>
      </Content>
    </Dialog>
  </DialogTrigger>
</Flex>
</Variant>
<Variant name="Container padding">
<DialogTrigger type="popover" placement="top" containerPadding={50}>
  <ActionButton>Trigger</ActionButton>
  <Dialog>
    <Heading>The Heading</Heading>
    <Divider/>
    <Content>
      <Text>
        This is a popover.
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
</Variant>
<Variant name="Container padding1">
<DialogTrigger
    type="popover"
    placement="top"
    containerPadding={50}
>
  <ActionButton>Trigger</ActionButton>
  <Dialog>
    <Heading>The Heading</Heading>
    <Divider/>
    <Content>
      <Text>
        This is a popover.
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
</Variant>
<Variant name="Container padding12">
<DialogTrigger
    type="popover"
    placement="top"
    containerPadding={50}
>
  <ActionButton>
    Trigger
  </ActionButton>
  <Dialog>
    <Heading>
      The Heading
    </Heading>
    <Divider/>
    <Content>
      <Text>
        This is a
        popover.
      </Text>
    </Content>
  </Dialog>
</DialogTrigger>
</Variant>
<Variant name="Events">
<Flex alignItems="center" gap="size-100">
    <DialogTrigger
        type="popover"
        placement="top"
        onOpenChange={(isOpen) => setState(isOpen)}
    >
        <ActionButton>Whispers</ActionButton>
        <Dialog>
          <Heading>Whispers and DMs</Heading>
          <Divider/>
          <Content>
            <Text>
              You have 0 new messages.
            </Text>
          </Content>
        </Dialog>
      </DialogTrigger>
<Text>Current open state: {state.toString()}</Text>
</Flex>
</Variant>
<Variant name="Events1">
<Flex alignItems="center" gap="size-100">
    <DialogTrigger
        type="popover"
        placement="top"
        onOpenChange={(isOpen) => setState(isOpen)}
    >
        <ActionButton>Whispers</ActionButton>
        <Dialog>
          <Heading>Whispers and DMs</Heading>
          <Divider/>
          <Content>
            <Text>
              You have 0 new messages.
            </Text>
          </Content>
        </Dialog>
      </DialogTrigger>
<Text>Current open state: {state.toString()}</Text>
</Flex>
</Variant>
<Variant name="Events12">
<Flex
    alignItems="center"
    gap="size-100"
>
    <DialogTrigger
        type="popover"
        placement="top"
        onOpenChange={(
            isOpen
        ) =>
            setState(
                isOpen
            )}
    >
        <ActionButton>
          Whispers
        </ActionButton>
        <Dialog>
          <Heading>
            Whispers and
            DMs
          </Heading>
          <Divider/>
          <Content>
            <Text>
              You have 0
              new
              messages.
            </Text>
          </Content>
        </Dialog>
      </DialogTrigger>
<Text>
        Current open
        state:{' '}
    {state
        .toString()}
      </Text>
</Flex>
</Variant>
</Component>
<Component name="Tooltip" docURL="https://react-spectrum.adobe.com/react-spectrum/Tooltip.html">
<Variant name="Examples">
<TooltipTrigger>
  <ActionButton aria-label="Edit Name"><Edit/></ActionButton>
  <Tooltip>Change Name</Tooltip>
</TooltipTrigger>
</Variant>
<Variant name="Examples1">
<TooltipTrigger>
  <ActionButton aria-label="Edit Name">
    <Edit/>
  </ActionButton>
  <Tooltip>Change Name</Tooltip>
</TooltipTrigger>
</Variant>
<Variant name="Examples12">
<TooltipTrigger>
  <ActionButton aria-label="Edit Name">
    <Edit/>
  </ActionButton>
  <Tooltip>
    Change Name
  </Tooltip>
</TooltipTrigger>
</Variant>
<Variant name="Tooltip Delay">
<TooltipTrigger delay={0}>
  <ActionButton aria-label="Save"><Save/></ActionButton>
  <Tooltip>Saving applies your new settings right away.</Tooltip>
</TooltipTrigger>
</Variant>
<Variant name="Tooltip Delay1">
<TooltipTrigger delay={0}>
  <ActionButton aria-label="Save">
    <Save/>
  </ActionButton>
  <Tooltip>
    Saving applies your new settings right away.
  </Tooltip>
</TooltipTrigger>
</Variant>
<Variant name="Tooltip Delay12">
<TooltipTrigger
    delay={0}
>
  <ActionButton aria-label="Save">
    <Save/>
  </ActionButton>
  <Tooltip>
    Saving applies your
    new settings right
    away.
  </Tooltip>
</TooltipTrigger>
</Variant>
<Variant name="Warmup / Cooldown">
<Flex gap="size-200">
  <TooltipTrigger>
    <ActionButton>Hover me</ActionButton>
    <Tooltip>I come up after a delay.</Tooltip>
  </TooltipTrigger>
  <TooltipTrigger>
    <ActionButton>Then hover me</ActionButton>
    <Tooltip>If you did it quickly, I appear immediately.</Tooltip>
  </TooltipTrigger>
</Flex>
</Variant>
<Variant name="Warmup / Cooldown1">
<Flex gap="size-200">
  <TooltipTrigger>
    <ActionButton>Hover me</ActionButton>
    <Tooltip>I come up after a delay.</Tooltip>
  </TooltipTrigger>
  <TooltipTrigger>
    <ActionButton>Then hover me</ActionButton>
    <Tooltip>
      If you did it quickly, I appear immediately.
    </Tooltip>
  </TooltipTrigger>
</Flex>
</Variant>
<Variant name="Warmup / Cooldown12">
<Flex gap="size-200">
  <TooltipTrigger>
    <ActionButton>
      Hover me
    </ActionButton>
    <Tooltip>
      I come up after a
      delay.
    </Tooltip>
  </TooltipTrigger>
  <TooltipTrigger>
    <ActionButton>
      Then hover me
    </ActionButton>
    <Tooltip>
      If you did it
      quickly, I appear
      immediately.
    </Tooltip>
  </TooltipTrigger>
</Flex>
</Variant>
<Variant name="Placement">
<TooltipTrigger placement="end">
  <ActionButton aria-label="Foo">Placement</ActionButton>
  <Tooltip>
    In left-to-right, this is on the right. In right-to-left, this is on the
    left.
  </Tooltip>
</TooltipTrigger>
</Variant>
<Variant name="Placement1">
<TooltipTrigger placement="end">
  <ActionButton aria-label="Foo">Placement</ActionButton>
  <Tooltip>
    In left-to-right, this is on the right. In
    right-to-left, this is on the left.
  </Tooltip>
</TooltipTrigger>
</Variant>
<Variant name="Placement12">
<TooltipTrigger placement="end">
  <ActionButton aria-label="Foo">
    Placement
  </ActionButton>
  <Tooltip>
    In left-to-right,
    this is on the
    right. In
    right-to-left, this
    is on the left.
  </Tooltip>
</TooltipTrigger>
</Variant>
<Variant name="Offset and cross offset">
<TooltipTrigger offset={50}>
  <ActionButton aria-label="Offset from trigger">Offset</ActionButton>
  <Tooltip>This will shift up.</Tooltip>
</TooltipTrigger>
</Variant>
<Variant name="Offset and cross offset1">
<TooltipTrigger offset={50}>
  <ActionButton aria-label="Offset from trigger">
    Offset
  </ActionButton>
  <Tooltip>This will shift up.</Tooltip>
</TooltipTrigger>
</Variant>
<Variant name="Offset and cross offset12">
<TooltipTrigger
    offset={50}
>
  <ActionButton aria-label="Offset from trigger">
    Offset
  </ActionButton>
  <Tooltip>
    This will shift up.
  </Tooltip>
</TooltipTrigger>
</Variant>
<Variant name="Offset and cross offset123">
<TooltipTrigger crossOffset={100} placement="bottom">
  <ActionButton aria-label="Cross Offset from trigger">
    Cross Offset
  </ActionButton>
  <Tooltip>This will shift over to the right.</Tooltip>
</TooltipTrigger>
</Variant>
<Variant name="Offset and cross offset1234">
<TooltipTrigger crossOffset={100} placement="bottom">
  <ActionButton aria-label="Cross Offset from trigger">
    Cross Offset
  </ActionButton>
  <Tooltip>This will shift over to the right.</Tooltip>
</TooltipTrigger>
</Variant>
<Variant name="Offset and cross offset12345">
<TooltipTrigger
    crossOffset={100}
    placement="bottom"
>
  <ActionButton aria-label="Cross Offset from trigger">
    Cross Offset
  </ActionButton>
  <Tooltip>
    This will shift
    over to the right.
  </Tooltip>
</TooltipTrigger>
</Variant>
<Variant name="Events">
<Flex alignItems="center" gap="size-100">
        <TooltipTrigger isOpen={isOpen} onOpenChange={setOpen}>
        <ActionButton aria-label="Resize"><Resize/></ActionButton>
        <Tooltip>Resize text.</Tooltip>
      </TooltipTrigger>
      <Text>Tooltip is {isOpen ? 'showing' : 'not showing'}</Text>
    </Flex>
</Variant>
<Variant name="Events1">
<Flex alignItems="center" gap="size-100">
    <TooltipTrigger
        isOpen={isOpen}
        onOpenChange={setOpen}
    >
        <ActionButton aria-label="Resize">
          <Resize/>
        </ActionButton>
        <Tooltip>Resize text.</Tooltip>
      </TooltipTrigger>
<Text>
        Tooltip is {isOpen ? 'showing' : 'not showing'}
      </Text>
</Flex>
</Variant>
<Variant name="Events12">
<Flex
    alignItems="center"
    gap="size-100"
>
    <TooltipTrigger
        isOpen={isOpen}
        onOpenChange={setOpen}
    >
        <ActionButton aria-label="Resize">
          <Resize/>
        </ActionButton>
        <Tooltip>
          Resize text.
        </Tooltip>
      </TooltipTrigger>
<Text>
        Tooltip is{' '}
    {isOpen
        ? 'showing'
        : 'not showing'}
      </Text>
</Flex>
</Variant>
<Variant name="Visual options">
<TooltipTrigger>
  <ActionButton aria-label="Approve"><ThumbUp/></ActionButton>
  <Tooltip variant="positive" showIcon>Approve workflow.</Tooltip>
</TooltipTrigger>
</Variant>
<Variant name="Visual options1">
<TooltipTrigger>
  <ActionButton aria-label="Approve">
    <ThumbUp/>
  </ActionButton>
  <Tooltip variant="positive" showIcon>
    Approve workflow.
  </Tooltip>
</TooltipTrigger>
</Variant>
<Variant name="Visual options12">
<TooltipTrigger>
  <ActionButton aria-label="Approve">
    <ThumbUp/>
  </ActionButton>
  <Tooltip
      variant="positive"
      showIcon
  >
    Approve workflow.
  </Tooltip>
</TooltipTrigger>
</Variant>
<Variant name="Visual options123">
<TooltipTrigger>
  <ActionButton aria-label="Information"><Question/></ActionButton>
  <Tooltip variant="info" showIcon>More information menu.</Tooltip>
</TooltipTrigger>
</Variant>
<Variant name="Visual options1234">
<TooltipTrigger>
  <ActionButton aria-label="Information">
    <Question/>
  </ActionButton>
  <Tooltip variant="info" showIcon>
    More information menu.
  </Tooltip>
</TooltipTrigger>
</Variant>
<Variant name="Visual options12345">
<TooltipTrigger>
  <ActionButton aria-label="Information">
    <Question/>
  </ActionButton>
  <Tooltip
      variant="info"
      showIcon
  >
    More information
    menu.
  </Tooltip>
</TooltipTrigger>
</Variant>
<Variant name="Visual options123456">
<TooltipTrigger>
  <ActionButton aria-label="Danger Will Robinson"><Delete/></ActionButton>
  <Tooltip variant="negative" showIcon>Dangerous action.</Tooltip>
</TooltipTrigger>
</Variant>
<Variant name="Visual options1234567">
<TooltipTrigger>
  <ActionButton aria-label="Danger Will Robinson">
    <Delete/>
  </ActionButton>
  <Tooltip variant="negative" showIcon>
    Dangerous action.
  </Tooltip>
</TooltipTrigger>
</Variant>
<Variant name="Visual options12345678">
<TooltipTrigger>
  <ActionButton aria-label="Danger Will Robinson">
    <Delete/>
  </ActionButton>
  <Tooltip
      variant="negative"
      showIcon
  >
    Dangerous action.
  </Tooltip>
</TooltipTrigger>
</Variant>
<Variant name="Options">
<TooltipTrigger isDisabled>
  <ActionButton
      aria-label="Danger Will Robinson"
      onPress={() => alert('pressed trigger')}
  >
    <Delete/>
  </ActionButton>
  <Tooltip variant="negative" showIcon>Dangerous action.</Tooltip>
</TooltipTrigger>
</Variant>
<Variant name="Options1">
<TooltipTrigger isDisabled>
  <ActionButton
      aria-label="Danger Will Robinson"
      onPress={() => alert('pressed trigger')}
  >
    <Delete/>
  </ActionButton>
  <Tooltip variant="negative" showIcon>
    Dangerous action.
  </Tooltip>
</TooltipTrigger>
</Variant>
<Variant name="Options12">
<TooltipTrigger
    isDisabled
>
  <ActionButton
      aria-label="Danger Will Robinson"
      onPress={() =>
          alert(
              'pressed trigger'
          )}
  >
    <Delete/>
  </ActionButton>
  <Tooltip
      variant="negative"
      showIcon
  >
    Dangerous action.
  </Tooltip>
</TooltipTrigger>
</Variant>
</Component>
</Category>
<Category name="Pickers">
<Component name="ComboBox" docURL="https://react-spectrum.adobe.com/react-spectrum/ComboBox.html">
<Variant name="Example">
<ComboBox label="Favorite Animal">
  <Item key="red panda">Red Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
  <Item key="aardvark">Aardvark</Item>
  <Item key="kangaroo">Kangaroo</Item>
  <Item key="snake">Snake</Item>
</ComboBox>
</Variant>
<Variant name="Example1">
<ComboBox label="Favorite Animal">
  <Item key="red panda">Red Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
  <Item key="aardvark">Aardvark</Item>
  <Item key="kangaroo">Kangaroo</Item>
  <Item key="snake">Snake</Item>
</ComboBox>
</Variant>
<Variant name="Example12">
<ComboBox label="Favorite Animal">
  <Item key="red panda">
    Red Panda
  </Item>
  <Item key="cat">
    Cat
  </Item>
  <Item key="dog">
    Dog
  </Item>
  <Item key="aardvark">
    Aardvark
  </Item>
  <Item key="kangaroo">
    Kangaroo
  </Item>
  <Item key="snake">
    Snake
  </Item>
</ComboBox>
</Variant>
<Variant name="Content">
<>
        <p>Topic id: {majorId}</p>
      <ComboBox
          label="Pick an engineering major"
          defaultItems={options}
          onSelectionChange={setMajorId}>
        {item => <Item>{item.name}</Item>}
      </ComboBox>
    </>
</Variant>
<Variant name="Content1">
<>
    <p>Topic id: {majorId}</p>
<ComboBox
    label="Pick an engineering major"
    defaultItems={options}
    onSelectionChange={setMajorId}>
        {item => <Item>{item.name}</Item>}
      </ComboBox>
</>
</Variant>
<Variant name="Content12">
<>
    <p>
    Topic id:{' '}
        {majorId}
      </p>
<ComboBox
    label="Pick an engineering major"
    defaultItems={options}
    onSelectionChange={setMajorId}
>
        {(item) => (
            <Item>
            {item.name}
          </Item>
        )}
      </ComboBox>
</>
</Variant>
<Variant name="Value">
<Flex gap="size-150" wrap>
    <ComboBox
        label="Adobe product (Uncontrolled)"
        defaultItems={options}
        defaultInputValue="Adobe XD">
        {item => <Item>{item.name}</Item>}
      </ComboBox>

<ComboBox
    label="Pick an Adobe product (Controlled)"
    defaultItems={options}
    inputValue={value}
    onInputChange={setValue}>
        {item => <Item>{item.name}</Item>}
      </ComboBox>
</Flex>
</Variant>
<Variant name="Value1">
<Flex gap="size-150" wrap>
    <ComboBox
        label="Adobe product (Uncontrolled)"
        defaultItems={options}
        defaultInputValue="Adobe XD">
        {item => <Item>{item.name}</Item>}
      </ComboBox>

<ComboBox
    label="Pick an Adobe product (Controlled)"
    defaultItems={options}
    inputValue={value}
    onInputChange={setValue}>
        {item => <Item>{item.name}</Item>}
      </ComboBox>
</Flex>
</Variant>
<Variant name="Value12">
<Flex
    gap="size-150"
    wrap
>
    <ComboBox
        label="Adobe product (Uncontrolled)"
        defaultItems={options}
        defaultInputValue="Adobe XD"
    >
        {(item) => (
            <Item>
            {item.name}
          </Item>
        )}
      </ComboBox>

<ComboBox
    label="Pick an Adobe product (Controlled)"
    defaultItems={options}
    inputValue={value}
    onInputChange={setValue}
>
        {(item) => (
            <Item>
            {item.name}
          </Item>
        )}
      </ComboBox>
</Flex>
</Variant>
<Variant name="Custom Value">
<>
    <p>
    Please indicate what fruit you would like included with your delivery.
    If your desired choice does not appear in the list feel free to write
    your own selection.
    </p>
    <ComboBox
        label="Preferred fruit"
        defaultItems={options}
        allowsCustomValue
    >
        {(item) => <Item key={item.name}>{item.name}</Item>}
      </ComboBox>
</>
</Variant>
<Variant name="Custom Value1">
<>
    <p>
    Please indicate what fruit you would like included
    with your delivery. If your desired choice does not
    appear in the list feel free to write your own
    selection.
    </p>
    <ComboBox
        label="Preferred fruit"
        defaultItems={options}
        allowsCustomValue
    >
        {(item) => <Item key={item.name}>{item.name}</Item>}
      </ComboBox>
</>
</Variant>
<Variant name="Custom Value12">
<>
    <p>
    Please indicate
    what fruit you
    would like
    included with
    your delivery. If
    your desired
    choice does not
    appear in the
    list feel free to
    write your own
    selection.
    </p>
    <ComboBox
        label="Preferred fruit"
        defaultItems={options}
        allowsCustomValue
    >
        {(item) => (
            <Item
                key={item
                    .name}
            >
            {item.name}
          </Item>
        )}
      </ComboBox>
</>
</Variant>
<Variant name="HTML forms">
<Flex gap="size-200" wrap>
  <ComboBox
      label="Ice cream flavor"
      name="iceCream"
      allowsCustomValue>
    <Item>Chocolate</Item>
    <Item>Mint</Item>
    <Item>Strawberry</Item>
    <Item>Vanilla</Item>
  </ComboBox>
  <ComboBox
      label="Favorite Animal"
      name="favoriteAnimalId"
      formValue="key">
    <Item key="panda">Panda</Item>
    <Item key="cat">Cat</Item>
    <Item key="dog">Dog</Item>
  </ComboBox>
</Flex>
</Variant>
<Variant name="HTML forms1">
<Flex gap="size-200" wrap>
  <ComboBox
      label="Ice cream flavor"
      name="iceCream"
      allowsCustomValue>
    <Item>Chocolate</Item>
    <Item>Mint</Item>
    <Item>Strawberry</Item>
    <Item>Vanilla</Item>
  </ComboBox>
  <ComboBox
      label="Favorite Animal"
      name="favoriteAnimalId"
      formValue="key">
    <Item key="panda">Panda</Item>
    <Item key="cat">Cat</Item>
    <Item key="dog">Dog</Item>
  </ComboBox>
</Flex>
</Variant>
<Variant name="HTML forms12">
<Flex
    gap="size-200"
    wrap
>
  <ComboBox
      label="Ice cream flavor"
      name="iceCream"
      allowsCustomValue>
    <Item>
      Chocolate
    </Item>
    <Item>Mint</Item>
    <Item>
      Strawberry
    </Item>
    <Item>
      Vanilla
    </Item>
  </ComboBox>
  <ComboBox
      label="Favorite Animal"
      name="favoriteAnimalId"
      formValue="key">
    <Item key="panda">
      Panda
    </Item>
    <Item key="cat">
      Cat
    </Item>
    <Item key="dog">
      Dog
    </Item>
  </ComboBox>
</Flex>
</Variant>
<Variant name="Labeling">
<ComboBox label="Favorite Animal" isRequired necessityIndicator="icon">
  <Item key="red panda">Red Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
  <Item key="aardvark">Aardvark</Item>
  <Item key="kangaroo">Kangaroo</Item>
  <Item key="snake">Snake</Item>
</ComboBox>
</Variant>
<Variant name="Labeling1">
<ComboBox
    label="Favorite Animal"
    isRequired
    necessityIndicator="icon"
>
  <Item key="red panda">Red Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
  <Item key="aardvark">Aardvark</Item>
  <Item key="kangaroo">Kangaroo</Item>
  <Item key="snake">Snake</Item>
</ComboBox>
</Variant>
<Variant name="Labeling12">
<ComboBox
    label="Favorite Animal"
    isRequired
    necessityIndicator="icon"
>
  <Item key="red panda">
    Red Panda
  </Item>
  <Item key="cat">
    Cat
  </Item>
  <Item key="dog">
    Dog
  </Item>
  <Item key="aardvark">
    Aardvark
  </Item>
  <Item key="kangaroo">
    Kangaroo
  </Item>
  <Item key="snake">
    Snake
  </Item>
</ComboBox>
</Variant>
<Variant name="Labeling123">
<ComboBox label="Favorite Animal" isRequired necessityIndicator="label">
  <Item key="red panda">Red Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
  <Item key="aardvark">Aardvark</Item>
  <Item key="kangaroo">Kangaroo</Item>
  <Item key="snake">Snake</Item>
</ComboBox>
</Variant>
<Variant name="Labeling1234">
<ComboBox
    label="Favorite Animal"
    isRequired
    necessityIndicator="label"
>
  <Item key="red panda">Red Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
  <Item key="aardvark">Aardvark</Item>
  <Item key="kangaroo">Kangaroo</Item>
  <Item key="snake">Snake</Item>
</ComboBox>
</Variant>
<Variant name="Labeling12345">
<ComboBox
    label="Favorite Animal"
    isRequired
    necessityIndicator="label"
>
  <Item key="red panda">
    Red Panda
  </Item>
  <Item key="cat">
    Cat
  </Item>
  <Item key="dog">
    Dog
  </Item>
  <Item key="aardvark">
    Aardvark
  </Item>
  <Item key="kangaroo">
    Kangaroo
  </Item>
  <Item key="snake">
    Snake
  </Item>
</ComboBox>
</Variant>
<Variant name="Labeling123456">
<ComboBox label="Favorite Animal" necessityIndicator="label">
  <Item key="red panda">Red Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
  <Item key="aardvark">Aardvark</Item>
  <Item key="kangaroo">Kangaroo</Item>
  <Item key="snake">Snake</Item>
</ComboBox>
</Variant>
<Variant name="Labeling1234567">
<ComboBox
    label="Favorite Animal"
    necessityIndicator="label"
>
  <Item key="red panda">Red Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
  <Item key="aardvark">Aardvark</Item>
  <Item key="kangaroo">Kangaroo</Item>
  <Item key="snake">Snake</Item>
</ComboBox>
</Variant>
<Variant name="Labeling12345678">
<ComboBox
    label="Favorite Animal"
    necessityIndicator="label"
>
  <Item key="red panda">
    Red Panda
  </Item>
  <Item key="cat">
    Cat
  </Item>
  <Item key="dog">
    Dog
  </Item>
  <Item key="aardvark">
    Aardvark
  </Item>
  <Item key="kangaroo">
    Kangaroo
  </Item>
  <Item key="snake">
    Snake
  </Item>
</ComboBox>
</Variant>
<Variant name="Selection">
<Flex gap="size-150" wrap>
    <ComboBox
        label="Pick an Adobe product (uncontrolled)"
        defaultItems={options}
        defaultSelectedKey={9}>
        {item => <Item>{item.name}</Item>}
      </ComboBox>

<ComboBox
    label="Pick an Adobe product (controlled)"
    defaultItems={options}
    selectedKey={productId}
    onSelectionChange={selected => setProductId(selected)}>
        {item => <Item>{item.name}</Item>}
      </ComboBox>
</Flex>
</Variant>
<Variant name="Selection1">
<Flex gap="size-150" wrap>
    <ComboBox
        label="Pick an Adobe product (uncontrolled)"
        defaultItems={options}
        defaultSelectedKey={9}
    >
        {(item) => <Item>{item.name}</Item>}
      </ComboBox>

<ComboBox
    label="Pick an Adobe product (controlled)"
    defaultItems={options}
    selectedKey={productId}
    onSelectionChange={(selected) =>
        setProductId(selected)}
>
        {(item) => <Item>{item.name}</Item>}
      </ComboBox>
</Flex>
</Variant>
<Variant name="Selection12">
<Flex
    gap="size-150"
    wrap
>
    <ComboBox
        label="Pick an Adobe product (uncontrolled)"
        defaultItems={options}
        defaultSelectedKey={9}
    >
        {(item) => (
            <Item>
            {item.name}
          </Item>
        )}
      </ComboBox>

<ComboBox
    label="Pick an Adobe product (controlled)"
    defaultItems={options}
    selectedKey={productId}
    onSelectionChange={(selected) =>
        setProductId(
            selected
        )}
>
        {(item) => (
            <Item>
            {item.name}
          </Item>
        )}
      </ComboBox>
</Flex>
</Variant>
<Variant name="Links">
<ComboBox label="Tech company websites">
  <Item href="https://adobe.com/" target="_blank">Adobe</Item>
  <Item href="https://apple.com/" target="_blank">Apple</Item>
  <Item href="https://google.com/" target="_blank">Google</Item>
  <Item href="https://microsoft.com/" target="_blank">Microsoft</Item>
</ComboBox>
</Variant>
<Variant name="Links1">
<ComboBox label="Tech company websites">
  <Item href="https://adobe.com/" target="_blank">
    Adobe
  </Item>
  <Item href="https://apple.com/" target="_blank">
    Apple
  </Item>
  <Item href="https://google.com/" target="_blank">
    Google
  </Item>
  <Item href="https://microsoft.com/" target="_blank">
    Microsoft
  </Item>
</ComboBox>
</Variant>
<Variant name="Links12">
<ComboBox label="Tech company websites">
  <Item
      href="https://adobe.com/"
      target="_blank"
  >
    Adobe
  </Item>
  <Item
      href="https://apple.com/"
      target="_blank"
  >
    Apple
  </Item>
  <Item
      href="https://google.com/"
      target="_blank"
  >
    Google
  </Item>
  <Item
      href="https://microsoft.com/"
      target="_blank"
  >
    Microsoft
  </Item>
</ComboBox>
</Variant>
<Variant name="Static items">
<ComboBox label="Preferred fruit or vegetable">
  <Section title="Fruit">
    <Item key="Apple">Apple</Item>
    <Item key="Banana">Banana</Item>
    <Item key="Orange">Orange</Item>
    <Item key="Honeydew">Honeydew</Item>
    <Item key="Grapes">Grapes</Item>
    <Item key="Watermelon">Watermelon</Item>
    <Item key="Cantaloupe">Cantaloupe</Item>
    <Item key="Pear">Pear</Item>
  </Section>
  <Section title="Vegetable">
    <Item key="Cabbage">Cabbage</Item>
    <Item key="Broccoli">Broccoli</Item>
    <Item key="Carrots">Carrots</Item>
    <Item key="Lettuce">Lettuce</Item>
    <Item key="Spinach">Spinach</Item>
    <Item key="Bok Choy">Bok Choy</Item>
    <Item key="Cauliflower">Cauliflower</Item>
    <Item key="Potatoes">Potatoes</Item>
  </Section>
</ComboBox>
</Variant>
<Variant name="Static items1">
<ComboBox label="Preferred fruit or vegetable">
  <Section title="Fruit">
    <Item key="Apple">Apple</Item>
    <Item key="Banana">Banana</Item>
    <Item key="Orange">Orange</Item>
    <Item key="Honeydew">Honeydew</Item>
    <Item key="Grapes">Grapes</Item>
    <Item key="Watermelon">Watermelon</Item>
    <Item key="Cantaloupe">Cantaloupe</Item>
    <Item key="Pear">Pear</Item>
  </Section>
  <Section title="Vegetable">
    <Item key="Cabbage">Cabbage</Item>
    <Item key="Broccoli">Broccoli</Item>
    <Item key="Carrots">Carrots</Item>
    <Item key="Lettuce">Lettuce</Item>
    <Item key="Spinach">Spinach</Item>
    <Item key="Bok Choy">Bok Choy</Item>
    <Item key="Cauliflower">Cauliflower</Item>
    <Item key="Potatoes">Potatoes</Item>
  </Section>
</ComboBox>
</Variant>
<Variant name="Static items12">
<ComboBox label="Preferred fruit or vegetable">
  <Section title="Fruit">
    <Item key="Apple">
      Apple
    </Item>
    <Item key="Banana">
      Banana
    </Item>
    <Item key="Orange">
      Orange
    </Item>
    <Item key="Honeydew">
      Honeydew
    </Item>
    <Item key="Grapes">
      Grapes
    </Item>
    <Item key="Watermelon">
      Watermelon
    </Item>
    <Item key="Cantaloupe">
      Cantaloupe
    </Item>
    <Item key="Pear">
      Pear
    </Item>
  </Section>
  <Section title="Vegetable">
    <Item key="Cabbage">
      Cabbage
    </Item>
    <Item key="Broccoli">
      Broccoli
    </Item>
    <Item key="Carrots">
      Carrots
    </Item>
    <Item key="Lettuce">
      Lettuce
    </Item>
    <Item key="Spinach">
      Spinach
    </Item>
    <Item key="Bok Choy">
      Bok Choy
    </Item>
    <Item key="Cauliflower">
      Cauliflower
    </Item>
    <Item key="Potatoes">
      Potatoes
    </Item>
  </Section>
</ComboBox>
</Variant>
<Variant name="Dynamic items">
<ComboBox label="Preferred fruit or vegetable" defaultItems={options}>
      {item => (
          <Section key={item.name} items={item.children} title={item.name}>
          {item => <Item key={item.name}>{item.name}</Item>}
        </Section>
      )}
    </ComboBox>
</Variant>
<Variant name="Dynamic items1">
<ComboBox
    label="Preferred fruit or vegetable"
    defaultItems={options}
>
      {(item) => (
          <Section
              key={item.name}
              items={item.children}
              title={item.name}
          >
          {(item) => (
              <Item key={item.name}>{item.name}</Item>
          )}
        </Section>
      )}
    </ComboBox>
</Variant>
<Variant name="Dynamic items12">
<ComboBox
    label="Preferred fruit or vegetable"
    defaultItems={options}
>
      {(item) => (
          <Section
              key={item.name}
              items={item
                  .children}
              title={item
                  .name}
          >
          {(item) => (
              <Item
                  key={item
                      .name}
              >
              {item.name}
            </Item>
          )}
        </Section>
      )}
    </ComboBox>
</Variant>
<Variant name="Events">
<>
    <p>Current selected major id: {majorId}</p>
<p>Current input text: {value}</p>
<ComboBox
    label="Pick a engineering major"
    defaultItems={options}
    selectedKey={majorId}
    onSelectionChange={onSelectionChange}
    onInputChange={onInputChange}>
        {item => <Item>{item.name}</Item>}
      </ComboBox>
</>
</Variant>
<Variant name="Events1">
<>
    <p>Current selected major id: {majorId}</p>
<p>Current input text: {value}</p>
<ComboBox
    label="Pick a engineering major"
    defaultItems={options}
    selectedKey={majorId}
    onSelectionChange={onSelectionChange}
    onInputChange={onInputChange}>
        {item => <Item>{item.name}</Item>}
      </ComboBox>
</>
</Variant>
<Variant name="Events12">
<>
    <p>
    Current selected
    major id:{' '}
        {majorId}
      </p>
<p>
        Current input
        text: {value}
      </p>
<ComboBox
    label="Pick a engineering major"
    defaultItems={options}
    selectedKey={majorId}
    onSelectionChange={onSelectionChange}
    onInputChange={onInputChange}
>
        {(item) => (
            <Item>
            {item.name}
          </Item>
        )}
      </ComboBox>
</>
</Variant>
<Variant name="Fully controlled ComboBox">
<>
    <p>Current selected major id: {fieldState.selectedKey}</p>
<p>Current input text: {fieldState.inputValue}</p>
<ComboBox
    label="Pick a engineering major"
    defaultItems={list.items}
    selectedKey={fieldState.selectedKey}
    inputValue={fieldState.inputValue}
    onSelectionChange={onSelectionChange}
    onInputChange={onInputChange}
>
        {(item) => <Item>{item.value.name}</Item>}
      </ComboBox>
</>
</Variant>
<Variant name="Fully controlled ComboBox1">
<>
    <p>
    Current selected major id: {fieldState.selectedKey}
      </p>
<p>Current input text: {fieldState.inputValue}</p>
<ComboBox
    label="Pick a engineering major"
    defaultItems={list.items}
    selectedKey={fieldState.selectedKey}
    inputValue={fieldState.inputValue}
    onSelectionChange={onSelectionChange}
    onInputChange={onInputChange}
>
        {(item) => <Item>{item.value.name}</Item>}
      </ComboBox>
</>
</Variant>
<Variant name="Fully controlled ComboBox12">
<>
    <p>
    Current selected
    major id:{' '}
        {fieldState
            .selectedKey}
      </p>
<p>
        Current input
        text:{' '}
    {fieldState
        .inputValue}
      </p>
<ComboBox
    label="Pick a engineering major"
    defaultItems={list
        .items}
    selectedKey={fieldState
        .selectedKey}
    inputValue={fieldState
        .inputValue}
    onSelectionChange={onSelectionChange}
    onInputChange={onInputChange}
>
        {(item) => (
            <Item>
            {item.value
                .name}
          </Item>
        )}
      </ComboBox>
</>
</Variant>
<Variant name="Complex items">
<ComboBox label="Select action">
  <Item textValue="Add to queue">
    <Add/>
    <Text>Add to queue</Text>
    <Text slot="description">Add to current watch queue.</Text>
  </Item>
  <Item textValue="Add review">
    <Draw/>
    <Text>Add review</Text>
    <Text slot="description">Post a review for the episode.</Text>
  </Item>
  <Item textValue="Subscribe to series">
    <Bell/>
    <Text>Subscribe to series</Text>
    <Text slot="description">
      Add series to your subscription list and be notified when a new episode
      airs.
    </Text>
  </Item>
  <Item textValue="Report">
    <Alert/>
    <Text>Report</Text>
    <Text slot="description">Report an issue/violation.</Text>
  </Item>
</ComboBox>
</Variant>
<Variant name="Complex items1">
<ComboBox label="Select action">
  <Item textValue="Add to queue">
    <Add/>
    <Text>Add to queue</Text>
    <Text slot="description">
      Add to current watch queue.
    </Text>
  </Item>
  <Item textValue="Add review">
    <Draw/>
    <Text>Add review</Text>
    <Text slot="description">
      Post a review for the episode.
    </Text>
  </Item>
  <Item textValue="Subscribe to series">
    <Bell/>
    <Text>Subscribe to series</Text>
    <Text slot="description">
      Add series to your subscription list and be notified
      when a new episode airs.
    </Text>
  </Item>
  <Item textValue="Report">
    <Alert/>
    <Text>Report</Text>
    <Text slot="description">
      Report an issue/violation.
    </Text>
  </Item>
</ComboBox>
</Variant>
<Variant name="Complex items12">
<ComboBox label="Select action">
  <Item textValue="Add to queue">
    <Add/>
    <Text>
      Add to queue
    </Text>
    <Text slot="description">
      Add to current
      watch queue.
    </Text>
  </Item>
  <Item textValue="Add review">
    <Draw/>
    <Text>
      Add review
    </Text>
    <Text slot="description">
      Post a review for
      the episode.
    </Text>
  </Item>
  <Item textValue="Subscribe to series">
    <Bell/>
    <Text>
      Subscribe to
      series
    </Text>
    <Text slot="description">
      Add series to
      your subscription
      list and be
      notified when a
      new episode airs.
    </Text>
  </Item>
  <Item textValue="Report">
    <Alert/>
    <Text>Report</Text>
    <Text slot="description">
      Report an
      issue/violation.
    </Text>
  </Item>
</ComboBox>
</Variant>
<Variant name="With avatars">
<ComboBox label="Select a user">
  <Item textValue="User 1">
    <Avatar src="https://i.imgur.com/kJOwAdv.png"/>
    <Text>User 1</Text>
  </Item>
  <Item textValue="User 2">
    <Avatar src="https://i.imgur.com/kJOwAdv.png"/>
    <Text>User 2</Text>
  </Item>
  <Item textValue="User 3">
    <Avatar src="https://i.imgur.com/kJOwAdv.png"/>
    <Text>User 3</Text>
  </Item>
  <Item textValue="User 4">
    <Avatar src="https://i.imgur.com/kJOwAdv.png"/>
    <Text>User 4</Text>
  </Item>
</ComboBox>
</Variant>
<Variant name="With avatars1">
<ComboBox label="Select a user">
  <Item textValue="User 1">
    <Avatar src="https://i.imgur.com/kJOwAdv.png"/>
    <Text>User 1</Text>
  </Item>
  <Item textValue="User 2">
    <Avatar src="https://i.imgur.com/kJOwAdv.png"/>
    <Text>User 2</Text>
  </Item>
  <Item textValue="User 3">
    <Avatar src="https://i.imgur.com/kJOwAdv.png"/>
    <Text>User 3</Text>
  </Item>
  <Item textValue="User 4">
    <Avatar src="https://i.imgur.com/kJOwAdv.png"/>
    <Text>User 4</Text>
  </Item>
</ComboBox>
</Variant>
<Variant name="With avatars12">
<ComboBox label="Select a user">
  <Item textValue="User 1">
    <Avatar src="https://i.imgur.com/kJOwAdv.png"/>
    <Text>User 1</Text>
  </Item>
  <Item textValue="User 2">
    <Avatar src="https://i.imgur.com/kJOwAdv.png"/>
    <Text>User 2</Text>
  </Item>
  <Item textValue="User 3">
    <Avatar src="https://i.imgur.com/kJOwAdv.png"/>
    <Text>User 3</Text>
  </Item>
  <Item textValue="User 4">
    <Avatar src="https://i.imgur.com/kJOwAdv.png"/>
    <Text>User 4</Text>
  </Item>
</ComboBox>
</Variant>
<Variant name="Asynchronous loading">
<ComboBox
    label="Star Wars Character Lookup"
    items={list.items}
    inputValue={list.filterText}
    onInputChange={list.setFilterText}
    loadingState={list.loadingState}
    onLoadMore={list.loadMore}
>
      {(item) => <Item key={item.name}>{item.name}</Item>}
    </ComboBox>
</Variant>
<Variant name="Asynchronous loading1">
<ComboBox
    label="Star Wars Character Lookup"
    items={list.items}
    inputValue={list.filterText}
    onInputChange={list.setFilterText}
    loadingState={list.loadingState}
    onLoadMore={list.loadMore}
>
      {(item) => <Item key={item.name}>{item.name}</Item>}
    </ComboBox>
</Variant>
<Variant name="Asynchronous loading12">
<ComboBox
    label="Star Wars Character Lookup"
    items={list.items}
    inputValue={list
        .filterText}
    onInputChange={list
        .setFilterText}
    loadingState={list
        .loadingState}
    onLoadMore={list
        .loadMore}
>
      {(item) => (
          <Item
              key={item.name}
          >
          {item.name}
        </Item>
      )}
    </ComboBox>
</Variant>
<Variant name="Asynchronous loading123">
<ComboBox
    label="Star Wars Character Lookup"
    onFocusChange={(focus) => isFocused.current = focus}
    selectedKey={selectedKey}
    onSelectionChange={onSelectionChange}
    items={list.items}
    inputValue={list.filterText}
    onInputChange={onInputChange}
    loadingState={list.loadingState}
    onLoadMore={list.loadMore}
>
      {(item) => <Item key={item.name}>{item.name}</Item>}
    </ComboBox>
</Variant>
<Variant name="Asynchronous loading1234">
<ComboBox
    label="Star Wars Character Lookup"
    onFocusChange={(focus) => isFocused.current = focus}
    selectedKey={selectedKey}
    onSelectionChange={onSelectionChange}
    items={list.items}
    inputValue={list.filterText}
    onInputChange={onInputChange}
    loadingState={list.loadingState}
    onLoadMore={list.loadMore}
>
      {(item) => <Item key={item.name}>{item.name}</Item>}
    </ComboBox>
</Variant>
<Variant name="Asynchronous loading12345">
<ComboBox
    label="Star Wars Character Lookup"
    onFocusChange={(
        focus
    ) =>
        isFocused
            .current =
            focus}
    selectedKey={selectedKey}
    onSelectionChange={onSelectionChange}
    items={list.items}
    inputValue={list
        .filterText}
    onInputChange={onInputChange}
    loadingState={list
        .loadingState}
    onLoadMore={list
        .loadMore}
>
      {(item) => (
          <Item
              key={item.name}
          >
          {item.name}
        </Item>
      )}
    </ComboBox>
</Variant>
<Variant name="Validation">
<Form validationBehavior="native" maxWidth="size-3000">
  <ComboBox label="Favorite animal" name="animal" isRequired>    <Item>Aardvark</Item>
    <Item>Cat</Item>
    <Item>Dog</Item>
    <Item>Kangaroo</Item>
    <Item>Panda</Item>
    <Item>Snake</Item>
  </ComboBox>
  <ButtonGroup>
    <Button type="submit" variant="primary">Submit</Button>
    <Button type="reset" variant="secondary">Reset</Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Validation1">
<Form validationBehavior="native" maxWidth="size-3000">
  <ComboBox
      label="Favorite animal"
      name="animal"
      isRequired
  >    <Item>Aardvark</Item>
    <Item>Cat</Item>
    <Item>Dog</Item>
    <Item>Kangaroo</Item>
    <Item>Panda</Item>
    <Item>Snake</Item>
  </ComboBox>
  <ButtonGroup>
    <Button type="submit" variant="primary">
      Submit
    </Button>
    <Button type="reset" variant="secondary">
      Reset
    </Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Validation12">
<Form
    validationBehavior="native"
    maxWidth="size-3000"
>
  <ComboBox
      label="Favorite animal"
      name="animal"
      isRequired
  >    <Item>
      Aardvark
    </Item>
    <Item>Cat</Item>
    <Item>Dog</Item>
    <Item>
      Kangaroo
    </Item>
    <Item>Panda</Item>
    <Item>Snake</Item>
  </ComboBox>
  <ButtonGroup>
    <Button
        type="submit"
        variant="primary"
    >
      Submit
    </Button>
    <Button
        type="reset"
        variant="secondary"
    >
      Reset
    </Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Custom Filtering">
<ComboBox
    onOpenChange={(isOpen, menuTrigger) => {
        // Show all items if menu is opened manually
        // i.e. by the arrow keys or trigger button
        if (menuTrigger === 'manual' && isOpen) {
            setShowAll(true);
        }
    }}
    width="size-3000"
    label="To:"
    items={showAll ? options : filteredItems}
    inputValue={filterValue}
    onInputChange={(value) => {
        setShowAll(false);
        setFilterValue(value);
    }}
    allowsCustomValue
>
      {(item) => <Item>{item.email}</Item>}
    </ComboBox>
</Variant>
<Variant name="Custom Filtering1">
<ComboBox
    onOpenChange={(isOpen, menuTrigger) => {
        // Show all items if menu is opened manually
        // i.e. by the arrow keys or trigger button
        if (menuTrigger === 'manual' && isOpen) {
            setShowAll(true);
        }
    }}
    width="size-3000"
    label="To:"
    items={showAll ? options : filteredItems}
    inputValue={filterValue}
    onInputChange={(value) => {
        setShowAll(false);
        setFilterValue(value);
    }}
    allowsCustomValue
>
      {(item) => <Item>{item.email}</Item>}
    </ComboBox>
</Variant>
<Variant name="Trigger options">
<ComboBox label="Select action" menuTrigger="focus">
  <Item textValue="Add to queue">
    <Add/>
    <Text>Add to queue</Text>
    <Text slot="description">Add to current watch queue.</Text>
  </Item>
  <Item textValue="Add review">
    <Draw/>
    <Text>Add review</Text>
    <Text slot="description">Post a review for the episode.</Text>
  </Item>
  <Item textValue="Subscribe to series">
    <Bell/>
    <Text>Subscribe to series</Text>
    <Text slot="description">
      Add series to your subscription list and be notified when a new episode
      airs.
    </Text>
  </Item>
  <Item textValue="Report">
    <Alert/>
    <Text>Report</Text>
    <Text slot="description">Report an issue/violation.</Text>
  </Item>
</ComboBox>
</Variant>
<Variant name="Trigger options1">
<ComboBox label="Select action" menuTrigger="focus">
  <Item textValue="Add to queue">
    <Add/>
    <Text>Add to queue</Text>
    <Text slot="description">
      Add to current watch queue.
    </Text>
  </Item>
  <Item textValue="Add review">
    <Draw/>
    <Text>Add review</Text>
    <Text slot="description">
      Post a review for the episode.
    </Text>
  </Item>
  <Item textValue="Subscribe to series">
    <Bell/>
    <Text>Subscribe to series</Text>
    <Text slot="description">
      Add series to your subscription list and be notified
      when a new episode airs.
    </Text>
  </Item>
  <Item textValue="Report">
    <Alert/>
    <Text>Report</Text>
    <Text slot="description">
      Report an issue/violation.
    </Text>
  </Item>
</ComboBox>
</Variant>
<Variant name="Trigger options12">
<ComboBox
    label="Select action"
    menuTrigger="focus"
>
  <Item textValue="Add to queue">
    <Add/>
    <Text>
      Add to queue
    </Text>
    <Text slot="description">
      Add to current
      watch queue.
    </Text>
  </Item>
  <Item textValue="Add review">
    <Draw/>
    <Text>
      Add review
    </Text>
    <Text slot="description">
      Post a review for
      the episode.
    </Text>
  </Item>
  <Item textValue="Subscribe to series">
    <Bell/>
    <Text>
      Subscribe to
      series
    </Text>
    <Text slot="description">
      Add series to
      your subscription
      list and be
      notified when a
      new episode airs.
    </Text>
  </Item>
  <Item textValue="Report">
    <Alert/>
    <Text>Report</Text>
    <Text slot="description">
      Report an
      issue/violation.
    </Text>
  </Item>
</ComboBox>
</Variant>
<Variant name="Trigger options123">
<ComboBox label="Select action" menuTrigger="manual">
  <Item textValue="Add to queue">
    <Add/>
    <Text>Add to queue</Text>
    <Text slot="description">Add to current watch queue.</Text>
  </Item>
  <Item textValue="Add review">
    <Draw/>
    <Text>Add review</Text>
    <Text slot="description">Post a review for the episode.</Text>
  </Item>
  <Item textValue="Subscribe to series">
    <Bell/>
    <Text>Subscribe to series</Text>
    <Text slot="description">
      Add series to your subscription list and be notified when a new episode
      airs.
    </Text>
  </Item>
  <Item textValue="Report">
    <Alert/>
    <Text>Report</Text>
    <Text slot="description">Report an issue/violation.</Text>
  </Item>
</ComboBox>
</Variant>
<Variant name="Trigger options1234">
<ComboBox label="Select action" menuTrigger="manual">
  <Item textValue="Add to queue">
    <Add/>
    <Text>Add to queue</Text>
    <Text slot="description">
      Add to current watch queue.
    </Text>
  </Item>
  <Item textValue="Add review">
    <Draw/>
    <Text>Add review</Text>
    <Text slot="description">
      Post a review for the episode.
    </Text>
  </Item>
  <Item textValue="Subscribe to series">
    <Bell/>
    <Text>Subscribe to series</Text>
    <Text slot="description">
      Add series to your subscription list and be notified
      when a new episode airs.
    </Text>
  </Item>
  <Item textValue="Report">
    <Alert/>
    <Text>Report</Text>
    <Text slot="description">
      Report an issue/violation.
    </Text>
  </Item>
</ComboBox>
</Variant>
<Variant name="Trigger options12345">
<ComboBox
    label="Select action"
    menuTrigger="manual"
>
  <Item textValue="Add to queue">
    <Add/>
    <Text>
      Add to queue
    </Text>
    <Text slot="description">
      Add to current
      watch queue.
    </Text>
  </Item>
  <Item textValue="Add review">
    <Draw/>
    <Text>
      Add review
    </Text>
    <Text slot="description">
      Post a review for
      the episode.
    </Text>
  </Item>
  <Item textValue="Subscribe to series">
    <Bell/>
    <Text>
      Subscribe to
      series
    </Text>
    <Text slot="description">
      Add series to
      your subscription
      list and be
      notified when a
      new episode airs.
    </Text>
  </Item>
  <Item textValue="Report">
    <Alert/>
    <Text>Report</Text>
    <Text slot="description">
      Report an
      issue/violation.
    </Text>
  </Item>
</ComboBox>
</Variant>
<Variant name="Label alignment and position">
<ComboBox label="Favorite Animal" labelPosition="side" labelAlign="end">
  <Item key="red panda">Red Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
  <Item key="aardvark">Aardvark</Item>
  <Item key="kangaroo">Kangaroo</Item>
  <Item key="snake">Snake</Item>
</ComboBox>
</Variant>
<Variant name="Label alignment and position1">
<ComboBox
    label="Favorite Animal"
    labelPosition="side"
    labelAlign="end"
>
  <Item key="red panda">Red Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
  <Item key="aardvark">Aardvark</Item>
  <Item key="kangaroo">Kangaroo</Item>
  <Item key="snake">Snake</Item>
</ComboBox>
</Variant>
<Variant name="Label alignment and position12">
<ComboBox
    label="Favorite Animal"
    labelPosition="side"
    labelAlign="end"
>
  <Item key="red panda">
    Red Panda
  </Item>
  <Item key="cat">
    Cat
  </Item>
  <Item key="dog">
    Dog
  </Item>
  <Item key="aardvark">
    Aardvark
  </Item>
  <Item key="kangaroo">
    Kangaroo
  </Item>
  <Item key="snake">
    Snake
  </Item>
</ComboBox>
</Variant>
<Variant name="Quiet">
<ComboBox label="Favorite Animal" isQuiet>
  <Item key="red panda">Red Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
  <Item key="aardvark">Aardvark</Item>
  <Item key="kangaroo">Kangaroo</Item>
  <Item key="snake">Snake</Item>
</ComboBox>
</Variant>
<Variant name="Quiet1">
<ComboBox label="Favorite Animal" isQuiet>
  <Item key="red panda">Red Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
  <Item key="aardvark">Aardvark</Item>
  <Item key="kangaroo">Kangaroo</Item>
  <Item key="snake">Snake</Item>
</ComboBox>
</Variant>
<Variant name="Quiet12">
<ComboBox
    label="Favorite Animal"
    isQuiet
>
  <Item key="red panda">
    Red Panda
  </Item>
  <Item key="cat">
    Cat
  </Item>
  <Item key="dog">
    Dog
  </Item>
  <Item key="aardvark">
    Aardvark
  </Item>
  <Item key="kangaroo">
    Kangaroo
  </Item>
  <Item key="snake">
    Snake
  </Item>
</ComboBox>
</Variant>
<Variant name="Disabled">
<ComboBox label="Favorite Animal" isDisabled>
  <Item key="red panda">Red Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
  <Item key="aardvark">Aardvark</Item>
  <Item key="kangaroo">Kangaroo</Item>
  <Item key="snake">Snake</Item>
</ComboBox>
</Variant>
<Variant name="Disabled1">
<ComboBox label="Favorite Animal" isDisabled>
  <Item key="red panda">Red Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
  <Item key="aardvark">Aardvark</Item>
  <Item key="kangaroo">Kangaroo</Item>
  <Item key="snake">Snake</Item>
</ComboBox>
</Variant>
<Variant name="Disabled12">
<ComboBox
    label="Favorite Animal"
    isDisabled
>
  <Item key="red panda">
    Red Panda
  </Item>
  <Item key="cat">
    Cat
  </Item>
  <Item key="dog">
    Dog
  </Item>
  <Item key="aardvark">
    Aardvark
  </Item>
  <Item key="kangaroo">
    Kangaroo
  </Item>
  <Item key="snake">
    Snake
  </Item>
</ComboBox>
</Variant>
<Variant name="Read only">
<ComboBox label="Favorite Animal" isReadOnly selectedKey="red panda">
  <Item key="red panda">Red Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
  <Item key="aardvark">Aardvark</Item>
  <Item key="kangaroo">Kangaroo</Item>
  <Item key="snake">Snake</Item>
</ComboBox>
</Variant>
<Variant name="Read only1">
<ComboBox
    label="Favorite Animal"
    isReadOnly
    selectedKey="red panda"
>
  <Item key="red panda">Red Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
  <Item key="aardvark">Aardvark</Item>
  <Item key="kangaroo">Kangaroo</Item>
  <Item key="snake">Snake</Item>
</ComboBox>
</Variant>
<Variant name="Read only12">
<ComboBox
    label="Favorite Animal"
    isReadOnly
    selectedKey="red panda"
>
  <Item key="red panda">
    Red Panda
  </Item>
  <Item key="cat">
    Cat
  </Item>
  <Item key="dog">
    Dog
  </Item>
  <Item key="aardvark">
    Aardvark
  </Item>
  <Item key="kangaroo">
    Kangaroo
  </Item>
  <Item key="snake">
    Snake
  </Item>
</ComboBox>
</Variant>
<Variant name="Help text">
<ComboBox
    validationState={!animalId ? undefined : isValid ? 'valid' : 'invalid'}
    label="Favorite animal"
    description="Pick your favorite animal, you will be judged."
    errorMessage={animalId === 2
        ? 'The author of this example is a dog person.'
        : "Oh no it's a snake! Choose anything else."}
    items={options}
    selectedKey={animalId}
    onSelectionChange={(selected) => setAnimalId(selected)}
>
      {(item) => <Item>{item.name}</Item>}
    </ComboBox>
</Variant>
<Variant name="Help text1">
<ComboBox
    validationState={!animalId
        ? undefined
        : isValid
            ? 'valid'
            : 'invalid'}
    label="Favorite animal"
    description="Pick your favorite animal, you will be judged."
    errorMessage={animalId === 2
        ? 'The author of this example is a dog person.'
        : "Oh no it's a snake! Choose anything else."}
    items={options}
    selectedKey={animalId}
    onSelectionChange={(selected) =>
        setAnimalId(selected)}
>
      {(item) => <Item>{item.name}</Item>}
    </ComboBox>
</Variant>
<Variant name="Help text12">
<ComboBox
    validationState={!animalId
        ? undefined
        : isValid
            ? 'valid'
            : 'invalid'}
    label="Favorite animal"
    description="Pick your favorite animal, you will be judged."
    errorMessage={animalId ===
    2
        ? 'The author of this example is a dog person.'
        : "Oh no it's a snake! Choose anything else."}
    items={options}
    selectedKey={animalId}
    onSelectionChange={(selected) =>
        setAnimalId(
            selected
        )}
>
      {(item) => (
          <Item>
          {item.name}
        </Item>
      )}
    </ComboBox>
</Variant>
<Variant name="Contextual help">
<ComboBox
    label="Engineering major"
    contextualHelp={
        <ContextualHelp variant="info">
      <Heading>Major changes</Heading>
      <Content>
        Once you have changed your major, you cannot change it back.
      </Content>
    </ContextualHelp>
    }
>
  <Item>Aerospace</Item>
  <Item>Mechanical</Item>
  <Item>Civil</Item>
  <Item>Nuclear</Item>
  <Item>Industrial</Item>
  <Item>Chemical</Item>
  <Item>Agricultural</Item>
  <Item>Electrical</Item>
</ComboBox>
</Variant>
<Variant name="Contextual help1">
<ComboBox
    label="Engineering major"
    contextualHelp={
        <ContextualHelp variant="info">
      <Heading>Major changes</Heading>
      <Content>
        Once you have changed your major, you cannot
        change it back.
      </Content>
    </ContextualHelp>
    }
>
  <Item>Aerospace</Item>
  <Item>Mechanical</Item>
  <Item>Civil</Item>
  <Item>Nuclear</Item>
  <Item>Industrial</Item>
  <Item>Chemical</Item>
  <Item>Agricultural</Item>
  <Item>Electrical</Item>
</ComboBox>
</Variant>
<Variant name="Contextual help12">
<ComboBox
    label="Engineering major"
    contextualHelp={
        <ContextualHelp variant="info">
      <Heading>
        Major changes
      </Heading>
      <Content>
        Once you have
        changed your
        major, you
        cannot change
        it back.
      </Content>
    </ContextualHelp>
    }
>
  <Item>
    Aerospace
  </Item>
  <Item>
    Mechanical
  </Item>
  <Item>Civil</Item>
  <Item>Nuclear</Item>
  <Item>
    Industrial
  </Item>
  <Item>Chemical</Item>
  <Item>
    Agricultural
  </Item>
  <Item>
    Electrical
  </Item>
</ComboBox>
</Variant>
<Variant name="Custom widths">
<ComboBox label="Favorite Animal" width="size-6000" maxWidth="100%">
  <Item key="red panda">Red Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
  <Item key="aardvark">Aardvark</Item>
  <Item key="kangaroo">Kangaroo</Item>
  <Item key="snake">Snake</Item>
</ComboBox>
</Variant>
<Variant name="Custom widths1">
<ComboBox
    label="Favorite Animal"
    width="size-6000"
    maxWidth="100%"
>
  <Item key="red panda">Red Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
  <Item key="aardvark">Aardvark</Item>
  <Item key="kangaroo">Kangaroo</Item>
  <Item key="snake">Snake</Item>
</ComboBox>
</Variant>
<Variant name="Custom widths12">
<ComboBox
    label="Favorite Animal"
    width="size-6000"
    maxWidth="100%"
>
  <Item key="red panda">
    Red Panda
  </Item>
  <Item key="cat">
    Cat
  </Item>
  <Item key="dog">
    Dog
  </Item>
  <Item key="aardvark">
    Aardvark
  </Item>
  <Item key="kangaroo">
    Kangaroo
  </Item>
  <Item key="snake">
    Snake
  </Item>
</ComboBox>
</Variant>
<Variant name="Menu direction">
<ComboBox label="Favorite Animal" direction="top">
  <Item key="red panda">Red Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
  <Item key="aardvark">Aardvark</Item>
  <Item key="kangaroo">Kangaroo</Item>
  <Item key="snake">Snake</Item>
</ComboBox>
</Variant>
<Variant name="Menu direction1">
<ComboBox label="Favorite Animal" direction="top">
  <Item key="red panda">Red Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
  <Item key="aardvark">Aardvark</Item>
  <Item key="kangaroo">Kangaroo</Item>
  <Item key="snake">Snake</Item>
</ComboBox>
</Variant>
<Variant name="Menu direction12">
<ComboBox
    label="Favorite Animal"
    direction="top"
>
  <Item key="red panda">
    Red Panda
  </Item>
  <Item key="cat">
    Cat
  </Item>
  <Item key="dog">
    Dog
  </Item>
  <Item key="aardvark">
    Aardvark
  </Item>
  <Item key="kangaroo">
    Kangaroo
  </Item>
  <Item key="snake">
    Snake
  </Item>
</ComboBox>
</Variant>
</Component>
<Component name="Picker" docURL="https://react-spectrum.adobe.com/react-spectrum/Picker.html">
<Variant name="Example">
<Picker label="Choose frequency">
  <Item key="rarely">Rarely</Item>
  <Item key="sometimes">Sometimes</Item>
  <Item key="always">Always</Item>
</Picker>
</Variant>
<Variant name="Example1">
<Picker label="Choose frequency">
  <Item key="rarely">Rarely</Item>
  <Item key="sometimes">Sometimes</Item>
  <Item key="always">Always</Item>
</Picker>
</Variant>
<Variant name="Example12">
<Picker label="Choose frequency">
  <Item key="rarely">
    Rarely
  </Item>
  <Item key="sometimes">
    Sometimes
  </Item>
  <Item key="always">
    Always
  </Item>
</Picker>
</Variant>
<Variant name="Content">
<>
        <Picker
            label="Pick an animal"
            items={options}
            onSelectionChange={setAnimalId}
        >
        {(item) => <Item>{item.name}</Item>}
      </Picker>
      <p>Animal id: {animalId}</p>
    </>
</Variant>
<Variant name="Content1">
<>
    <Picker
        label="Pick an animal"
        items={options}
        onSelectionChange={setAnimalId}
    >
        {(item) => <Item>{item.name}</Item>}
      </Picker>
<p>Animal id: {animalId}</p>
</>
</Variant>
<Variant name="Content12">
<>
    <Picker
        label="Pick an animal"
        items={options}
        onSelectionChange={setAnimalId}
    >
        {(item) => (
            <Item>
            {item.name}
          </Item>
        )}
      </Picker>
<p>
        Animal id:{' '}
    {animalId}
      </p>
</>
</Variant>
<Variant name="Labeling">
<Picker label="Choose frequency" isRequired necessityIndicator="icon">
  <Item key="rarely">Rarely</Item>
  <Item key="sometimes">Sometimes</Item>
  <Item key="always">Always</Item>
</Picker>
</Variant>
<Variant name="Labeling1">
<Picker
    label="Choose frequency"
    isRequired
    necessityIndicator="icon"
>
  <Item key="rarely">Rarely</Item>
  <Item key="sometimes">Sometimes</Item>
  <Item key="always">Always</Item>
</Picker>
</Variant>
<Variant name="Labeling12">
<Picker
    label="Choose frequency"
    isRequired
    necessityIndicator="icon"
>
  <Item key="rarely">
    Rarely
  </Item>
  <Item key="sometimes">
    Sometimes
  </Item>
  <Item key="always">
    Always
  </Item>
</Picker>
</Variant>
<Variant name="Labeling123">
<Picker label="Choose frequency" isRequired necessityIndicator="label">
  <Item key="rarely">Rarely</Item>
  <Item key="sometimes">Sometimes</Item>
  <Item key="always">Always</Item>
</Picker>
</Variant>
<Variant name="Labeling1234">
<Picker
    label="Choose frequency"
    isRequired
    necessityIndicator="label"
>
  <Item key="rarely">Rarely</Item>
  <Item key="sometimes">Sometimes</Item>
  <Item key="always">Always</Item>
</Picker>
</Variant>
<Variant name="Labeling12345">
<Picker
    label="Choose frequency"
    isRequired
    necessityIndicator="label"
>
  <Item key="rarely">
    Rarely
  </Item>
  <Item key="sometimes">
    Sometimes
  </Item>
  <Item key="always">
    Always
  </Item>
</Picker>
</Variant>
<Variant name="Labeling123456">
<Picker label="Choose frequency" necessityIndicator="label">
  <Item key="rarely">Rarely</Item>
  <Item key="sometimes">Sometimes</Item>
  <Item key="always">Always</Item>
</Picker>
</Variant>
<Variant name="Labeling1234567">
<Picker label="Choose frequency" necessityIndicator="label">
  <Item key="rarely">Rarely</Item>
  <Item key="sometimes">Sometimes</Item>
  <Item key="always">Always</Item>
</Picker>
</Variant>
<Variant name="Labeling12345678">
<Picker
    label="Choose frequency"
    necessityIndicator="label"
>
  <Item key="rarely">
    Rarely
  </Item>
  <Item key="sometimes">
    Sometimes
  </Item>
  <Item key="always">
    Always
  </Item>
</Picker>
</Variant>
<Variant name="Selection">
<Flex gap="size-150" wrap>
    <Picker
        label="Pick an animal (uncontrolled)"
        items={options}
        defaultSelectedKey="Bison">
        {item => <Item key={item.name}>{item.name}</Item>}
      </Picker>

<Picker
    label="Pick an animal (controlled)"
    items={options}
    selectedKey={animal}
    onSelectionChange={selected => setAnimal(selected)}>
        {item => <Item key={item.name}>{item.name}</Item>}
      </Picker>
</Flex>
</Variant>
<Variant name="Selection1">
<Flex gap="size-150" wrap>
    <Picker
        label="Pick an animal (uncontrolled)"
        items={options}
        defaultSelectedKey="Bison">
        {item => <Item key={item.name}>{item.name}</Item>}
      </Picker>

<Picker
    label="Pick an animal (controlled)"
    items={options}
    selectedKey={animal}
    onSelectionChange={selected => setAnimal(selected)}>
        {item => <Item key={item.name}>{item.name}</Item>}
      </Picker>
</Flex>
</Variant>
<Variant name="Selection12">
<Flex
    gap="size-150"
    wrap
>
    <Picker
        label="Pick an animal (uncontrolled)"
        items={options}
        defaultSelectedKey="Bison"
    >
        {(item) => (
            <Item
                key={item
                    .name}
            >
            {item.name}
          </Item>
        )}
      </Picker>

<Picker
    label="Pick an animal (controlled)"
    items={options}
    selectedKey={animal}
    onSelectionChange={(selected) =>
        setAnimal(
            selected
        )}
>
        {(item) => (
            <Item
                key={item
                    .name}
            >
            {item.name}
          </Item>
        )}
      </Picker>
</Flex>
</Variant>
<Variant name="HTML forms">
<Picker
    label="Favorite Animal"
    name="favoriteAnimalId">
  <Item key="panda">Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
</Picker>
</Variant>
<Variant name="HTML forms1">
<Picker
    label="Favorite Animal"
    name="favoriteAnimalId">
  <Item key="panda">Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
</Picker>
</Variant>
<Variant name="HTML forms12">
<Picker
    label="Favorite Animal"
    name="favoriteAnimalId">
  <Item key="panda">
    Panda
  </Item>
  <Item key="cat">
    Cat
  </Item>
  <Item key="dog">
    Dog
  </Item>
</Picker>
</Variant>
<Variant name="Links">
<Picker label="Project">
  <Item href="https://example.com/" target="_blank">Create newâ¦</Item>
  <Item>Proposal</Item>
  <Item>Budget</Item>
  <Item>Onboarding</Item>
</Picker>
</Variant>
<Variant name="Links1">
<Picker label="Project">
  <Item href="https://example.com/" target="_blank">
    Create newâ¦
  </Item>
  <Item>Proposal</Item>
  <Item>Budget</Item>
  <Item>Onboarding</Item>
</Picker>
</Variant>
<Variant name="Links12">
<Picker label="Project">
  <Item
      href="https://example.com/"
      target="_blank"
  >
    Create newâ¦
  </Item>
  <Item>Proposal</Item>
  <Item>Budget</Item>
  <Item>
    Onboarding
  </Item>
</Picker>
</Variant>
<Variant name="Static items">
<Picker label="Pick your favorite">
  <Section title="Animals">
    <Item key="Aardvark">Aardvark</Item>
    <Item key="Kangaroo">Kangaroo</Item>
    <Item key="Snake">Snake</Item>
  </Section>
  <Section title="People">
    <Item key="Danni">Danni</Item>
    <Item key="Devon">Devon</Item>
    <Item key="Ross">Ross</Item>
  </Section>
</Picker>
</Variant>
<Variant name="Static items1">
<Picker label="Pick your favorite">
  <Section title="Animals">
    <Item key="Aardvark">Aardvark</Item>
    <Item key="Kangaroo">Kangaroo</Item>
    <Item key="Snake">Snake</Item>
  </Section>
  <Section title="People">
    <Item key="Danni">Danni</Item>
    <Item key="Devon">Devon</Item>
    <Item key="Ross">Ross</Item>
  </Section>
</Picker>
</Variant>
<Variant name="Static items12">
<Picker label="Pick your favorite">
  <Section title="Animals">
    <Item key="Aardvark">
      Aardvark
    </Item>
    <Item key="Kangaroo">
      Kangaroo
    </Item>
    <Item key="Snake">
      Snake
    </Item>
  </Section>
  <Section title="People">
    <Item key="Danni">
      Danni
    </Item>
    <Item key="Devon">
      Devon
    </Item>
    <Item key="Ross">
      Ross
    </Item>
  </Section>
</Picker>
</Variant>
<Variant name="Dynamic items">
<Picker
    label="Pick an animal"
    items={options}
    onSelectionChange={(selected) => alert(selected)}
>
      {(item) => (
          <Section key={item.name} items={item.children} title={item.name}>
          {(item) => <Item>{item.name}</Item>}
        </Section>
      )}
    </Picker>
</Variant>
<Variant name="Dynamic items1">
<Picker
    label="Pick an animal"
    items={options}
    onSelectionChange={(selected) => alert(selected)}
>
      {(item) => (
          <Section
              key={item.name}
              items={item.children}
              title={item.name}
          >
          {(item) => <Item>{item.name}</Item>}
        </Section>
      )}
    </Picker>
</Variant>
<Variant name="Dynamic items12">
<Picker
    label="Pick an animal"
    items={options}
    onSelectionChange={(selected) =>
        alert(selected)}
>
      {(item) => (
          <Section
              key={item.name}
              items={item
                  .children}
              title={item
                  .name}
          >
          {(item) => (
              <Item>
              {item.name}
            </Item>
          )}
        </Section>
      )}
    </Picker>
</Variant>
<Variant name="Events">
<>
    <Picker
        label="Choose frequency"
        onSelectionChange={(selected) => setFrequency(selected)}
    >
        <Item key="Rarely">Rarely</Item>
        <Item key="Sometimes">Sometimes</Item>
        <Item key="Always">Always</Item>
      </Picker>
<p>You selected {frequency}</p>
</>
</Variant>
<Variant name="Events1">
<>
    <Picker
        label="Choose frequency"
        onSelectionChange={(selected) =>
            setFrequency(selected)}
    >
        <Item key="Rarely">Rarely</Item>
        <Item key="Sometimes">Sometimes</Item>
        <Item key="Always">Always</Item>
      </Picker>
<p>You selected {frequency}</p>
</>
</Variant>
<Variant name="Events12">
<>
    <Picker
        label="Choose frequency"
        onSelectionChange={(selected) =>
            setFrequency(
                selected
            )}
    >
        <Item key="Rarely">
          Rarely
        </Item>
        <Item key="Sometimes">
          Sometimes
        </Item>
        <Item key="Always">
          Always
        </Item>
      </Picker>
<p>
        You selected{' '}
    {frequency}
      </p>
</>
</Variant>
<Variant name="Events123">
<>
    <Picker
        label="Pick an animal"
        items={options}
        onSelectionChange={(selected) => setAnimalId(selected)}
    >
        {(item) => <Item>{item.name}</Item>}
      </Picker>
<p>Your favorite animal has id: {animalId}</p>
</>
</Variant>
<Variant name="Events1234">
<>
    <Picker
        label="Pick an animal"
        items={options}
        onSelectionChange={(selected) =>
            setAnimalId(selected)}
    >
        {(item) => <Item>{item.name}</Item>}
      </Picker>
<p>Your favorite animal has id: {animalId}</p>
</>
</Variant>
<Variant name="Events12345">
<>
    <Picker
        label="Pick an animal"
        items={options}
        onSelectionChange={(selected) =>
            setAnimalId(
                selected
            )}
    >
        {(item) => (
            <Item>
            {item.name}
          </Item>
        )}
      </Picker>
<p>
        Your favorite
        animal has id:
    {' '}
    {animalId}
      </p>
</>
</Variant>
<Variant name="Complex items">
<Picker label="Options">
  <Section title="Permission">
    <Item textValue="Read">
      <Book size="S"/>
      <Text>Read</Text>
      <Text slot="description">Read Only</Text>
    </Item>
    <Item textValue="Write">
      <Draw size="S"/>
      <Text>Write</Text>
      <Text slot="description">Read and Write Only</Text>
    </Item>
    <Item textValue="Admin">
      <BulkEditUsers size="S"/>
      <Text>Admin</Text>
      <Text slot="description">Full access</Text>
    </Item>
  </Section>
</Picker>
</Variant>
<Variant name="Complex items1">
<Picker label="Options">
  <Section title="Permission">
    <Item textValue="Read">
      <Book size="S"/>
      <Text>Read</Text>
      <Text slot="description">Read Only</Text>
    </Item>
    <Item textValue="Write">
      <Draw size="S"/>
      <Text>Write</Text>
      <Text slot="description">Read and Write Only</Text>
    </Item>
    <Item textValue="Admin">
      <BulkEditUsers size="S"/>
      <Text>Admin</Text>
      <Text slot="description">Full access</Text>
    </Item>
  </Section>
</Picker>
</Variant>
<Variant name="Complex items12">
<Picker label="Options">
  <Section title="Permission">
    <Item textValue="Read">
      <Book size="S"/>
      <Text>Read</Text>
      <Text slot="description">
        Read Only
      </Text>
    </Item>
    <Item textValue="Write">
      <Draw size="S"/>
      <Text>
        Write
      </Text>
      <Text slot="description">
        Read and Write
        Only
      </Text>
    </Item>
    <Item textValue="Admin">
      <BulkEditUsers size="S"/>
      <Text>
        Admin
      </Text>
      <Text slot="description">
        Full access
      </Text>
    </Item>
  </Section>
</Picker>
</Variant>
<Variant name="With avatars">
<Picker label="Select a user">
  <Item textValue="User 1">
    <Avatar src="https://i.imgur.com/kJOwAdv.png"/>
    <Text>User 1</Text>
  </Item>
  <Item textValue="User 2">
    <Avatar src="https://i.imgur.com/kJOwAdv.png"/>
    <Text>User 2</Text>
  </Item>
  <Item textValue="User 3">
    <Avatar src="https://i.imgur.com/kJOwAdv.png"/>
    <Text>User 3</Text>
  </Item>
  <Item textValue="User 4">
    <Avatar src="https://i.imgur.com/kJOwAdv.png"/>
    <Text>User 4</Text>
  </Item>
</Picker>
</Variant>
<Variant name="With avatars1">
<Picker label="Select a user">
  <Item textValue="User 1">
    <Avatar src="https://i.imgur.com/kJOwAdv.png"/>
    <Text>User 1</Text>
  </Item>
  <Item textValue="User 2">
    <Avatar src="https://i.imgur.com/kJOwAdv.png"/>
    <Text>User 2</Text>
  </Item>
  <Item textValue="User 3">
    <Avatar src="https://i.imgur.com/kJOwAdv.png"/>
    <Text>User 3</Text>
  </Item>
  <Item textValue="User 4">
    <Avatar src="https://i.imgur.com/kJOwAdv.png"/>
    <Text>User 4</Text>
  </Item>
</Picker>
</Variant>
<Variant name="With avatars12">
<Picker label="Select a user">
  <Item textValue="User 1">
    <Avatar src="https://i.imgur.com/kJOwAdv.png"/>
    <Text>User 1</Text>
  </Item>
  <Item textValue="User 2">
    <Avatar src="https://i.imgur.com/kJOwAdv.png"/>
    <Text>User 2</Text>
  </Item>
  <Item textValue="User 3">
    <Avatar src="https://i.imgur.com/kJOwAdv.png"/>
    <Text>User 3</Text>
  </Item>
  <Item textValue="User 4">
    <Avatar src="https://i.imgur.com/kJOwAdv.png"/>
    <Text>User 4</Text>
  </Item>
</Picker>
</Variant>
<Variant name="Asynchronous loading">
<Picker
    label="Pick a Pokemon"
    items={list.items}
    isLoading={list.isLoading}
    onLoadMore={list.loadMore}
>
      {(item) => <Item key={item.name}>{item.name}</Item>}
    </Picker>
</Variant>
<Variant name="Asynchronous loading1">
<Picker
    label="Pick a Pokemon"
    items={list.items}
    isLoading={list.isLoading}
    onLoadMore={list.loadMore}
>
      {(item) => <Item key={item.name}>{item.name}</Item>}
    </Picker>
</Variant>
<Variant name="Asynchronous loading12">
<Picker
    label="Pick a Pokemon"
    items={list.items}
    isLoading={list
        .isLoading}
    onLoadMore={list
        .loadMore}
>
      {(item) => (
          <Item
              key={item.name}
          >
          {item.name}
        </Item>
      )}
    </Picker>
</Variant>
<Variant name="Validation">
<Form validationBehavior="native" maxWidth="size-3000">
  <Picker label="Favorite animal" name="animal" isRequired>    <Item>Aardvark</Item>
    <Item>Cat</Item>
    <Item>Dog</Item>
    <Item>Kangaroo</Item>
    <Item>Panda</Item>
    <Item>Snake</Item>
  </Picker>
  <ButtonGroup>
    <Button type="submit" variant="primary">Submit</Button>
    <Button type="reset" variant="secondary">Reset</Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Validation1">
<Form validationBehavior="native" maxWidth="size-3000">
  <Picker
      label="Favorite animal"
      name="animal"
      isRequired
  >    <Item>Aardvark</Item>
    <Item>Cat</Item>
    <Item>Dog</Item>
    <Item>Kangaroo</Item>
    <Item>Panda</Item>
    <Item>Snake</Item>
  </Picker>
  <ButtonGroup>
    <Button type="submit" variant="primary">
      Submit
    </Button>
    <Button type="reset" variant="secondary">
      Reset
    </Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Validation12">
<Form
    validationBehavior="native"
    maxWidth="size-3000"
>
  <Picker
      label="Favorite animal"
      name="animal"
      isRequired
  >    <Item>
      Aardvark
    </Item>
    <Item>Cat</Item>
    <Item>Dog</Item>
    <Item>
      Kangaroo
    </Item>
    <Item>Panda</Item>
    <Item>Snake</Item>
  </Picker>
  <ButtonGroup>
    <Button
        type="submit"
        variant="primary"
    >
      Submit
    </Button>
    <Button
        type="reset"
        variant="secondary"
    >
      Reset
    </Button>
  </ButtonGroup>
</Form>
</Variant>
<Variant name="Label alignment and position">
<Picker label="Choose frequency" labelPosition="side" labelAlign="end">
  <Item key="rarely">Rarely</Item>
  <Item key="sometimes">Sometimes</Item>
  <Item key="always">Always</Item>
</Picker>
</Variant>
<Variant name="Label alignment and position1">
<Picker
    label="Choose frequency"
    labelPosition="side"
    labelAlign="end"
>
  <Item key="rarely">Rarely</Item>
  <Item key="sometimes">Sometimes</Item>
  <Item key="always">Always</Item>
</Picker>
</Variant>
<Variant name="Label alignment and position12">
<Picker
    label="Choose frequency"
    labelPosition="side"
    labelAlign="end"
>
  <Item key="rarely">
    Rarely
  </Item>
  <Item key="sometimes">
    Sometimes
  </Item>
  <Item key="always">
    Always
  </Item>
</Picker>
</Variant>
<Variant name="Quiet">
<Picker label="Choose frequency" isQuiet>
  <Item key="rarely">Rarely</Item>
  <Item key="sometimes">Sometimes</Item>
  <Item key="always">Always</Item>
</Picker>
</Variant>
<Variant name="Quiet1">
<Picker label="Choose frequency" isQuiet>
  <Item key="rarely">Rarely</Item>
  <Item key="sometimes">Sometimes</Item>
  <Item key="always">Always</Item>
</Picker>
</Variant>
<Variant name="Quiet12">
<Picker
    label="Choose frequency"
    isQuiet
>
  <Item key="rarely">
    Rarely
  </Item>
  <Item key="sometimes">
    Sometimes
  </Item>
  <Item key="always">
    Always
  </Item>
</Picker>
</Variant>
<Variant name="Disabled">
<Picker label="Choose frequency" isDisabled>
  <Item key="rarely">Rarely</Item>
  <Item key="sometimes">Sometimes</Item>
  <Item key="always">Always</Item>
</Picker>
</Variant>
<Variant name="Disabled1">
<Picker label="Choose frequency" isDisabled>
  <Item key="rarely">Rarely</Item>
  <Item key="sometimes">Sometimes</Item>
  <Item key="always">Always</Item>
</Picker>
</Variant>
<Variant name="Disabled12">
<Picker
    label="Choose frequency"
    isDisabled
>
  <Item key="rarely">
    Rarely
  </Item>
  <Item key="sometimes">
    Sometimes
  </Item>
  <Item key="always">
    Always
  </Item>
</Picker>
</Variant>
<Variant name="Help text">
<Picker
    isInvalid={!isValid}
    label="Favorite animal"
    description="Pick your favorite animal, you will be judged."
    errorMessage={animalId === 2
        ? 'The author of this example is a dog person.'
        : "Oh no it's a snake! Choose anything else."}
    items={options}
    selectedKey={animalId}
    onSelectionChange={(selected) => setAnimalId(selected)}
>
      {(item) => <Item>{item.name}</Item>}
    </Picker>
</Variant>
<Variant name="Help text1">
<Picker
    isInvalid={!isValid}
    label="Favorite animal"
    description="Pick your favorite animal, you will be judged."
    errorMessage={animalId === 2
        ? 'The author of this example is a dog person.'
        : "Oh no it's a snake! Choose anything else."}
    items={options}
    selectedKey={animalId}
    onSelectionChange={(selected) =>
        setAnimalId(selected)}
>
      {(item) => <Item>{item.name}</Item>}
    </Picker>
</Variant>
<Variant name="Help text12">
<Picker
    isInvalid={!isValid}
    label="Favorite animal"
    description="Pick your favorite animal, you will be judged."
    errorMessage={animalId ===
    2
        ? 'The author of this example is a dog person.'
        : "Oh no it's a snake! Choose anything else."}
    items={options}
    selectedKey={animalId}
    onSelectionChange={(selected) =>
        setAnimalId(
            selected
        )}
>
      {(item) => (
          <Item>
          {item.name}
        </Item>
      )}
    </Picker>
</Variant>
<Variant name="Contextual help">
<Picker
    label="Engineering major"
    contextualHelp={
        <ContextualHelp variant="info">
      <Heading>Major changes</Heading>
      <Content>
        Once you have changed your major, you cannot change it back.
      </Content>
    </ContextualHelp>
    }
>
  <Item>Aerospace</Item>
  <Item>Mechanical</Item>
  <Item>Civil</Item>
  <Item>Nuclear</Item>
  <Item>Industrial</Item>
  <Item>Chemical</Item>
  <Item>Agricultural</Item>
  <Item>Electrical</Item>
</Picker>
</Variant>
<Variant name="Contextual help1">
<Picker
    label="Engineering major"
    contextualHelp={
        <ContextualHelp variant="info">
      <Heading>Major changes</Heading>
      <Content>
        Once you have changed your major, you cannot
        change it back.
      </Content>
    </ContextualHelp>
    }
>
  <Item>Aerospace</Item>
  <Item>Mechanical</Item>
  <Item>Civil</Item>
  <Item>Nuclear</Item>
  <Item>Industrial</Item>
  <Item>Chemical</Item>
  <Item>Agricultural</Item>
  <Item>Electrical</Item>
</Picker>
</Variant>
<Variant name="Contextual help12">
<Picker
    label="Engineering major"
    contextualHelp={
        <ContextualHelp variant="info">
      <Heading>
        Major changes
      </Heading>
      <Content>
        Once you have
        changed your
        major, you
        cannot change
        it back.
      </Content>
    </ContextualHelp>
    }
>
  <Item>
    Aerospace
  </Item>
  <Item>
    Mechanical
  </Item>
  <Item>Civil</Item>
  <Item>Nuclear</Item>
  <Item>
    Industrial
  </Item>
  <Item>Chemical</Item>
  <Item>
    Agricultural
  </Item>
  <Item>
    Electrical
  </Item>
</Picker>
</Variant>
<Variant name="Custom widths">
<Flex direction="column" rowGap="size-150">
  <Picker label="Choose frequency" width="size-3600" maxWidth="100%">
    <Item key="rarely">Rarely</Item>
    <Item key="sometimes">Sometimes</Item>
    <Item key="always">Always</Item>
  </Picker>

  <Picker label="Choose animal" menuWidth="size-6000">
    <Item key="Emu">Emu</Item>
    <Item key="Kangaroo">Kangaroo</Item>
    <Item key="Platypus">Platypus</Item>
  </Picker>
</Flex>
</Variant>
<Variant name="Custom widths1">
<Flex direction="column" rowGap="size-150">
  <Picker
      label="Choose frequency"
      width="size-3600"
      maxWidth="100%"
  >
    <Item key="rarely">Rarely</Item>
    <Item key="sometimes">Sometimes</Item>
    <Item key="always">Always</Item>
  </Picker>
   <Picker label="Choose animal" menuWidth="size-6000">
    <Item key="Emu">Emu</Item>
    <Item key="Kangaroo">Kangaroo</Item>
    <Item key="Platypus">Platypus</Item>
  </Picker>
</Flex>
</Variant>
<Variant name="Custom widths12">
<Flex
    direction="column"
    rowGap="size-150"
>
  <Picker
      label="Choose frequency"
      width="size-3600"
      maxWidth="100%"
  >
    <Item key="rarely">
      Rarely
    </Item>
    <Item key="sometimes">
      Sometimes
    </Item>
    <Item key="always">
      Always
    </Item>
  </Picker>
   <Picker
       label="Choose animal"
       menuWidth="size-6000"
   >
    <Item key="Emu">
      Emu
    </Item>
    <Item key="Kangaroo">
      Kangaroo
    </Item>
    <Item key="Platypus">
      Platypus
    </Item>
  </Picker>
</Flex>
</Variant>
<Variant name="Align and direction">
<Flex direction="column" gap="size-150">
  <Picker label="Choose frequency" align="end" menuWidth="size-3000">
    <Item key="rarely">Rarely</Item>
    <Item key="sometimes">Sometimes</Item>
    <Item key="always">Always</Item>
  </Picker>

  <Picker label="Choose animal" direction="top">
    <Item key="Emu">Emu</Item>
    <Item key="Kangaroo">Kangaroo</Item>
    <Item key="Platypus">Platypus</Item>
  </Picker>
</Flex>
</Variant>
<Variant name="Align and direction1">
<Flex direction="column" gap="size-150">
  <Picker
      label="Choose frequency"
      align="end"
      menuWidth="size-3000"
  >
    <Item key="rarely">Rarely</Item>
    <Item key="sometimes">Sometimes</Item>
    <Item key="always">Always</Item>
  </Picker>
   <Picker label="Choose animal" direction="top">
    <Item key="Emu">Emu</Item>
    <Item key="Kangaroo">Kangaroo</Item>
    <Item key="Platypus">Platypus</Item>
  </Picker>
</Flex>
</Variant>
<Variant name="Align and direction12">
<Flex
    direction="column"
    gap="size-150"
>
  <Picker
      label="Choose frequency"
      align="end"
      menuWidth="size-3000"
  >
    <Item key="rarely">
      Rarely
    </Item>
    <Item key="sometimes">
      Sometimes
    </Item>
    <Item key="always">
      Always
    </Item>
  </Picker>
   <Picker
       label="Choose animal"
       direction="top"
   >
    <Item key="Emu">
      Emu
    </Item>
    <Item key="Kangaroo">
      Kangaroo
    </Item>
    <Item key="Platypus">
      Platypus
    </Item>
  </Picker>
</Flex>
</Variant>
<Variant name="Menu state">
<Picker
    label="Frequency"
    isOpen={open}
    onOpenChange={setOpen}>
      <Item key="rarely">Rarely</Item>
      <Item key="sometimes">Sometimes</Item>
      <Item key="always">Always</Item>
    </Picker>
</Variant>
<Variant name="Menu state1">
<Picker
    label="Frequency"
    isOpen={open}
    onOpenChange={setOpen}>
      <Item key="rarely">Rarely</Item>
      <Item key="sometimes">Sometimes</Item>
      <Item key="always">Always</Item>
    </Picker>
</Variant>
<Variant name="Menu state12">
<Picker
    label="Frequency"
    isOpen={open}
    onOpenChange={setOpen}
>
      <Item key="rarely">
        Rarely
      </Item>
      <Item key="sometimes">
        Sometimes
      </Item>
      <Item key="always">
        Always
      </Item>
    </Picker>
</Variant>
</Component>
</Category>
<Category name="Status">
<Component name="Badge" docURL="https://react-spectrum.adobe.com/react-spectrum/Badge.html">
<Variant name="Example">
<Badge variant="positive">Licensed</Badge>
</Variant>
<Variant name="Example1">
<Badge variant="positive">Licensed</Badge>
</Variant>
<Variant name="Example12">
<Badge variant="positive">
  Licensed
</Badge>
</Variant>
<Variant name="Content">
<Badge variant="positive">
  <CheckmarkCircle aria-label="Done"/>
  <Text>Icon + Label</Text>
</Badge>
</Variant>
<Variant name="Content1">
<Badge variant="positive">
  <CheckmarkCircle aria-label="Done"/>
  <Text>Icon + Label</Text>
</Badge>
</Variant>
<Variant name="Content12">
<Badge variant="positive">
  <CheckmarkCircle aria-label="Done"/>
  <Text>
    Icon + Label
  </Text>
</Badge>
</Variant>
<Variant name="Variant">
<Flex direction="column" gap={8}>
  <Badge variant="positive">
    Green: Approved, Complete, Success, New, Purchased, Licensed
  </Badge>
  <Badge variant="info">Blue: Active, In Use, Live, Published</Badge>
  <Badge variant="negative">Red: Error, Alert, Rejected, Failed</Badge>
  <Badge variant="neutral">
    Gray: Archived, Deleted, Paused, Draft, Not Started, Ended
  </Badge>
</Flex>
</Variant>
<Variant name="Variant1">
<Flex direction="column" gap={8}>
  <Badge variant="positive">
    Green: Approved, Complete, Success, New, Purchased,
    Licensed
  </Badge>
  <Badge variant="info">
    Blue: Active, In Use, Live, Published
  </Badge>
  <Badge variant="negative">
    Red: Error, Alert, Rejected, Failed
  </Badge>
  <Badge variant="neutral">
    Gray: Archived, Deleted, Paused, Draft, Not Started,
    Ended
  </Badge>
</Flex>
</Variant>
<Variant name="Variant12">
<Flex
    direction="column"
    gap={8}
>
  <Badge variant="positive">
    Green: Approved,
    Complete, Success,
    New, Purchased,
    Licensed
  </Badge>
  <Badge variant="info">
    Blue: Active, In
    Use, Live,
    Published
  </Badge>
  <Badge variant="negative">
    Red: Error, Alert,
    Rejected, Failed
  </Badge>
  <Badge variant="neutral">
    Gray: Archived,
    Deleted, Paused,
    Draft, Not Started,
    Ended
  </Badge>
</Flex>
</Variant>
<Variant name="Variant123">
<Flex direction="column" gap={8}>
  <Badge variant="seafoam">Seafoam</Badge>
  <Badge variant="indigo">Indigo</Badge>
  <Badge variant="purple">Purple</Badge>
  <Badge variant="fuchsia">Fuchsia</Badge>
  <Badge variant="magenta">Magenta</Badge>
  <Badge variant="yellow">Yellow</Badge>
</Flex>
</Variant>
<Variant name="Variant1234">
<Flex direction="column" gap={8}>
  <Badge variant="seafoam">Seafoam</Badge>
  <Badge variant="indigo">Indigo</Badge>
  <Badge variant="purple">Purple</Badge>
  <Badge variant="fuchsia">Fuchsia</Badge>
  <Badge variant="magenta">Magenta</Badge>
  <Badge variant="yellow">Yellow</Badge>
</Flex>
</Variant>
<Variant name="Variant12345">
<Flex
    direction="column"
    gap={8}
>
  <Badge variant="seafoam">
    Seafoam
  </Badge>
  <Badge variant="indigo">
    Indigo
  </Badge>
  <Badge variant="purple">
    Purple
  </Badge>
  <Badge variant="fuchsia">
    Fuchsia
  </Badge>
  <Badge variant="magenta">
    Magenta
  </Badge>
  <Badge variant="yellow">
    Yellow
  </Badge>
</Flex>
</Variant>
</Component>
<Component name="InlineAlert" docURL="https://react-spectrum.adobe.com/react-spectrum/InlineAlert.html">
<Variant name="Example">
<InlineAlert>
  <Heading>Payment Information</Heading>
  <Content>
    Enter your billing address, shipping address, and payment method to
    complete your purchase.
  </Content>
</InlineAlert>
</Variant>
<Variant name="Example1">
<InlineAlert>
  <Heading>Payment Information</Heading>
  <Content>
    Enter your billing address, shipping address, and
    payment method to complete your purchase.
  </Content>
</InlineAlert>
</Variant>
<Variant name="Example12">
<InlineAlert>
  <Heading>
    Payment Information
  </Heading>
  <Content>
    Enter your billing
    address, shipping
    address, and
    payment method to
    complete your
    purchase.
  </Content>
</InlineAlert>
</Variant>
<Variant name="Content">
<InlineAlert variant="positive">
  <Heading>Payment Information</Heading>
  <Content>
    Enter your billing address, shipping address, and payment method to
    complete your purchase.
  </Content>
</InlineAlert>
</Variant>
<Variant name="Content1">
<InlineAlert variant="positive">
  <Heading>Payment Information</Heading>
  <Content>
    Enter your billing address, shipping address, and
    payment method to complete your purchase.
  </Content>
</InlineAlert>
</Variant>
<Variant name="Content12">
<InlineAlert variant="positive">
  <Heading>
    Payment Information
  </Heading>
  <Content>
    Enter your billing
    address, shipping
    address, and
    payment method to
    complete your
    purchase.
  </Content>
</InlineAlert>
</Variant>
<Variant name="Informative">
<InlineAlert variant="info">
  <Heading>Accepted Payment Methods</Heading>
  <Content>
    Only major credit cards are accepted for payment. Direct debit is
    currently unavailable.
  </Content>
</InlineAlert>
</Variant>
<Variant name="Informative1">
<InlineAlert variant="info">
  <Heading>Accepted Payment Methods</Heading>
  <Content>
    Only major credit cards are accepted for payment.
    Direct debit is currently unavailable.
  </Content>
</InlineAlert>
</Variant>
<Variant name="Informative12">
<InlineAlert variant="info">
  <Heading>
    Accepted Payment
    Methods
  </Heading>
  <Content>
    Only major credit
    cards are accepted
    for payment. Direct
    debit is currently
    unavailable.
  </Content>
</InlineAlert>
</Variant>
<Variant name="Positive">
<InlineAlert variant="positive">
  <Heading>Purchase completed</Heading>
  <Content>
    You'll get a confirmation email with your order details shortly.
  </Content>
</InlineAlert>
</Variant>
<Variant name="Positive1">
<InlineAlert variant="positive">
  <Heading>Purchase completed</Heading>
  <Content>
    You'll get a confirmation email with your order
    details shortly.
  </Content>
</InlineAlert>
</Variant>
<Variant name="Positive12">
<InlineAlert variant="positive">
  <Heading>
    Purchase completed
  </Heading>
  <Content>
    You'll get a
    confirmation email
    with your order
    details shortly.
  </Content>
</InlineAlert>
</Variant>
<Variant name="Notice">
<InlineAlert variant="notice">
  <Heading>Update payment information</Heading>
  <Content>
    The saved credit card for your account has expired. Update your payment
    information to complete the purchase.
  </Content>
</InlineAlert>
</Variant>
<Variant name="Notice1">
<InlineAlert variant="notice">
  <Heading>Update payment information</Heading>
  <Content>
    The saved credit card for your account has expired.
    Update your payment information to complete the
    purchase.
  </Content>
</InlineAlert>
</Variant>
<Variant name="Notice12">
<InlineAlert variant="notice">
  <Heading>
    Update payment
    information
  </Heading>
  <Content>
    The saved credit
    card for your
    account has
    expired. Update
    your payment
    information to
    complete the
    purchase.
  </Content>
</InlineAlert>
</Variant>
<Variant name="Negative">
<InlineAlert variant="negative">
  <Heading>Unable to process payment</Heading>
  <Content>
    There was an error processing your payment. Please check that your credit
    card information is correct, then try again.
  </Content>
</InlineAlert>
</Variant>
<Variant name="Negative1">
<InlineAlert variant="negative">
  <Heading>Unable to process payment</Heading>
  <Content>
    There was an error processing your payment. Please
    check that your credit card information is correct,
    then try again.
  </Content>
</InlineAlert>
</Variant>
<Variant name="Negative12">
<InlineAlert variant="negative">
  <Heading>
    Unable to process
    payment
  </Heading>
  <Content>
    There was an error
    processing your
    payment. Please
    check that your
    credit card
    information is
    correct, then try
    again.
  </Content>
</InlineAlert>
</Variant>
</Component>
<Component name="LabeledValue" docURL="https://react-spectrum.adobe.com/react-spectrum/LabeledValue.html">
<Variant name="Example">
<LabeledValue label="File name" value="Budget.xls"/>
</Variant>
<Variant name="Example1">
<LabeledValue label="File name" value="Budget.xls"/>
</Variant>
<Variant name="Example12">
<LabeledValue
    label="File name"
    value="Budget.xls"
/>
</Variant>
<Variant name="Numbers">
<LabeledValue label="Number of cookies" value={1024}/>
</Variant>
<Variant name="Numbers1">
<LabeledValue label="Number of cookies" value={1024}/>
</Variant>
<Variant name="Numbers12">
<LabeledValue
    label="Number of cookies"
    value={1024}
/>
</Variant>
<Variant name="Numbers123">
<LabeledValue
    label="File size"
    value={1.2}
    formatOptions={{style: 'unit', unit: 'megabyte'}}
/>
</Variant>
<Variant name="Numbers1234">
<LabeledValue
    label="File size"
    value={1.2}
    formatOptions={{style: 'unit', unit: 'megabyte'}}
/>
</Variant>
<Variant name="Numbers12345">
<LabeledValue
    label="File size"
    value={1.2}
    formatOptions={{
        style: 'unit',
        unit: 'megabyte'
    }}
/>
</Variant>
<Variant name="Numbers123456">
<LabeledValue
    label="Price range"
    value={{start: 150, end: 400}}
    formatOptions={{
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    }}
/>
</Variant>
<Variant name="Numbers1234567">
<LabeledValue
    label="Price range"
    value={{start: 150, end: 400}}
    formatOptions={{
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    }}
/>
</Variant>
<Variant name="Numbers12345678">
<LabeledValue
    label="Price range"
    value={{
        start: 150,
        end: 400
    }}
    formatOptions={{
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits:
            0
    }}
/>
</Variant>
<Variant name="Dates and times">
<LabeledValue
    label="Date modified"
    value={today(getLocalTimeZone()).subtract({weeks: 1})}
/>
</Variant>
<Variant name="Dates and times1">
<LabeledValue
    label="Date modified"
    value={today(getLocalTimeZone()).subtract({weeks: 1})}
/>
</Variant>
<Variant name="Dates and times12">
<LabeledValue
    label="Date modified"
    value={today(
        getLocalTimeZone()
    ).subtract({
        weeks: 1
    })}
/>
</Variant>
<Variant name="Dates and times123">
<LabeledValue label="Page load time" value={now(getLocalTimeZone())}/>
</Variant>
<Variant name="Dates and times1234">
<LabeledValue
    label="Page load time"
    value={now(getLocalTimeZone())}
/>
</Variant>
<Variant name="Dates and times12345">
<LabeledValue
    label="Page load time"
    value={now(
        getLocalTimeZone()
    )}
/>
</Variant>
<Variant name="Dates and times123456">
<LabeledValue
    label="Business hours"
    value={{start: new Time(8, 30), end: new Time(18)}}
/>
</Variant>
<Variant name="Dates and times1234567">
<LabeledValue
    label="Business hours"
    value={{start: new Time(8, 30), end: new Time(18)}}
/>
</Variant>
<Variant name="Dates and times12345678">
<LabeledValue
    label="Business hours"
    value={{
        start: new Time(
            8,
            30
        ),
        end: new Time(18)
    }}
/>
</Variant>
<Variant name="Dates and times123456789">
<LabeledValue
    label="Appointment date"
    value={new Date(2022, 6, 5)}
    formatOptions={{dateStyle: 'short'}}
/>
</Variant>
<Variant name="Dates and times12345678910">
<LabeledValue
    label="Appointment date"
    value={new Date(2022, 6, 5)}
    formatOptions={{dateStyle: 'short'}}
/>
</Variant>
<Variant name="Dates and times1234567891011">
<LabeledValue
    label="Appointment date"
    value={new Date(
        2022,
        6,
        5
    )}
    formatOptions={{
        dateStyle: 'short'
    }}
/>
</Variant>
<Variant name="Lists">
<LabeledValue
    label="Pizza toppings"
    value={['Pepperoni', 'Pineapple', 'Mushroom', 'Garlic']}
/>
</Variant>
<Variant name="Lists1">
<LabeledValue
    label="Pizza toppings"
    value={['Pepperoni', 'Pineapple', 'Mushroom', 'Garlic']}
/>
</Variant>
<Variant name="Lists12">
<LabeledValue
    label="Pizza toppings"
    value={[
        'Pepperoni',
        'Pineapple',
        'Mushroom',
        'Garlic'
    ]}
/>
</Variant>
<Variant name="Lists123">
<LabeledValue
    label="Interests"
    value={['Travel', 'Hiking', 'Snorkeling', 'Camping']}
    formatOptions={{type: 'unit'}}
/>
</Variant>
<Variant name="Lists1234">
<LabeledValue
    label="Interests"
    value={['Travel', 'Hiking', 'Snorkeling', 'Camping']}
    formatOptions={{type: 'unit'}}
/>
</Variant>
<Variant name="Lists12345">
<LabeledValue
    label="Interests"
    value={[
        'Travel',
        'Hiking',
        'Snorkeling',
        'Camping'
    ]}
    formatOptions={{
        type: 'unit'
    }}
/>
</Variant>
<Variant name="Label alignment and position">
<LabeledValue
    label="File name"
    value="Onboarding.pdf"
    labelPosition="side"
    labelAlign="end"
/>
</Variant>
<Variant name="Label alignment and position1">
<LabeledValue
    label="File name"
    value="Onboarding.pdf"
    labelPosition="side"
    labelAlign="end"
/>
</Variant>
<Variant name="Label alignment and position12">
<LabeledValue
    label="File name"
    value="Onboarding.pdf"
    labelPosition="side"
    labelAlign="end"
/>
</Variant>
<Variant name="Contextual help">
<LabeledValue
    label="Aperture"
    value="f/1.5"
    contextualHelp={
        <ContextualHelp>
      <Heading>What is the aperture?</Heading>
      <Content>
        The aperture setting controls the amount of light reaching the image
        sensor.
      </Content>
    </ContextualHelp>
    }
/>
</Variant>
<Variant name="Contextual help1">
<LabeledValue
    label="Aperture"
    value="f/1.5"
    contextualHelp={
        <ContextualHelp>
      <Heading>What is the aperture?</Heading>
      <Content>
        The aperture setting controls the amount of light
        reaching the image sensor.
      </Content>
    </ContextualHelp>
    }
/>
</Variant>
<Variant name="Contextual help12">
<LabeledValue
    label="Aperture"
    value="f/1.5"
    contextualHelp={
        <ContextualHelp>
      <Heading>
        What is the
        aperture?
      </Heading>
      <Content>
        The aperture
        setting
        controls the
        amount of light
        reaching the
        image sensor.
      </Content>
    </ContextualHelp>
    }
/>
</Variant>
</Component>
<Component name="Meter" docURL="https://react-spectrum.adobe.com/react-spectrum/Meter.html">
<Variant name="Example">
<Meter label="Storage space" variant="positive" value={35}/>
</Variant>
<Variant name="Example1">
<Meter
    label="Storage space"
    variant="positive"
    value={35}
/>
</Variant>
<Variant name="Example12">
<Meter
    label="Storage space"
    variant="positive"
    value={35}
/>
</Variant>
<Variant name="Value">
<Meter
    label="Storage space"
    value={25}
    variant="positive"/>
</Variant>
<Variant name="Value1">
<Meter
    label="Storage space"
    value={25}
    variant="positive"/>
</Variant>
<Variant name="Value12">
<Meter
    label="Storage space"
    value={25}
    variant="positive"/>
</Variant>
<Variant name="Value123">
<Meter
    label="Widgets Used"
    minValue={50}
    maxValue={150}
    value={100}
    variant="positive"/>
</Variant>
<Variant name="Value1234">
<Meter
    label="Widgets Used"
    minValue={50}
    maxValue={150}
    value={100}
    variant="positive"/>
</Variant>
<Variant name="Value12345">
<Meter
    label="Widgets Used"
    minValue={50}
    maxValue={150}
    value={100}
    variant="positive"/>
</Variant>
<Variant name="Value123456">
<Meter
    label="Currency"
    formatOptions={{style: 'currency', currency: 'JPY'}}
    value={60}
    variant="positive"/>
</Variant>
<Variant name="Value1234567">
<Meter
    label="Currency"
    formatOptions={{style: 'currency', currency: 'JPY'}}
    value={60}
    variant="positive"/>
</Variant>
<Variant name="Value12345678">
<Meter
    label="Currency"
    formatOptions={{
        style: 'currency',
        currency: 'JPY'
    }}
    value={60}
    variant="positive"
/>
</Variant>
<Variant name="Labeling">
<Flex direction="column" maxWidth="size-3000" gap="size-300">
  <Meter label="Label" value={25} variant="warning"/>
  <Meter label="Label" labelPosition="side" value={25} variant="warning"/>
  <Meter label="Label" showValueLabel={false} value={25} variant="warning"/>
</Flex>
</Variant>
<Variant name="Labeling1">
<Flex
    direction="column"
    maxWidth="size-3000"
    gap="size-300"
>
  <Meter label="Label" value={25} variant="warning"/>
  <Meter
      label="Label"
      labelPosition="side"
      value={25}
      variant="warning"
  />
  <Meter
      label="Label"
      showValueLabel={false}
      value={25}
      variant="warning"
  />
</Flex>
</Variant>
<Variant name="Labeling12">
<Flex
    direction="column"
    maxWidth="size-3000"
    gap="size-300"
>
  <Meter
      label="Label"
      value={25}
      variant="warning"
  />
  <Meter
      label="Label"
      labelPosition="side"
      value={25}
      variant="warning"
  />
  <Meter
      label="Label"
      showValueLabel={false}
      value={25}
      variant="warning"
  />
</Flex>
</Variant>
<Variant name="Labeling123">
<Meter
    label="Progress"
    marginBottom="size-300"
    value={25}
    valueLabel="1 of 4"
    variant="warning"
/>
</Variant>
<Variant name="Labeling1234">
<Meter
    label="Progress"
    marginBottom="size-300"
    value={25}
    valueLabel="1 of 4"
    variant="warning"
/>
</Variant>
<Variant name="Labeling12345">
<Meter
    label="Progress"
    marginBottom="size-300"
    value={25}
    valueLabel="1 of 4"
    variant="warning"
/>
</Variant>
<Variant name="Labeling123456">
<Flex direction="column" maxWidth="size-3000" gap="size-300">
  <Meter
      label="Space used"
      showValueLabel={false}
      value={90}
      variant="critical"/>

  <Meter
      label="Space used"
      valueLabel="54 of 60GB"
      value={90} variant="critical"/>

  <Meter
      label="Space used"
      formatOptions={{style: 'percent', minimumFractionDigits: 2}}
      value={89.123}
      variant="critical"/>
</Flex>
</Variant>
<Variant name="Labeling1234567">
<Flex
    direction="column"
    maxWidth="size-3000"
    gap="size-300"
>
  <Meter
      label="Space used"
      showValueLabel={false}
      value={90}
      variant="critical"
  />
   <Meter
       label="Space used"
       valueLabel="54 of 60GB"
       value={90}
       variant="critical"
   />
   <Meter
       label="Space used"
       formatOptions={{
           style: 'percent',
           minimumFractionDigits: 2
       }}
       value={89.123}
       variant="critical"
   />
</Flex>
</Variant>
<Variant name="Labeling12345678">
<Flex
    direction="column"
    maxWidth="size-3000"
    gap="size-300"
>
  <Meter
      label="Space used"
      showValueLabel={false}
      value={90}
      variant="critical"
  />
   <Meter
       label="Space used"
       valueLabel="54 of 60GB"
       value={90}
       variant="critical"
   />
   <Meter
       label="Space used"
       formatOptions={{
           style: 'percent',
           minimumFractionDigits:
               2
       }}
       value={89.123}
       variant="critical"
   />
</Flex>
</Variant>
<Variant name="Size">
<Flex direction="column" gap="size-300">
  <Meter label="Space used" size="S" value={90} variant="critical"/>
  <Meter label="Space used" size="L" value={90} variant="critical"/>
</Flex>
</Variant>
<Variant name="Size1">
<Flex direction="column" gap="size-300">
  <Meter
      label="Space used"
      size="S"
      value={90}
      variant="critical"
  />
  <Meter
      label="Space used"
      size="L"
      value={90}
      variant="critical"
  />
</Flex>
</Variant>
<Variant name="Size12">
<Flex
    direction="column"
    gap="size-300"
>
  <Meter
      label="Space used"
      size="S"
      value={90}
      variant="critical"
  />
  <Meter
      label="Space used"
      size="L"
      value={90}
      variant="critical"
  />
</Flex>
</Variant>
<Variant name="Variants">
<Flex direction="column" gap="size-300">
  <Meter label="Space used" value={25} variant="positive"/>
  <Meter label="Space used" value={90} variant="critical"/>
  <Meter label="Space used" value={70} variant="warning"/>
</Flex>
</Variant>
<Variant name="Variants1">
<Flex direction="column" gap="size-300">
  <Meter label="Space used" value={25} variant="positive"/>
  <Meter label="Space used" value={90} variant="critical"/>
  <Meter label="Space used" value={70} variant="warning"/>
</Flex>
</Variant>
<Variant name="Variants12">
<Flex
    direction="column"
    gap="size-300"
>
  <Meter
      label="Space used"
      value={25}
      variant="positive"
  />
  <Meter
      label="Space used"
      value={90}
      variant="critical"
  />
  <Meter
      label="Space used"
      value={70}
      variant="warning"
  />
</Flex>
</Variant>
</Component>
<Component name="ProgressBar" docURL="https://react-spectrum.adobe.com/react-spectrum/ProgressBar.html">
<Variant name="Example">
<ProgressBar label="Loadingâ¦" value={50}/>
</Variant>
<Variant name="Example1">
<ProgressBar label="Loadingâ¦" value={50}/>
</Variant>
<Variant name="Example12">
<ProgressBar
    label="Loadingâ¦"
    value={50}
/>
</Variant>
<Variant name="Value">
<ProgressBar label="Loadingâ¦" value={25}/>
</Variant>
<Variant name="Value1">
<ProgressBar label="Loadingâ¦" value={25}/>
</Variant>
<Variant name="Value12">
<ProgressBar
    label="Loadingâ¦"
    value={25}
/>
</Variant>
<Variant name="Value123">
<ProgressBar label="Loadingâ¦" minValue={50} maxValue={150} value={100}/>
</Variant>
<Variant name="Value1234">
<ProgressBar
    label="Loadingâ¦"
    minValue={50}
    maxValue={150}
    value={100}
/>
</Variant>
<Variant name="Value12345">
<ProgressBar
    label="Loadingâ¦"
    minValue={50}
    maxValue={150}
    value={100}
/>
</Variant>
<Variant name="Value123456">
<ProgressBar
    label="Loadingâ¦"
    formatOptions={{style: 'currency', currency: 'JPY'}}
    value={60}
/>
</Variant>
<Variant name="Value1234567">
<ProgressBar
    label="Loadingâ¦"
    formatOptions={{style: 'currency', currency: 'JPY'}}
    value={60}
/>
</Variant>
<Variant name="Value12345678">
<ProgressBar
    label="Loadingâ¦"
    formatOptions={{
        style: 'currency',
        currency: 'JPY'
    }}
    value={60}
/>
</Variant>
<Variant name="Indeterminate">
<ProgressBar label="Loadingâ¦" value={50}/>
</Variant>
<Variant name="Indeterminate1">
<ProgressBar label="Loadingâ¦" value={50}/>
</Variant>
<Variant name="Indeterminate12">
<ProgressBar
    label="Loadingâ¦"
    value={50}
/>
</Variant>
<Variant name="Indeterminate123">
<ProgressBar label="Loadingâ¦" isIndeterminate/>
</Variant>
<Variant name="Indeterminate1234">
<ProgressBar label="Loadingâ¦" isIndeterminate/>
</Variant>
<Variant name="Indeterminate12345">
<ProgressBar
    label="Loadingâ¦"
    isIndeterminate
/>
</Variant>
<Variant name="Labeling">
<Flex direction="column" maxWidth="size-3000" gap="size-300">
  <ProgressBar label="Loadingâ¦" value={30}/>
  <ProgressBar label="Loadingâ¦" labelPosition="side" value={30}/>
  <ProgressBar label="Loadingâ¦" showValueLabel={false} value={30}/>
</Flex>
</Variant>
<Variant name="Labeling1">
<Flex
    direction="column"
    maxWidth="size-3000"
    gap="size-300"
>
  <ProgressBar label="Loadingâ¦" value={30}/>
  <ProgressBar
      label="Loadingâ¦"
      labelPosition="side"
      value={30}
  />
  <ProgressBar
      label="Loadingâ¦"
      showValueLabel={false}
      value={30}
  />
</Flex>
</Variant>
<Variant name="Labeling12">
<Flex
    direction="column"
    maxWidth="size-3000"
    gap="size-300"
>
  <ProgressBar
      label="Loadingâ¦"
      value={30}
  />
  <ProgressBar
      label="Loadingâ¦"
      labelPosition="side"
      value={30}
  />
  <ProgressBar
      label="Loadingâ¦"
      showValueLabel={false}
      value={30}
  />
</Flex>
</Variant>
<Variant name="Labeling123">
<Flex direction="column" maxWidth="size-3000" gap="size-300">
  <ProgressBar label="Loadingâ¦" showValueLabel={false} value={30}/>
  <ProgressBar label="Loadingâ¦" valueLabel="30 of 60 dogs" value={30}/>
  <ProgressBar
      label="Loadingâ¦"
      formatOptions={{style: 'percent', minimumFractionDigits: 2}}
      value={30.123}
  />
</Flex>
</Variant>
<Variant name="Labeling1234">
<Flex
    direction="column"
    maxWidth="size-3000"
    gap="size-300"
>
  <ProgressBar
      label="Loadingâ¦"
      showValueLabel={false}
      value={30}
  />
  <ProgressBar
      label="Loadingâ¦"
      valueLabel="30 of 60 dogs"
      value={30}
  />
  <ProgressBar
      label="Loadingâ¦"
      formatOptions={{
          style: 'percent',
          minimumFractionDigits: 2
      }}
      value={30.123}
  />
</Flex>
</Variant>
<Variant name="Labeling12345">
<Flex
    direction="column"
    maxWidth="size-3000"
    gap="size-300"
>
  <ProgressBar
      label="Loadingâ¦"
      showValueLabel={false}
      value={30}
  />
  <ProgressBar
      label="Loadingâ¦"
      valueLabel="30 of 60 dogs"
      value={30}
  />
  <ProgressBar
      label="Loadingâ¦"
      formatOptions={{
          style: 'percent',
          minimumFractionDigits:
              2
      }}
      value={30.123}
  />
</Flex>
</Variant>
<Variant name="Static color">
<View backgroundColor="static-blue-700" padding="size-300">
  <ProgressBar label="Loadingâ¦" staticColor="white" value={5}/>
</View>
</Variant>
<Variant name="Static color1">
<View
    backgroundColor="static-blue-700"
    padding="size-300"
>
  <ProgressBar
      label="Loadingâ¦"
      staticColor="white"
      value={5}
  />
</View>
</Variant>
<Variant name="Static color12">
<View
    backgroundColor="static-blue-700"
    padding="size-300"
>
  <ProgressBar
      label="Loadingâ¦"
      staticColor="white"
      value={5}
  />
</View>
</Variant>
<Variant name="Size">
<Flex direction="column" gap="size-300">
  <ProgressBar label="Small" size="S" value={70}/>
  <ProgressBar label="Large" size="L" value={70}/>
</Flex>
</Variant>
<Variant name="Size1">
<Flex direction="column" gap="size-300">
  <ProgressBar label="Small" size="S" value={70}/>
  <ProgressBar label="Large" size="L" value={70}/>
</Flex>
</Variant>
<Variant name="Size12">
<Flex
    direction="column"
    gap="size-300"
>
  <ProgressBar
      label="Small"
      size="S"
      value={70}
  />
  <ProgressBar
      label="Large"
      size="L"
      value={70}
  />
</Flex>
</Variant>
</Component>
<Component name="ProgressCircle" docURL="https://react-spectrum.adobe.com/react-spectrum/ProgressCircle.html">
<Variant name="Example">
<ProgressCircle aria-label="Loadingâ¦" value={50}/>
</Variant>
<Variant name="Example1">
<ProgressCircle aria-label="Loadingâ¦" value={50}/>
</Variant>
<Variant name="Example12">
<ProgressCircle
    aria-label="Loadingâ¦"
    value={50}
/>
</Variant>
<Variant name="Value">
<ProgressCircle aria-label="Loadingâ¦" value={25}/>
</Variant>
<Variant name="Value1">
<ProgressCircle aria-label="Loadingâ¦" value={25}/>
</Variant>
<Variant name="Value12">
<ProgressCircle
    aria-label="Loadingâ¦"
    value={25}
/>
</Variant>
<Variant name="Value123">
<ProgressCircle
    aria-label="Loadingâ¦"
    minValue={50}
    maxValue={150}
    value={100}
/>
</Variant>
<Variant name="Value1234">
<ProgressCircle
    aria-label="Loadingâ¦"
    minValue={50}
    maxValue={150}
    value={100}
/>
</Variant>
<Variant name="Value12345">
<ProgressCircle
    aria-label="Loadingâ¦"
    minValue={50}
    maxValue={150}
    value={100}
/>
</Variant>
<Variant name="Indeterminate">
<ProgressCircle aria-label="Loadingâ¦" value={50}/>
</Variant>
<Variant name="Indeterminate1">
<ProgressCircle aria-label="Loadingâ¦" value={50}/>
</Variant>
<Variant name="Indeterminate12">
<ProgressCircle
    aria-label="Loadingâ¦"
    value={50}
/>
</Variant>
<Variant name="Indeterminate123">
<ProgressCircle aria-label="Loadingâ¦" isIndeterminate/>
</Variant>
<Variant name="Indeterminate1234">
<ProgressCircle aria-label="Loadingâ¦" isIndeterminate/>
</Variant>
<Variant name="Indeterminate12345">
<ProgressCircle
    aria-label="Loadingâ¦"
    isIndeterminate
/>
</Variant>
<Variant name="Static color">
<View backgroundColor="static-blue-700" padding="size-300">
  <ProgressCircle aria-label="Loadingâ¦" staticColor="white" isIndeterminate/>
</View>
</Variant>
<Variant name="Static color1">
<View
    backgroundColor="static-blue-700"
    padding="size-300"
>
  <ProgressCircle
      aria-label="Loadingâ¦"
      staticColor="white"
      isIndeterminate
  />
</View>
</Variant>
<Variant name="Static color12">
<View
    backgroundColor="static-blue-700"
    padding="size-300"
>
  <ProgressCircle
      aria-label="Loadingâ¦"
      staticColor="white"
      isIndeterminate
  />
</View>
</Variant>
<Variant name="Size">
<ProgressCircle
    aria-label="Loadingâ¦"
    marginEnd="size-300"
    size="S"
    value={15}
/>
</Variant>
<Variant name="Size1">
<ProgressCircle
    aria-label="Loadingâ¦"
    marginEnd="size-300"
    size="S"
    value={15}
/>
</Variant>
<Variant name="Size12">
<ProgressCircle
    aria-label="Loadingâ¦"
    marginEnd="size-300"
    size="S"
    value={15}
/>
</Variant>
</Component>
<Component name="StatusLight" docURL="https://react-spectrum.adobe.com/react-spectrum/StatusLight.html">
<Variant name="Example">
<StatusLight variant="positive">Ready</StatusLight>
</Variant>
<Variant name="Example1">
<StatusLight variant="positive">Ready</StatusLight>
</Variant>
<Variant name="Example12">
<StatusLight variant="positive">
  Ready
</StatusLight>
</Variant>
<Variant name="Content">
<StatusLight variant="positive">Semantic color</StatusLight>
</Variant>
<Variant name="Content1">
<StatusLight variant="positive">Semantic color</StatusLight>
</Variant>
<Variant name="Content12">
<StatusLight variant="positive">
  Semantic color
</StatusLight>
</Variant>
<Variant name="Variant">
<StatusLight variant="neutral">
  Gray: Archived, Deleted, Paused, Draft, Not Started, Ended
</StatusLight>
</Variant>
<Variant name="Variant1">
<StatusLight variant="neutral">
  Gray: Archived, Deleted, Paused, Draft, Not Started,
  Ended
</StatusLight>
</Variant>
<Variant name="Variant12">
<StatusLight variant="neutral">
  Gray: Archived,
  Deleted, Paused,
  Draft, Not Started,
  Ended
</StatusLight>
</Variant>
<Variant name="Variant123">
<StatusLight variant="indigo">Indigo</StatusLight>
</Variant>
<Variant name="Variant1234">
<StatusLight variant="indigo">Indigo</StatusLight>
</Variant>
<Variant name="Variant12345">
<StatusLight variant="indigo">
  Indigo
</StatusLight>
</Variant>
<Variant name="Disabled">
<StatusLight variant="yellow" isDisabled>Yellow</StatusLight>
</Variant>
<Variant name="Disabled1">
<StatusLight variant="yellow" isDisabled>
  Yellow
</StatusLight>
</Variant>
<Variant name="Disabled12">
<StatusLight
    variant="yellow"
    isDisabled
>
  Yellow
</StatusLight>
</Variant>
</Component>
<Component name="Toastbeta" docURL="https://react-spectrum.adobe.com/react-spectrum/Toast.html">
<Variant name="Example">
<ToastContainer/>
</Variant>
<Variant name="Example1">
<ToastContainer/>
</Variant>
<Variant name="Example12">
<ToastContainer/>
</Variant>
<Variant name="Example123">
<Button
    onPress={() => ToastQueue.positive('Toast is done!')}
    variant="primary">
  Show toast
</Button>
</Variant>
<Variant name="Example1234">
<Button
    onPress={() => ToastQueue.positive('Toast is done!')}
    variant="primary">
  Show toast
</Button>
</Variant>
<Variant name="Example12345">
<Button
    onPress={() =>
        ToastQueue
            .positive(
                'Toast is done!'
            )}
    variant="primary"
>
  Show toast
</Button>
</Variant>
<Variant name="Content">
<ButtonGroup>
  <Button
      onPress={() => ToastQueue.neutral('Toast available')} variant="secondary">
    Show Neutral Toast
  </Button>
  <Button
      onPress={() => ToastQueue.positive('Toast is done!')} variant="primary">
    Show Positive Toast
  </Button>
  <Button
      onPress={() => ToastQueue.negative('Toast is burned!')} variant="negative">
    Show Negative Toast
  </Button>
  <Button
      onPress={() => ToastQueue.info('Toastingâ¦')} variant="accent"
      style="outline">
    Show Info Toast
  </Button>
</ButtonGroup>
</Variant>
<Variant name="Content1">
<ButtonGroup>
  <Button
      onPress={() => ToastQueue.neutral('Toast available')} variant="secondary">
    Show Neutral Toast
  </Button>
  <Button
      onPress={() => ToastQueue.positive('Toast is done!')} variant="primary">
    Show Positive Toast
  </Button>
  <Button
      onPress={() => ToastQueue.negative('Toast is burned!')} variant="negative">
    Show Negative Toast
  </Button>
  <Button
      onPress={() => ToastQueue.info('Toastingâ¦')} variant="accent"
      style="outline">
    Show Info Toast
  </Button>
</ButtonGroup>
</Variant>
<Variant name="Content12">
<ButtonGroup>
  <Button
      onPress={() =>
          ToastQueue
              .neutral(
                  'Toast available'
              )} variant="secondary"
  >
    Show Neutral Toast
  </Button>
  <Button
      onPress={() =>
          ToastQueue
              .positive(
                  'Toast is done!'
              )} variant="primary"
  >
    Show Positive Toast
  </Button>
  <Button
      onPress={() =>
          ToastQueue
              .negative(
                  'Toast is burned!'
              )} variant="negative"
  >
    Show Negative Toast
  </Button>
  <Button
      onPress={() =>
          ToastQueue.info(
              'Toastingâ¦'
          )} variant="accent"
      style="outline"
  >
    Show Info Toast
  </Button>
</ButtonGroup>
</Variant>
<Variant name="Events">
<Button
    onPress={() => ToastQueue.info('An update is available', {
        actionLabel: 'Update',
        onAction: () => alert('Updating!'),
        shouldCloseOnAction: true
    })}
    variant="primary">
  Show toast
</Button>
</Variant>
<Variant name="Events1">
<Button
    onPress={() => ToastQueue.info('An update is available', {
        actionLabel: 'Update',
        onAction: () => alert('Updating!'),
        shouldCloseOnAction: true
    })}
    variant="primary">
  Show toast
</Button>
</Variant>
<Variant name="Events12">
<Button
    onPress={() =>
        ToastQueue.info(
            'An update is available',
            {
                actionLabel:
                    'Update',
                onAction: () =>
                    alert(
                        'Updating!'
                    ),
                shouldCloseOnAction:
                    true
            }
        )}
    variant="primary"
>
  Show toast
</Button>
</Variant>
<Variant name="Auto-dismiss">
<Button
    onPress={() => ToastQueue.positive('Toast is done!', {timeout: 5000})} variant="primary">
  Show toast
</Button>
</Variant>
<Variant name="Auto-dismiss1">
<Button
    onPress={() =>
        ToastQueue.positive('Toast is done!', {
            timeout: 5000
        })} variant="primary"
>
  Show toast
</Button>
</Variant>
<Variant name="Auto-dismiss12">
<Button
    onPress={() =>
        ToastQueue
            .positive(
                'Toast is done!',
                {
                    timeout: 5000
                }
            )} variant="primary"
>
  Show toast
</Button>
</Variant>
<Variant name="Programmatic dismissal">
<Button
    onPress={() => {
        if (!close) {
            setClose(() => close);
        } else {
            close();
        }
    }}
    variant="primary"
>
      {close ? 'Hide' : 'Show'} Toast
    </Button>
</Variant>
<Variant name="Programmatic dismissal1">
<Button
    onPress={() => {
        if (!close) {
            setClose(() => close);
        } else {
            close();
        }
    }}
    variant="primary"
>
      {close ? 'Hide' : 'Show'} Toast
    </Button>
</Variant>
<Variant name="Programmatic dismissal12">
<Button
    onPress={() => {
        if (!close) {
            setClose(() =>
                close
            );
        } else {
            close();
        }
    }}
    variant="primary"
>
      {close
          ? 'Hide'
          : 'Show'} Toast
    </Button>
</Variant>
</Component>
</Category>
<Category name="Content">
<Component name="Avatar" docURL="https://react-spectrum.adobe.com/react-spectrum/Avatar.html">
<Variant name="Example">
<Avatar src="https://i.imgur.com/kJOwAdv.png" alt="default Adobe avatar"/>
</Variant>
<Variant name="Example1">
<Avatar
    src="https://i.imgur.com/kJOwAdv.png"
    alt="default Adobe avatar"
/>
</Variant>
<Variant name="Example12">
<Avatar
    src="https://i.imgur.com/kJOwAdv.png"
    alt="default Adobe avatar"
/>
</Variant>
<Variant name="Disabled">
<Avatar
    src="https://i.imgur.com/kJOwAdv.png"
    alt="default Adobe avatar"
    isDisabled
/>
</Variant>
<Variant name="Disabled1">
<Avatar
    src="https://i.imgur.com/kJOwAdv.png"
    alt="default Adobe avatar"
    isDisabled
/>
</Variant>
<Variant name="Disabled12">
<Avatar
    src="https://i.imgur.com/kJOwAdv.png"
    alt="default Adobe avatar"
    isDisabled
/>
</Variant>
<Variant name="Size">
<Flex gap="size-100" wrap>
  {[50, 75, 100, 200, 300, 400, 500, 600, 700].map((size) => (
      <Avatar
          src="https://i.imgur.com/kJOwAdv.png"
          alt="default Adobe avatar"
          size={`avatar-size-${size}`}
      />
  ))}
    <Avatar
        src="https://i.imgur.com/kJOwAdv.png"
        alt="avatar with custom size"
        size={50}
    />
</Flex>
</Variant>
<Variant name="Size1">
<Flex gap="size-100" wrap>
  {[50, 75, 100, 200, 300, 400, 500, 600, 700].map(
      (size) => (
          <Avatar
              src="https://i.imgur.com/kJOwAdv.png"
              alt="default Adobe avatar"
              size={`avatar-size-${size}`}
          />
      )
  )}
    <Avatar
        src="https://i.imgur.com/kJOwAdv.png"
        alt="avatar with custom size"
        size={50}
    />
</Flex>
</Variant>
<Variant name="Size12">
<Flex
    gap="size-100"
    wrap
>
  {[
      50,
      75,
      100,
      200,
      300,
      400,
      500,
      600,
      700
  ].map((size) => (
      <Avatar
          src="https://i.imgur.com/kJOwAdv.png"
          alt="default Adobe avatar"
          size={`avatar-size-${size}`}
      />
  ))}
    <Avatar
        src="https://i.imgur.com/kJOwAdv.png"
        alt="avatar with custom size"
        size={50}
    />
</Flex>
</Variant>
</Component>
<Component name="Content" docURL="https://react-spectrum.adobe.com/react-spectrum/Content.html">
<Variant name="Example">
<Content>Content is king</Content>
</Variant>
<Variant name="Example1">
<Content>Content is king</Content>
</Variant>
<Variant name="Example12">
<Content>
  Content is king
</Content>
</Variant>
</Component>
<Component name="Divider" docURL="https://react-spectrum.adobe.com/react-spectrum/Divider.html">
<Variant name="Horizontal">
<Flex direction="column" gap="size-125">
  <Text>Content above</Text>
  <Divider/>
  <Text>Content below</Text>
</Flex>
</Variant>
<Variant name="Horizontal1">
<Flex direction="column" gap="size-125">
  <Text>Content above</Text>
  <Divider/>
  <Text>Content below</Text>
</Flex>
</Variant>
<Variant name="Horizontal12">
<Flex
    direction="column"
    gap="size-125"
>
  <Text>
    Content above
  </Text>
  <Divider/>
  <Text>
    Content below
  </Text>
</Flex>
</Variant>
<Variant name="Vertical">
<Flex gap="size-125">
  <Text>Content left</Text>
  <Divider orientation="vertical"/>
  <Text>Content right</Text>
</Flex>
</Variant>
<Variant name="Vertical1">
<Flex gap="size-125">
  <Text>Content left</Text>
  <Divider orientation="vertical"/>
  <Text>Content right</Text>
</Flex>
</Variant>
<Variant name="Vertical12">
<Flex gap="size-125">
  <Text>
    Content left
  </Text>
  <Divider orientation="vertical"/>
  <Text>
    Content right
  </Text>
</Flex>
</Variant>
<Variant name="Size">
<Flex direction="column" gap="size-125">
  <Text>Content above large Divider</Text>
  <Divider size="L"/>
  <Text>Content above medium Divider</Text>
  <Divider size="M"/>
  <Text>Content above small Divider</Text>
  <Divider size="S"/>
</Flex>
</Variant>
<Variant name="Size1">
<Flex direction="column" gap="size-125">
  <Text>Content above large Divider</Text>
  <Divider size="L"/>
  <Text>Content above medium Divider</Text>
  <Divider size="M"/>
  <Text>Content above small Divider</Text>
  <Divider size="S"/>
</Flex>
</Variant>
<Variant name="Size12">
<Flex
    direction="column"
    gap="size-125"
>
  <Text>
    Content above large
    Divider
  </Text>
  <Divider size="L"/>
  <Text>
    Content above
    medium Divider
  </Text>
  <Divider size="M"/>
  <Text>
    Content above small
    Divider
  </Text>
  <Divider size="S"/>
</Flex>
</Variant>
</Component>
<Component name="Footer" docURL="https://react-spectrum.adobe.com/react-spectrum/Footer.html">
<Variant name="Example">
<Footer>&copy; All rights reserved.</Footer>
</Variant>
<Variant name="Example1">
<Footer>&copy; All rights reserved.</Footer>
</Variant>
<Variant name="Example12">
<Footer>
  &copy; All rights
  reserved.
</Footer>
</Variant>
</Component>
<Component name="Header" docURL="https://react-spectrum.adobe.com/react-spectrum/Header.html">
<Variant name="Example">
<Header>Cute cats</Header>
</Variant>
<Variant name="Example1">
<Header>Cute cats</Header>
</Variant>
<Variant name="Example12">
<Header>
  Cute cats
</Header>
</Variant>
</Component>
<Component name="Heading" docURL="https://react-spectrum.adobe.com/react-spectrum/Heading.html">
<Variant name="Example">
<Heading level={4}>Edit</Heading>
</Variant>
<Variant name="Example1">
<Heading level={4}>Edit</Heading>
</Variant>
<Variant name="Example12">
<Heading level={4}>
  Edit
</Heading>
</Variant>
</Component>
<Component name="IllustratedMessage" docURL="https://react-spectrum.adobe.com/react-spectrum/IllustratedMessage.html">
<Variant name="Example">
<IllustratedMessage>
  <NotFound/>
  <Heading>No results</Heading>
  <Content>Try another search</Content>
</IllustratedMessage>
</Variant>
<Variant name="Example1">
<IllustratedMessage>
  <NotFound/>
  <Heading>No results</Heading>
  <Content>Try another search</Content>
</IllustratedMessage>
</Variant>
<Variant name="Example12">
<IllustratedMessage>
  <NotFound/>
  <Heading>
    No results
  </Heading>
  <Content>
    Try another search
  </Content>
</IllustratedMessage>
</Variant>
<Variant name="Content">
<IllustratedMessage>
  <Upload/>
  <Heading>Drag and Drop your file</Heading>
  <Content>
    Select a File from your computer<br/> or Search Adobe Stock
  </Content>
</IllustratedMessage>
</Variant>
<Variant name="Content1">
<IllustratedMessage>
  <Upload/>
  <Heading>Drag and Drop your file</Heading>
  <Content>
    Select a File from your computer<br/>{' '}
    or Search Adobe Stock
  </Content>
</IllustratedMessage>
</Variant>
<Variant name="Content12">
<IllustratedMessage>
  <Upload/>
  <Heading>
    Drag and Drop your
    file
  </Heading>
  <Content>
    Select a File from
    your computer<br/>
      {' '}
    or Search Adobe
    Stock
  </Content>
</IllustratedMessage>
</Variant>
<Variant name="Accessibility">
<IllustratedMessage>
  <NotFound aria-label="No results"/>
</IllustratedMessage>
</Variant>
<Variant name="Accessibility1">
<IllustratedMessage>
  <NotFound aria-label="No results"/>
</IllustratedMessage>
</Variant>
<Variant name="Accessibility12">
<IllustratedMessage>
  <NotFound aria-label="No results"/>
</IllustratedMessage>
</Variant>
<Variant name="No search results">
<IllustratedMessage>
  <NoSearchResults/>
  <Heading>No matching results</Heading>
  <Content>Try another search.</Content>
</IllustratedMessage>
</Variant>
<Variant name="No search results1">
<IllustratedMessage>
  <NoSearchResults/>
  <Heading>No matching results</Heading>
  <Content>Try another search.</Content>
</IllustratedMessage>
</Variant>
<Variant name="No search results12">
<IllustratedMessage>
  <NoSearchResults/>
  <Heading>
    No matching results
  </Heading>
  <Content>
    Try another search.
  </Content>
</IllustratedMessage>
</Variant>
<Variant name="403 Forbidden">
<IllustratedMessage>
  <Unauthorized/>
  <Heading>Error 403: Access not allowed</Heading>
  <Content>
    You do not have permission to access this page. Try checking the URL or
    visit a different page.
  </Content>
</IllustratedMessage>
</Variant>
<Variant name="403 Forbidden1">
<IllustratedMessage>
  <Unauthorized/>
  <Heading>Error 403: Access not allowed</Heading>
  <Content>
    You do not have permission to access this page. Try
    checking the URL or visit a different page.
  </Content>
</IllustratedMessage>
</Variant>
<Variant name="403 Forbidden12">
<IllustratedMessage>
  <Unauthorized/>
  <Heading>
    Error 403: Access
    not allowed
  </Heading>
  <Content>
    You do not have
    permission to
    access this page.
    Try checking the
    URL or visit a
    different page.
  </Content>
</IllustratedMessage>
</Variant>
<Variant name="404 Not found">
<IllustratedMessage>
  <NotFound/>
  <Heading>Error 404: Page not found</Heading>
  <Content>
    This page isn't available. Try checking the URL or visit a different page.
  </Content>
</IllustratedMessage>
</Variant>
<Variant name="404 Not found1">
<IllustratedMessage>
  <NotFound/>
  <Heading>Error 404: Page not found</Heading>
  <Content>
    This page isn't available. Try checking the URL or
    visit a different page.
  </Content>
</IllustratedMessage>
</Variant>
<Variant name="404 Not found12">
<IllustratedMessage>
  <NotFound/>
  <Heading>
    Error 404: Page not
    found
  </Heading>
  <Content>
    This page isn't
    available. Try
    checking the URL or
    visit a different
    page.
  </Content>
</IllustratedMessage>
</Variant>
<Variant name="500 Internal server error">
<IllustratedMessage>
  <Error/>
  <Heading>Error 500: Internal server error</Heading>
  <Content>Something went wrong. Please try again later.</Content>
</IllustratedMessage>
</Variant>
<Variant name="500 Internal server error1">
<IllustratedMessage>
  <Error/>
  <Heading>Error 500: Internal server error</Heading>
  <Content>
    Something went wrong. Please try again later.
  </Content>
</IllustratedMessage>
</Variant>
<Variant name="500 Internal server error12">
<IllustratedMessage>
  <Error/>
  <Heading>
    Error 500: Internal
    server error
  </Heading>
  <Content>
    Something went
    wrong. Please try
    again later.
  </Content>
</IllustratedMessage>
</Variant>
<Variant name="503 Service unavailable">
<IllustratedMessage>
  <Unavailable/>
  <Heading>Error 503: Service unavailable</Heading>
  <Content>
    This page isn't working. Try a different page or try again later.
  </Content>
</IllustratedMessage>
</Variant>
<Variant name="503 Service unavailable1">
<IllustratedMessage>
  <Unavailable/>
  <Heading>Error 503: Service unavailable</Heading>
  <Content>
    This page isn't working. Try a different page or try
    again later.
  </Content>
</IllustratedMessage>
</Variant>
<Variant name="503 Service unavailable12">
<IllustratedMessage>
  <Unavailable/>
  <Heading>
    Error 503: Service
    unavailable
  </Heading>
  <Content>
    This page isn't
    working. Try a
    different page or
    try again later.
  </Content>
</IllustratedMessage>
</Variant>
<Variant name="504 Gateway timeout">
<IllustratedMessage>
  <Timeout/>
  <Heading>Error 504: Server timeout</Heading>
  <Content>The server took too long. Please try again later.</Content>
</IllustratedMessage>
</Variant>
<Variant name="504 Gateway timeout1">
<IllustratedMessage>
  <Timeout/>
  <Heading>Error 504: Server timeout</Heading>
  <Content>
    The server took too long. Please try again later.
  </Content>
</IllustratedMessage>
</Variant>
<Variant name="504 Gateway timeout12">
<IllustratedMessage>
  <Timeout/>
  <Heading>
    Error 504: Server
    timeout
  </Heading>
  <Content>
    The server took too
    long. Please try
    again later.
  </Content>
</IllustratedMessage>
</Variant>
</Component>
<Component name="Image" docURL="https://react-spectrum.adobe.com/react-spectrum/Image.html">
<Variant name="Examples">
<Image src="https://i.imgur.com/Z7AzH2c.png" alt="Sky and roof"/>
</Variant>
<Variant name="Examples1">
<Image
    src="https://i.imgur.com/Z7AzH2c.png"
    alt="Sky and roof"
/>
</Variant>
<Variant name="Examples12">
<Image
    src="https://i.imgur.com/Z7AzH2c.png"
    alt="Sky and roof"
/>
</Variant>
<Variant name="Decorative">
<Flex width="200px">
  <Image src="https://i.imgur.com/c3gTKSJ.jpg" alt=""/>
</Flex>
</Variant>
<Variant name="Decorative1">
<Flex width="200px">
  <Image src="https://i.imgur.com/c3gTKSJ.jpg" alt=""/>
</Flex>
</Variant>
<Variant name="Decorative12">
<Flex width="200px">
  <Image
      src="https://i.imgur.com/c3gTKSJ.jpg"
      alt=""
  />
</Flex>
</Variant>
<Variant name="Object Fit">
<Flex width="100%" height="200px">
  <Image
      src="https://i.imgur.com/c3gTKSJ.jpg"
      alt="Eiffel Tower at sunset"
      objectFit="cover"/>
</Flex>
</Variant>
<Variant name="Object Fit1">
<Flex width="100%" height="200px">
  <Image
      src="https://i.imgur.com/c3gTKSJ.jpg"
      alt="Eiffel Tower at sunset"
      objectFit="cover"/>
</Flex>
</Variant>
<Variant name="Object Fit12">
<Flex
    width="100%"
    height="200px"
>
  <Image
      src="https://i.imgur.com/c3gTKSJ.jpg"
      alt="Eiffel Tower at sunset"
      objectFit="cover"
  />
</Flex>
</Variant>
</Component>
<Component name="Keyboard" docURL="https://react-spectrum.adobe.com/react-spectrum/Keyboard.html">
<Variant name="Example">
<Keyboard>âV</Keyboard>
</Variant>
<Variant name="Example1">
<Keyboard>âV</Keyboard>
</Variant>
<Variant name="Example12">
<Keyboard>âV</Keyboard>
</Variant>
</Component>
<Component name="Text" docURL="https://react-spectrum.adobe.com/react-spectrum/Text.html">
<Variant name="Example">
<Text>Paste</Text>
</Variant>
<Variant name="Example1">
<Text>Paste</Text>
</Variant>
<Variant name="Example12">
<Text>Paste</Text>
</Variant>
</Component>
<Component name="View" docURL="https://react-spectrum.adobe.com/react-spectrum/View.html">
<Variant name="Example">
<View
    borderWidth="thin"
    borderColor="dark"
    borderRadius="medium"
    padding="size-250">
  <TextField label="Name"/>
</View>
</Variant>
<Variant name="Example1">
<View
    borderWidth="thin"
    borderColor="dark"
    borderRadius="medium"
    padding="size-250">
  <TextField label="Name"/>
</View>
</Variant>
<Variant name="Example12">
<View
    borderWidth="thin"
    borderColor="dark"
    borderRadius="medium"
    padding="size-250"
>
  <TextField label="Name"/>
</View>
</Variant>
</Component>
<Component name="Well" docURL="https://react-spectrum.adobe.com/react-spectrum/Well.html">
<Variant name="Example">
<Well>
  Better a little which is well done, than a great deal imperfectly.
</Well>
</Variant>
<Variant name="Example1">
<Well>
  Better a little which is well done, than a great deal
  imperfectly.
</Well>
</Variant>
<Variant name="Example12">
<Well>
  Better a little which
  is well done, than a
  great deal
  imperfectly.
</Well>
</Variant>
<Variant name="Content">
<Well>Well, well, well</Well>
</Variant>
<Variant name="Content1">
<Well>Well, well, well</Well>
</Variant>
<Variant name="Content12">
<Well>
  Well, well, well
</Well>
</Variant>
<Variant name="Accessibility">
<Well role="region" aria-labelledby="wellLabel">
  <h3 id="wellLabel">Shipping Address</h3>
  <p>601 Townsend Street<br/> San Francisco, CA 94103</p>
</Well>
</Variant>
<Variant name="Accessibility1">
<Well role="region" aria-labelledby="wellLabel">
  <h3 id="wellLabel">Shipping Address</h3>
  <p>601 Townsend Street<br/> San Francisco, CA 94103</p>
</Well>
</Variant>
<Variant name="Accessibility12">
<Well role="region"
    aria-labelledby="wellLabel"
>
              <h3 id="wellLabel">
                Shipping Address
              </h3>
              <p>
                601 Townsend
                Street<br/>{' '}
                San Francisco, CA
                94103
              </p>
            </Well>
</Variant>
</Component>
</Category>
<Category name="Dependencies">
<Component name="ABC">
<Variant>
<ABC/>
</Variant>
</Component>
<Component name="AEMScreens">
<Variant>
<AEMScreens/>
</Variant>
</Component>
<Component name="Actions">
<Variant>
<Actions/>
</Variant>
</Component>
<Component name="AdDisplay">
<Variant>
<AdDisplay/>
</Variant>
</Component>
<Component name="AdPrint">
<Variant>
<AdPrint/>
</Variant>
</Component>
<Component name="Add">
<Variant>
<Add/>
</Variant>
</Component>
<Component name="AddCircle">
<Variant>
<AddCircle/>
</Variant>
</Component>
<Component name="AddTo">
<Variant>
<AddTo/>
</Variant>
</Component>
<Component name="AddToSelection">
<Variant>
<AddToSelection/>
</Variant>
</Component>
<Component name="Airplane">
<Variant>
<Airplane/>
</Variant>
</Component>
<Component name="Alert">
<Variant>
<Alert/>
</Variant>
</Component>
<Component name="AlertAdd">
<Variant>
<AlertAdd/>
</Variant>
</Component>
<Component name="AlertCheck">
<Variant>
<AlertCheck/>
</Variant>
</Component>
<Component name="AlertCircle">
<Variant>
<AlertCircle/>
</Variant>
</Component>
<Component name="AlertCircleFilled">
<Variant>
<AlertCircleFilled/>
</Variant>
</Component>
<Component name="Algorithm">
<Variant>
<Algorithm/>
</Variant>
</Component>
<Component name="Alias">
<Variant>
<Alias/>
</Variant>
</Component>
<Component name="AlignBottom">
<Variant>
<AlignBottom/>
</Variant>
</Component>
<Component name="AlignCenter">
<Variant>
<AlignCenter/>
</Variant>
</Component>
<Component name="AlignLeft">
<Variant>
<AlignLeft/>
</Variant>
</Component>
<Component name="AlignMiddle">
<Variant>
<AlignMiddle/>
</Variant>
</Component>
<Component name="AlignRight">
<Variant>
<AlignRight/>
</Variant>
</Component>
<Component name="AlignTop">
<Variant>
<AlignTop/>
</Variant>
</Component>
<Component name="AllWorkflow">
<Variant>
<AllWorkflow/>
</Variant>
</Component>
<Component name="WorkflowChromatic">
<Variant>
<WorkflowChromatic/>
</Variant>
</Component>
<Component name="Amusementpark">
<Variant>
<Amusementpark/>
</Variant>
</Component>
<Component name="Anchor">
<Variant>
<Anchor/>
</Variant>
</Component>
<Component name="AnchorSelect">
<Variant>
<AnchorSelect/>
</Variant>
</Component>
<Component name="Annotate">
<Variant>
<Annotate/>
</Variant>
</Component>
<Component name="AnnotatePen">
<Variant>
<AnnotatePen/>
</Variant>
</Component>
<Component name="Answer">
<Variant>
<Answer/>
</Variant>
</Component>
<Component name="AnswerFavorite">
<Variant>
<AnswerFavorite/>
</Variant>
</Component>
<Component name="App">
<Variant>
<App/>
</Variant>
</Component>
<Component name="AppRefresh">
<Variant>
<AppRefresh/>
</Variant>
</Component>
<Component name="AppleFiles">
<Variant>
<AppleFiles/>
</Variant>
</Component>
<Component name="ApplicationDelivery">
<Variant>
<ApplicationDelivery/>
</Variant>
</Component>
<Component name="ApproveReject">
<Variant>
<ApproveReject/>
</Variant>
</Component>
<Component name="Apps">
<Variant>
<Apps/>
</Variant>
</Component>
<Component name="Archive">
<Variant>
<Archive/>
</Variant>
</Component>
<Component name="ArchiveRemove">
<Variant>
<ArchiveRemove/>
</Variant>
</Component>
<Component name="ArrowDown">
<Variant>
<ArrowDown/>
</Variant>
</Component>
<Component name="ArrowLeft">
<Variant>
<ArrowLeft/>
</Variant>
</Component>
<Component name="ArrowRight">
<Variant>
<ArrowRight/>
</Variant>
</Component>
<Component name="ArrowUp">
<Variant>
<ArrowUp/>
</Variant>
</Component>
<Component name="ArrowUpRight">
<Variant>
<ArrowUpRight/>
</Variant>
</Component>
<Component name="Artboard">
<Variant>
<Artboard/>
</Variant>
</Component>
<Component name="Article">
<Variant>
<Article/>
</Variant>
</Component>
<Component name="Asset">
<Variant>
<Asset/>
</Variant>
</Component>
<Component name="AssetCheck">
<Variant>
<AssetCheck/>
</Variant>
</Component>
<Component name="AssetsAdded">
<Variant>
<AssetsAdded/>
</Variant>
</Component>
<Component name="AssetsDownloaded">
<Variant>
<AssetsDownloaded/>
</Variant>
</Component>
<Component name="AssetsExpired">
<Variant>
<AssetsExpired/>
</Variant>
</Component>
<Component name="AssetsLinkedPublished">
<Variant>
<AssetsLinkedPublished/>
</Variant>
</Component>
<Component name="AssetsModified">
<Variant>
<AssetsModified/>
</Variant>
</Component>
<Component name="AssetsPublished">
<Variant>
<AssetsPublished/>
</Variant>
</Component>
<Component name="Asterisk">
<Variant>
<Asterisk/>
</Variant>
</Component>
<Component name="At">
<Variant>
<At/>
</Variant>
</Component>
<Component name="Attach">
<Variant>
<Attach/>
</Variant>
</Component>
<Component name="AttachmentExclude">
<Variant>
<AttachmentExclude/>
</Variant>
</Component>
<Component name="Attributes">
<Variant>
<Attributes/>
</Variant>
</Component>
<Component name="Audio">
<Variant>
<Audio/>
</Variant>
</Component>
<Component name="AutomatedSegment">
<Variant>
<AutomatedSegment/>
</Variant>
</Component>
<Component name="Back">
<Variant>
<Back/>
</Variant>
</Component>
<Component name="Back30Seconds">
<Variant>
<Back30Seconds/>
</Variant>
</Component>
<Component name="BackAndroid">
<Variant>
<BackAndroid/>
</Variant>
</Component>
<Component name="Beaker">
<Variant>
<Beaker/>
</Variant>
</Component>
<Component name="BeakerCheck">
<Variant>
<BeakerCheck/>
</Variant>
</Component>
<Component name="BeakerShare">
<Variant>
<BeakerShare/>
</Variant>
</Component>
<Component name="Bell">
<Variant>
<Bell/>
</Variant>
</Component>
<Component name="BidRule">
<Variant>
<BidRule/>
</Variant>
</Component>
<Component name="BidRuleAdd">
<Variant>
<BidRuleAdd/>
</Variant>
</Component>
<Component name="Blower">
<Variant>
<Blower/>
</Variant>
</Component>
<Component name="Blur">
<Variant>
<Blur/>
</Variant>
</Component>
<Component name="Book">
<Variant>
<Book/>
</Variant>
</Component>
<Component name="Bookmark">
<Variant>
<Bookmark/>
</Variant>
</Component>
<Component name="BookmarkSingle">
<Variant>
<BookmarkSingle/>
</Variant>
</Component>
<Component name="BookmarkSingleOutline">
<Variant>
<BookmarkSingleOutline/>
</Variant>
</Component>
<Component name="BookmarkSmall">
<Variant>
<BookmarkSmall/>
</Variant>
</Component>
<Component name="BookmarkSmallOutline">
<Variant>
<BookmarkSmallOutline/>
</Variant>
</Component>
<Component name="Boolean">
<Variant>
<Boolean/>
</Variant>
</Component>
<Component name="Border">
<Variant>
<Border/>
</Variant>
</Component>
<Component name="Box">
<Variant>
<Box/>
</Variant>
</Component>
<Component name="BoxAdd">
<Variant>
<BoxAdd/>
</Variant>
</Component>
<Component name="BoxExport">
<Variant>
<BoxExport/>
</Variant>
</Component>
<Component name="BoxImport">
<Variant>
<BoxImport/>
</Variant>
</Component>
<Component name="Brackets">
<Variant>
<Brackets/>
</Variant>
</Component>
<Component name="BracketsSquare">
<Variant>
<BracketsSquare/>
</Variant>
</Component>
<Component name="Branch1">
<Variant>
<Branch1/>
</Variant>
</Component>
<Component name="Branch2">
<Variant>
<Branch2/>
</Variant>
</Component>
<Component name="Branch3">
<Variant>
<Branch3/>
</Variant>
</Component>
<Component name="BranchCircle">
<Variant>
<BranchCircle/>
</Variant>
</Component>
<Component name="BreadcrumbNavigation">
<Variant>
<BreadcrumbNavigation/>
</Variant>
</Component>
<Component name="Breakdown">
<Variant>
<Breakdown/>
</Variant>
</Component>
<Component name="BreakdownAdd">
<Variant>
<BreakdownAdd/>
</Variant>
</Component>
<Component name="Briefcase">
<Variant>
<Briefcase/>
</Variant>
</Component>
<Component name="Browse">
<Variant>
<Browse/>
</Variant>
</Component>
<Component name="Brush">
<Variant>
<Brush/>
</Variant>
</Component>
<Component name="Bug">
<Variant>
<Bug/>
</Variant>
</Component>
<Component name="Building">
<Variant>
<Building/>
</Variant>
</Component>
<Component name="BulkEditUsers">
<Variant>
<BulkEditUsers/>
</Variant>
</Component>
<Component name="CCLibrary">
<Variant>
<CCLibrary/>
</Variant>
</Component>
<Component name="Calculator">
<Variant>
<Calculator/>
</Variant>
</Component>
<Component name="CalendarAdd">
<Variant>
<CalendarAdd/>
</Variant>
</Component>
<Component name="CalendarLocked">
<Variant>
<CalendarLocked/>
</Variant>
</Component>
<Component name="CalendarUnlocked">
<Variant>
<CalendarUnlocked/>
</Variant>
</Component>
<Component name="CallCenter">
<Variant>
<CallCenter/>
</Variant>
</Component>
<Component name="Camera">
<Variant>
<Camera/>
</Variant>
</Component>
<Component name="CameraFlip">
<Variant>
<CameraFlip/>
</Variant>
</Component>
<Component name="CameraRefresh">
<Variant>
<CameraRefresh/>
</Variant>
</Component>
<Component name="Campaign">
<Variant>
<Campaign/>
</Variant>
</Component>
<Component name="CampaignAdd">
<Variant>
<CampaignAdd/>
</Variant>
</Component>
<Component name="CampaignClose">
<Variant>
<CampaignClose/>
</Variant>
</Component>
<Component name="CampaignDelete">
<Variant>
<CampaignDelete/>
</Variant>
</Component>
<Component name="CampaignEdit">
<Variant>
<CampaignEdit/>
</Variant>
</Component>
<Component name="Cancel">
<Variant>
<Cancel/>
</Variant>
</Component>
<Component name="Capitals">
<Variant>
<Capitals/>
</Variant>
</Component>
<Component name="Captcha">
<Variant>
<Captcha/>
</Variant>
</Component>
<Component name="Car">
<Variant>
<Car/>
</Variant>
</Component>
<Component name="Card">
<Variant>
<Card/>
</Variant>
</Component>
<Component name="Channel">
<Variant>
<Channel/>
</Variant>
</Component>
<Component name="Chat">
<Variant>
<Chat/>
</Variant>
</Component>
<Component name="ChatAdd">
<Variant>
<ChatAdd/>
</Variant>
</Component>
<Component name="CheckPause">
<Variant>
<CheckPause/>
</Variant>
</Component>
<Component name="Checkmark">
<Variant>
<Checkmark/>
</Variant>
</Component>
<Component name="CheckmarkCircle">
<Variant>
<CheckmarkCircle/>
</Variant>
</Component>
<Component name="CheckmarkCircleOutline">
<Variant>
<CheckmarkCircleOutline/>
</Variant>
</Component>
<Component name="ChevronDoubleLeft">
<Variant>
<ChevronDoubleLeft/>
</Variant>
</Component>
<Component name="ChevronDoubleRight">
<Variant>
<ChevronDoubleRight/>
</Variant>
</Component>
<Component name="ChevronDown">
<Variant>
<ChevronDown/>
</Variant>
</Component>
<Component name="ChevronLeft">
<Variant>
<ChevronLeft/>
</Variant>
</Component>
<Component name="ChevronRight">
<Variant>
<ChevronRight/>
</Variant>
</Component>
<Component name="ChevronUp">
<Variant>
<ChevronUp/>
</Variant>
</Component>
<Component name="ChevronUpDown">
<Variant>
<ChevronUpDown/>
</Variant>
</Component>
<Component name="Circle">
<Variant>
<Circle/>
</Variant>
</Component>
<Component name="CircleFilled">
<Variant>
<CircleFilled/>
</Variant>
</Component>
<Component name="ClassicGridView">
<Variant>
<ClassicGridView/>
</Variant>
</Component>
<Component name="Clock">
<Variant>
<Clock/>
</Variant>
</Component>
<Component name="ClockCheck">
<Variant>
<ClockCheck/>
</Variant>
</Component>
<Component name="CloneStamp">
<Variant>
<CloneStamp/>
</Variant>
</Component>
<Component name="Close">
<Variant>
<Close/>
</Variant>
</Component>
<Component name="CloseCaptions">
<Variant>
<CloseCaptions/>
</Variant>
</Component>
<Component name="CloseCircle">
<Variant>
<CloseCircle/>
</Variant>
</Component>
<Component name="Cloud">
<Variant>
<Cloud/>
</Variant>
</Component>
<Component name="CloudDisconnected">
<Variant>
<CloudDisconnected/>
</Variant>
</Component>
<Component name="CloudError">
<Variant>
<CloudError/>
</Variant>
</Component>
<Component name="CloudOutline">
<Variant>
<CloudOutline/>
</Variant>
</Component>
<Component name="Code">
<Variant>
<Code/>
</Variant>
</Component>
<Component name="CollectionAdd">
<Variant>
<CollectionAdd/>
</Variant>
</Component>
<Component name="CollectionAddTo">
<Variant>
<CollectionAddTo/>
</Variant>
</Component>
<Component name="CollectionCheck">
<Variant>
<CollectionCheck/>
</Variant>
</Component>
<Component name="CollectionEdit">
<Variant>
<CollectionEdit/>
</Variant>
</Component>
<Component name="CollectionExclude">
<Variant>
<CollectionExclude/>
</Variant>
</Component>
<Component name="CollectionLink">
<Variant>
<CollectionLink/>
</Variant>
</Component>
<Component name="ColorFill">
<Variant>
<ColorFill/>
</Variant>
</Component>
<Component name="ColorPalette">
<Variant>
<ColorPalette/>
</Variant>
</Component>
<Component name="ColorWheel">
<Variant>
<ColorWheel/>
</Variant>
</Component>
<Component name="ColumnSettings">
<Variant>
<ColumnSettings/>
</Variant>
</Component>
<Component name="ColumnTwoA">
<Variant>
<ColumnTwoA/>
</Variant>
</Component>
<Component name="ColumnTwoB">
<Variant>
<ColumnTwoB/>
</Variant>
</Component>
<Component name="ColumnTwoC">
<Variant>
<ColumnTwoC/>
</Variant>
</Component>
<Component name="Comment">
<Variant>
<Comment/>
</Variant>
</Component>
<Component name="Compare">
<Variant>
<Compare/>
</Variant>
</Component>
<Component name="Compass">
<Variant>
<Compass/>
</Variant>
</Component>
<Component name="Condition">
<Variant>
<Condition/>
</Variant>
</Component>
<Component name="ConfidenceFour">
<Variant>
<ConfidenceFour/>
</Variant>
</Component>
<Component name="ConfidenceOne">
<Variant>
<ConfidenceOne/>
</Variant>
</Component>
<Component name="ConfidenceThree">
<Variant>
<ConfidenceThree/>
</Variant>
</Component>
<Component name="ConfidenceTwo">
<Variant>
<ConfidenceTwo/>
</Variant>
</Component>
<Component name="Contrast">
<Variant>
<Contrast/>
</Variant>
</Component>
<Component name="ConversionFunnel">
<Variant>
<ConversionFunnel/>
</Variant>
</Component>
<Component name="Copy">
<Variant>
<Copy/>
</Variant>
</Component>
<Component name="CoverImage">
<Variant>
<CoverImage/>
</Variant>
</Component>
<Component name="CreditCard">
<Variant>
<CreditCard/>
</Variant>
</Component>
<Component name="Crop">
<Variant>
<Crop/>
</Variant>
</Component>
<Component name="CropLightning">
<Variant>
<CropLightning/>
</Variant>
</Component>
<Component name="CropRotate">
<Variant>
<CropRotate/>
</Variant>
</Component>
<Component name="Crosshairs">
<Variant>
<Crosshairs/>
</Variant>
</Component>
<Component name="Curate">
<Variant>
<Curate/>
</Variant>
</Component>
<Component name="Cut">
<Variant>
<Cut/>
</Variant>
</Component>
<Component name="Dashboard">
<Variant>
<Dashboard/>
</Variant>
</Component>
<Component name="Data">
<Variant>
<Data/>
</Variant>
</Component>
<Component name="DataAdd">
<Variant>
<DataAdd/>
</Variant>
</Component>
<Component name="DataBook">
<Variant>
<DataBook/>
</Variant>
</Component>
<Component name="DataCheck">
<Variant>
<DataCheck/>
</Variant>
</Component>
<Component name="DataCorrelated">
<Variant>
<DataCorrelated/>
</Variant>
</Component>
<Component name="DataDownload">
<Variant>
<DataDownload/>
</Variant>
</Component>
<Component name="DataEdit">
<Variant>
<DataEdit/>
</Variant>
</Component>
<Component name="DataMapping">
<Variant>
<DataMapping/>
</Variant>
</Component>
<Component name="DataRefresh">
<Variant>
<DataRefresh/>
</Variant>
</Component>
<Component name="DataRemove">
<Variant>
<DataRemove/>
</Variant>
</Component>
<Component name="DataSettings">
<Variant>
<DataSettings/>
</Variant>
</Component>
<Component name="DataUnavailable">
<Variant>
<DataUnavailable/>
</Variant>
</Component>
<Component name="DataUpload">
<Variant>
<DataUpload/>
</Variant>
</Component>
<Component name="DataUser">
<Variant>
<DataUser/>
</Variant>
</Component>
<Component name="Date">
<Variant>
<Date/>
</Variant>
</Component>
<Component name="Deduplication">
<Variant>
<Deduplication/>
</Variant>
</Component>
<Component name="Delegate">
<Variant>
<Delegate/>
</Variant>
</Component>
<Component name="Delete">
<Variant>
<Delete/>
</Variant>
</Component>
<Component name="DeleteOutline">
<Variant>
<DeleteOutline/>
</Variant>
</Component>
<Component name="Demographic">
<Variant>
<Demographic/>
</Variant>
</Component>
<Component name="Deselect">
<Variant>
<Deselect/>
</Variant>
</Component>
<Component name="DeselectCircular">
<Variant>
<DeselectCircular/>
</Variant>
</Component>
<Component name="DesktopAndMobile">
<Variant>
<DesktopAndMobile/>
</Variant>
</Component>
<Component name="DeviceDesktop">
<Variant>
<DeviceDesktop/>
</Variant>
</Component>
<Component name="DeviceLaptop">
<Variant>
<DeviceLaptop/>
</Variant>
</Component>
<Component name="DevicePhone">
<Variant>
<DevicePhone/>
</Variant>
</Component>
<Component name="DevicePhoneRefresh">
<Variant>
<DevicePhoneRefresh/>
</Variant>
</Component>
<Component name="DevicePreview">
<Variant>
<DevicePreview/>
</Variant>
</Component>
<Component name="DeviceRotateLandscape">
<Variant>
<DeviceRotateLandscape/>
</Variant>
</Component>
<Component name="DeviceRotatePortrait">
<Variant>
<DeviceRotatePortrait/>
</Variant>
</Component>
<Component name="DeviceTV">
<Variant>
<DeviceTV/>
</Variant>
</Component>
<Component name="DeviceTablet">
<Variant>
<DeviceTablet/>
</Variant>
</Component>
<Component name="Devices">
<Variant>
<Devices/>
</Variant>
</Component>
<Component name="DistributeBottomEdge">
<Variant>
<DistributeBottomEdge/>
</Variant>
</Component>
<Component name="DistributeHorizontalCenter">
<Variant>
<DistributeHorizontalCenter/>
</Variant>
</Component>
<Component name="DistributeHorizontally">
<Variant>
<DistributeHorizontally/>
</Variant>
</Component>
<Component name="DistributeLeftEdge">
<Variant>
<DistributeLeftEdge/>
</Variant>
</Component>
<Component name="DistributeRightEdge">
<Variant>
<DistributeRightEdge/>
</Variant>
</Component>
<Component name="DistributeSpaceHoriz">
<Variant>
<DistributeSpaceHoriz/>
</Variant>
</Component>
<Component name="DistributeSpaceVert">
<Variant>
<DistributeSpaceVert/>
</Variant>
</Component>
<Component name="DistributeTopEdge">
<Variant>
<DistributeTopEdge/>
</Variant>
</Component>
<Component name="DistributeVerticalCenter">
<Variant>
<DistributeVerticalCenter/>
</Variant>
</Component>
<Component name="DistributeVertically">
<Variant>
<DistributeVertically/>
</Variant>
</Component>
<Component name="Divide">
<Variant>
<Divide/>
</Variant>
</Component>
<Component name="DividePath">
<Variant>
<DividePath/>
</Variant>
</Component>
<Component name="Document">
<Variant>
<Document/>
</Variant>
</Component>
<Component name="DocumentFragment">
<Variant>
<DocumentFragment/>
</Variant>
</Component>
<Component name="DocumentFragmentGroup">
<Variant>
<DocumentFragmentGroup/>
</Variant>
</Component>
<Component name="DocumentOutline">
<Variant>
<DocumentOutline/>
</Variant>
</Component>
<Component name="DocumentRefresh">
<Variant>
<DocumentRefresh/>
</Variant>
</Component>
<Component name="Dolly">
<Variant>
<Dolly/>
</Variant>
</Component>
<Component name="Download">
<Variant>
<Download/>
</Variant>
</Component>
<Component name="DownloadFromCloud">
<Variant>
<DownloadFromCloud/>
</Variant>
</Component>
<Component name="DownloadFromCloudOutline">
<Variant>
<DownloadFromCloudOutline/>
</Variant>
</Component>
<Component name="Draft">
<Variant>
<Draft/>
</Variant>
</Component>
<Component name="DragHandle">
<Variant>
<DragHandle/>
</Variant>
</Component>
<Component name="Draw">
<Variant>
<Draw/>
</Variant>
</Component>
<Component name="Dropdown">
<Variant>
<Dropdown/>
</Variant>
</Component>
<Component name="Duplicate">
<Variant>
<Duplicate/>
</Variant>
</Component>
<Component name="Edit">
<Variant>
<Edit/>
</Variant>
</Component>
<Component name="EditCircle">
<Variant>
<EditCircle/>
</Variant>
</Component>
<Component name="EditExclude">
<Variant>
<EditExclude/>
</Variant>
</Component>
<Component name="EditIn">
<Variant>
<EditIn/>
</Variant>
</Component>
<Component name="EditInLight">
<Variant>
<EditInLight/>
</Variant>
</Component>
<Component name="Education">
<Variant>
<Education/>
</Variant>
</Component>
<Component name="Effects">
<Variant>
<Effects/>
</Variant>
</Component>
<Component name="Efficient">
<Variant>
<Efficient/>
</Variant>
</Component>
<Component name="Ellipse">
<Variant>
<Ellipse/>
</Variant>
</Component>
<Component name="Email">
<Variant>
<Email/>
</Variant>
</Component>
<Component name="EmailCancel">
<Variant>
<EmailCancel/>
</Variant>
</Component>
<Component name="EmailCheck">
<Variant>
<EmailCheck/>
</Variant>
</Component>
<Component name="EmailExclude">
<Variant>
<EmailExclude/>
</Variant>
</Component>
<Component name="EmailExcludeOutline">
<Variant>
<EmailExcludeOutline/>
</Variant>
</Component>
<Component name="EmailGear">
<Variant>
<EmailGear/>
</Variant>
</Component>
<Component name="EmailGearOutline">
<Variant>
<EmailGearOutline/>
</Variant>
</Component>
<Component name="EmailKey">
<Variant>
<EmailKey/>
</Variant>
</Component>
<Component name="EmailKeyOutline">
<Variant>
<EmailKeyOutline/>
</Variant>
</Component>
<Component name="EmailLightning">
<Variant>
<EmailLightning/>
</Variant>
</Component>
<Component name="EmailNotification">
<Variant>
<EmailNotification/>
</Variant>
</Component>
<Component name="EmailOutline">
<Variant>
<EmailOutline/>
</Variant>
</Component>
<Component name="EmailRefresh">
<Variant>
<EmailRefresh/>
</Variant>
</Component>
<Component name="EmailSchedule">
<Variant>
<EmailSchedule/>
</Variant>
</Component>
<Component name="Engagement">
<Variant>
<Engagement/>
</Variant>
</Component>
<Component name="Erase">
<Variant>
<Erase/>
</Variant>
</Component>
<Component name="Event">
<Variant>
<Event/>
</Variant>
</Component>
<Component name="EventExclude">
<Variant>
<EventExclude/>
</Variant>
</Component>
<Component name="EventShare">
<Variant>
<EventShare/>
</Variant>
</Component>
<Component name="Events">
<Variant>
<Events/>
</Variant>
</Component>
<Component name="ExcludeOverlap">
<Variant>
<ExcludeOverlap/>
</Variant>
</Component>
<Component name="Experience">
<Variant>
<Experience/>
</Variant>
</Component>
<Component name="ExperienceAdd">
<Variant>
<ExperienceAdd/>
</Variant>
</Component>
<Component name="ExperienceAddTo">
<Variant>
<ExperienceAddTo/>
</Variant>
</Component>
<Component name="ExperienceExport">
<Variant>
<ExperienceExport/>
</Variant>
</Component>
<Component name="ExperienceImport">
<Variant>
<ExperienceImport/>
</Variant>
</Component>
<Component name="Export">
<Variant>
<Export/>
</Variant>
</Component>
<Component name="ExportOriginal">
<Variant>
<ExportOriginal/>
</Variant>
</Component>
<Component name="Exposure">
<Variant>
<Exposure/>
</Variant>
</Component>
<Component name="Extension">
<Variant>
<Extension/>
</Variant>
</Component>
<Component name="FacebookCoverImage">
<Variant>
<FacebookCoverImage/>
</Variant>
</Component>
<Component name="Fast">
<Variant>
<Fast/>
</Variant>
</Component>
<Component name="FastForward">
<Variant>
<FastForward/>
</Variant>
</Component>
<Component name="FastForwardCircle">
<Variant>
<FastForwardCircle/>
</Variant>
</Component>
<Component name="Feature">
<Variant>
<Feature/>
</Variant>
</Component>
<Component name="Feed">
<Variant>
<Feed/>
</Variant>
</Component>
<Component name="FeedAdd">
<Variant>
<FeedAdd/>
</Variant>
</Component>
<Component name="FeedManagement">
<Variant>
<FeedManagement/>
</Variant>
</Component>
<Component name="Feedback">
<Variant>
<Feedback/>
</Variant>
</Component>
<Component name="FileAdd">
<Variant>
<FileAdd/>
</Variant>
</Component>
<Component name="FileCSV">
<Variant>
<FileCSV/>
</Variant>
</Component>
<Component name="FileCampaign">
<Variant>
<FileCampaign/>
</Variant>
</Component>
<Component name="FileChart">
<Variant>
<FileChart/>
</Variant>
</Component>
<Component name="FileCheckedOut">
<Variant>
<FileCheckedOut/>
</Variant>
</Component>
<Component name="FileCode">
<Variant>
<FileCode/>
</Variant>
</Component>
<Component name="FileData">
<Variant>
<FileData/>
</Variant>
</Component>
<Component name="FileEmail">
<Variant>
<FileEmail/>
</Variant>
</Component>
<Component name="FileExcel">
<Variant>
<FileExcel/>
</Variant>
</Component>
<Component name="FileFolder">
<Variant>
<FileFolder/>
</Variant>
</Component>
<Component name="FileGear">
<Variant>
<FileGear/>
</Variant>
</Component>
<Component name="FileGlobe">
<Variant>
<FileGlobe/>
</Variant>
</Component>
<Component name="FileHTML">
<Variant>
<FileHTML/>
</Variant>
</Component>
<Component name="FileImportant">
<Variant>
<FileImportant/>
</Variant>
</Component>
<Component name="FileJson">
<Variant>
<FileJson/>
</Variant>
</Component>
<Component name="FileKey">
<Variant>
<FileKey/>
</Variant>
</Component>
<Component name="FileMobile">
<Variant>
<FileMobile/>
</Variant>
</Component>
<Component name="FilePDF">
<Variant>
<FilePDF/>
</Variant>
</Component>
<Component name="FileShare">
<Variant>
<FileShare/>
</Variant>
</Component>
<Component name="FileSingleWebPage">
<Variant>
<FileSingleWebPage/>
</Variant>
</Component>
<Component name="FileSpace">
<Variant>
<FileSpace/>
</Variant>
</Component>
<Component name="FileTemplate">
<Variant>
<FileTemplate/>
</Variant>
</Component>
<Component name="FileTxt">
<Variant>
<FileTxt/>
</Variant>
</Component>
<Component name="FileUser">
<Variant>
<FileUser/>
</Variant>
</Component>
<Component name="FileWord">
<Variant>
<FileWord/>
</Variant>
</Component>
<Component name="FileWorkflow">
<Variant>
<FileWorkflow/>
</Variant>
</Component>
<Component name="FileXML">
<Variant>
<FileXML/>
</Variant>
</Component>
<Component name="FileZip">
<Variant>
<FileZip/>
</Variant>
</Component>
<Component name="FilingCabinet">
<Variant>
<FilingCabinet/>
</Variant>
</Component>
<Component name="Filmroll">
<Variant>
<Filmroll/>
</Variant>
</Component>
<Component name="FilmrollAutoAdd">
<Variant>
<FilmrollAutoAdd/>
</Variant>
</Component>
<Component name="Filter">
<Variant>
<Filter/>
</Variant>
</Component>
<Component name="FilterAdd">
<Variant>
<FilterAdd/>
</Variant>
</Component>
<Component name="FilterCheck">
<Variant>
<FilterCheck/>
</Variant>
</Component>
<Component name="FilterDelete">
<Variant>
<FilterDelete/>
</Variant>
</Component>
<Component name="FilterEdit">
<Variant>
<FilterEdit/>
</Variant>
</Component>
<Component name="FilterHeart">
<Variant>
<FilterHeart/>
</Variant>
</Component>
<Component name="FilterRemove">
<Variant>
<FilterRemove/>
</Variant>
</Component>
<Component name="FilterStar">
<Variant>
<FilterStar/>
</Variant>
</Component>
<Component name="FindAndReplace">
<Variant>
<FindAndReplace/>
</Variant>
</Component>
<Component name="Flag">
<Variant>
<Flag/>
</Variant>
</Component>
<Component name="FlagExclude">
<Variant>
<FlagExclude/>
</Variant>
</Component>
<Component name="FlashAuto">
<Variant>
<FlashAuto/>
</Variant>
</Component>
<Component name="FlashOff">
<Variant>
<FlashOff/>
</Variant>
</Component>
<Component name="FlashOn">
<Variant>
<FlashOn/>
</Variant>
</Component>
<Component name="Flashlight">
<Variant>
<Flashlight/>
</Variant>
</Component>
<Component name="FlashlightOff">
<Variant>
<FlashlightOff/>
</Variant>
</Component>
<Component name="FlashlightOn">
<Variant>
<FlashlightOn/>
</Variant>
</Component>
<Component name="FlipHorizontal">
<Variant>
<FlipHorizontal/>
</Variant>
</Component>
<Component name="FlipVertical">
<Variant>
<FlipVertical/>
</Variant>
</Component>
<Component name="Folder">
<Variant>
<Folder/>
</Variant>
</Component>
<Component name="Folder2Color">
<Variant>
<Folder2Color/>
</Variant>
</Component>
<Component name="FolderAdd">
<Variant>
<FolderAdd/>
</Variant>
</Component>
<Component name="FolderAddTo">
<Variant>
<FolderAddTo/>
</Variant>
</Component>
<Component name="FolderArchive">
<Variant>
<FolderArchive/>
</Variant>
</Component>
<Component name="FolderDelete">
<Variant>
<FolderDelete/>
</Variant>
</Component>
<Component name="FolderGear">
<Variant>
<FolderGear/>
</Variant>
</Component>
<Component name="FolderLocked">
<Variant>
<FolderLocked/>
</Variant>
</Component>
<Component name="FolderOpen">
<Variant>
<FolderOpen/>
</Variant>
</Component>
<Component name="FolderOpenOutline">
<Variant>
<FolderOpenOutline/>
</Variant>
</Component>
<Component name="FolderOutline">
<Variant>
<FolderOutline/>
</Variant>
</Component>
<Component name="FolderRemove">
<Variant>
<FolderRemove/>
</Variant>
</Component>
<Component name="FolderSearch">
<Variant>
<FolderSearch/>
</Variant>
</Component>
<Component name="FolderUser">
<Variant>
<FolderUser/>
</Variant>
</Component>
<Component name="Follow">
<Variant>
<Follow/>
</Variant>
</Component>
<Component name="FollowOff">
<Variant>
<FollowOff/>
</Variant>
</Component>
<Component name="ForPlacementOnly">
<Variant>
<ForPlacementOnly/>
</Variant>
</Component>
<Component name="Forecast">
<Variant>
<Forecast/>
</Variant>
</Component>
<Component name="Form">
<Variant>
<Form/>
</Variant>
</Component>
<Component name="Forward">
<Variant>
<Forward/>
</Variant>
</Component>
<Component name="FullScreen">
<Variant>
<FullScreen/>
</Variant>
</Component>
<Component name="FullScreenExit">
<Variant>
<FullScreenExit/>
</Variant>
</Component>
<Component name="Function">
<Variant>
<Function/>
</Variant>
</Component>
<Component name="Game">
<Variant>
<Game/>
</Variant>
</Component>
<Component name="Gauge1">
<Variant>
<Gauge1/>
</Variant>
</Component>
<Component name="Gauge2">
<Variant>
<Gauge2/>
</Variant>
</Component>
<Component name="Gauge3">
<Variant>
<Gauge3/>
</Variant>
</Component>
<Component name="Gauge4">
<Variant>
<Gauge4/>
</Variant>
</Component>
<Component name="Gauge5">
<Variant>
<Gauge5/>
</Variant>
</Component>
<Component name="Gears">
<Variant>
<Gears/>
</Variant>
</Component>
<Component name="GearsAdd">
<Variant>
<GearsAdd/>
</Variant>
</Component>
<Component name="GearsDelete">
<Variant>
<GearsDelete/>
</Variant>
</Component>
<Component name="GearsEdit">
<Variant>
<GearsEdit/>
</Variant>
</Component>
<Component name="GenderFemale">
<Variant>
<GenderFemale/>
</Variant>
</Component>
<Component name="GenderMale">
<Variant>
<GenderMale/>
</Variant>
</Component>
<Component name="Gift">
<Variant>
<Gift/>
</Variant>
</Component>
<Component name="Globe">
<Variant>
<Globe/>
</Variant>
</Component>
<Component name="GlobeCheck">
<Variant>
<GlobeCheck/>
</Variant>
</Component>
<Component name="GlobeClock">
<Variant>
<GlobeClock/>
</Variant>
</Component>
<Component name="GlobeEnter">
<Variant>
<GlobeEnter/>
</Variant>
</Component>
<Component name="GlobeExit">
<Variant>
<GlobeExit/>
</Variant>
</Component>
<Component name="GlobeGrid">
<Variant>
<GlobeGrid/>
</Variant>
</Component>
<Component name="GlobeOutline">
<Variant>
<GlobeOutline/>
</Variant>
</Component>
<Component name="GlobeRemove">
<Variant>
<GlobeRemove/>
</Variant>
</Component>
<Component name="GlobeSearch">
<Variant>
<GlobeSearch/>
</Variant>
</Component>
<Component name="GlobeStrike">
<Variant>
<GlobeStrike/>
</Variant>
</Component>
<Component name="GlobeStrikeClock">
<Variant>
<GlobeStrikeClock/>
</Variant>
</Component>
<Component name="Gradient">
<Variant>
<Gradient/>
</Variant>
</Component>
<Component name="GraphArea">
<Variant>
<GraphArea/>
</Variant>
</Component>
<Component name="GraphAreaStacked">
<Variant>
<GraphAreaStacked/>
</Variant>
</Component>
<Component name="GraphBarHorizontal">
<Variant>
<GraphBarHorizontal/>
</Variant>
</Component>
<Component name="GraphBarHorizontalAdd">
<Variant>
<GraphBarHorizontalAdd/>
</Variant>
</Component>
<Component name="GraphBarHorizontalStacked">
<Variant>
<GraphBarHorizontalStacked/>
</Variant>
</Component>
<Component name="GraphBarVertical">
<Variant>
<GraphBarVertical/>
</Variant>
</Component>
<Component name="GraphBarVerticalAdd">
<Variant>
<GraphBarVerticalAdd/>
</Variant>
</Component>
<Component name="GraphBarVerticalStacked">
<Variant>
<GraphBarVerticalStacked/>
</Variant>
</Component>
<Component name="GraphBubble">
<Variant>
<GraphBubble/>
</Variant>
</Component>
<Component name="GraphBullet">
<Variant>
<GraphBullet/>
</Variant>
</Component>
<Component name="GraphConfidenceBands">
<Variant>
<GraphConfidenceBands/>
</Variant>
</Component>
<Component name="GraphDonut">
<Variant>
<GraphDonut/>
</Variant>
</Component>
<Component name="GraphDonutAdd">
<Variant>
<GraphDonutAdd/>
</Variant>
</Component>
<Component name="GraphGantt">
<Variant>
<GraphGantt/>
</Variant>
</Component>
<Component name="GraphHistogram">
<Variant>
<GraphHistogram/>
</Variant>
</Component>
<Component name="GraphPathing">
<Variant>
<GraphPathing/>
</Variant>
</Component>
<Component name="GraphPie">
<Variant>
<GraphPie/>
</Variant>
</Component>
<Component name="GraphProfitCurve">
<Variant>
<GraphProfitCurve/>
</Variant>
</Component>
<Component name="GraphScatter">
<Variant>
<GraphScatter/>
</Variant>
</Component>
<Component name="GraphStream">
<Variant>
<GraphStream/>
</Variant>
</Component>
<Component name="GraphStreamRanked">
<Variant>
<GraphStreamRanked/>
</Variant>
</Component>
<Component name="GraphStreamRankedAdd">
<Variant>
<GraphStreamRankedAdd/>
</Variant>
</Component>
<Component name="GraphSunburst">
<Variant>
<GraphSunburst/>
</Variant>
</Component>
<Component name="GraphTree">
<Variant>
<GraphTree/>
</Variant>
</Component>
<Component name="GraphTrend">
<Variant>
<GraphTrend/>
</Variant>
</Component>
<Component name="GraphTrendAdd">
<Variant>
<GraphTrendAdd/>
</Variant>
</Component>
<Component name="GraphTrendAlert">
<Variant>
<GraphTrendAlert/>
</Variant>
</Component>
<Component name="Graphic">
<Variant>
<Graphic/>
</Variant>
</Component>
<Component name="Group">
<Variant>
<Group/>
</Variant>
</Component>
<Component name="Hammer">
<Variant>
<Hammer/>
</Variant>
</Component>
<Component name="Hand">
<Variant>
<Hand/>
</Variant>
</Component>
<Component name="Hand0">
<Variant>
<Hand0/>
</Variant>
</Component>
<Component name="Hand1">
<Variant>
<Hand1/>
</Variant>
</Component>
<Component name="Hand2">
<Variant>
<Hand2/>
</Variant>
</Component>
<Component name="Hand3">
<Variant>
<Hand3/>
</Variant>
</Component>
<Component name="Hand4">
<Variant>
<Hand4/>
</Variant>
</Component>
<Component name="Heal">
<Variant>
<Heal/>
</Variant>
</Component>
<Component name="Heart">
<Variant>
<Heart/>
</Variant>
</Component>
<Component name="Help">
<Variant>
<Help/>
</Variant>
</Component>
<Component name="HelpOutline">
<Variant>
<HelpOutline/>
</Variant>
</Component>
<Component name="Histogram">
<Variant>
<Histogram/>
</Variant>
</Component>
<Component name="History">
<Variant>
<History/>
</Variant>
</Component>
<Component name="Home">
<Variant>
<Home/>
</Variant>
</Component>
<Component name="Homepage">
<Variant>
<Homepage/>
</Variant>
</Component>
<Component name="HotFixes">
<Variant>
<HotFixes/>
</Variant>
</Component>
<Component name="HotelBed">
<Variant>
<HotelBed/>
</Variant>
</Component>
<Component name="Icon3DMaterialsWithSizes">
<Variant>
<Icon3DMaterialsWithSizes/>
</Variant>
</Component>
<Component name="IconsWorkflowStories">
<Variant>
<IconsWorkflowStories/>
</Variant>
</Component>
<Component name="IdentityService">
<Variant>
<IdentityService/>
</Variant>
</Component>
<Component name="Image">
<Variant>
<Image/>
</Variant>
</Component>
<Component name="ImageAdd">
<Variant>
<ImageAdd/>
</Variant>
</Component>
<Component name="ImageAlbum">
<Variant>
<ImageAlbum/>
</Variant>
</Component>
<Component name="ImageAutoMode">
<Variant>
<ImageAutoMode/>
</Variant>
</Component>
<Component name="ImageCarousel">
<Variant>
<ImageCarousel/>
</Variant>
</Component>
<Component name="ImageCheck">
<Variant>
<ImageCheck/>
</Variant>
</Component>
<Component name="ImageCheckedOut">
<Variant>
<ImageCheckedOut/>
</Variant>
</Component>
<Component name="ImageMapCircle">
<Variant>
<ImageMapCircle/>
</Variant>
</Component>
<Component name="ImageMapPolygon">
<Variant>
<ImageMapPolygon/>
</Variant>
</Component>
<Component name="ImageMapRectangle">
<Variant>
<ImageMapRectangle/>
</Variant>
</Component>
<Component name="ImageNext">
<Variant>
<ImageNext/>
</Variant>
</Component>
<Component name="ImageProfile">
<Variant>
<ImageProfile/>
</Variant>
</Component>
<Component name="ImageSearch">
<Variant>
<ImageSearch/>
</Variant>
</Component>
<Component name="ImageText">
<Variant>
<ImageText/>
</Variant>
</Component>
<Component name="Images">
<Variant>
<Images/>
</Variant>
</Component>
<Component name="Import">
<Variant>
<Import/>
</Variant>
</Component>
<Component name="Inbox">
<Variant>
<Inbox/>
</Variant>
</Component>
<Component name="Individual">
<Variant>
<Individual/>
</Variant>
</Component>
<Component name="Info">
<Variant>
<Info/>
</Variant>
</Component>
<Component name="InfoOutline">
<Variant>
<InfoOutline/>
</Variant>
</Component>
<Component name="IntersectOverlap">
<Variant>
<IntersectOverlap/>
</Variant>
</Component>
<Component name="InvertAdj">
<Variant>
<InvertAdj/>
</Variant>
</Component>
<Component name="Invite">
<Variant>
<Invite/>
</Variant>
</Component>
<Component name="Journey">
<Variant>
<Journey/>
</Variant>
</Component>
<Component name="JourneyAction">
<Variant>
<JourneyAction/>
</Variant>
</Component>
<Component name="JourneyData">
<Variant>
<JourneyData/>
</Variant>
</Component>
<Component name="JourneyEvent">
<Variant>
<JourneyEvent/>
</Variant>
</Component>
<Component name="JourneyEvent2">
<Variant>
<JourneyEvent2/>
</Variant>
</Component>
<Component name="JourneyReports">
<Variant>
<JourneyReports/>
</Variant>
</Component>
<Component name="JourneyVoyager">
<Variant>
<JourneyVoyager/>
</Variant>
</Component>
<Component name="JumpToTop">
<Variant>
<JumpToTop/>
</Variant>
</Component>
<Component name="Key">
<Variant>
<Key/>
</Variant>
</Component>
<Component name="KeyClock">
<Variant>
<KeyClock/>
</Variant>
</Component>
<Component name="KeyExclude">
<Variant>
<KeyExclude/>
</Variant>
</Component>
<Component name="Keyboard">
<Variant>
<Keyboard/>
</Variant>
</Component>
<Component name="Label">
<Variant>
<Label/>
</Variant>
</Component>
<Component name="LabelExclude">
<Variant>
<LabelExclude/>
</Variant>
</Component>
<Component name="Labels">
<Variant>
<Labels/>
</Variant>
</Component>
<Component name="Landscape">
<Variant>
<Landscape/>
</Variant>
</Component>
<Component name="Launch">
<Variant>
<Launch/>
</Variant>
</Component>
<Component name="Layers">
<Variant>
<Layers/>
</Variant>
</Component>
<Component name="LayersBackward">
<Variant>
<LayersBackward/>
</Variant>
</Component>
<Component name="LayersBringToFront">
<Variant>
<LayersBringToFront/>
</Variant>
</Component>
<Component name="LayersForward">
<Variant>
<LayersForward/>
</Variant>
</Component>
<Component name="LayersSendToBack">
<Variant>
<LayersSendToBack/>
</Variant>
</Component>
<Component name="Light">
<Variant>
<Light/>
</Variant>
</Component>
<Component name="Line">
<Variant>
<Line/>
</Variant>
</Component>
<Component name="LineHeight">
<Variant>
<LineHeight/>
</Variant>
</Component>
<Component name="LinearGradient">
<Variant>
<LinearGradient/>
</Variant>
</Component>
<Component name="Link">
<Variant>
<Link/>
</Variant>
</Component>
<Component name="LinkCheck">
<Variant>
<LinkCheck/>
</Variant>
</Component>
<Component name="LinkGlobe">
<Variant>
<LinkGlobe/>
</Variant>
</Component>
<Component name="LinkNav">
<Variant>
<LinkNav/>
</Variant>
</Component>
<Component name="LinkOff">
<Variant>
<LinkOff/>
</Variant>
</Component>
<Component name="LinkOut">
<Variant>
<LinkOut/>
</Variant>
</Component>
<Component name="LinkOutLight">
<Variant>
<LinkOutLight/>
</Variant>
</Component>
<Component name="LinkPage">
<Variant>
<LinkPage/>
</Variant>
</Component>
<Component name="LinkUser">
<Variant>
<LinkUser/>
</Variant>
</Component>
<Component name="Location">
<Variant>
<Location/>
</Variant>
</Component>
<Component name="LocationBasedDate">
<Variant>
<LocationBasedDate/>
</Variant>
</Component>
<Component name="LocationBasedEvent">
<Variant>
<LocationBasedEvent/>
</Variant>
</Component>
<Component name="LocationContribution">
<Variant>
<LocationContribution/>
</Variant>
</Component>
<Component name="LockClosed">
<Variant>
<LockClosed/>
</Variant>
</Component>
<Component name="LockOpen">
<Variant>
<LockOpen/>
</Variant>
</Component>
<Component name="LogOut">
<Variant>
<LogOut/>
</Variant>
</Component>
<Component name="Login">
<Variant>
<Login/>
</Variant>
</Component>
<Component name="Looks">
<Variant>
<Looks/>
</Variant>
</Component>
<Component name="LoupeView">
<Variant>
<LoupeView/>
</Variant>
</Component>
<Component name="MBox">
<Variant>
<MBox/>
</Variant>
</Component>
<Component name="MagicWand">
<Variant>
<MagicWand/>
</Variant>
</Component>
<Component name="Magnify">
<Variant>
<Magnify/>
</Variant>
</Component>
<Component name="Mailbox">
<Variant>
<Mailbox/>
</Variant>
</Component>
<Component name="MapView">
<Variant>
<MapView/>
</Variant>
</Component>
<Component name="MarginBottom">
<Variant>
<MarginBottom/>
</Variant>
</Component>
<Component name="MarginLeft">
<Variant>
<MarginLeft/>
</Variant>
</Component>
<Component name="MarginRight">
<Variant>
<MarginRight/>
</Variant>
</Component>
<Component name="MarginTop">
<Variant>
<MarginTop/>
</Variant>
</Component>
<Component name="MarketingActivities">
<Variant>
<MarketingActivities/>
</Variant>
</Component>
<Component name="Maximize">
<Variant>
<Maximize/>
</Variant>
</Component>
<Component name="Measure">
<Variant>
<Measure/>
</Variant>
</Component>
<Component name="Menu">
<Variant>
<Menu/>
</Variant>
</Component>
<Component name="Merge">
<Variant>
<Merge/>
</Variant>
</Component>
<Component name="MergeLayers">
<Variant>
<MergeLayers/>
</Variant>
</Component>
<Component name="Messenger">
<Variant>
<Messenger/>
</Variant>
</Component>
<Component name="Minimize">
<Variant>
<Minimize/>
</Variant>
</Component>
<Component name="MobileServices">
<Variant>
<MobileServices/>
</Variant>
</Component>
<Component name="ModernGridView">
<Variant>
<ModernGridView/>
</Variant>
</Component>
<Component name="Money">
<Variant>
<Money/>
</Variant>
</Component>
<Component name="Monitoring">
<Variant>
<Monitoring/>
</Variant>
</Component>
<Component name="Moon">
<Variant>
<Moon/>
</Variant>
</Component>
<Component name="More">
<Variant>
<More/>
</Variant>
</Component>
<Component name="MoreCircle">
<Variant>
<MoreCircle/>
</Variant>
</Component>
<Component name="MoreSmall">
<Variant>
<MoreSmall/>
</Variant>
</Component>
<Component name="MoreSmallList">
<Variant>
<MoreSmallList/>
</Variant>
</Component>
<Component name="MoreSmallListVert">
<Variant>
<MoreSmallListVert/>
</Variant>
</Component>
<Component name="MoreVertical">
<Variant>
<MoreVertical/>
</Variant>
</Component>
<Component name="Move">
<Variant>
<Move/>
</Variant>
</Component>
<Component name="MoveLeftRight">
<Variant>
<MoveLeftRight/>
</Variant>
</Component>
<Component name="MoveTo">
<Variant>
<MoveTo/>
</Variant>
</Component>
<Component name="MoveUpDown">
<Variant>
<MoveUpDown/>
</Variant>
</Component>
<Component name="MovieCamera">
<Variant>
<MovieCamera/>
</Variant>
</Component>
<Component name="Multiple">
<Variant>
<Multiple/>
</Variant>
</Component>
<Component name="MultipleAdd">
<Variant>
<MultipleAdd/>
</Variant>
</Component>
<Component name="MultipleCheck">
<Variant>
<MultipleCheck/>
</Variant>
</Component>
<Component name="MultipleExclude">
<Variant>
<MultipleExclude/>
</Variant>
</Component>
<Component name="NamingOrder">
<Variant>
<NamingOrder/>
</Variant>
</Component>
<Component name="NewItem">
<Variant>
<NewItem/>
</Variant>
</Component>
<Component name="News">
<Variant>
<News/>
</Variant>
</Component>
<Component name="NewsAdd">
<Variant>
<NewsAdd/>
</Variant>
</Component>
<Component name="NoEdit">
<Variant>
<NoEdit/>
</Variant>
</Component>
<Component name="Note">
<Variant>
<Note/>
</Variant>
</Component>
<Component name="NoteAdd">
<Variant>
<NoteAdd/>
</Variant>
</Component>
<Component name="OS">
<Variant>
<OS/>
</Variant>
</Component>
<Component name="Offer">
<Variant>
<Offer/>
</Variant>
</Component>
<Component name="OfferDelete">
<Variant>
<OfferDelete/>
</Variant>
</Component>
<Component name="OnAir">
<Variant>
<OnAir/>
</Variant>
</Component>
<Component name="OpenIn">
<Variant>
<OpenIn/>
</Variant>
</Component>
<Component name="OpenInLight">
<Variant>
<OpenInLight/>
</Variant>
</Component>
<Component name="OpenRecent">
<Variant>
<OpenRecent/>
</Variant>
</Component>
<Component name="OpenRecentOutline">
<Variant>
<OpenRecentOutline/>
</Variant>
</Component>
<Component name="Orbit">
<Variant>
<Orbit/>
</Variant>
</Component>
<Component name="Organisations">
<Variant>
<Organisations/>
</Variant>
</Component>
<Component name="Organize">
<Variant>
<Organize/>
</Variant>
</Component>
<Component name="OutlinePath">
<Variant>
<OutlinePath/>
</Variant>
</Component>
<Component name="PaddingBottom">
<Variant>
<PaddingBottom/>
</Variant>
</Component>
<Component name="PaddingLeft">
<Variant>
<PaddingLeft/>
</Variant>
</Component>
<Component name="PaddingRight">
<Variant>
<PaddingRight/>
</Variant>
</Component>
<Component name="PaddingTop">
<Variant>
<PaddingTop/>
</Variant>
</Component>
<Component name="PageBreak">
<Variant>
<PageBreak/>
</Variant>
</Component>
<Component name="PageExclude">
<Variant>
<PageExclude/>
</Variant>
</Component>
<Component name="PageGear">
<Variant>
<PageGear/>
</Variant>
</Component>
<Component name="PageRule">
<Variant>
<PageRule/>
</Variant>
</Component>
<Component name="PageShare">
<Variant>
<PageShare/>
</Variant>
</Component>
<Component name="PageTag">
<Variant>
<PageTag/>
</Variant>
</Component>
<Component name="PagesExclude">
<Variant>
<PagesExclude/>
</Variant>
</Component>
<Component name="Pan">
<Variant>
<Pan/>
</Variant>
</Component>
<Component name="Panel">
<Variant>
<Panel/>
</Variant>
</Component>
<Component name="Paste">
<Variant>
<Paste/>
</Variant>
</Component>
<Component name="PasteHTML">
<Variant>
<PasteHTML/>
</Variant>
</Component>
<Component name="PasteList">
<Variant>
<PasteList/>
</Variant>
</Component>
<Component name="PasteText">
<Variant>
<PasteText/>
</Variant>
</Component>
<Component name="Pattern">
<Variant>
<Pattern/>
</Variant>
</Component>
<Component name="Pause">
<Variant>
<Pause/>
</Variant>
</Component>
<Component name="PauseCircle">
<Variant>
<PauseCircle/>
</Variant>
</Component>
<Component name="Pawn">
<Variant>
<Pawn/>
</Variant>
</Component>
<Component name="Pending">
<Variant>
<Pending/>
</Variant>
</Component>
<Component name="PeopleGroup">
<Variant>
<PeopleGroup/>
</Variant>
</Component>
<Component name="PersonalizationField">
<Variant>
<PersonalizationField/>
</Variant>
</Component>
<Component name="Perspective">
<Variant>
<Perspective/>
</Variant>
</Component>
<Component name="PinOff">
<Variant>
<PinOff/>
</Variant>
</Component>
<Component name="PinOn">
<Variant>
<PinOn/>
</Variant>
</Component>
<Component name="Pivot">
<Variant>
<Pivot/>
</Variant>
</Component>
<Component name="PlatformDataMapping">
<Variant>
<PlatformDataMapping/>
</Variant>
</Component>
<Component name="Play">
<Variant>
<Play/>
</Variant>
</Component>
<Component name="PlayCircle">
<Variant>
<PlayCircle/>
</Variant>
</Component>
<Component name="Plug">
<Variant>
<Plug/>
</Variant>
</Component>
<Component name="Polygon">
<Variant>
<Polygon/>
</Variant>
</Component>
<Component name="PolygonSelect">
<Variant>
<PolygonSelect/>
</Variant>
</Component>
<Component name="PopIn">
<Variant>
<PopIn/>
</Variant>
</Component>
<Component name="Portrait">
<Variant>
<Portrait/>
</Variant>
</Component>
<Component name="Preset">
<Variant>
<Preset/>
</Variant>
</Component>
<Component name="Preview">
<Variant>
<Preview/>
</Variant>
</Component>
<Component name="Print">
<Variant>
<Print/>
</Variant>
</Component>
<Component name="PrintPreview">
<Variant>
<PrintPreview/>
</Variant>
</Component>
<Component name="Project">
<Variant>
<Project/>
</Variant>
</Component>
<Component name="ProjectAdd">
<Variant>
<ProjectAdd/>
</Variant>
</Component>
<Component name="ProjectEdit">
<Variant>
<ProjectEdit/>
</Variant>
</Component>
<Component name="ProjectNameEdit">
<Variant>
<ProjectNameEdit/>
</Variant>
</Component>
<Component name="Promote">
<Variant>
<Promote/>
</Variant>
</Component>
<Component name="Properties">
<Variant>
<Properties/>
</Variant>
</Component>
<Component name="PropertiesCopy">
<Variant>
<PropertiesCopy/>
</Variant>
</Component>
<Component name="PublishCheck">
<Variant>
<PublishCheck/>
</Variant>
</Component>
<Component name="PublishPending">
<Variant>
<PublishPending/>
</Variant>
</Component>
<Component name="PublishReject">
<Variant>
<PublishReject/>
</Variant>
</Component>
<Component name="PublishRemove">
<Variant>
<PublishRemove/>
</Variant>
</Component>
<Component name="PublishSchedule">
<Variant>
<PublishSchedule/>
</Variant>
</Component>
<Component name="PushNotification">
<Variant>
<PushNotification/>
</Variant>
</Component>
<Component name="Question">
<Variant>
<Question/>
</Variant>
</Component>
<Component name="QuickSelect">
<Variant>
<QuickSelect/>
</Variant>
</Component>
<Component name="RSS">
<Variant>
<RSS/>
</Variant>
</Component>
<Component name="RadialGradient">
<Variant>
<RadialGradient/>
</Variant>
</Component>
<Component name="Rail">
<Variant>
<Rail/>
</Variant>
</Component>
<Component name="RailBottom">
<Variant>
<RailBottom/>
</Variant>
</Component>
<Component name="RailLeft">
<Variant>
<RailLeft/>
</Variant>
</Component>
<Component name="RailRight">
<Variant>
<RailRight/>
</Variant>
</Component>
<Component name="RailRightClose">
<Variant>
<RailRightClose/>
</Variant>
</Component>
<Component name="RailRightOpen">
<Variant>
<RailRightOpen/>
</Variant>
</Component>
<Component name="RailTop">
<Variant>
<RailTop/>
</Variant>
</Component>
<Component name="RangeMask">
<Variant>
<RangeMask/>
</Variant>
</Component>
<Component name="RealTimeCustomerProfile">
<Variant>
<RealTimeCustomerProfile/>
</Variant>
</Component>
<Component name="RectSelect">
<Variant>
<RectSelect/>
</Variant>
</Component>
<Component name="Rectangle">
<Variant>
<Rectangle/>
</Variant>
</Component>
<Component name="Redo">
<Variant>
<Redo/>
</Variant>
</Component>
<Component name="Refresh">
<Variant>
<Refresh/>
</Variant>
</Component>
<Component name="RegionSelect">
<Variant>
<RegionSelect/>
</Variant>
</Component>
<Component name="Relevance">
<Variant>
<Relevance/>
</Variant>
</Component>
<Component name="Remove">
<Variant>
<Remove/>
</Variant>
</Component>
<Component name="RemoveCircle">
<Variant>
<RemoveCircle/>
</Variant>
</Component>
<Component name="Rename">
<Variant>
<Rename/>
</Variant>
</Component>
<Component name="Reorder">
<Variant>
<Reorder/>
</Variant>
</Component>
<Component name="Replay">
<Variant>
<Replay/>
</Variant>
</Component>
<Component name="Replies">
<Variant>
<Replies/>
</Variant>
</Component>
<Component name="Reply">
<Variant>
<Reply/>
</Variant>
</Component>
<Component name="ReplyAll">
<Variant>
<ReplyAll/>
</Variant>
</Component>
<Component name="Report">
<Variant>
<Report/>
</Variant>
</Component>
<Component name="ReportAdd">
<Variant>
<ReportAdd/>
</Variant>
</Component>
<Component name="Resize">
<Variant>
<Resize/>
</Variant>
</Component>
<Component name="Retweet">
<Variant>
<Retweet/>
</Variant>
</Component>
<Component name="Reuse">
<Variant>
<Reuse/>
</Variant>
</Component>
<Component name="Revenue">
<Variant>
<Revenue/>
</Variant>
</Component>
<Component name="Revert">
<Variant>
<Revert/>
</Variant>
</Component>
<Component name="Rewind">
<Variant>
<Rewind/>
</Variant>
</Component>
<Component name="RewindCircle">
<Variant>
<RewindCircle/>
</Variant>
</Component>
<Component name="Ribbon">
<Variant>
<Ribbon/>
</Variant>
</Component>
<Component name="RotateCCW">
<Variant>
<RotateCCW/>
</Variant>
</Component>
<Component name="RotateCCWBold">
<Variant>
<RotateCCWBold/>
</Variant>
</Component>
<Component name="RotateCW">
<Variant>
<RotateCW/>
</Variant>
</Component>
<Component name="RotateCWBold">
<Variant>
<RotateCWBold/>
</Variant>
</Component>
<Component name="RotateLeft">
<Variant>
<RotateLeft/>
</Variant>
</Component>
<Component name="RotateLeftOutline">
<Variant>
<RotateLeftOutline/>
</Variant>
</Component>
<Component name="RotateRight">
<Variant>
<RotateRight/>
</Variant>
</Component>
<Component name="RotateRightOutline">
<Variant>
<RotateRightOutline/>
</Variant>
</Component>
<Component name="SMS">
<Variant>
<SMS/>
</Variant>
</Component>
<Component name="SMSKey">
<Variant>
<SMSKey/>
</Variant>
</Component>
<Component name="SMSLightning">
<Variant>
<SMSLightning/>
</Variant>
</Component>
<Component name="SMSRefresh">
<Variant>
<SMSRefresh/>
</Variant>
</Component>
<Component name="SQLQuery">
<Variant>
<SQLQuery/>
</Variant>
</Component>
<Component name="Sampler">
<Variant>
<Sampler/>
</Variant>
</Component>
<Component name="Sandbox">
<Variant>
<Sandbox/>
</Variant>
</Component>
<Component name="SaveAsFloppy">
<Variant>
<SaveAsFloppy/>
</Variant>
</Component>
<Component name="SaveFloppy">
<Variant>
<SaveFloppy/>
</Variant>
</Component>
<Component name="SaveTo">
<Variant>
<SaveTo/>
</Variant>
</Component>
<Component name="SaveToLight">
<Variant>
<SaveToLight/>
</Variant>
</Component>
<Component name="Scribble">
<Variant>
<Scribble/>
</Variant>
</Component>
<Component name="Search">
<Variant>
<Search/>
</Variant>
</Component>
<Component name="Seat">
<Variant>
<Seat/>
</Variant>
</Component>
<Component name="SeatAdd">
<Variant>
<SeatAdd/>
</Variant>
</Component>
<Component name="Segmentation">
<Variant>
<Segmentation/>
</Variant>
</Component>
<Component name="Segments">
<Variant>
<Segments/>
</Variant>
</Component>
<Component name="SelectAdd">
<Variant>
<SelectAdd/>
</Variant>
</Component>
<Component name="SelectBox">
<Variant>
<SelectBox/>
</Variant>
</Component>
<Component name="SelectBoxAll">
<Variant>
<SelectBoxAll/>
</Variant>
</Component>
<Component name="SelectCircular">
<Variant>
<SelectCircular/>
</Variant>
</Component>
<Component name="SelectContainer">
<Variant>
<SelectContainer/>
</Variant>
</Component>
<Component name="SelectGear">
<Variant>
<SelectGear/>
</Variant>
</Component>
<Component name="SelectIntersect">
<Variant>
<SelectIntersect/>
</Variant>
</Component>
<Component name="SelectSubtract">
<Variant>
<SelectSubtract/>
</Variant>
</Component>
<Component name="Selection">
<Variant>
<Selection/>
</Variant>
</Component>
<Component name="SelectionChecked">
<Variant>
<SelectionChecked/>
</Variant>
</Component>
<Component name="SelectionMove">
<Variant>
<SelectionMove/>
</Variant>
</Component>
<Component name="Send">
<Variant>
<Send/>
</Variant>
</Component>
<Component name="SentimentNegative">
<Variant>
<SentimentNegative/>
</Variant>
</Component>
<Component name="SentimentNeutral">
<Variant>
<SentimentNeutral/>
</Variant>
</Component>
<Component name="SentimentPositive">
<Variant>
<SentimentPositive/>
</Variant>
</Component>
<Component name="Servers">
<Variant>
<Servers/>
</Variant>
</Component>
<Component name="Settings">
<Variant>
<Settings/>
</Variant>
</Component>
<Component name="Shapes">
<Variant>
<Shapes/>
</Variant>
</Component>
<Component name="Share">
<Variant>
<Share/>
</Variant>
</Component>
<Component name="ShareAndroid">
<Variant>
<ShareAndroid/>
</Variant>
</Component>
<Component name="ShareCheck">
<Variant>
<ShareCheck/>
</Variant>
</Component>
<Component name="ShareLight">
<Variant>
<ShareLight/>
</Variant>
</Component>
<Component name="ShareWindows">
<Variant>
<ShareWindows/>
</Variant>
</Component>
<Component name="Sharpen">
<Variant>
<Sharpen/>
</Variant>
</Component>
<Component name="Shield">
<Variant>
<Shield/>
</Variant>
</Component>
<Component name="Ship">
<Variant>
<Ship/>
</Variant>
</Component>
<Component name="Shop">
<Variant>
<Shop/>
</Variant>
</Component>
<Component name="ShoppingCart">
<Variant>
<ShoppingCart/>
</Variant>
</Component>
<Component name="ShowAllLayers">
<Variant>
<ShowAllLayers/>
</Variant>
</Component>
<Component name="ShowMenu">
<Variant>
<ShowMenu/>
</Variant>
</Component>
<Component name="ShowOneLayer">
<Variant>
<ShowOneLayer/>
</Variant>
</Component>
<Component name="Shuffle">
<Variant>
<Shuffle/>
</Variant>
</Component>
<Component name="Slice">
<Variant>
<Slice/>
</Variant>
</Component>
<Component name="Slow">
<Variant>
<Slow/>
</Variant>
</Component>
<Component name="SmallCaps">
<Variant>
<SmallCaps/>
</Variant>
</Component>
<Component name="Snapshot">
<Variant>
<Snapshot/>
</Variant>
</Component>
<Component name="SocialNetwork">
<Variant>
<SocialNetwork/>
</Variant>
</Component>
<Component name="SortOrderDown">
<Variant>
<SortOrderDown/>
</Variant>
</Component>
<Component name="SortOrderUp">
<Variant>
<SortOrderUp/>
</Variant>
</Component>
<Component name="Spam">
<Variant>
<Spam/>
</Variant>
</Component>
<Component name="Spellcheck">
<Variant>
<Spellcheck/>
</Variant>
</Component>
<Component name="Spin">
<Variant>
<Spin/>
</Variant>
</Component>
<Component name="SplitView">
<Variant>
<SplitView/>
</Variant>
</Component>
<Component name="SpotHeal">
<Variant>
<SpotHeal/>
</Variant>
</Component>
<Component name="Stadium">
<Variant>
<Stadium/>
</Variant>
</Component>
<Component name="Stage">
<Variant>
<Stage/>
</Variant>
</Component>
<Component name="Stamp">
<Variant>
<Stamp/>
</Variant>
</Component>
<Component name="Star">
<Variant>
<Star/>
</Variant>
</Component>
<Component name="StarOutline">
<Variant>
<StarOutline/>
</Variant>
</Component>
<Component name="Starburst">
<Variant>
<Starburst/>
</Variant>
</Component>
<Component name="StepBackward">
<Variant>
<StepBackward/>
</Variant>
</Component>
<Component name="StepBackwardCircle">
<Variant>
<StepBackwardCircle/>
</Variant>
</Component>
<Component name="StepForward">
<Variant>
<StepForward/>
</Variant>
</Component>
<Component name="StepForwardCircle">
<Variant>
<StepForwardCircle/>
</Variant>
</Component>
<Component name="Stop">
<Variant>
<Stop/>
</Variant>
</Component>
<Component name="StopCircle">
<Variant>
<StopCircle/>
</Variant>
</Component>
<Component name="Stopwatch">
<Variant>
<Stopwatch/>
</Variant>
</Component>
<Component name="Straighten">
<Variant>
<Straighten/>
</Variant>
</Component>
<Component name="StraightenOutline">
<Variant>
<StraightenOutline/>
</Variant>
</Component>
<Component name="StrokeWidth">
<Variant>
<StrokeWidth/>
</Variant>
</Component>
<Component name="Subscribe">
<Variant>
<Subscribe/>
</Variant>
</Component>
<Component name="SubtractBackPath">
<Variant>
<SubtractBackPath/>
</Variant>
</Component>
<Component name="SubtractFromSelection">
<Variant>
<SubtractFromSelection/>
</Variant>
</Component>
<Component name="SubtractFrontPath">
<Variant>
<SubtractFrontPath/>
</Variant>
</Component>
<Component name="SuccessMetric">
<Variant>
<SuccessMetric/>
</Variant>
</Component>
<Component name="Summarize">
<Variant>
<Summarize/>
</Variant>
</Component>
<Component name="Survey">
<Variant>
<Survey/>
</Variant>
</Component>
<Component name="Sync">
<Variant>
<Sync/>
</Variant>
</Component>
<Component name="SyncRemove">
<Variant>
<SyncRemove/>
</Variant>
</Component>
<Component name="TableAdd">
<Variant>
<TableAdd/>
</Variant>
</Component>
<Component name="TableAndChart">
<Variant>
<TableAndChart/>
</Variant>
</Component>
<Component name="TableColumnAddLeft">
<Variant>
<TableColumnAddLeft/>
</Variant>
</Component>
<Component name="TableColumnAddRight">
<Variant>
<TableColumnAddRight/>
</Variant>
</Component>
<Component name="TableColumnMerge">
<Variant>
<TableColumnMerge/>
</Variant>
</Component>
<Component name="TableColumnRemoveCenter">
<Variant>
<TableColumnRemoveCenter/>
</Variant>
</Component>
<Component name="TableColumnSplit">
<Variant>
<TableColumnSplit/>
</Variant>
</Component>
<Component name="TableEdit">
<Variant>
<TableEdit/>
</Variant>
</Component>
<Component name="TableHistogram">
<Variant>
<TableHistogram/>
</Variant>
</Component>
<Component name="TableMergeCells">
<Variant>
<TableMergeCells/>
</Variant>
</Component>
<Component name="TableRowAddBottom">
<Variant>
<TableRowAddBottom/>
</Variant>
</Component>
<Component name="TableRowAddTop">
<Variant>
<TableRowAddTop/>
</Variant>
</Component>
<Component name="TableRowMerge">
<Variant>
<TableRowMerge/>
</Variant>
</Component>
<Component name="TableRowRemoveCenter">
<Variant>
<TableRowRemoveCenter/>
</Variant>
</Component>
<Component name="TableRowSplit">
<Variant>
<TableRowSplit/>
</Variant>
</Component>
<Component name="TableSelectColumn">
<Variant>
<TableSelectColumn/>
</Variant>
</Component>
<Component name="TableSelectRow">
<Variant>
<TableSelectRow/>
</Variant>
</Component>
<Component name="TagBold">
<Variant>
<TagBold/>
</Variant>
</Component>
<Component name="TagItalic">
<Variant>
<TagItalic/>
</Variant>
</Component>
<Component name="TagUnderline">
<Variant>
<TagUnderline/>
</Variant>
</Component>
<Component name="Target">
<Variant>
<Target/>
</Variant>
</Component>
<Component name="Targeted">
<Variant>
<Targeted/>
</Variant>
</Component>
<Component name="TaskList">
<Variant>
<TaskList/>
</Variant>
</Component>
<Component name="Teapot">
<Variant>
<Teapot/>
</Variant>
</Component>
<Component name="Temperature">
<Variant>
<Temperature/>
</Variant>
</Component>
<Component name="TestAB">
<Variant>
<TestAB/>
</Variant>
</Component>
<Component name="TestABEdit">
<Variant>
<TestABEdit/>
</Variant>
</Component>
<Component name="TestABGear">
<Variant>
<TestABGear/>
</Variant>
</Component>
<Component name="TestABRemove">
<Variant>
<TestABRemove/>
</Variant>
</Component>
<Component name="TestProfile">
<Variant>
<TestProfile/>
</Variant>
</Component>
<Component name="TextAdd">
<Variant>
<TextAdd/>
</Variant>
</Component>
<Component name="TextAlignCenter">
<Variant>
<TextAlignCenter/>
</Variant>
</Component>
<Component name="TextAlignJustify">
<Variant>
<TextAlignJustify/>
</Variant>
</Component>
<Component name="TextAlignLeft">
<Variant>
<TextAlignLeft/>
</Variant>
</Component>
<Component name="TextAlignRight">
<Variant>
<TextAlignRight/>
</Variant>
</Component>
<Component name="TextBaselineShift">
<Variant>
<TextBaselineShift/>
</Variant>
</Component>
<Component name="TextBold">
<Variant>
<TextBold/>
</Variant>
</Component>
<Component name="TextBulleted">
<Variant>
<TextBulleted/>
</Variant>
</Component>
<Component name="TextBulletedAttach">
<Variant>
<TextBulletedAttach/>
</Variant>
</Component>
<Component name="TextBulletedHierarchy">
<Variant>
<TextBulletedHierarchy/>
</Variant>
</Component>
<Component name="TextBulletedHierarchyExclude">
<Variant>
<TextBulletedHierarchyExclude/>
</Variant>
</Component>
<Component name="TextColor">
<Variant>
<TextColor/>
</Variant>
</Component>
<Component name="TextDecrease">
<Variant>
<TextDecrease/>
</Variant>
</Component>
<Component name="TextEdit">
<Variant>
<TextEdit/>
</Variant>
</Component>
<Component name="TextExclude">
<Variant>
<TextExclude/>
</Variant>
</Component>
<Component name="TextIncrease">
<Variant>
<TextIncrease/>
</Variant>
</Component>
<Component name="TextIndentDecrease">
<Variant>
<TextIndentDecrease/>
</Variant>
</Component>
<Component name="TextIndentIncrease">
<Variant>
<TextIndentIncrease/>
</Variant>
</Component>
<Component name="TextItalic">
<Variant>
<TextItalic/>
</Variant>
</Component>
<Component name="TextKerning">
<Variant>
<TextKerning/>
</Variant>
</Component>
<Component name="TextLetteredLowerCase">
<Variant>
<TextLetteredLowerCase/>
</Variant>
</Component>
<Component name="TextLetteredUpperCase">
<Variant>
<TextLetteredUpperCase/>
</Variant>
</Component>
<Component name="TextNumbered">
<Variant>
<TextNumbered/>
</Variant>
</Component>
<Component name="TextParagraph">
<Variant>
<TextParagraph/>
</Variant>
</Component>
<Component name="TextRomanLowercase">
<Variant>
<TextRomanLowercase/>
</Variant>
</Component>
<Component name="TextRomanUppercase">
<Variant>
<TextRomanUppercase/>
</Variant>
</Component>
<Component name="TextSize">
<Variant>
<TextSize/>
</Variant>
</Component>
<Component name="TextSizeAdd">
<Variant>
<TextSizeAdd/>
</Variant>
</Component>
<Component name="TextSpaceAfter">
<Variant>
<TextSpaceAfter/>
</Variant>
</Component>
<Component name="TextSpaceBefore">
<Variant>
<TextSpaceBefore/>
</Variant>
</Component>
<Component name="TextStrikethrough">
<Variant>
<TextStrikethrough/>
</Variant>
</Component>
<Component name="TextStroke">
<Variant>
<TextStroke/>
</Variant>
</Component>
<Component name="TextStyle">
<Variant>
<TextStyle/>
</Variant>
</Component>
<Component name="TextSubscript">
<Variant>
<TextSubscript/>
</Variant>
</Component>
<Component name="TextSuperscript">
<Variant>
<TextSuperscript/>
</Variant>
</Component>
<Component name="TextTracking">
<Variant>
<TextTracking/>
</Variant>
</Component>
<Component name="TextUnderline">
<Variant>
<TextUnderline/>
</Variant>
</Component>
<Component name="ThumbDown">
<Variant>
<ThumbDown/>
</Variant>
</Component>
<Component name="ThumbDownOutline">
<Variant>
<ThumbDownOutline/>
</Variant>
</Component>
<Component name="ThumbUp">
<Variant>
<ThumbUp/>
</Variant>
</Component>
<Component name="ThumbUpOutline">
<Variant>
<ThumbUpOutline/>
</Variant>
</Component>
<Component name="Tips">
<Variant>
<Tips/>
</Variant>
</Component>
<Component name="Train">
<Variant>
<Train/>
</Variant>
</Component>
<Component name="TransferToPlatform">
<Variant>
<TransferToPlatform/>
</Variant>
</Component>
<Component name="Transparency">
<Variant>
<Transparency/>
</Variant>
</Component>
<Component name="Trap">
<Variant>
<Trap/>
</Variant>
</Component>
<Component name="TreeCollapse">
<Variant>
<TreeCollapse/>
</Variant>
</Component>
<Component name="TreeCollapseAll">
<Variant>
<TreeCollapseAll/>
</Variant>
</Component>
<Component name="TreeExpand">
<Variant>
<TreeExpand/>
</Variant>
</Component>
<Component name="TreeExpandAll">
<Variant>
<TreeExpandAll/>
</Variant>
</Component>
<Component name="TrendInspect">
<Variant>
<TrendInspect/>
</Variant>
</Component>
<Component name="TrimPath">
<Variant>
<TrimPath/>
</Variant>
</Component>
<Component name="Trophy">
<Variant>
<Trophy/>
</Variant>
</Component>
<Component name="Type">
<Variant>
<Type/>
</Variant>
</Component>
<Component name="USA">
<Variant>
<USA/>
</Variant>
</Component>
<Component name="Underline">
<Variant>
<Underline/>
</Variant>
</Component>
<Component name="Undo">
<Variant>
<Undo/>
</Variant>
</Component>
<Component name="Ungroup">
<Variant>
<Ungroup/>
</Variant>
</Component>
<Component name="Unlink">
<Variant>
<Unlink/>
</Variant>
</Component>
<Component name="Unmerge">
<Variant>
<Unmerge/>
</Variant>
</Component>
<Component name="UploadToCloud">
<Variant>
<UploadToCloud/>
</Variant>
</Component>
<Component name="UploadToCloudOutline">
<Variant>
<UploadToCloudOutline/>
</Variant>
</Component>
<Component name="User">
<Variant>
<User/>
</Variant>
</Component>
<Component name="UserActivity">
<Variant>
<UserActivity/>
</Variant>
</Component>
<Component name="UserAdd">
<Variant>
<UserAdd/>
</Variant>
</Component>
<Component name="UserAdmin">
<Variant>
<UserAdmin/>
</Variant>
</Component>
<Component name="UserArrow">
<Variant>
<UserArrow/>
</Variant>
</Component>
<Component name="UserCheckedOut">
<Variant>
<UserCheckedOut/>
</Variant>
</Component>
<Component name="UserDeveloper">
<Variant>
<UserDeveloper/>
</Variant>
</Component>
<Component name="UserEdit">
<Variant>
<UserEdit/>
</Variant>
</Component>
<Component name="UserExclude">
<Variant>
<UserExclude/>
</Variant>
</Component>
<Component name="UserGroup">
<Variant>
<UserGroup/>
</Variant>
</Component>
<Component name="UserLock">
<Variant>
<UserLock/>
</Variant>
</Component>
<Component name="UserShare">
<Variant>
<UserShare/>
</Variant>
</Component>
<Component name="UsersAdd">
<Variant>
<UsersAdd/>
</Variant>
</Component>
<Component name="UsersExclude">
<Variant>
<UsersExclude/>
</Variant>
</Component>
<Component name="UsersLock">
<Variant>
<UsersLock/>
</Variant>
</Component>
<Component name="UsersShare">
<Variant>
<UsersShare/>
</Variant>
</Component>
<Component name="Variable">
<Variant>
<Variable/>
</Variant>
</Component>
<Component name="VectorDraw">
<Variant>
<VectorDraw/>
</Variant>
</Component>
<Component name="VideoCheckedOut">
<Variant>
<VideoCheckedOut/>
</Variant>
</Component>
<Component name="VideoFilled">
<Variant>
<VideoFilled/>
</Variant>
</Component>
<Component name="VideoOutline">
<Variant>
<VideoOutline/>
</Variant>
</Component>
<Component name="ViewAllTags">
<Variant>
<ViewAllTags/>
</Variant>
</Component>
<Component name="ViewBiWeek">
<Variant>
<ViewBiWeek/>
</Variant>
</Component>
<Component name="ViewCard">
<Variant>
<ViewCard/>
</Variant>
</Component>
<Component name="ViewColumn">
<Variant>
<ViewColumn/>
</Variant>
</Component>
<Component name="ViewDay">
<Variant>
<ViewDay/>
</Variant>
</Component>
<Component name="ViewDetail">
<Variant>
<ViewDetail/>
</Variant>
</Component>
<Component name="ViewGrid">
<Variant>
<ViewGrid/>
</Variant>
</Component>
<Component name="ViewList">
<Variant>
<ViewList/>
</Variant>
</Component>
<Component name="ViewRow">
<Variant>
<ViewRow/>
</Variant>
</Component>
<Component name="ViewSingle">
<Variant>
<ViewSingle/>
</Variant>
</Component>
<Component name="ViewStack">
<Variant>
<ViewStack/>
</Variant>
</Component>
<Component name="ViewWeek">
<Variant>
<ViewWeek/>
</Variant>
</Component>
<Component name="ViewedMarkAs">
<Variant>
<ViewedMarkAs/>
</Variant>
</Component>
<Component name="Vignette">
<Variant>
<Vignette/>
</Variant>
</Component>
<Component name="Visibility">
<Variant>
<Visibility/>
</Variant>
</Component>
<Component name="VisibilityOff">
<Variant>
<VisibilityOff/>
</Variant>
</Component>
<Component name="Visit">
<Variant>
<Visit/>
</Variant>
</Component>
<Component name="VisitShare">
<Variant>
<VisitShare/>
</Variant>
</Component>
<Component name="VoiceOver">
<Variant>
<VoiceOver/>
</Variant>
</Component>
<Component name="VolumeMute">
<Variant>
<VolumeMute/>
</Variant>
</Component>
<Component name="VolumeOne">
<Variant>
<VolumeOne/>
</Variant>
</Component>
<Component name="VolumeThree">
<Variant>
<VolumeThree/>
</Variant>
</Component>
<Component name="VolumeTwo">
<Variant>
<VolumeTwo/>
</Variant>
</Component>
<Component name="Watch">
<Variant>
<Watch/>
</Variant>
</Component>
<Component name="WebPage">
<Variant>
<WebPage/>
</Variant>
</Component>
<Component name="WebPages">
<Variant>
<WebPages/>
</Variant>
</Component>
<Component name="Workflow">
<Variant>
<Workflow/>
</Variant>
</Component>
<Component name="WorkflowAdd">
<Variant>
<WorkflowAdd/>
</Variant>
</Component>
<Component name="Wrench">
<Variant>
<Wrench/>
</Variant>
</Component>
<Component name="ZoomIn">
<Variant>
<ZoomIn/>
</Variant>
</Component>
<Component name="ZoomOut">
<Variant>
<ZoomOut/>
</Variant>
</Component>
<Component name="_123">
<Variant>
<_123/>
</Variant>
</Component>
<Component name="_3DMaterials">
<Variant>
<_3DMaterials/>
</Variant>
</Component>
<Component name="ColorIconWithSizes">
<Variant>
<ColorIconWithSizes/>
</Variant>
</Component>
<Component name="IconsColorStories">
<Variant>
<IconsColorStories/>
</Variant>
</Component>
<Component name="Colors">
<Variant>
<Colors/>
</Variant>
</Component>
<Component name="IconsExpressChromatic">
<Variant>
<IconsExpressChromatic/>
</Variant>
</Component>
<Component name="IconAddWithSizes">
<Variant>
<IconAddWithSizes/>
</Variant>
</Component>
<Component name="IconAlertInformative">
<Variant>
<IconAlertInformative/>
</Variant>
</Component>
<Component name="IconAlertNegative">
<Variant>
<IconAlertNegative/>
</Variant>
</Component>
<Component name="IconAlertNotice">
<Variant>
<IconAlertNotice/>
</Variant>
</Component>
<Component name="IconAlertPositive">
<Variant>
<IconAlertPositive/>
</Variant>
</Component>
<Component name="IconBellWithSizes">
<Variant>
<IconBellWithSizes/>
</Variant>
</Component>
<Component name="IconsExpressStories">
<Variant>
<IconsExpressStories/>
</Variant>
</Component>
<Component name="Error403">
<Variant>
<Error403/>
</Variant>
</Component>
<Component name="Error404">
<Variant>
<Error404/>
</Variant>
</Component>
<Component name="Error500">
<Variant>
<Error500/>
</Variant>
</Component>
<Component name="Error503">
<Variant>
<Error503/>
</Variant>
</Component>
<Component name="Error504">
<Variant>
<Error504/>
</Variant>
</Component>
<Component name="NoSearchResults">
<Variant>
<NoSearchResults/>
</Variant>
</Component>
<Component name="AsyncListData">
<Variant>
<AsyncListData/>
</Variant>
</Component>
<Component name="AsyncListOptions">
<Variant>
<AsyncListOptions/>
</Variant>
</Component>
<Component name="CellProps">
<Variant>
<CellProps/>
</Variant>
</Component>
<Component name="ContentProps">
<Variant>
<ContentProps/>
</Variant>
</Component>
<Component name="DateFormatter">
<Variant>
<DateFormatter/>
</Variant>
</Component>
<Component name="DateFormatterOptions">
<Variant>
<DateFormatterOptions/>
</Variant>
</Component>
<Component name="DialogContainerValue">
<Variant>
<DialogContainerValue/>
</Variant>
</Component>
<Component name="DimensionValue">
<Variant>
<DimensionValue/>
</Variant>
</Component>
<Component name="DirectoryDropItem">
<Variant>
<DirectoryDropItem/>
</Variant>
</Component>
<Component name="DragAndDropHooks">
<Variant>
<DragAndDropHooks/>
</Variant>
</Component>
<Component name="DragAndDropOptions">
<Variant>
<DragAndDropOptions/>
</Variant>
</Component>
<Component name="DragPreviewRenderer">
<Variant>
<DragPreviewRenderer/>
</Variant>
</Component>
<Component name="DragTypes">
<Variant>
<DragTypes/>
</Variant>
</Component>
<Component name="DraggableCollectionEndEvent">
<Variant>
<DraggableCollectionEndEvent/>
</Variant>
</Component>
<Component name="DraggableCollectionMoveEvent">
<Variant>
<DraggableCollectionMoveEvent/>
</Variant>
</Component>
<Component name="DraggableCollectionStartEvent">
<Variant>
<DraggableCollectionStartEvent/>
</Variant>
</Component>
<Component name="DropItem">
<Variant>
<DropItem/>
</Variant>
</Component>
<Component name="DropOperation">
<Variant>
<DropOperation/>
</Variant>
</Component>
<Component name="DropPosition">
<Variant>
<DropPosition/>
</Variant>
</Component>
<Component name="DropTarget">
<Variant>
<DropTarget/>
</Variant>
</Component>
<Component name="DroppableCollectionDropEvent">
<Variant>
<DroppableCollectionDropEvent/>
</Variant>
</Component>
<Component name="DroppableCollectionEnterEvent">
<Variant>
<DroppableCollectionEnterEvent/>
</Variant>
</Component>
<Component name="DroppableCollectionExitEvent">
<Variant>
<DroppableCollectionExitEvent/>
</Variant>
</Component>
<Component name="DroppableCollectionInsertDropEvent">
<Variant>
<DroppableCollectionInsertDropEvent/>
</Variant>
</Component>
<Component name="DroppableCollectionMoveEvent">
<Variant>
<DroppableCollectionMoveEvent/>
</Variant>
</Component>
<Component name="DroppableCollectionOnItemDropEvent">
<Variant>
<DroppableCollectionOnItemDropEvent/>
</Variant>
</Component>
<Component name="DroppableCollectionReorderEvent">
<Variant>
<DroppableCollectionReorderEvent/>
</Variant>
</Component>
<Component name="DroppableCollectionRootDropEvent">
<Variant>
<DroppableCollectionRootDropEvent/>
</Variant>
</Component>
<Component name="FileDropItem">
<Variant>
<FileDropItem/>
</Variant>
</Component>
<Component name="FlexProps">
<Variant>
<FlexProps/>
</Variant>
</Component>
<Component name="FooterProps">
<Variant>
<FooterProps/>
</Variant>
</Component>
<Component name="FormatMessage">
<Variant>
<FormatMessage/>
</Variant>
</Component>
<Component name="GridProps">
<Variant>
<GridProps/>
</Variant>
</Component>
<Component name="HeaderProps">
<Variant>
<HeaderProps/>
</Variant>
</Component>
<Component name="HeadingProps">
<Variant>
<HeadingProps/>
</Variant>
</Component>
<Component name="IconProps">
<Variant>
<IconProps/>
</Variant>
</Component>
<Component name="IllustrationProps">
<Variant>
<IllustrationProps/>
</Variant>
</Component>
<Component name="ItemDropTarget">
<Variant>
<ItemDropTarget/>
</Variant>
</Component>
<Component name="KeyboardProps">
<Variant>
<KeyboardProps/>
</Variant>
</Component>
<Component name="ListData">
<Variant>
<ListData/>
</Variant>
</Component>
<Component name="ListOptions">
<Variant>
<ListOptions/>
</Variant>
</Component>
<Component name="Locale">
<Variant>
<Locale/>
</Variant>
</Component>
<Component name="LocalizedStrings">
<Variant>
<LocalizedStrings/>
</Variant>
</Component>
<Component name="ProviderContext">
<Variant>
<ProviderContext/>
</Variant>
</Component>
<Component name="ProviderProps">
<Variant>
<ProviderProps/>
</Variant>
</Component>
<Component name="RootDropTarget">
<Variant>
<RootDropTarget/>
</Variant>
</Component>
<Component name="RowProps">
<Variant>
<RowProps/>
</Variant>
</Component>
<Component name="SSRProviderProps">
<Variant>
<SSRProviderProps/>
</Variant>
</Component>
<Component name="SpectrumActionBarContainerProps">
<Variant>
<SpectrumActionBarContainerProps/>
</Variant>
</Component>
<Component name="SpectrumActionBarProps">
<Variant>
<SpectrumActionBarProps/>
</Variant>
</Component>
<Component name="SpectrumActionButtonProps">
<Variant>
<SpectrumActionButtonProps/>
</Variant>
</Component>
<Component name="SpectrumActionGroupProps">
<Variant>
<SpectrumActionGroupProps/>
</Variant>
</Component>
<Component name="SpectrumActionMenuProps">
<Variant>
<SpectrumActionMenuProps/>
</Variant>
</Component>
<Component name="SpectrumAlertDialogProps">
<Variant>
<SpectrumAlertDialogProps/>
</Variant>
</Component>
<Component name="SpectrumAvatarProps">
<Variant>
<SpectrumAvatarProps/>
</Variant>
</Component>
<Component name="SpectrumBadgeProps">
<Variant>
<SpectrumBadgeProps/>
</Variant>
</Component>
<Component name="SpectrumBreadcrumbsProps">
<Variant>
<SpectrumBreadcrumbsProps/>
</Variant>
</Component>
<Component name="SpectrumButtonGroupProps">
<Variant>
<SpectrumButtonGroupProps/>
</Variant>
</Component>
<Component name="SpectrumButtonProps">
<Variant>
<SpectrumButtonProps/>
</Variant>
</Component>
<Component name="SpectrumCalendarProps">
<Variant>
<SpectrumCalendarProps/>
</Variant>
</Component>
<Component name="SpectrumCheckboxGroupProps">
<Variant>
<SpectrumCheckboxGroupProps/>
</Variant>
</Component>
<Component name="SpectrumCheckboxProps">
<Variant>
<SpectrumCheckboxProps/>
</Variant>
</Component>
<Component name="SpectrumColumnProps">
<Variant>
<SpectrumColumnProps/>
</Variant>
</Component>
<Component name="SpectrumComboBoxProps">
<Variant>
<SpectrumComboBoxProps/>
</Variant>
</Component>
<Component name="SpectrumContextualHelpProps">
<Variant>
<SpectrumContextualHelpProps/>
</Variant>
</Component>
<Component name="SpectrumDateFieldProps">
<Variant>
<SpectrumDateFieldProps/>
</Variant>
</Component>
<Component name="SpectrumDatePickerProps">
<Variant>
<SpectrumDatePickerProps/>
</Variant>
</Component>
<Component name="SpectrumDateRangePickerProps">
<Variant>
<SpectrumDateRangePickerProps/>
</Variant>
</Component>
<Component name="SpectrumDialogContainerProps">
<Variant>
<SpectrumDialogContainerProps/>
</Variant>
</Component>
<Component name="SpectrumDialogProps">
<Variant>
<SpectrumDialogProps/>
</Variant>
</Component>
<Component name="SpectrumDialogTriggerProps">
<Variant>
<SpectrumDialogTriggerProps/>
</Variant>
</Component>
<Component name="SpectrumDividerProps">
<Variant>
<SpectrumDividerProps/>
</Variant>
</Component>
<Component name="SpectrumFormProps">
<Variant>
<SpectrumFormProps/>
</Variant>
</Component>
<Component name="SpectrumIllustratedMessageProps">
<Variant>
<SpectrumIllustratedMessageProps/>
</Variant>
</Component>
<Component name="SpectrumImageProps">
<Variant>
<SpectrumImageProps/>
</Variant>
</Component>
<Component name="SpectrumInlineAlertProps">
<Variant>
<SpectrumInlineAlertProps/>
</Variant>
</Component>
<Component name="SpectrumLabeledValueProps">
<Variant>
<SpectrumLabeledValueProps/>
</Variant>
</Component>
<Component name="SpectrumLinkProps">
<Variant>
<SpectrumLinkProps/>
</Variant>
</Component>
<Component name="SpectrumListBoxProps">
<Variant>
<SpectrumListBoxProps/>
</Variant>
</Component>
<Component name="SpectrumListViewProps">
<Variant>
<SpectrumListViewProps/>
</Variant>
</Component>
<Component name="SpectrumLogicButtonProps">
<Variant>
<SpectrumLogicButtonProps/>
</Variant>
</Component>
<Component name="SpectrumMenuDialogTriggerProps">
<Variant>
<SpectrumMenuDialogTriggerProps/>
</Variant>
</Component>
<Component name="SpectrumMenuProps">
<Variant>
<SpectrumMenuProps/>
</Variant>
</Component>
<Component name="SpectrumMenuTriggerProps">
<Variant>
<SpectrumMenuTriggerProps/>
</Variant>
</Component>
<Component name="SpectrumMeterProps">
<Variant>
<SpectrumMeterProps/>
</Variant>
</Component>
<Component name="SpectrumNumberFieldProps">
<Variant>
<SpectrumNumberFieldProps/>
</Variant>
</Component>
<Component name="SpectrumPickerProps">
<Variant>
<SpectrumPickerProps/>
</Variant>
</Component>
<Component name="SpectrumProgressBarProps">
<Variant>
<SpectrumProgressBarProps/>
</Variant>
</Component>
<Component name="SpectrumProgressCircleProps">
<Variant>
<SpectrumProgressCircleProps/>
</Variant>
</Component>
<Component name="SpectrumRadioGroupProps">
<Variant>
<SpectrumRadioGroupProps/>
</Variant>
</Component>
<Component name="SpectrumRadioProps">
<Variant>
<SpectrumRadioProps/>
</Variant>
</Component>
<Component name="SpectrumRangeCalendarProps">
<Variant>
<SpectrumRangeCalendarProps/>
</Variant>
</Component>
<Component name="SpectrumRangeSliderProps">
<Variant>
<SpectrumRangeSliderProps/>
</Variant>
</Component>
<Component name="SpectrumSearchFieldProps">
<Variant>
<SpectrumSearchFieldProps/>
</Variant>
</Component>
<Component name="SpectrumSliderProps">
<Variant>
<SpectrumSliderProps/>
</Variant>
</Component>
<Component name="SpectrumStatusLightProps">
<Variant>
<SpectrumStatusLightProps/>
</Variant>
</Component>
<Component name="SpectrumSwitchProps">
<Variant>
<SpectrumSwitchProps/>
</Variant>
</Component>
<Component name="SpectrumTabListProps">
<Variant>
<SpectrumTabListProps/>
</Variant>
</Component>
<Component name="SpectrumTabPanelsProps">
<Variant>
<SpectrumTabPanelsProps/>
</Variant>
</Component>
<Component name="SpectrumTableProps">
<Variant>
<SpectrumTableProps/>
</Variant>
</Component>
<Component name="SpectrumTabsProps">
<Variant>
<SpectrumTabsProps/>
</Variant>
</Component>
<Component name="SpectrumTagGroupProps">
<Variant>
<SpectrumTagGroupProps/>
</Variant>
</Component>
<Component name="SpectrumTextFieldProps">
<Variant>
<SpectrumTextFieldProps/>
</Variant>
</Component>
<Component name="SpectrumTimeFieldProps">
<Variant>
<SpectrumTimeFieldProps/>
</Variant>
</Component>
<Component name="SpectrumToggleButtonProps">
<Variant>
<SpectrumToggleButtonProps/>
</Variant>
</Component>
<Component name="SpectrumTooltipProps">
<Variant>
<SpectrumTooltipProps/>
</Variant>
</Component>
<Component name="SpectrumTooltipTriggerProps">
<Variant>
<SpectrumTooltipTriggerProps/>
</Variant>
</Component>
<Component name="SpectrumWellProps">
<Variant>
<SpectrumWellProps/>
</Variant>
</Component>
<Component name="TableBodyProps">
<Variant>
<TableBodyProps/>
</Variant>
</Component>
<Component name="TableHeaderProps">
<Variant>
<TableHeaderProps/>
</Variant>
</Component>
<Component name="TextDropItem">
<Variant>
<TextDropItem/>
</Variant>
</Component>
<Component name="TextProps">
<Variant>
<TextProps/>
</Variant>
</Component>
<Component name="TreeData">
<Variant>
<TreeData/>
</Variant>
</Component>
<Component name="TreeOptions">
<Variant>
<TreeOptions/>
</Variant>
</Component>
<Component name="ViewProps">
<Variant>
<ViewProps/>
</Variant>
</Component>
<Component name="VisuallyHiddenAria">
<Variant>
<VisuallyHiddenAria/>
</Variant>
</Component>
<Component name="VisuallyHiddenProps">
<Variant>
<VisuallyHiddenProps/>
</Variant>
</Component>
<Component name="Breadcrumb">
<Variant>
<Breadcrumb/>
</Variant>
</Component>
<Component name="Breadcrumbs">
<Variant>
<Breadcrumbs/>
</Variant>
</Component>
<Component name="BreadcrumbsContext">
<Variant>
<BreadcrumbsContext/>
</Variant>
</Component>
<Component name="Button">
<Variant>
<Button/>
</Variant>
</Component>
<Component name="ButtonContext">
<Variant>
<ButtonContext/>
</Variant>
</Component>
<Component name="Calendar">
<Variant>
<Calendar/>
</Variant>
</Component>
<Component name="CalendarCell">
<Variant>
<CalendarCell/>
</Variant>
</Component>
<Component name="CalendarContext">
<Variant>
<CalendarContext/>
</Variant>
</Component>
<Component name="CalendarGrid">
<Variant>
<CalendarGrid/>
</Variant>
</Component>
<Component name="CalendarGridBody">
<Variant>
<CalendarGridBody/>
</Variant>
</Component>
<Component name="CalendarGridHeader">
<Variant>
<CalendarGridHeader/>
</Variant>
</Component>
<Component name="CalendarHeaderCell">
<Variant>
<CalendarHeaderCell/>
</Variant>
</Component>
<Component name="CalendarStateContext">
<Variant>
<CalendarStateContext/>
</Variant>
</Component>
<Component name="Cell">
<Variant>
<Cell/>
</Variant>
</Component>
<Component name="Checkbox">
<Variant>
<Checkbox/>
</Variant>
</Component>
<Component name="CheckboxContext">
<Variant>
<CheckboxContext/>
</Variant>
</Component>
<Component name="CheckboxGroup">
<Variant>
<CheckboxGroup/>
</Variant>
</Component>
<Component name="CheckboxGroupContext">
<Variant>
<CheckboxGroupContext/>
</Variant>
</Component>
<Component name="CheckboxGroupStateContext">
<Variant>
<CheckboxGroupStateContext/>
</Variant>
</Component>
<Component name="Collection">
<Variant>
<Collection/>
</Variant>
</Component>
<Component name="Column">
<Variant>
<Column/>
</Variant>
</Component>
<Component name="ColumnResizer">
<Variant>
<ColumnResizer/>
</Variant>
</Component>
<Component name="ComboBox">
<Variant>
<ComboBox/>
</Variant>
</Component>
<Component name="ComboBoxContext">
<Variant>
<ComboBoxContext/>
</Variant>
</Component>
<Component name="ComboBoxStateContext">
<Variant>
<ComboBoxStateContext/>
</Variant>
</Component>
<Component name="DateField">
<Variant>
<DateField/>
</Variant>
</Component>
<Component name="DateFieldContext">
<Variant>
<DateFieldContext/>
</Variant>
</Component>
<Component name="DateFieldStateContext">
<Variant>
<DateFieldStateContext/>
</Variant>
</Component>
<Component name="DateInput">
<Variant>
<DateInput/>
</Variant>
</Component>
<Component name="DatePicker">
<Variant>
<DatePicker/>
</Variant>
</Component>
<Component name="DatePickerContext">
<Variant>
<DatePickerContext/>
</Variant>
</Component>
<Component name="DatePickerStateContext">
<Variant>
<DatePickerStateContext/>
</Variant>
</Component>
<Component name="DateRangePicker">
<Variant>
<DateRangePicker/>
</Variant>
</Component>
<Component name="DateRangePickerContext">
<Variant>
<DateRangePickerContext/>
</Variant>
</Component>
<Component name="DateRangePickerStateContext">
<Variant>
<DateRangePickerStateContext/>
</Variant>
</Component>
<Component name="DateSegment">
<Variant>
<DateSegment/>
</Variant>
</Component>
<Component name="Dialog">
<Variant>
<Dialog/>
</Variant>
</Component>
<Component name="DialogContext">
<Variant>
<DialogContext/>
</Variant>
</Component>
<Component name="DialogTrigger">
<Variant>
<DialogTrigger/>
</Variant>
</Component>
<Component name="DragAndDropContext">
<Variant>
<DragAndDropContext/>
</Variant>
</Component>
<Component name="DropIndicator">
<Variant>
<DropIndicator/>
</Variant>
</Component>
<Component name="DropIndicatorContext">
<Variant>
<DropIndicatorContext/>
</Variant>
</Component>
<Component name="DropZone">
<Variant>
<DropZone/>
</Variant>
</Component>
<Component name="DropZoneContext">
<Variant>
<DropZoneContext/>
</Variant>
</Component>
<Component name="FieldError">
<Variant>
<FieldError/>
</Variant>
</Component>
<Component name="FieldErrorContext">
<Variant>
<FieldErrorContext/>
</Variant>
</Component>
<Component name="FileTrigger">
<Variant>
<FileTrigger/>
</Variant>
</Component>
<Component name="GridList">
<Variant>
<GridList/>
</Variant>
</Component>
<Component name="GridListContext">
<Variant>
<GridListContext/>
</Variant>
</Component>
<Component name="GridListItem">
<Variant>
<GridListItem/>
</Variant>
</Component>
<Component name="GroupContext">
<Variant>
<GroupContext/>
</Variant>
</Component>
<Component name="Header">
<Variant>
<Header/>
</Variant>
</Component>
<Component name="HeaderContext">
<Variant>
<HeaderContext/>
</Variant>
</Component>
<Component name="Heading">
<Variant>
<Heading/>
</Variant>
</Component>
<Component name="HeadingContext">
<Variant>
<HeadingContext/>
</Variant>
</Component>
<Component name="Input">
<Variant>
<Input/>
</Variant>
</Component>
<Component name="InputContext">
<Variant>
<InputContext/>
</Variant>
</Component>
<Component name="KeyboardContext">
<Variant>
<KeyboardContext/>
</Variant>
</Component>
<Component name="LabelContext">
<Variant>
<LabelContext/>
</Variant>
</Component>
<Component name="LinkContext">
<Variant>
<LinkContext/>
</Variant>
</Component>
<Component name="ListBox">
<Variant>
<ListBox/>
</Variant>
</Component>
<Component name="ListBoxContext">
<Variant>
<ListBoxContext/>
</Variant>
</Component>
<Component name="ListBoxItem">
<Variant>
<ListBoxItem/>
</Variant>
</Component>
<Component name="ListStateContext">
<Variant>
<ListStateContext/>
</Variant>
</Component>
<Component name="LocalizedStringProvider">
<Variant>
<LocalizedStringProvider/>
</Variant>
</Component>
<Component name="MenuContext">
<Variant>
<MenuContext/>
</Variant>
</Component>
<Component name="MenuItem">
<Variant>
<MenuItem/>
</Variant>
</Component>
<Component name="MenuStateContext">
<Variant>
<MenuStateContext/>
</Variant>
</Component>
<Component name="MenuTrigger">
<Variant>
<MenuTrigger/>
</Variant>
</Component>
<Component name="Meter">
<Variant>
<Meter/>
</Variant>
</Component>
<Component name="MeterContext">
<Variant>
<MeterContext/>
</Variant>
</Component>
<Component name="Modal">
<Variant>
<Modal/>
</Variant>
</Component>
<Component name="ModalContext">
<Variant>
<ModalContext/>
</Variant>
</Component>
<Component name="ModalOverlay">
<Variant>
<ModalOverlay/>
</Variant>
</Component>
<Component name="NumberField">
<Variant>
<NumberField/>
</Variant>
</Component>
<Component name="NumberFieldContext">
<Variant>
<NumberFieldContext/>
</Variant>
</Component>
<Component name="NumberFieldStateContext">
<Variant>
<NumberFieldStateContext/>
</Variant>
</Component>
<Component name="OverlayArrow">
<Variant>
<OverlayArrow/>
</Variant>
</Component>
<Component name="OverlayTriggerStateContext">
<Variant>
<OverlayTriggerStateContext/>
</Variant>
</Component>
<Component name="Popover">
<Variant>
<Popover/>
</Variant>
</Component>
<Component name="PopoverContext">
<Variant>
<PopoverContext/>
</Variant>
</Component>
<Component name="ProgressBar">
<Variant>
<ProgressBar/>
</Variant>
</Component>
<Component name="ProgressBarContext">
<Variant>
<ProgressBarContext/>
</Variant>
</Component>
<Component name="Provider">
<Variant>
<Provider/>
</Variant>
</Component>
<Component name="Radio">
<Variant>
<Radio/>
</Variant>
</Component>
<Component name="RadioContext">
<Variant>
<RadioContext/>
</Variant>
</Component>
<Component name="RadioGroup">
<Variant>
<RadioGroup/>
</Variant>
</Component>
<Component name="RadioGroupContext">
<Variant>
<RadioGroupContext/>
</Variant>
</Component>
<Component name="RadioGroupStateContext">
<Variant>
<RadioGroupStateContext/>
</Variant>
</Component>
<Component name="RangeCalendar">
<Variant>
<RangeCalendar/>
</Variant>
</Component>
<Component name="RangeCalendarContext">
<Variant>
<RangeCalendarContext/>
</Variant>
</Component>
<Component name="RangeCalendarStateContext">
<Variant>
<RangeCalendarStateContext/>
</Variant>
</Component>
<Component name="ResizableTableContainer">
<Variant>
<ResizableTableContainer/>
</Variant>
</Component>
<Component name="RootMenuTriggerStateContext">
<Variant>
<RootMenuTriggerStateContext/>
</Variant>
</Component>
<Component name="Row">
<Variant>
<Row/>
</Variant>
</Component>
<Component name="SearchField">
<Variant>
<SearchField/>
</Variant>
</Component>
<Component name="SearchFieldContext">
<Variant>
<SearchFieldContext/>
</Variant>
</Component>
<Component name="Section">
<Variant>
<Section/>
</Variant>
</Component>
<Component name="Select">
<Variant>
<Select/>
</Variant>
</Component>
<Component name="SelectContext">
<Variant>
<SelectContext/>
</Variant>
</Component>
<Component name="SelectStateContext">
<Variant>
<SelectStateContext/>
</Variant>
</Component>
<Component name="SelectValue">
<Variant>
<SelectValue/>
</Variant>
</Component>
<Component name="SelectValueContext">
<Variant>
<SelectValueContext/>
</Variant>
</Component>
<Component name="Separator">
<Variant>
<Separator/>
</Variant>
</Component>
<Component name="SeparatorContext">
<Variant>
<SeparatorContext/>
</Variant>
</Component>
<Component name="Slider">
<Variant>
<Slider/>
</Variant>
</Component>
<Component name="SliderContext">
<Variant>
<SliderContext/>
</Variant>
</Component>
<Component name="SliderOutput">
<Variant>
<SliderOutput/>
</Variant>
</Component>
<Component name="SliderOutputContext">
<Variant>
<SliderOutputContext/>
</Variant>
</Component>
<Component name="SliderStateContext">
<Variant>
<SliderStateContext/>
</Variant>
</Component>
<Component name="SliderThumb">
<Variant>
<SliderThumb/>
</Variant>
</Component>
<Component name="SliderTrack">
<Variant>
<SliderTrack/>
</Variant>
</Component>
<Component name="SliderTrackContext">
<Variant>
<SliderTrackContext/>
</Variant>
</Component>
<Component name="SubmenuTrigger">
<Variant>
<SubmenuTrigger/>
</Variant>
</Component>
<Component name="Switch">
<Variant>
<Switch/>
</Variant>
</Component>
<Component name="SwitchContext">
<Variant>
<SwitchContext/>
</Variant>
</Component>
<Component name="Tab">
<Variant>
<Tab/>
</Variant>
</Component>
<Component name="TabList">
<Variant>
<TabList/>
</Variant>
</Component>
<Component name="TabListStateContext">
<Variant>
<TabListStateContext/>
</Variant>
</Component>
<Component name="TabPanel">
<Variant>
<TabPanel/>
</Variant>
</Component>
<Component name="Table">
<Variant>
<Table/>
</Variant>
</Component>
<Component name="TableBody">
<Variant>
<TableBody/>
</Variant>
</Component>
<Component name="TableColumnResizeStateContext">
<Variant>
<TableColumnResizeStateContext/>
</Variant>
</Component>
<Component name="TableContext">
<Variant>
<TableContext/>
</Variant>
</Component>
<Component name="TableHeader">
<Variant>
<TableHeader/>
</Variant>
</Component>
<Component name="TableStateContext">
<Variant>
<TableStateContext/>
</Variant>
</Component>
<Component name="Tabs">
<Variant>
<Tabs/>
</Variant>
</Component>
<Component name="TabsContext">
<Variant>
<TabsContext/>
</Variant>
</Component>
<Component name="Tag">
<Variant>
<Tag/>
</Variant>
</Component>
<Component name="TagGroup">
<Variant>
<TagGroup/>
</Variant>
</Component>
<Component name="TagGroupContext">
<Variant>
<TagGroupContext/>
</Variant>
</Component>
<Component name="TagList">
<Variant>
<TagList/>
</Variant>
</Component>
<Component name="TagListContext">
<Variant>
<TagListContext/>
</Variant>
</Component>
<Component name="Text">
<Variant>
<Text/>
</Variant>
</Component>
<Component name="TextArea">
<Variant>
<TextArea/>
</Variant>
</Component>
<Component name="TextAreaContext">
<Variant>
<TextAreaContext/>
</Variant>
</Component>
<Component name="TextContext">
<Variant>
<TextContext/>
</Variant>
</Component>
<Component name="TextField">
<Variant>
<TextField/>
</Variant>
</Component>
<Component name="TextFieldContext">
<Variant>
<TextFieldContext/>
</Variant>
</Component>
<Component name="TimeField">
<Variant>
<TimeField/>
</Variant>
</Component>
<Component name="TimeFieldContext">
<Variant>
<TimeFieldContext/>
</Variant>
</Component>
<Component name="TimeFieldStateContext">
<Variant>
<TimeFieldStateContext/>
</Variant>
</Component>
<Component name="ToggleButton">
<Variant>
<ToggleButton/>
</Variant>
</Component>
<Component name="ToggleButtonContext">
<Variant>
<ToggleButtonContext/>
</Variant>
</Component>
<Component name="Toolbar">
<Variant>
<Toolbar/>
</Variant>
</Component>
<Component name="ToolbarContext">
<Variant>
<ToolbarContext/>
</Variant>
</Component>
<Component name="Tooltip">
<Variant>
<Tooltip/>
</Variant>
</Component>
<Component name="TooltipContext">
<Variant>
<TooltipContext/>
</Variant>
</Component>
<Component name="TooltipTrigger">
<Variant>
<TooltipTrigger/>
</Variant>
</Component>
<Component name="TooltipTriggerStateContext">
<Variant>
<TooltipTriggerStateContext/>
</Variant>
</Component>
</Category>
</Palette>
)
;
