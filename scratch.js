var RE  		 =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
var CSV 		 = 'ClearView Shipment ID,Earliest Pickup Date,Shipment Flow,Expedited,Mode,Payment Type,Charge To Location,Payment Status,Provider,SCAC,BOL Number,Purchase Order,Sales Order,PRO Number,Provider Invoice Number,Line Item Weight,Total Weight,Classes,Pickup Location Name,Pickup Contact Name,Pickup Contact Phone,Pickup Contact Email,Pickup Location Code,Pickup GL Group,Pickup Street 1,Pickup Street 2,Pickup Street 3,Pickup City,Pickup State,Pickup Zip,Pickup Country,Pickup Stop#,Delivery Location Name,Delivery Contact Name,Delivery Contact Phone,Delivery Contact Email,Delivery Location Code,Delivery GL Group,Delivery Street 1,Delivery Street 2,Delivery Street 3,Delivery City,Delivery State,Delivery Zip,Delivery Country,Delivery Stop#,Quote Amt,Currency,Adjustments Amt,Provider Invoice Amt,Quote Difference,Calculated Amt,Calculated Diff,Provider Invoice Date,Days Outstanding (Provider),Quote Age,Date Invoiced by ClearView,Date Paid to ClearView,Date Paid to Provider,Total Savings,Auditing Savings,Consulting Savings,Technology Savings,Dispute #,Dispute Age,Stop Count,GL Code,Accounting Notes,# Documents Attached,Location \n 718102606310004,10/31/18,Outbound,,LTL,Prepaid,,Paid to Provider,Ward,WARD,5553755|030105406,686628,5553755,0120438475,0120438475,1280,1280,"65 ",DOCUMENT IMAGING DIMENSIONS IN,Ibu Dieng,877-524-3478,"Ibrahima.Dieng@lc-ind.com, miguel.talavera@lc-ind.com, vianey.cabezas@lc-ind.com",DURDST,,3211 S Miami Blvd,,,Durham,NC,27703,US,1,DLA DISTRIBUTION SUSQUEHANNA PA SW3,CUSTOMER SERVICE,717-770-6011,,,,2001 NORMANDY DR DOOR 135-168,CONSOL AND CONTAINERIZATION POINT,,NEW CUMBERLAND,PA,17070,US,2,$149.82,USD,$1.70,$0.00,$0.00,$151.52,$0.00,11/08/18,4 months ago,4 months,11/12/18,12/03/18,12/04/18,,,,,,,2,52400,,1,Durham Distribution Center \n 718110110160028,10/31/18,Inbound,,LTL,Collect,,Paid to Provider,ABF,ABFS,7181101101600280100,1573395,,248657998,248657998,245,245,"100 ",Volunteer Blind Industries Inc,Judy Parks,423-586-3922,judy@volblind.org,,,758 West Morris Blvd,,,Morristown,TN,37813,US,1,Ft. Drum – LCI-SSSC,Bill Malbouf,315-773-3121,,,,1100 Ontario Ave,,,Fort Drum,NY,13602,US,2,$126.56,USD,$53.11,$0.00,$0.00,$179.67,$0.00,10/31/18,4 months ago,4 months,11/26/18,12/10/18,12/11/18,,,,,,,2,52000,,2,Base Supply Center \n 718101020010002,10/31/18,Outbound,,LTL,Prepaid,,Paid to Provider,Saia,SAIA,5561190|029972802,GS07Q1647AJN3W,5561190,10300460630,10300460630,320,320,"92.5 ",LC Industries – ISO 9001:2015 Certified,Ibu Dieng,877-524-3478,"Ibrahima.Dieng@lc-ind.com, miguel.talavera@lc-ind.com, vianey.cabezas@lc-ind.com",DURDST,,3211 S Miami Blvd,,,Durham,NC,27703,US,1,W4K8 CO A 795TH MP BN PP,CUSTOMER SERVICE,877-524-3478,,,,292 ORDINANCE DRIVE,FORT LEONARD WOOD MO 65473-8947,,FORT LEONARD WOOD,MO,65473,US,2,$113.57,USD,$164.57,$0.00,$0.00,$278.14,$0.00,10/31/18,4 months ago,5 months,11/19/18,12/03/18,12/04/18,,,,,,,2,52400,reweigh from 320 to 315 and reclassed from 92.5 to 175 wt ct attached,2,Durham Distribution Center \n 718110108330006,10/31/18,Inbound,,LTL,Collect,,Paid to Provider,"Central Freight Lines, Inc.",CENF,7181101083300060100,"1564705, 1562865 1564705",35595,710386392,710386392,1061,1061,"175 ",New View Oklahoma,Anthony Taylor,405-232-4644,shipping@newviewoklahoma.org,,,501 N Douglas Ave.,,,Oklahoma City,OK,73106,US,1,LC Industries – ISO 9001:2015 Certified,Ibu Dieng,877-524-3478,"Ibrahima.Dieng@lc-ind.com,  miguel.talavera@lc-ind.com, vianey.cabezas@lc-ind.com",DURDST,,3211 S Miami Blvd,,,Durham,NC,27703,US,2,$370.43,USD,,$0.00,$0.00,$370.43,$0.00,10/31/18,4 months ago,4 months,11/19/18,12/03/18,12/04/18,,,,,,,2,52000,,2,Durham Distribution Center \n 718102023460004,10/31/18,Outbound,,LTL,Prepaid,,Paid to Provider,Saia,SAIA,5570456|030054313,GS02Q15DCR0002,5570456,10300460650,10300460650,295,295,"125 ",LC Industries – ISO 9001:2015 Certified,Ibu Dieng,877-524-3478,"Ibrahima.Dieng@lc-ind.com, miguel.talavera@lc-ind.com, vianey.cabezas@lc-ind.com",DURDST,,3211 S Miami Blvd,,,Durham,NC,27703,US,1,526TH SUPPORT BATTALION COMPANY A,CUSTOMER SERVICE,877-524-3478,,,,AWCF SSF,BLDG 6476 52ND AND WICKHAM - FORT CAMPBELL KY 42223-5000,,Fort Campbell,KY,42223,US,2,$119.28,USD,,$0.00,$0.00,$119.28,$0.00,10/31/18,4 months ago,4 months,11/12/18,12/03/18,12/04/18,,,,,,,2,52400,,1,Durham Distribution Center \n 718102617320003,10/31/18,Outbound,,LTL,Prepaid,,Paid to Provider,UPS Freight,UPGF,T080648|136337490,T080648,T080648,428779186,428779186,395,395,"125 ",LC Industries – ISO 9001:2015 Certified,Ibu Dieng,877-524-3478,"Ibrahima.Dieng@lc-ind.com, miguel.talavera@lc-ind.com, vianey.cabezas@lc-ind.com",DURDST,,3211 S Miami Blvd,,,Durham,NC,27703,US,1,Eglin AFB – LCI BSC/IEE,Steve Camire,850.678.0700,steve.camire@lc-ind.com,,,615 Applachicola Road,Bldg. 615,,Eglin AFB,FL,32542,US,2,$176.79,USD,,$0.00,$0.00,$176.79,$0.00,10/31/18,4 months ago,4 months,11/12/18,12/03/18,12/04/18,,,,,,,2,52001,,1,Durham Distribution Center \n 718103117460010,11/01/18,Outbound,,LTL,Prepaid,,Paid to Provider,UPS Freight,UPGF,5576425|030155072,BS29577,5576425,428779330,428779330,520,520,"125 ",LC Industries – ISO 9001:2015 Certified,Ibu Dieng,877-524-3478,"Ibrahima.Dieng@lc-ind.com, miguel.talavera@lc-ind.com, vianey.cabezas@lc-ind.com",DURDST,,3211 S Miami Blvd,,,Durham,NC,27703,US,1,BASE SERVICE CENTER,JOE ENNEN,318-456-2893,,,,640 DAVIS AVE EAST,DODAAC 957211,,Barksdale Afb,LA,71110,US,2,$206.15,USD,$23.54,$0.00,$28.25,$201.44,$0.00,11/01/18,4 months ago,4 months,11/12/18,12/03/18,12/04/18,,,,,,,2,52400,,1,Durham Distribution Center'

