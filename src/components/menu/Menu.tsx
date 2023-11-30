import { Link } from "react-router-dom";
import './menu.scss';
import HomeIcon from '@mui/icons-material/Home';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupIcon from '@mui/icons-material/Group';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import ArticleIcon from '@mui/icons-material/Article';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

const Menu = () => {
  return (
    <div className="menu">
      <div className='item'>
        <span className="title">main</span>
        <Link to='/' className="listItem">
          <HomeIcon />
          <span className="listItemTitle">Homepage</span>
        </Link>
        <Link to='/profile' className="listItem">
          <PersonOutlineIcon />
          <span className="listItemTitle">Profile</span>
        </Link>
        <span className="title">admin</span>
        <Link to='/' className="listItem">
          <GroupIcon />
          <span className="listItemTitle">Members</span>
        </Link>
        <Link to='/' className="listItem">
          <PersonAddIcon />
          <span className="listItemTitle">Add Member</span>
        </Link>
        <Link to='/' className="listItem">
          <PersonRemoveIcon />
          <span className="listItemTitle">Remove Member</span>
        </Link>
        <span className="title">Planner</span>
        <Link to='/' className="listItem">
          <CalendarMonthIcon />
          <span className="listItemTitle">Calendar</span>
        </Link>
        <Link to='/' className="listItem">
          <AccountTreeIcon />
          <span className="listItemTitle">Projects</span>
        </Link>
        <Link to='/' className="listItem">
          <TaskAltIcon />
          <span className="listItemTitle">Tasks</span>
        </Link>
        <Link to='/' className="listItem">
          <ArticleIcon />
          <span className="listItemTitle">Notes</span>
        </Link>
      </div>
    </div>
  );
};

export default Menu;