{
    /**
     * Type Aliases
     */
    type Text = string;
    const name: Text = 'pyeonne';
    const address: Text = 'korea';
    type Num = number;
    type Student = {
        name: string;
        age: number;
    };
    const student: Student = {
        name: 'pyeonne',
        age: 29,
    };

    /**
     * String Literal Types
     */
    type Name = 'name';
    let pyeonneName: Name;
    pyeonneName = 'name';
    type JSON = 'json';
    const json: JSON = 'json';

    type Bool = true;
}
