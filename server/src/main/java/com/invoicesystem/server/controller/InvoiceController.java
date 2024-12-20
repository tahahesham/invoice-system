package com.invoicesystem.server.controller;

import com.invoicesystem.server.model.Invoice;
import com.invoicesystem.server.services.InvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class InvoiceController {
    @Autowired
    InvoiceService invoiceService;

    @PostMapping("/invoice")
    public Invoice addInvoice(@RequestBody Invoice invoice){
        return this.invoiceService.addInvoice(invoice);
    }

    @GetMapping("/invoice")
    public List<Invoice> getInvoices(){
        return this.invoiceService.getInvoices();
    }

    @DeleteMapping("/invoice/{invoiceID}")
    public Invoice deleteInvoice(@PathVariable String invoiceID){
        return this.invoiceService.deleteInvoice(Long.parseLong(invoiceID));
    }
}
