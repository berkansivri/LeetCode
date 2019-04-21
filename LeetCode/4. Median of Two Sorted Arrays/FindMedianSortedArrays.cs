public class Solution {
  public double FindMedianSortedArrays(int[] nums1, int[] nums2) {
    int[] newArr = new int[nums1.Length + nums2.Length];
    nums1.CopyTo(newArr, 0);
    nums2.CopyTo(newArr, nums1.Length);
    newArr = newArr.OrderBy(x => x).ToArray();
    if (newArr.Length % 2 == 0)
    {
      int index1 = newArr.Length / 2;
      return (double)(newArr[index1-1] + newArr[index1]) / 2;
    }
    else
    {
      int index = (int)Math.Floor((double)newArr.Length / 2);
      return newArr[index];
    }
  }
}