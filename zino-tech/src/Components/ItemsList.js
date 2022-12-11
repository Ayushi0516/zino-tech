import {
	Avatar,
	Container,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Paper,
} from "@mui/material";

import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const ItemsList = () => {

	const stack1 = [
		{
			id: 0,
			title: "Ball",
		},
		{
			id: 1,
			title: "Bat",
		},
		{
			id: 2,
			title: "Tennis",
		},
		{
			id: 3,
			title: "Coffee",
		},
		{
			id: 4,
			title: "Hats",
		}
	];

	const stack2 = [
		{
			id: 0,
			title: "Cricket",
		},
		{
			id: 1,
			title: "Sports",
		},
		{
			id: 2,
			title: "football",
		},
		{
			id: 3,
			title: "NBA",
		}
	]

	const stack3 = [
		{
			id: 0,
			title: "Worldcup",
		},
		{
			id: 1,
			title: "IPL",
		},
		{
			id: 2,
			title: "PKL",
		}
	]

	const stack4 = [
		{
			id: 0,
			title: "FIFA",
		},
		{
			id: 1,
			title: "India",
		},
		{
			id: 2,
			title: "Hockey",
		},
		{
			id: 3,
			title: "Kabbadi",
		}
	]

	const [stk1, setStk1] = useState(stack1);
	const [stk2, setStk2] = useState(stack2);
	const [stk3, setStk3] = useState(stack3);
	const [stk4, setStk4] = useState(stack4);

	const handleDragEnd1 = (result) => {

		if (!result.destination) return;
		const items = Array.from(stk1);
		const [reorderedItem] = items.splice(result.source.index, 1);
		items.splice(result.destination.index, 0, reorderedItem);
		console.log(items);
		setStk1(items);

	};

	const handleDragEnd2 = (res) => {

		if (!res.destination) return;
		const stks = Array.from(stk2);
		const [reorderItem] = stks.splice(res.source.index, 1);
		stks.splice(res.destination.index, 0, reorderItem);
		// console.log(items);
		setStk2(stks)
	}

	const handleDragEnd3 = (res) => {

		if (!res.destination) return;
		const stks = Array.from(stk3);
		const [reorderItem] = stks.splice(res.source.index, 1);
		stks.splice(res.destination.index, 0, reorderItem);
		// console.log(items);
		setStk3(stks)
	}

	const handleDragEnd4 = (res) => {

		if (!res.destination) return;
		const stks = Array.from(stk4);
		const [reorderItem] = stks.splice(res.source.index, 1);
		stks.splice(res.destination.index, 0, reorderItem);
		// console.log(items);
		setStk4(stks)
	}

	const deleteStk1 = (id) => {

		console.log('id:', id);

		let stack = stk1.filter( (elm) => elm.id !== id);
		console.log(stack);
		setStk1(stack);
	}

	const deleteStk2 = (id) => {

		console.log('id:', id);

		let stack = stk2.filter( (elm) => elm.id !== id);
		console.log(stack);
		setStk2(stack);
	}

	const deleteStk3 = (id) => {

		console.log('id:', id);

		let stack = stk3.filter( (elm) => elm.id !== id);
		console.log(stack);
		setStk3(stack);
	}

	const deleteStk4 = (id) => {

		console.log('id:', id);

		let stack = stk4.filter( (elm) => elm.id !== id);
		console.log(stack);
		setStk4(stack);
	}

	return (
		<div style={{
			display: 'flex',
			justifyContent: 'space-between',
			marginTop: '2rem'
		}}>
			<Container maxWidth="sm" display="flex">
				<DragDropContext onDragEnd={handleDragEnd1}>
					<Droppable droppableId="list">
						{(provided) => (
							<List
								{...provided.droppableProps}
								ref={provided.innerRef}
								sx={{ width: "100%", maxWidth: 200, bgcolor: "background.paper" }}
							>
								{ stk1 &&
									stk1.map((item, index) => {
										return (
											<Draggable key={item.id} draggableId={item.id.toString()} index={index}>
												{(provided) => (
													<Paper
														ref={provided.innerRef}
														{...provided.draggableProps}
														{...provided.dragHandleProps}
														elevation={2}
														sx={{ marginBottom: "10px" }}
													>
														<ListItem 
														style={{
															backgroundColor: 'pink'
														}}
														>
															<ListItemText primary={item.title}
													    />
														<button
														style={{
															backgroundColor: 'pink',
															border: 'none'
														}}
														onClick={ () => deleteStk1(item.id) }
														>╳</button>
														</ListItem>
													</Paper>
												)}
											</Draggable>
										);
									})}
								{provided.placeholder}
							</List>
						)}
					</Droppable>
				</DragDropContext>
			</Container>

			<Container maxWidth="sm" display="flex">
				<DragDropContext onDragEnd={handleDragEnd2}>
					<Droppable droppableId="list">
						{(provided) => (
							<List
								{...provided.droppableProps}
								ref={provided.innerRef}
								sx={{ width: "100%", maxWidth: 200, bgcolor: "background.paper" }}
							>
								{ stk2 &&
									stk2.map((item, index) => {
										return (
											<Draggable key={item.id} draggableId={item.id.toString()} index={index}>
												{(provided) => (
													<Paper
														ref={provided.innerRef}
														{...provided.draggableProps}
														{...provided.dragHandleProps}
														elevation={2}
														sx={{ marginBottom: "10px" }}
														bgcolor= "red"
													>
														<ListItem
														style={{
															backgroundColor: '#10adff'
														}}
														>
															<ListItemText primary={item.title}
													    />
														<button
														style={{
															backgroundColor: '#10adff',
															border: 'none'
														}}
														onClick={ () => deleteStk2(item.id) }
														>╳</button>
														</ListItem>
													</Paper>
												)}
											</Draggable>
										);
									})}
								{provided.placeholder}
							</List>
						)}
					</Droppable>
				</DragDropContext>
			</Container>

			<Container maxWidth="sm" display="flex">
				<DragDropContext onDragEnd={handleDragEnd3}>
					<Droppable droppableId="list">
						{(provided) => (
							<List
								{...provided.droppableProps}
								ref={provided.innerRef}
								sx={{ width: "100%", maxWidth: 200, bgcolor: "background.paper" }}
							>
								{ stk3 &&
									stk3.map((item, index) => {
										return (
											<Draggable key={item.id} draggableId={item.id.toString()} index={index}>
												{(provided) => (
													<Paper
														ref={provided.innerRef}
														{...provided.draggableProps}
														{...provided.dragHandleProps}
														elevation={2}
														sx={{ marginBottom: "10px" }}
														bgcolor= "red"
													>
														<ListItem
														style={{
															backgroundColor: 'teal'
														}}
														>
															<ListItemText primary={item.title}
													    />
														<button
														style={{
															backgroundColor: 'teal',
															border: 'none'
														}}
														onClick={ () => deleteStk3(item.id) }
														>╳</button>
														</ListItem>
													</Paper>
												)}
											</Draggable>
										);
									})}
								{provided.placeholder}
							</List>
						)}
					</Droppable>
				</DragDropContext>
			</Container>

			<Container maxWidth="sm" display="flex">
				<DragDropContext onDragEnd={handleDragEnd4}>
					<Droppable droppableId="list">
						{(provided) => (
							<List
								{...provided.droppableProps}
								ref={provided.innerRef}
								sx={{ width: "100%", maxWidth: 200, bgcolor: "background.paper" }}
							>
								{ stk4 &&
									stk4.map((item, index) => {
										return (
											<Draggable key={item.id} draggableId={item.id.toString()} index={index}>
												{(provided) => (
													<Paper
														ref={provided.innerRef}
														{...provided.draggableProps}
														{...provided.dragHandleProps}
														elevation={2}
														sx={{ marginBottom: "10px" }}
														bgcolor= "red"
													>
														<ListItem
														style={{
															backgroundColor: 'grey'
														}}
														>
															<ListItemText primary={item.title}
													    />
														<button
														style={{
															backgroundColor: 'grey',
															border: 'none'
														}}
														onClick={ () => deleteStk4(item.id) }
														>╳</button>
														</ListItem>
													</Paper>
												)}
											</Draggable>
										);
									})}
								{provided.placeholder}
							</List>
						)}
					</Droppable>
				</DragDropContext>
			</Container>
		</div>
	);
};

export default ItemsList;
