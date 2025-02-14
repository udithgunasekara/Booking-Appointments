import axios from 'axios';

const APPOINTMENT_BOOKING = "http://localhost:8082/book";
const APPOINTMENT_LIST = "http://localhost:8082/user/{{username}}";
const ALL_SLOTS = "http://localhost:8082/slots";
const DELETE_APPOINTMENT = "http://localhost:8082/{{id}}";


export const bookAppointment = (formData) => axios.post(APPOINTMENT_BOOKING, formData);
export const fetchSlots = () => axios.get(ALL_SLOTS);
export const fetchAppointments = (username) => axios.get(APPOINTMENT_LIST.replace('{{username}}', username));
export const deleteAppointment = (id, username) => axios.delete(DELETE_APPOINTMENT.replace('{{id}}', id), { params: { username } });