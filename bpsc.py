def bubble_Sort(list1):
 n = len(list1)
 for i in range(n): # Number of passes
    print("the i is:", i,list1[i])
    for j in range(0, n-i-1): 
        print("the j is:", j,list1[j])
 # size -i-1 because last i elements are already sorted 
 #in previous passes
        # if list1[j] > list1[j+1] : 
 # Swap element at jth position with (j+1)th position
            # list1[j], list1[j+1] = list1[j+1], list1[j]
numList = [8, 7, 13, 1, -9, 4]
bubble_Sort(numList)

# print (“The sorted list is :”)
for i in range(len(numList)):
 print (numList[i], end=" ")