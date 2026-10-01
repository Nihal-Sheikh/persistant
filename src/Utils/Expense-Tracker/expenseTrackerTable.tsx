interface TransactionData {
    type: string | null;
    id: number;
    amount: number;
    description: string | null;
    category: string | null;
    planned: boolean;
    comments: string | null;
}
interface tableData {
    transactionData: TransactionData[]
}

export default function Table(props:tableData) {
    /**
     * Modifies the given string to display income or expense amount.
     * @param {string} Og - The original string representing the amount.
     * @returns {string} The modified string.
     */
    const transactionData: TransactionData[] = props.transactionData;
    function stringModification(Og: string): string {
        const positive = Og.charAt(0) != '-'; // checks if the number is positive
        const newString = `${positive ? (Number(Og) > 0 ? '+' : '') : '-'}$${Og.slice(positive ? 0 : 1, Og.length)}`;
        return newString;
    }
    return <article className="expenseTrackerContainer" >
        <table className="expenseTrackerTable">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                    <th>Planned/Unplanned</th>
                    <th>Comments</th>
                </tr>
            </thead>
            <tbody>
                {transactionData?.map((transaction:TransactionData) => ( //map the array of transictions
                    <tr key={transaction.id} className={`${transaction.amount > 0 ? 'income' : ''} ${transaction.amount < 0 ? 'expense' : ''}`} >
                        <td>{transaction.id}</td>
                        <td>{transaction.description}</td>
                        <td>{transaction.category}</td>
                        <td className={`${transaction.amount > 0 ? 'incomeText' : ''} ${transaction.amount < 0 ? 'expenseText' : ''}`}>{stringModification(String(transaction.amount))}</td>
                        <td>{transaction.planned ? "Planned" : "Unplanned"}</td>
                        <td>{transaction.comments}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </article>
}