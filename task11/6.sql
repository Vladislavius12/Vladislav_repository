select v.vendorName, p.* from bck.products as p join bck.vendors as v on p.vendorId=v.id where vendorName = "Mercedes-Benz";
