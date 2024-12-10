import React, { useState, useEffect } from "react"
import Header from "../components/Header"
import { Box, Typography, Button } from "@mui/material"
import AddInvoice from "../components/Add Invoice"
import Invoices from "../components/Invoices"
import { getAllInvoices, deleteInvoice } from "../services/api"

const Home = () => {
  const [addInvoice, setAddInvoice] = useState(false)
  const [invoices, setInvoices] = useState([])

  useEffect(() => {
    const getData = async () => {
      const response = await getAllInvoices()
      response && response.data && setInvoices(response.data)
    }
    getData()
  }, [addInvoice])

  const toggleInvoice = () => {
    setAddInvoice(true)
  }

  const removeInvoice = async (id) => {
    await deleteInvoice(id)

    const updatedInvoice = invoices.filter((invoice) => invoice.id != id)
    setInvoices(updatedInvoice)
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
        {addInvoice && <AddInvoice setAddInvoice={setAddInvoice} />}
        <Box>
          <Invoices invoices={invoices} removeInvoice={removeInvoice} />
        </Box>
      </Box>
    </div>
  )
}

export default Home
