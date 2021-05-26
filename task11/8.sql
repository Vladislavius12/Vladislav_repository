select * from bck.products as p join bck.reviews as r on p.vendorId = r.productId where JSON_LENGTH(review) > 3;
