select * 
	from bck.products 
    join (select productId,avg(rating) as average from bck.reviews group by bck.reviews.productId) 
    as a 
    on bck.products.id=a.productId 
    where a.average>3;
