public class BowlingGame {
    private static final int FRAMES_COUNT = 10;
    private int[] scores;
    private int rollIndex;

    public BowlingGame() {
        scores = new int[23];
        rollIndex = 0;
    }

    public int getRollIndex() {
        return rollIndex;
    }

    public void roll(int pins) {
        scores[rollIndex] = pins;

        if (isStrike(rollIndex)) {
            rollIndex++;
        }

        rollIndex++;
    }

    public int getScore() {
        int score = 0;

        for (int i = 0; i < FRAMES_COUNT; i++) {
            score += getFrameScore(i);
        }

        return score;
    }

    private int getFrameScore(int frameIndex) {
        int score = 0;
        int indexStart = 2 * frameIndex;

        score += scores[indexStart];
        score += scores[indexStart + 1];

        if (isStrike(indexStart)) {
            score += scores[indexStart + 2]; // 10

            if (isStrike(indexStart + 2)) {
                score += scores[indexStart + 4];
            } else {
                score += scores[indexStart + 3];
            }
        } else if (isSpare(indexStart)) {
            score += scores[indexStart + 2];
        }

        return score;
    }

    private boolean isStrike(int i) {
        return i % 2 == 0 && scores[i] == 10;
    }

    private boolean isSpare(int i) {
        return scores[i] + scores[i+1] == 10;
    }
}
