import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export function generateVehicleReport(car) {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const isClean = car.status === "Clean";
  
  // Colors
  const primaryBlue = [37, 99, 235];
  const darkSlate = [30, 41, 59];
  const lightSlate = [100, 116, 139];
  const greenColor = [34, 197, 94];
  const orangeColor = [249, 115, 22];

  // Helper to get finalY after autoTable
  const getFinalY = () => {
    return doc.lastAutoTable ? doc.lastAutoTable.finalY : doc.internal.pageSize.getHeight() - 50;
  };

  // Header Section
  doc.setFillColor(...primaryBlue);
  doc.rect(0, 0, pageWidth, 45, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('TrueCar', 14, 20);
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Vehicle History Report', 14, 28);
  
  doc.setFontSize(9);
  doc.text(`Generated: ${new Date().toLocaleDateString('fr-FR', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })}`, pageWidth - 14, 20, { align: 'right' });

  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text(`${car.year} ${car.make} ${car.model}`, pageWidth - 14, 32, { align: 'right' });
  
  // Status Badge
  const statusY = 55;
  const statusColor = isClean ? greenColor : orangeColor;
  const statusText = isClean ? 'TITRE CLAIR' : (car.issueText?.toUpperCase() || 'PROBLEMES');
  
  doc.setFillColor(...statusColor);
  doc.roundedRect(14, statusY - 7, 50, 10, 2, 2, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.text(statusText, 39, statusY, { align: 'center' });

  // VIN Section
  doc.setTextColor(...darkSlate);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('VIN:', 14, statusY + 15);
  doc.setFont('helvetica', 'bold');
  doc.text(car.vin, 30, statusY + 15);

  // Quick Stats
  const statsY = statusY + 30;
  doc.setFillColor(248, 250, 252);
  doc.roundedRect(14, statsY - 5, pageWidth - 28, 25, 3, 3, 'F');
  
  const statsData = [
    { label: 'Kilometrage', value: `${car.mileage.toString()} km` },
    { label: 'Proprietaires', value: car.owners.toString() },
    { label: 'Entretiens', value: car.serviceHistory.length.toString() },
    { label: 'Accidents', value: car.accidents.length.toString() }
  ];
  
  const statWidth = (pageWidth - 28) / 4;
  statsData.forEach((stat, index) => {
    const x = 14 + (statWidth * index) + (statWidth / 2);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...darkSlate);
    doc.text(stat.value, x, statsY + 5, { align: 'center' });
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...lightSlate);
    doc.text(stat.label, x, statsY + 12, { align: 'center' });
  });

  // Vehicle Details Section
  let currentY = statsY + 35;
  
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...darkSlate);
  doc.text('Details du Vehicule', 14, currentY);
  
  currentY += 5;
  
  const vehicleDetails = [
    ['Marque', car.make, 'Modele', car.model],
    ['Annee', car.year.toString(), 'Finition', car.trim],
    ['Moteur', car.engine, 'Transmission', car.transmission],
    ['Carburant', car.fuelType, 'Couleur', car.color]
  ];
  
  autoTable(doc, {
    startY: currentY,
    body: vehicleDetails,
    theme: 'plain',
    styles: { fontSize: 9, cellPadding: 3 },
    columnStyles: {
      0: { fontStyle: 'normal', textColor: lightSlate, cellWidth: 35 },
      1: { fontStyle: 'bold', textColor: darkSlate, cellWidth: 55 },
      2: { fontStyle: 'normal', textColor: lightSlate, cellWidth: 35 },
      3: { fontStyle: 'bold', textColor: darkSlate, cellWidth: 55 }
    }
  });

  currentY = getFinalY() + 10;

  // Title History Section
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...darkSlate);
  doc.text('Historique du Titre', 14, currentY);
  
  currentY += 5;
  
  const titleHistoryData = car.titleHistory.map(item => [
    new Date(item.date).toLocaleDateString('fr-FR'),
    item.event,
    item.location,
    item.status === 'clean' ? 'Clair' : 'Attention'
  ]);
  
  autoTable(doc, {
    startY: currentY,
    head: [['Date', 'Evenement', 'Lieu', 'Statut']],
    body: titleHistoryData,
    theme: 'striped',
    headStyles: { fillColor: primaryBlue, textColor: [255, 255, 255], fontStyle: 'bold', fontSize: 9 },
    styles: { fontSize: 8, cellPadding: 3 }
  });

  currentY = getFinalY() + 10;

  if (currentY > 230) {
    doc.addPage();
    currentY = 20;
  }

  // Service History Section
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...darkSlate);
  doc.text('Historique Entretien', 14, currentY);
  
  currentY += 5;
  
  const serviceHistoryData = car.serviceHistory.map(item => [
    new Date(item.date).toLocaleDateString('fr-FR'),
    item.service,
    `${item.mileage.toString()} km`,
    item.shop
  ]);
  
  autoTable(doc, {
    startY: currentY,
    head: [['Date', 'Service', 'Kilometrage', 'Garage']],
    body: serviceHistoryData,
    theme: 'striped',
    headStyles: { fillColor: primaryBlue, textColor: [255, 255, 255], fontStyle: 'bold', fontSize: 9 },
    styles: { fontSize: 8, cellPadding: 3 }
  });

  currentY = getFinalY() + 10;

  if (currentY > 230) {
    doc.addPage();
    currentY = 20;
  }

  // Accident History
  if (car.accidents.length > 0) {
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...orangeColor);
    doc.text('Historique des Accidents', 14, currentY);
    
    currentY += 5;
    
    const accidentData = car.accidents.map(accident => [
      new Date(accident.date).toLocaleDateString('fr-FR'),
      accident.severity,
      accident.description.substring(0, 40) + '...',
      `$${accident.repairCost.toString()}`,
      accident.driveable ? 'Oui' : 'Non'
    ]);
    
    autoTable(doc, {
      startY: currentY,
      head: [['Date', 'Gravite', 'Description', 'Cout', 'Roulable']],
      body: accidentData,
      theme: 'striped',
      headStyles: { fillColor: orangeColor, textColor: [255, 255, 255], fontStyle: 'bold', fontSize: 9 },
      styles: { fontSize: 8, cellPadding: 3 }
    });

    currentY = getFinalY() + 10;
  }

  if (currentY > 230) {
    doc.addPage();
    currentY = 20;
  }

  // Odometer Readings
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...darkSlate);
  doc.text('Historique Kilometrage', 14, currentY);
  
  currentY += 5;
  
  const odometerData = car.odometerReadings.map(reading => [
    new Date(reading.date).toLocaleDateString('fr-FR'),
    `${reading.mileage.toString()} km`,
    reading.source,
    'Verifie'
  ]);
  
  autoTable(doc, {
    startY: currentY,
    head: [['Date', 'Kilometrage', 'Source', 'Statut']],
    body: odometerData,
    theme: 'striped',
    headStyles: { fillColor: primaryBlue, textColor: [255, 255, 255], fontStyle: 'bold', fontSize: 9 },
    styles: { fontSize: 8, cellPadding: 3 }
  });

  currentY = getFinalY() + 10;

  if (currentY > 200) {
    doc.addPage();
    currentY = 20;
  }

  // Market Value Section
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...darkSlate);
  doc.text('Valeur Marche Estimee', 14, currentY);
  
  currentY += 10;
  
  doc.setFillColor(248, 250, 252);
  doc.roundedRect(14, currentY - 5, pageWidth - 28, 30, 3, 3, 'F');
  
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...primaryBlue);
  doc.text(`$${car.marketValue.average.toString()}`, pageWidth / 2, currentY + 5, { align: 'center' });
  
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...lightSlate);
  doc.text(`Fourchette: $${car.marketValue.low.toString()} - $${car.marketValue.high.toString()}`, pageWidth / 2, currentY + 15, { align: 'center' });

  currentY += 40;

  // Recalls Section
  if (car.recalls && car.recalls.length > 0) {
    if (currentY > 230) {
      doc.addPage();
      currentY = 20;
    }

    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...darkSlate);
    doc.text('Rappels', 14, currentY);
    
    currentY += 5;
    
    const recallData = car.recalls.map(recall => [
      new Date(recall.date).toLocaleDateString('fr-FR'),
      recall.nhtsa,
      recall.description.substring(0, 50) + '...',
      recall.status
    ]);
    
    autoTable(doc, {
      startY: currentY,
      head: [['Date', 'NHTSA', 'Description', 'Statut']],
      body: recallData,
      theme: 'striped',
      headStyles: { fillColor: primaryBlue, textColor: [255, 255, 255], fontStyle: 'bold', fontSize: 9 },
      styles: { fontSize: 8, cellPadding: 3 }
    });
  }

  // Footer on all pages
  const pageCount = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...lightSlate);
    doc.text(
      `TrueCar Vehicle History Report - Page ${i} of ${pageCount}`,
      pageWidth / 2,
      doc.internal.pageSize.getHeight() - 10,
      { align: 'center' }
    );
  }

  // Save the PDF
  doc.save(`TrueCar_Report_${car.vin}.pdf`);
}
