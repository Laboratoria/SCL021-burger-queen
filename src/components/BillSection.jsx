import styles from '../styles/TakeOrder.module.css';
import { FaMinus } from 'react-icons/fa';
import { BsPlusLg } from 'react-icons/bs';
import { IconContext } from 'react-icons/lib';

// Componente para seleccionar la mesa actual
export const FirstBillSection = (props) => {
	const { selectedTable } = props;
	return (
		<>
			<article className={styles.tableInformation}>
				<h2>Mesa: </h2>
				<h2>{selectedTable}</h2>
			</article>
			<section className={styles.currentOrder}>
				<h1>Orden actual</h1>
				<button id={styles.clearButton}>Limpiar</button>
			</section>
		</>
	);
};

// Componente de productos añadidos
export const CartProducts = ({ addedProduct }) => {
	const { name, price } = addedProduct;
	return (
		<IconContext.Provider value={{ color: 'rgba(255, 255, 255, 1)' }}>
			<section className={styles.currentOrderContainer}>
				<section id={styles.productsDescription}>
					<h3>{name}</h3>
					<p>{price}</p>
				</section>
				<section className={styles.firstBtnContainer}>
					<section className={styles.btnsContainer}>
						<button className={styles.addAndDeleteButton}>
							<FaMinus />
						</button>
						<h2>{1}</h2>
						<button className={styles.addAndDeleteButton}>
							<BsPlusLg />
						</button>
					</section>
				</section>
			</section>
		</IconContext.Provider>
	);
};

// Componente de boton de enviar orden
export const SendOrderButton = () => {
	return (
		<>
			<article className={styles.priceContainer}>
				<section className={styles.informationContainer}>
					<h3>Total</h3>
					<div id={styles.price}>
						<h3>3400clp</h3>
					</div>
				</section>
			</article>
			<button className={styles.sendOrderButton}>Enviar Orden</button>
		</>
	);
};
