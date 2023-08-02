# Implementation of binary search to find the first occurance of a number in an array of limited numbers

def findFirst(arr, num):
    lo = 0
    hi = len(arr) - 1
    idx = -1  # keep track of index which we will be returning

    while lo < hi:
        mid = int(lo + (hi - lo) / 2)
        if arr[mid] == num:
            idx = mid  # set the index to mid
            hi = mid  # check the left side
        elif arr[mid] < num:
            lo = mid + 1  # check the right side
        else:
            hi = mid  # check the left side

    return idx


def testFindFirst():
    input = [200, 200, 200, 200, 500, 500, 500]

    assert findFirst(input, 200) == 0  # => 0
    assert findFirst(input, 500) == 4  # => 4
    assert findFirst(input, 100) == -1  # => -1
    assert findFirst([], 500) == -1


if testFindFirst() == None:
    print("All tests passed")
else:
    print("Test failed", testFindFirst())
