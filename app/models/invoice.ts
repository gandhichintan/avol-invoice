export class Invoice {

    id: number;
    reverseCharge: boolean;
    invoiceDate: string;
    state: string;
    stateCode: number;
    transportationMode: string;
    vehicleNumber: string;
    dateOfSupply: string;
    placeOfSupply: string;
    customerName: string;
    customerAddress: string;
    hsnCode: number;

    constructor() {

    }

    insertInvoice = (invoice: Invoice) => {
        var query = `INSERT INTO Invoice
                    (
                        reverseCharge,
                        invioceDate,
                        state,
                        stateCode,
                        transportationMode,
                        vehicleNUmber,
                        dateOfSupply
                        placeOfSupply,
                        customerName,
                        customerAddress,
                        hsnCode
                    )
                    VALUES
                    (?,?,?,?,?,?,?,?,?,?,?)`;

        // new db.DataContext().executeQuery(query, [invoice.reverseCharge, invoice.invoiceDate, invoice.state,
        // invoice.stateCode, invoice.transportationMode,
        // invoice.vehicleNumber, invoice.dateOfSupply,
        // invoice.placeOfSupply,
        // invoice.customerName, invoice.customerAddress, invoice.hsnCode]);
    }

}