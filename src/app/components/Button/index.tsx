import React from 'react';
import styles from './button.module.scss';

type ButtonProps = {
	children: React.ReactNode;
	variant?: 'primary' | 'secondary';
	as?: 'button' | 'a';
	href?: string;
	target?: string;
	rel?: string;
	onClick?: React.MouseEventHandler;
	type?: 'button' | 'submit' | 'reset';
	className?: string;
	[key: string]: any;
};

export const Button: React.FC<ButtonProps> = ({
	children,
	variant = 'primary',
	as = 'button',
	href,
	target,
	rel,
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
