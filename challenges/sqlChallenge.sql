SELECT 
  mainTable.GroupID,
  mainTable.FirstName,
  mainTable.LastName,
  mainTable.Job,
  mainTable.ExternalID,
  cbVendor.CompanyName,
  COUNT(mainTable.GroupID) AS Count 
FROM maintable_21X83 mainTable
JOIN cb_vendorinformation cbVendor
ON
  mainTable.GroupID = cbVendor.GroupID
GROUP BY
  mainTable.FirstName
ORDER BY
  Count ASC,
  cbVendor.CompanyNAme ASC;
