{
    /**
     * Type Assertions ๐ฉ
     * ์ ๋ง 100% ํ์ ํ๋ค๋ฉด ์ฌ์ฉํ์ง๋ง, ๊ฐ๋ฅํ๋ฉด ํผํ์ธ์ !
     */
    function jsStrFunc(): any {
        return 2;
    }
    const result = jsStrFunc();
    console.log((result as string).length);
    console.log((<string>result).length);

    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1)); // ๐ฑ

    function findNumbers(): number[] | undefined {
        return undefined;
    }
    const numbers = findNumbers()!; // undefined๊ฐ ๋  ์ ์๋ค๊ณ  ์ฅ๋ดํ  ๋
    numbers.push(2); // ๐ฑ

    const button = document.querySelector('class')!;
    if (button) {
        button.nodeValue;
    }
}