var shipments = parse_raw_CSV_to_JSON(CSV)
for (var shipment of shipments) {
	console.log(shipment['# Documents Attached'])
	console.log(shipment['Accounting Notes'])
}

function parse_raw_CSV_to_JSON(csv) {
	var sections = csv.match(/(["'])(?:(?=(\\?))\2.)*?\1/g)
	var new_csv  = remove_commas(sections, csv)

	var shipments = csvJSON(new_csv)

	return shipments

	function remove_commas(email_sections, csv) {
		for (var i=0; i < email_sections.length; i++) {
			section = email_sections[i]
			email_section_no_commas = section.replace(/,/g , ' ')
			index_of_section_in_csv = csv.indexOf(section)
			start_of_csv = csv.slice(0, index_of_section_in_csv)
			remainder_of_csv = csv.slice(index_of_section_in_csv + email_section_no_commas.length, csv.length)
			csv = start_of_csv + email_section_no_commas + remainder_of_csv
		}
		return csv;
	}

	function csvJSON(str){
		no_new_lines_string = str.replace(/\n/g, "*n")
	  
	  var lines=no_new_lines_string.split("*n")
	  var result = []
	  var headers=lines[0].split(",")

	  for(var i=1; i<lines.length; i++){
	      var obj = {}
	      var currentline=lines[i].split(",")

	      for(var j=0;j<headers.length;j++){
	          obj[headers[j]] = currentline[j]
	      }
	      result.push(obj)
	  }
	  return result
	}
}




