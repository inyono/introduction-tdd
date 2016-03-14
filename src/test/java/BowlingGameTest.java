import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class BowlingGameTest {
    private BowlingGame game;


    @Before
    public void setUp() throws Exception {
        game = new BowlingGame();
    }

    @Test
    public void testGutterGame() throws Exception {
        rollRemaining(0);

        assertEquals(0, game.getScore());
    }

    @Test
    public void testSinglePin() throws Exception {
        game.roll(5);
        rollRemaining(0);

        assertEquals(5, game.getScore());
    }

    @Test
    public void testTwoPin() throws Exception {
        game.roll(5);
        game.roll(3);
        rollRemaining(0);

        assertEquals(8, game.getScore());
    }

    @Test
    public void testSpare() throws Exception {
        rollSpare();
        game.roll(4);
        rollRemaining(0);

        assertEquals(18, game.getScore());
    }

    @Test
    public void testNoSpare() throws Exception {
        game.roll(0);
        game.roll(8);

        game.roll(2);
        game.roll(4);

        rollRemaining(0);


        assertEquals(14, game.getScore());
    }

    @Test
    public void testSpareSecondRoll() throws Exception {
        game.roll(0);
        rollStrike();
        game.roll(4);
        rollRemaining(0);

        assertEquals(18, game.getScore());
    }

    @Test
    public void testStrike() throws Exception {
        rollStrike();
        // game.roll(0);
        game.roll(3);
        game.roll(5);

        assertEquals(26, game.getScore());
    }

    @Test
    public void testTwoStrikes() throws Exception {
        rollStrike(); // 23
        rollStrike(); // 18
        game.roll(3); // 3
        game.roll(5); // 5

        assertEquals(49, game.getScore());
    }

    @Test
    public void testThreeStrikes() throws Exception {
        rollStrike(); // 30
        rollStrike(); // 23
        rollStrike(); // 18
        game.roll(3); // 3
        game.roll(5); // 5

        assertEquals(79, game.getScore());
    }

    @Test
    public void testPerfectGame() throws Exception {
        for (int i = 0; i < 12; i++) {
            rollStrike();
        }

        assertEquals(300, game.getScore());
    }

    @Test
    public void testWhatever() throws Exception {
        for (int i = 0; i < 11; i++) {
            rollStrike();
        }
        game.roll(1);

        assertEquals(291, game.getScore());
    }

    @Test
    public void testSpareLastFrame() throws Exception {
        rollTimes(18, 0);
        rollSpare();
        game.roll(3);

        assertEquals(13, game.getScore());
    }

    private void rollSpare() {
        game.roll(2);
        game.roll(8);
    }

    private void rollStrike() {
        game.roll(10);
    }

    private void rollTimes(int count, int pins) {
        for (int i = 0; i < count; i++) {
            game.roll(pins);
        }
    }

    private void rollRemaining(int pins) {
        while (game.getRollIndex() < 20) {
            game.roll(pins);
        }
    }
}
