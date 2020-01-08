/* The guess API is defined in the parent class GuessGame.
   @param num, your guess
   @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
      int guess(int num); */

public class Solution extends GuessGame {
    public int guessNumber(int n) {
        int i = 1, j = n, res, mid;
        do {
            mid = i + (j - i) / 2;
            res = guess(mid);
            if(res == 1) {
                i = mid+1;
            } else if(res == -1) {
                j = mid;
            }
        } while (res != 0);
        return mid;
    }
}
