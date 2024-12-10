import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  styled,
  Typography
} from "@mui/material"

const StyledTable = styled(Table)({
  width: "100%",
  margin: 20,
  marginTop: 40,
  "& > thead > tr > th": {
    background: "#1976d2",
    color: "#ffffff",
    fontSize: 18
  },
  "& > tbody > tr > td": {
    fontSize: 16
  },
  "& > tbody > p": {
    fontSize: 18,
    marginTop: 15
  }
})

const Invoices = ({ invoices, removeInvoice }) => {
  return (
    <StyledTable>
      <TableHead>
        <TableRow>
          <TableCell>Vendor</TableCell>
          <TableCell>Product</TableCell>
          <TableCell>Amount</TableCell>
          <TableCell>Date</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {invoices && Array.isArray(invoices) && invoices.length > 0 ? (
          invoices.map((invoice) => (
            <TableRow>
              <TableCell>{invoice.vendor}</TableCell>
              <TableCell>{invoice.product}</TableCell>
              <TableCell>{invoice.amount}</TableCell>
              <TableCell>{invoice.date}</TableCell>
              <TableCell>{invoice.action}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => removeInvoice(invoice.id)}
                >
                  Mark Done
                </Button>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={6} align="center">
              <Typography>No Pending Invoices</Typography>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </StyledTable>
  )
}
export default Invoices
