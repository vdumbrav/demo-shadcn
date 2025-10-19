import { type TableRowData } from './mockData';

/**
 * Export utilities for table data to CSV and JSON formats
 */

/**
 * Export table data to CSV format
 */
export const exportToCSV = (data: TableRowData[], filename = 'payroll_data.csv') => {
  if (data.length === 0) {
    alert('No data to export');
    return;
  }

  // Define CSV headers
  const headers = ['ID', 'Header', 'Type', 'Status', 'Target', 'Limit', 'Reviewer', 'Category'];

  // Create CSV content
  let csvContent = `${headers.join(',')}\n`;

  // Add data rows
  data.forEach((row) => {
    const values = [
      row.id,
      `"${row.header}"`, // Quote header to handle commas
      row.type,
      row.status,
      row.target,
      row.limit,
      row.reviewer ?? 'Unassigned',
      row.category,
    ];
    csvContent += `${values.join(',')}\n`;
  });

  // Create blob and download
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);

  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/**
 * Export table data to JSON format
 */
export const exportToJSON = (data: TableRowData[], filename = 'payroll_data.json') => {
  if (data.length === 0) {
    alert('No data to export');
    return;
  }

  const jsonContent = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonContent], { type: 'application/json;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);

  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/**
 * Export table data to Excel-compatible TSV format
 */
export const exportToTSV = (data: TableRowData[], filename = 'payroll_data.tsv') => {
  if (data.length === 0) {
    alert('No data to export');
    return;
  }

  // Define TSV headers
  const headers = ['ID', 'Header', 'Type', 'Status', 'Target', 'Limit', 'Reviewer', 'Category'];

  // Create TSV content
  let tsvContent = `${headers.join('\t')}\n`;

  // Add data rows
  data.forEach((row) => {
    const values = [
      row.id,
      row.header,
      row.type,
      row.status,
      row.target,
      row.limit,
      row.reviewer ?? 'Unassigned',
      row.category,
    ];
    tsvContent += `${values.join('\t')}\n`;
  });

  // Create blob and download
  const blob = new Blob([tsvContent], { type: 'text/tab-separated-values;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);

  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/**
 * Generate PDF content as HTML (can be printed or converted to PDF)
 */
export const generatePDFContent = (data: TableRowData[], title = 'Payroll Report'): string => {
  let html = `
    <html>
      <head>
        <title>${title}</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; }
          h1 { color: #333; }
          table { width: 100%; border-collapse: collapse; margin-top: 20px; }
          th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
          th { background-color: #f2f2f2; font-weight: bold; }
          tr:nth-child(even) { background-color: #f9f9f9; }
          .done { color: #22c55e; }
          .in-process { color: #f59e0b; }
        </style>
      </head>
      <body>
        <h1>${title}</h1>
        <p>Generated on: ${new Date().toLocaleString()}</p>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Header</th>
              <th>Type</th>
              <th>Status</th>
              <th>Target</th>
              <th>Limit</th>
              <th>Reviewer</th>
            </tr>
          </thead>
          <tbody>
  `;

  // Add data rows
  data.forEach((row) => {
    const statusClass = row.status === 'done' ? 'done' : 'in-process';
    html += `
      <tr>
        <td>${row.id}</td>
        <td>${row.header}</td>
        <td>${row.type}</td>
        <td class="${statusClass}">${row.status}</td>
        <td>${row.target}</td>
        <td>${row.limit}</td>
        <td>${row.reviewer ?? 'Unassigned'}</td>
      </tr>
    `;
  });

  html += `
          </tbody>
        </table>
      </body>
    </html>
  `;

  return html;
};

/**
 * Print table data as PDF (opens print dialog)
 */
export const printAsPDF = (data: TableRowData[], title = 'Payroll Report') => {
  const htmlContent = generatePDFContent(data, title);
  const printWindow = window.open('', '', 'height=600,width=800');

  if (printWindow) {
    printWindow.document.write(htmlContent);
    printWindow.document.close();
    printWindow.print();
  }
};
