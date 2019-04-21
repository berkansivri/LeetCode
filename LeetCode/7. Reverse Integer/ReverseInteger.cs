public class Solution {
  public int Reverse(int x) {
    int reverse = 0;
    if(x >= 0)
    {
      int.TryParse(string.Join("", x.ToString().Reverse()), out reverse);
    }
    else
    {
      int.TryParse(string.Join("", x.ToString().Remove(0,1).Reverse()), out reverse);
      reverse *= -1;
    }
    return reverse;
  }
}