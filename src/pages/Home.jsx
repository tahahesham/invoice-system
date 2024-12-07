import React, { useState } from "react"
import Header from "../components/Header"
import { Box, Typography, Button } from "@mui/material"
import AddInvoice from "../components/Add Invoice"

const Home = () => {
  const [addInvoice, setAddInvoice] = useState(false)

  const toggleInvoice = () => {
    setAddInvoice(true)
  }
  return (
    <div>
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "32px"
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#333",
            textTransform: "uppercase"
          }}
        >
          Pending Invoice
        </Typography>
        {!addInvoice && (
          <Button
            variant="contained"
            style={{ marginTop: 15 }}
            onClick={() => toggleInvoice()}
          >
            Add Invoice
          </Button>
        )}
        {addInvoice && <AddInvoice />}
      </Box>
    </div>
  )
}

export default Home
