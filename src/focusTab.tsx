import PomodoroInput from "./PomodoroInput";

export default function focusMode() {
    return <main className="focusMode">
                <section>
                    <h1 className="header">This is the podomoro timer focus mode</h1>
                    <p className="description">The pomodoro timer is a productivity technique that helps you focus on a task for a fixed amount of time, usually 25 minutes, followed by a short break, usually 5 minutes. The idea is to break down your work into manageable chunks and avoid distractions. The pomodoro timer can be a simple kitchen timer, a smartphone app, or a web-based tool. The benefits of using the pomodoro timer include increased concentration, reduced stress, and improved time management.
                    </p><br />
                    <p className="description">Start using pomodoro with persistant by clicking the button below. Set rest time to 0 for no rest(not recomended)</p>
                </section>
                <section className="pomodoro">                        
                  <PomodoroInput/>
                </section>
        </main>
}