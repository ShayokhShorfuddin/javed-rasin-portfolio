/** biome-ignore-all lint/correctness/useUniqueElementIds: <needed for GSAP animation> */
import { useGSAP } from "@gsap/react";
import { Image } from "@unpic/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Mail, MapPin, Phone } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import Modal from "react-modal";
import javed_rasin_footer_text from "@/assets/javed-rasin-footer-text.svg";
import javed_rasin_scrolling from "@/assets/javed-rasin-scrolling.jpg";

// Necessary for screen readers and accessibility
Modal.setAppElement("#root");

// Required to position the modal correctly
const customStyles = {
	overlay: {
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},

	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
	},
};

// GSAP plugin registration
if (typeof window !== "undefined") {
	gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export default function Footer() {
	const [time, setTime] = useState("");
	const [modalIsOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	// useEffect(() => {

	// }, []);

	useGSAP(() =>
		gsap.to("#hr-line", {
			width: "100%",
			ease: "power3.out",
			duration: 2,

			scrollTrigger: {
				trigger: "#hr-line",
				start: "top bottom",
				toggleActions: "restart none none none",
			},
		}),
	);

	const getBangladeshTime = useCallback(() => {
		const date = new Date();
		const formatter = new Intl.DateTimeFormat("en", {
			timeZone: "Asia/Dhaka",
			hour: "numeric",
			minute: "numeric",
			hour12: true,
		});

		return formatter.format(date);
	}, []);

	useEffect(() => {
		// Initial update
		setTime(getBangladeshTime());

		// Update every second
		const interval = setInterval(() => {
			setTime(getBangladeshTime());
		}, 1000);

		// Cleanup interval on component unmount
		return () => clearInterval(interval);
	}, [getBangladeshTime]);

	return (
		<footer className="flex flex-col ">
			<div className="flex justify-center items-center min-h-screen bg-[#1C1D20]">
				<div className="flex flex-col items-center">
					{/* Image and CTA */}
					<div className="flex flex-col xs:flex-row gap-6 items-center">
						<Image
							width={978}
							height={978}
							layout="constrained"
							src={javed_rasin_scrolling}
							alt="Javed Rasin scrolling on his phone"
							className="size-18 md:size-22 rounded-full transition-all duration-300"
						/>

						<p className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl px-2 xs:px-0 text-center text-white select-none">
							Let's work together.
						</p>
					</div>

					{/* Line */}
					<hr
						className="w-[0%] border-[#ffffff33] mt-5 md:mt-12"
						id="hr-line"
					/>

					{/* Time and contact */}
					<div className="flex justify-between w-full items-start mt-5">
						<div className="flex flex-col">
							<p className="text-stone-400 text-sm">Local Time</p>
							<p className="text-lg xs:text-xl text-gray-200">
								{time} <span className="text-sm text-stone-400">GMT+6</span>
							</p>
						</div>

						<DialogButton
							modalIsOpen={modalIsOpen}
							openModal={openModal}
							closeModal={closeModal}
						/>
					</div>
				</div>
			</div>

			{/* Huge footer text */}
			<Image
				alt=""
				width={300}
				height={39}
				role="presentation"
				src={javed_rasin_footer_text}
				className="hidden md:block w-full px-2 bg-[#1C1D20]"
				// No alt text as it's decorative only
			/>
		</footer>
	);
}

function DialogButton({
	modalIsOpen,
	openModal,
	closeModal,
}: {
	modalIsOpen: boolean;
	openModal: () => void;
	closeModal: () => void;
}) {
	return (
		<>
			<button
				type="button"
				onClick={openModal}
				className="px-3 py-1 text-sm text-neutral-200 border border-stone-500 hover:cursor-pointer"
			>
				Contact
			</button>

			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Contact Javed Rasin"
			>
				<div className="flex flex-col gap-y-4.5 text-neutral-800">
					<ContactFacebook />
					<ContactPhone />
					<ContactEmail />
					<ContactAddress />
				</div>
			</Modal>
		</>
	);
}

export function ContactFacebook() {
	return (
		<a
			href="https://www.facebook.com/m.javed.rasin"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Visit SED Bangladesh Facebook page"
			className="hover:underline"
		>
			<div className="flex gap-x-4">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					fill="black"
					className="size-6"
				>
					<title>Facebook</title>
					<path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
				</svg>

				<p className="text-sm">Javed Rasin (জাবেদ রাসিন)</p>
			</div>
		</a>
	);
}

export function ContactPhone() {
	return (
		<div className="flex gap-x-4">
			<Phone strokeWidth={1} />
			<a href="tel:+8801553657919" className="text-sm">
				+8801553657919
			</a>
		</div>
	);
}

export function ContactEmail() {
	return (
		<div className="flex gap-x-4">
			<Mail strokeWidth={1} />
			<a
				href="mailto:javed.rasin@gmail.com"
				className="hover:underline text-sm"
			>
				javed.rasin@gmail.com
			</a>
		</div>
	);
}

export function ContactAddress() {
	return (
		<div className="flex gap-x-4">
			<MapPin strokeWidth={1} />

			<a
				href="https://maps.app.goo.gl/4G3GuXeUcgA7P1BR8"
				className="hover:underline text-sm"
				target="_blank"
				rel="noopener"
			>
				Iha Prokash, 803/A, Khilgaon Tilpapara, Road 14, Dhaka-1219.
			</a>
		</div>
	);
}
