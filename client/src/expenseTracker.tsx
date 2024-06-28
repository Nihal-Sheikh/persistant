import ExpenseTable from './expenseTrackerTable';
import { useState, useEffect, useRef } from "react";

interface TransactionData {
    type: string | null;
    id: number;
    amount: number;
    description: string | null;
    category: string | null;
    planned: boolean;
    comments: string | null;
}

export default function ExpenseTracker() {
    const [loaded, setLoaded] = useState(false);
    const [shownAll, setShownAll] = useState(false);
    const [popupOn, setPopupOn] = useState(false);
    const [transactionData, setTransactionData] = useState<TransactionData[]>([]);
    const resetRef = useRef<HTMLButtonElement>(null);

    let TaskId = 1;
    const date = new Date();
    const DayId = `${date.getFullYear()}`.slice(2, 4) + `${(date.getMonth() + 1).toString().padStart(2, '0')}` + `${date.getDate().toString().padStart(2, '0')}`;
    for (let i = 0; transactionData.length > i; i++) {
        const id = transactionData[i].id;
        if (id - parseInt(DayId.padEnd(String(id).length, '0')) > 0) {
            TaskId++;
        }
    }

    // Load transaction data from localStorage if available
    useEffect(() => {
        const savedData = localStorage.getItem("transactionData");
        if (!loaded && savedData) {
            setTransactionData(JSON.parse(savedData));
            setLoaded(true);
        }
    }, [loaded]);

    // Function to reset the form using a ref to the reset button
    const resetForm = () => {
        resetRef.current?.click();
    };

    /**
     * Handles the form submit event and returns the transaction data.
     * @param {Event} e - The event object.
     * @returns {TransactionData} The transaction data.
     */
    const handleFormSubmit = (e: Event) => {
        e.stopImmediatePropagation();
        e.preventDefault();

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        // Creates a new transaction data object from the form data
        const data: TransactionData = {
            id: parseInt(DayId + String(TaskId).padStart(3, '0')),
            type: formData.get('type') as string | null,
            amount: parseFloat(formData.get('amount') as string) * (formData.get('type') as string | null === 'expense' ? -1 : 1),
            description: formData.get('description') as string | null,
            category: formData.get('category') as string | null,
            planned: formData.get('planned') === 'on',
            comments: formData.get('comments') as string | null,
        };

        // Appends the new transaction data to the transactionData array
        setTransactionData(prev => [...prev, data]);
        TaskId++;
    };

    // Adds an event listener to the transaction form for the submit event
    // and removes the event listener when the component unmounts
    useEffect(() => {
        const form = document.getElementById('transactionForm') as HTMLFormElement;
        if (form) {
            form.addEventListener('submit', handleFormSubmit);
            return () => {
                form.removeEventListener('submit', handleFormSubmit);
            };
        }
    }, [popupOn]);

    // Display a subset of transaction data if there are more than 15 entries
    const shortDisplay: TransactionData[] = transactionData.length > 15 && !shownAll ? transactionData.slice(0, 15) : transactionData;

    return (
        <section>
            <article className="expenseTracker">
                <h1 className="header">Explore Expense-Tracker with Persistant</h1>
                <p className="description">
                    Persistant offers a comprehensive life management solution, encompassing task organization, goal setting, habit tracking, and a crucial expense tracker.
                    This feature allows users to monitor spending, set budgets, and make informed financial decisions, enhancing overall financial health. Seamlessly integrated with other tools,
                    the platform provides a holistic approach for users to efficiently manage both their time and resources, promoting a more balanced and fulfilling life.
                </p>
            </article>
            <button type="button" onClick={() => setPopupOn(true)}>Add Income/Expense</button>
            {popupOn ? (
                <>
                    <div className="popupfade" id="popup" onClick={() => setPopupOn(false)}></div>
                    <article className="popup">
                        <header className="popupTopbar">
                            <button type="button" className="closeButton" id="closeButton" onClick={() => { setPopupOn(false); resetForm(); }}>X</button>
                            <p>Transactions</p>
                            <button type="button" className="minusButton" onClick={() => setPopupOn(false)}>-</button>
                        </header>
                        <div className="popupContent">
                            <form id="transactionForm">
                                <div className="incomeExpense">
                                    <div>
                                        <label className="description" htmlFor="income">Income</label>
                                        <input type="radio" name="type" id="income" value="income" />
                                    </div>
                                    <div>
                                        <label className="description" htmlFor="expense">Expense</label>
                                        <input type="radio" name="type" id="expense" value="expense" defaultChecked />
                                    </div>
                                </div>
                                <div className="textForms">
                                    <label htmlFor="amount">Enter Amount</label>
                                    <input name="amount" id="amount" className="bigInput" type="number" placeholder="amount" min={0} max={10000000000} required />
                                    <label htmlFor="description">Type Description</label>
                                    <input name="description" id="description" className="input" type="text" maxLength={32} placeholder="description" required />
                                    <label htmlFor="comments">Type Comments (Optional)</label>
                                    <input name="comments" id="comments" className="input" type="text" maxLength={32} placeholder="comments" />
                                </div>
                                <div className="categoryForm">
                                    <label htmlFor="category">Category</label>
                                    <select name="category" id="category">
                                        <option value="Regular Income">Regular Income</option>
                                        <option value="Rent & Bills">Rent & Bills</option>
                                        <option value="Grocery">Grocery</option>
                                        <option value="Utilities">Utilities</option>
                                        <option value="Entertainment">Entertainment</option>
                                        <option value="Travel">Travel</option>
                                        <option value="Insurance">Insurance</option>
                                        <option value="Law">Law</option>
                                        <option value="Health">Health</option>
                                        <option value="Savings">Savings</option>
                                        <option value="Credit Card">Credit Card</option>
                                        <option value="Debt">Debt</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="plannedForm">
                                    <div>
                                        <label htmlFor="planned">Planned?</label>
                                        <input type="checkbox" name="planned" id="planned" />
                                    </div>
                                </div>
                                <div className="submitForm">
                                    <button className='formSubmit' type="submit">Add Transaction</button>
                                </div>
                                <button ref={resetRef} id="reset" type="reset" style={{ display: 'none' }}>Hi</button>
                            </form>
                        </div>
                    </article>
                </>
            ) : null}
            <ExpenseTable transactionData={shortDisplay} />
            <div className='tableBottom'>
                {transactionData.length > 15 ? !shownAll ? <button className='showAll' type='button' onClick={() => setShownAll(true)}>Show All</button> :
                    <button type='button' className='showLess' onClick={() => setShownAll(false)}>Show Less</button> : null}
                <button type='button' onClick={() => setTransactionData([])}>Clear Transaction</button>
            </div>
        </section>
    );
}
