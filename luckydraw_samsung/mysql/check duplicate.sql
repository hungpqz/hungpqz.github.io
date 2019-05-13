SELECT *
FROM customer1 INNER JOIN customer1_full
ON customer1.IMEI=customer1_full.IMEI;

SELECT * FROM mld.customer1
where 
	(PHONE not like '086%')
and (PHONE not like '088%')
and (PHONE not like '089%')
and (PHONE not like '090%')
and (PHONE not like '091%')
and (PHONE not like '092%')
and (PHONE not like '093%')
and (PHONE not like '094%')

and (PHONE not like '096%')
and (PHONE not like '097%')
and (PHONE not like '098%')
and (PHONE not like '099%')
and (PHONE not like '0120%')
and (PHONE not like '0121%')
and (PHONE not like '0122%')
and (PHONE not like '0123%')
and (PHONE not like '0124%')
and (PHONE not like '0125%')
and (PHONE not like '0126%')
and (PHONE not like '0127%')
and (PHONE not like '0128%')
and (PHONE not like '0129%')
and (PHONE not like '0162%')
and (PHONE not like '0163%')
and (PHONE not like '0164%')
and (PHONE not like '0165%')
and (PHONE not like '0166%')
and (PHONE not like '0167%')
and (PHONE not like '0168%')
and (PHONE not like '0169%')
and (PHONE not like '0186%')
and (PHONE not like '0188%')
and (PHONE not like '0199%')
;