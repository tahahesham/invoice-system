import { AppBar, Toolbar } from "@mui/material"

const Header = () => {
  const logo =
    "https://cdn.myportfolio.com/ee6b0ca7-e91d-4513-8af4-0e6934766da3/a06dfe52-8b01-463c-b347-a8633d31ddbb_rwc_0x0x1000x1000x4096.png?h=fe77c74de657df9739a1296aefa67162"

  return (
    <AppBar
      position="static" // Keeps the AppBar static
      sx={{
        bgcolor: "white", // Explicitly sets background color
        boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)" // Reduced shadow
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "center", // Centers content horizontally
          alignItems: "center" // Centers content vertically
        }}
      >
        <img
          src={logo}
          alt="logo"
          style={{
            width: 80,
            padding: "8px" // Adds padding around the logo
          }}
        />
      </Toolbar>
    </AppBar>
  )
}

export default Header
