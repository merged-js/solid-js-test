import { render } from 'solid-js/web'
import './style.css'

const App = () => (
    <div className="p-4">
        <h1 className="btn btn-primary">Works</h1>
        <progress class="progress progress-success" value="50" max="100"></progress> 
    </div>
)

render(App, document.getElementById('app')!)