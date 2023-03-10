import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';

function Navbar() {
  const { collapseSidebar } = useProSidebar();

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <Sidebar>
        <Menu>
          <MenuItem> Attendance Report</MenuItem>
          <MenuItem> Teacher's </MenuItem>
          <MenuItem> Student </MenuItem>
          <MenuItem> Time Table</MenuItem>
          <MenuItem> Subject </MenuItem>
          <MenuItem> Notification </MenuItem>
          <MenuItem> Assigement </MenuItem>
          <MenuItem> </MenuItem>
          <MenuItem> </MenuItem>
          <MenuItem> </MenuItem>
          <MenuItem> </MenuItem>
          <MenuItem>Self</MenuItem>

        </Menu>
      </Sidebar>
      <main>
        <button onClick={() => collapseSidebar()}>Collapse</button>
      </main>
    </div>
  );
}

export default Navbar;