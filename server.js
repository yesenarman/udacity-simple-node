function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  let counter = 0;
  const favoriteFood = process.env.FAVORITE_FOOD || 'Salad';
  while (true) {
    console.log(`${++counter}: My favorite food is ${favoriteFood}`);
    await sleep(5000);
  }
}

main();
