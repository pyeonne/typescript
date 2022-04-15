{
    /**
     * Type Assertions 💩
     * 정말 100% 확신한다면 사용하지만, 가능하면 피하세요 !
     */
    function jsStrFunc(): any {
        return 2;
    }
    const result = jsStrFunc();
    console.log((result as string).length);
    console.log((<string>result).length);

    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1)); // 😱

    function findNumbers(): number[] | undefined {
        return undefined;
    }
    const numbers = findNumbers()!; // undefined가 될 수 없다고 장담할 때
    numbers.push(2); // 😱

    const button = document.querySelector('class')!;
    if (button) {
        button.nodeValue;
    }
}
