function calculatePoints(amount, bet, result) {
	// 0 < user's bet <= user's current amount
	if (0 < bet <= amount) {
		//if game is won return amount += bet
		if (result) {
			amount += bet;
		}
		// if user bets on losing team, return amount -= bet
		else {
			amount -= bet;
		}
	}
	if (bet > amount || bet <= 0) {
		console.log(`The bet amount you entered ${amount} is not valid`);
		return;
	}

	return amount;
}
export { calculatePoints };
