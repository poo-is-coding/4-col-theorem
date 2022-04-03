
fi =  open("testcase_violent1.txt",'w')
num = 0
while num<59*59:
    if not num%59 and num!=0:fi.write("\n")
    fi.write(str(int(1e9+num))+" ")
    num+=1
fi.close()


"""
fi =  open("testcase_violent2.txt",'w')
for i in range(58):
    for j in range(59):
        if j%2:
            fi.write(str(i*j))
        else:
            fi.write(str(1))
        fi.write(" ")
    fi.write("\n")
for i in range(59):
    fi.write(str(1)+" ")
fi.close()
"""
""" fi =  open("testcase_violent3.txt",'w')
num = 0
while num<59*59:
    if not num:
        fi.write(str(0)+" ")
        num+=1
        continue
    if not num%59 and num!=0:fi.write("\n")
    fi.write(str(1)+" ")
    num+=1
fi.close() """