import React from 'react';
import styles from './button.module.scss';

type ButtonProps = {
	children: React.ReactNode;
	variant?: 'primary' | 'secondary';
	onClick?: React.MouseEventHandler;
	type?: 'button' | 'submit' | 'reset';
	className?: string;
};

export const Button: React.FC<ButtonProps> = ({
	children,
	variant = 'primary',
	onClick,
	type = 'button',
	className = '',
	...props
}) => {
	const btnClass = `${styles.button} ${styles[variant]} ${className}`;
	return (
		<button type={type} onClick={onClick} className={btnClass} {...props}>
			{children}
		</button>
	);
};
