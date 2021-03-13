# Spotify Mini

This project focuses on managing authentication/authorization process both frontend and backend. You can also discover how to manage undo-redo feature using redux.

### Main Features


<details>
<summary><b> Undo-Redo using Redux </b></summary>
  </br>
  <p> This feature implemented along with <strong>redux-undo</strong> package </p>
  <p> Let's have a look at how it works: </p>
  </br>
  
  ```javascript
  const combinedReducers = combineReducers({
	search: searchReducer,
	currentSong: currentSongReducer,
	user: userReducer,
	artist: artistReducer,
	undo: undoReducer,
	playLists: undoable(playlistReducer),
});
  ```
If you apply undoable to any redux reducer it will have a superpower of keeping previous and next state everytime. For using this power in your component you should 
import <strong>ActionCreators </strong> from redux-undo

```javascript
import { ActionCreators } from "redux-undo";
```

Since we have the prevState and nextState power on our playlistReducer we can create a basic Undo component like this:

```javascript
function Undo(props) {
	const undoRef = useRef();
	const dispatch = useDispatch();
	const { undo } = useSelector((state) => state);

	//If user clicks outside make undo to false
	//In @CreatePlaylistModal, when user saves a playlist we are making undo true
	useOnClickOutside(undoRef, () => undo && dispatch(setUndoFalse()));
	return (
		<div ref={undoRef} className='undo-container'>
			{console.log("undo in component::", undo)}
			{undo && (
				<div className='undo d-flex flex-column justify-content-center'>
					<p>Undo Changes</p>
					<Button
						variant='success'
						onClick={() => {
							dispatch(ActionCreators.undo());
							
						}}>
						Undo
					</Button>
					<Button
						variant='primary'
						className='mt-2'
						onClick={() => {
							dispatch(ActionCreators.redo());
							
						}}>
						Redo
					</Button>
				</div>
			)}
		</div>
	);
}
```
Yeapp. That's it. We have the undo-redo power on our component. Everytime when you click Undo button it will dispatch undo action and bring the prevState, otherwise nextState.

Last but not least. Undo component rendered by using an another boolean redux property. If the user creates a playlist global undo value will be changed and this component will be rendered.
</details>
