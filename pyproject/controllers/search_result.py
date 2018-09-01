import pymysql
# DB 연결
conn = pymysql.connect(host='mydbgunooookim.chu7atpoeeaq.ap-northeast-2.rds.amazonaws.com',port=3306,user='rjsdn31536',passwd='gunooookim!', db='pythondb',charset='utf8')
print('연결완료')

cursor = conn.cursor()

cursor.execute()

