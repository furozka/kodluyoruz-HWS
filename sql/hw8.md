1. test veritabanınızda employee isimli sütun bilgileri id(INTEGER), name VARCHAR(50), birthday DATE, email VARCHAR(100) olan bir tablo oluşturalım.
```sql
CREATE TABLE employee(
	id INTEGER,
	name VARCHAR(50),
	birthday DATE,
	email VARCHAR(100)
);
```
2. Oluşturduğumuz employee tablosuna 'Mockaroo' servisini kullanarak 50 adet veri ekleyelim.
```sql
insert into employee (id, name, birthday, email) values (1, 'Gianna', null, 'gpotbury0@gnu.org');
insert into employee (id, name, birthday, email) values (2, 'Jud', '1962-02-01', 'jmcrinn1@loc.gov');
insert into employee (id, name, birthday, email) values (3, 'Averyl', null, 'amannakee2@macromedia.com');
insert into employee (id, name, birthday, email) values (4, 'Whittaker', '1920-09-21', 'wthorby3@sun.com');
insert into employee (id, name, birthday, email) values (5, 'Gustaf', '1947-01-10', 'grebanks4@umn.edu');
insert into employee (id, name, birthday, email) values (6, 'Candace', '1955-08-11', 'cgravey5@issuu.com');
insert into employee (id, name, birthday, email) values (7, 'Joletta', '1932-09-30', 'jfeldbaum6@mit.edu');
insert into employee (id, name, birthday, email) values (8, 'Shara', '1946-02-06', 'sskunes7@purevolume.com');
insert into employee (id, name, birthday, email) values (9, 'Darleen', '1905-04-21', 'dmclellan8@ted.com');
insert into employee (id, name, birthday, email) values (10, 'Philomena', null, 'pcartmill9@indiegogo.com');
insert into employee (id, name, birthday, email) values (11, 'Dorothee', '1936-11-17', 'dibesona@rediff.com');
insert into employee (id, name, birthday, email) values (12, 'Kerrie', '1909-01-06', 'kjekyllb@blinklist.com');
insert into employee (id, name, birthday, email) values (13, 'Chet', '1903-12-29', 'creinhardc@mac.com');
insert into employee (id, name, birthday, email) values (14, 'Dick', '1975-03-09', 'dclixbyd@fastcompany.com');
insert into employee (id, name, birthday, email) values (15, 'Sue', '1901-01-04', null);
insert into employee (id, name, birthday, email) values (16, 'Howard', '1942-05-03', 'hhaythf@trellian.com');
insert into employee (id, name, birthday, email) values (17, 'Belva', '1926-02-25', 'blightwoodg@bloglines.com');
insert into employee (id, name, birthday, email) values (18, 'Riccardo', '1937-06-23', 'rlilionh@nbcnews.com');
insert into employee (id, name, birthday, email) values (19, 'Patsy', '1939-09-01', 'pmeenani@netscape.com');
insert into employee (id, name, birthday, email) values (20, 'Samara', '2000-02-03', null);
insert into employee (id, name, birthday, email) values (21, 'Bethina', '1992-06-28', 'bfosbraeyk@ebay.com');
insert into employee (id, name, birthday, email) values (22, 'Der', '1968-04-29', 'ddecreuzel@sourceforge.net');
insert into employee (id, name, birthday, email) values (23, 'Yvor', '1965-10-25', 'ygwinnm@discuz.net');
insert into employee (id, name, birthday, email) values (24, 'Raynor', '1986-02-15', null);
insert into employee (id, name, birthday, email) values (25, 'Kassia', '1980-02-29', 'kexello@dell.com');
insert into employee (id, name, birthday, email) values (26, 'Chrysler', '1989-08-03', null);
insert into employee (id, name, birthday, email) values (27, 'Carolyne', null, 'cmawdittq@networksolutions.com');
insert into employee (id, name, birthday, email) values (28, 'Ewan', '1937-04-27', 'eterrazzor@smh.com.au');
insert into employee (id, name, birthday, email) values (29, 'Tobie', '1945-08-02', 'troddells@goodreads.com');
insert into employee (id, name, birthday, email) values (30, 'Pauly', '1975-06-05', 'pcuelt@nationalgeographic.com');
insert into employee (id, name, birthday, email) values (31, 'Elsa', '1927-10-28', null);
insert into employee (id, name, birthday, email) values (32, 'Henriette', '1922-07-13', 'hskainsv@biglobe.ne.jp');
insert into employee (id, name, birthday, email) values (33, 'Fraser', '1970-02-17', 'fredfieldw@delicious.com');
insert into employee (id, name, birthday, email) values (34, 'Austin', '1919-08-30', null);
insert into employee (id, name, birthday, email) values (35, 'Romeo', '1913-10-02', 'rpensomy@sourceforge.net');
insert into employee (id, name, birthday, email) values (36, 'Bethany', null, 'bbrassillz@discuz.net');
insert into employee (id, name, birthday, email) values (37, 'Ilka', null, 'iaslam10@nsw.gov.au');
insert into employee (id, name, birthday, email) values (38, 'Gerri', '1945-10-22', 'gmccusker11@theglobeandmail.com');
insert into employee (id, name, birthday, email) values (39, 'Sheff', '1931-12-08', 'sdainter12@imageshack.us');
insert into employee (id, name, birthday, email) values (40, 'Prue', '1940-06-23', 'pgandrich13@sakura.ne.jp');
insert into employee (id, name, birthday, email) values (41, 'Vi', '1957-04-20', 'vmees14@howstuffworks.com');
insert into employee (id, name, birthday, email) values (42, 'Kennett', '1979-09-24', 'kdohmann15@xinhuanet.com');
insert into employee (id, name, birthday, email) values (43, 'Godfrey', '1947-03-28', 'gtrewhela16@cdc.gov');
insert into employee (id, name, birthday, email) values (44, 'Guthrey', '1933-10-06', null);
insert into employee (id, name, birthday, email) values (45, 'Tiebout', '1996-11-27', null);
insert into employee (id, name, birthday, email) values (46, 'Odessa', '1929-10-07', null);
insert into employee (id, name, birthday, email) values (47, 'Lammond', '1995-10-28', null);
insert into employee (id, name, birthday, email) values (48, 'Janey', '1979-03-11', null);
insert into employee (id, name, birthday, email) values (49, 'Maximo', '1901-12-11', null);
insert into employee (id, name, birthday, email) values (50, 'Olimpia', '1944-05-03', 'omonro1d@mozilla.org');
```
3. Sütunların her birine göre diğer sütunları güncelleyecek 5 adet UPDATE işlemi yapalım.
```sql
UPDATE employee
SET name='aaaa',
WHERE id=1;
```
```sql
UPDATE employee
SET birthday='1990-10-9',
WHERE name LIKE 'A%';
```
```sql
UPDATE employee
SET email='xxxx',
WHERE id<3;
```
```sql
UPDATE employee
SET id='99999',
name = '99999',
email = '99999'
WHERE id>15;
```

4. Sütunların her birine göre ilgili satırı silecek 5 adet DELETE işlemi yapalım.
```sql
DELETE FROM eployee
WHERE name LIKE 'A%';
```
```sql
DELETE FROM eployee
WHERE birthday BETWEEN '1990-01-01' AND '1995-01-01'
RETURNING *;
```
```sql
DELETE FROM eployee
WHERE email LIKE 'a%';
```
```sql
DELETE FROM eployee
WHERE id=2;
```
