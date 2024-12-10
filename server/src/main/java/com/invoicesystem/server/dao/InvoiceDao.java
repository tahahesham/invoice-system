package com.invoicesystem.server.dao;

import com.invoicesystem.server.model.Invoice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvoiceDao extends JpaRepository<Invoice, Long> {

}
