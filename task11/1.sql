select distinct vendorName from bck.products as p join bck.vendors as v on p.vendorId = v.id where validUntil >= current_date();
