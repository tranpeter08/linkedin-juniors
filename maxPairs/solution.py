print("Hello")
def max_values(arr1, arr2, target):

  max_arr = []
  max_sum = -float("inf")

  arr1.sort(key=lambda x: x[1])
  arr2.sort(key=lambda x: x[1])

  def bi_search(array, target):

    low, high = 0, len(array)-1
    while low <= high:
      if array[high][1] < target:
        return high
      mid = low + (high - low) // 2
      if array[mid][1] == target:
        return mid
      if array[mid][1] < target:
        low = mid + 1
      else:
        high = mid - 1
    return high

  for element in arr1:
    closest_idx = bi_search(arr2, target - element[1])

    if element[1] + arr2[closest_idx][1] > max_sum:
      max_sum = element[1] + arr2[closest_idx][1]
      max_arr = []
      max_arr.append([element[0],arr2[closest_idx][0]])
    elif element[1] + arr2[closest_idx][1] == max_sum:
      max_arr.append([element[0],arr2[closest_idx][0]])

  return max_arr

print(max_values([[1, 3], [2, 6], [3, 5]],[[1, 2], [2, 7], [3, 4]],10))
print(max_values([[1, 2], [2, 4], [3, 5]], [[1, 1], [2, 7], [3, 2]],10))

