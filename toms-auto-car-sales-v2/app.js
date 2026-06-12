// Wait for Supabase to load
function waitForSupabase(callback) {
    if (window.supabase) {
        callback();
    } else {
        window.addEventListener('load', callback);
    }
}

// Supabase Config
const SUPABASE_URL = 'https://mwdvaohdgaclihatawpn.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13ZHZhb2hkZ2FjbGloYXRhd3BuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwNzk1NzIsImV4cCI6MjA5NTY1NTU3Mn0.oyaZFi9OtggYXxHbQvgyoZtbmSXxNr-YFRHMtFq8p8M';

let supabase;

waitForSupabase(() => {
    supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

    let cars = [];
let user = null;
let authMode = 'signin';
let editingCarId = null;
let passwordResetMode = false;

// Auth Functions
function toggleAuthMode() {
    passwordResetMode = false;
    authMode = authMode === 'signin' ? 'signup' : 'signin';
    document.getElementById('authTitle').textContent = authMode === 'signin' ? 'Sign In' : 'Sign Up';
    document.getElementById('authBtn').textContent = authMode === 'signin' ? 'Sign In' : 'Sign Up';
    document.getElementById('toggleText').textContent = authMode === 'signin' ? "Don't have an account?" : "Already have an account?";
    document.getElementById('toggleAuth').textContent = authMode === 'signin' ? 'Sign Up' : 'Sign In';
    document.getElementById('authError').textContent = '';
    document.getElementById('authSuccess').textContent = '';
    document.getElementById('authPassword').closest('.form-group').style.display = authMode === 'signin' ? 'block' : 'block';
    document.getElementById('authBtn').style.display = authMode === 'signin' ? 'block' : 'block';
    document.getElementById('forgotPassword').style.display = authMode === 'signin' ? 'inline' : 'none';
}

function showForgotPassword() {
    passwordResetMode = true;
    document.getElementById('authTitle').textContent = 'Reset Password';
    document.getElementById('authForm').querySelector('.form-group:nth-child(2)').style.display = 'none';
    document.getElementById('authBtn').textContent = 'Send Reset Link';
    document.getElementById('toggleText').innerHTML = 'Remember your password? <a href="#" id="toggleAuth">Sign In</a>';
    document.getElementById('authError').textContent = '';
    document.getElementById('authSuccess').textContent = '';
    document.getElementById('forgotPassword').style.display = 'none';
}

document.getElementById('authForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('authEmail').value;
    const password = document.getElementById('authPassword').value;
    const errorEl = document.getElementById('authError');
    const successEl = document.getElementById('authSuccess');
    errorEl.textContent = '';
    successEl.textContent = '';

    try {
        if (passwordResetMode) {
            const { error } = await supabase.auth.resetPasswordForEmail(email, {
                redirectTo: window.location.origin
            });
            if (error) throw error;
            successEl.textContent = 'Check your email for the reset link!';
            return;
        }
        
        if (authMode === 'signin') {
            const { data, error } = await supabase.auth.signInWithPassword({ email, password });
            if (error) throw error;
            user = data.user;
        } else {
            const { data, error } = await supabase.auth.signUp({ email, password });
            if (error) throw error;
            if (data.user && !data.session) {
                errorEl.textContent = 'Check your email to confirm signup!';
                return;
            }
            user = data.user;
        }
        loadCars();
    } catch (err) {
        errorEl.textContent = err.message;
    }
});

async function signOut() {
    await supabase.auth.signOut();
    user = null;
    cars = [];
    showAuth();
}

function showAuth() {
    document.getElementById('authScreen').classList.add('active');
    document.getElementById('appScreen').style.display = 'none';
    document.getElementById('loadingScreen').style.display = 'none';
}

function showApp() {
    document.getElementById('authScreen').classList.remove('active');
    document.getElementById('appScreen').style.display = 'block';
    document.getElementById('loadingScreen').style.display = 'none';
    document.getElementById('userEmail').textContent = user.email;
}

// Database Functions
async function loadCars() {
    if (!user) return;
    showApp();
    
    const { data, error } = await supabase
        .from('cars')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error loading cars:', error);
        return;
    }

    cars = data || [];
    renderCars();
    updateStats();
}

async function saveCar(carData) {
    if (editingCarId) {
        const { error } = await supabase
            .from('cars')
            .update(carData)
            .eq('id', editingCarId);
        if (error) throw error;
    } else {
        const { error } = await supabase
            .from('cars')
            .insert([{ ...carData, user_id: user.id }]);
        if (error) throw error;
    }
    loadCars();
}

async function deleteCar(id) {
    if (!confirm('Delete this car?')) return;
    const { error } = await supabase.from('cars').delete().eq('id', id);
    if (error) {
        alert('Error deleting car: ' + error.message);
        return;
    }
    loadCars();
}

// UI Functions
function renderCars() {
    const grid = document.getElementById('carGrid');
    grid.innerHTML = cars.map(car => `
        <div class="car-card" data-car-id="${car.id}">
            <div class="header">
                <span class="year-make">${car.year} ${car.make}</span>
                <span class="price">$${car.price?.toLocaleString()}</span>
            </div>
            <div class="details">${car.model}</div>
            <div class="mileage">${car.mileage?.toLocaleString()} miles</div>
            ${car.vin ? `<div class="mileage">VIN: ${car.vin}</div>` : ''}
            <span class="status ${car.status}">${car.status}</span>
            ${car.status === 'sold' && car.sold_price ? `<div class="mileage" style="color: var(--neon-pink);">Sold for: $${car.sold_price.toLocaleString()}</div>` : ''}
            <div class="actions">
                <button class="btn btn-small btn-edit" data-id="${car.id}">Edit</button>
                <button class="btn btn-small btn-pink btn-delete" data-id="${car.id}">Delete</button>
            </div>
        </div>
    `).join('');

    // Event delegation for car actions
    grid.querySelectorAll('.btn-edit').forEach(btn => {
        btn.addEventListener('click', () => editCar(btn.dataset.id));
    });
    grid.querySelectorAll('.btn-delete').forEach(btn => {
        btn.addEventListener('click', () => deleteCar(btn.dataset.id));
    });
    
    if (cars.length === 0) {
        grid.innerHTML = '<p style="text-align: center; color: var(--text-dim); grid-column: 1/-1;">No cars yet. Add your first car to get started!</p>';
    }
}

function updateStats() {
    const total = cars.length;
    const sold = cars.filter(c => c.status === 'sold').length;
    const available = total - sold;
    const revenue = cars.filter(c => c.status === 'sold').reduce((sum, c) => sum + (c.sold_price || 0), 0);

    document.getElementById('totalCars').textContent = total;
    document.getElementById('carsSold').textContent = sold;
    document.getElementById('carsAvailable').textContent = available;
    document.getElementById('totalRevenue').textContent = '$' + revenue.toLocaleString();
}

function showAddCarModal() {
    editingCarId = null;
    document.getElementById('carModalTitle').textContent = 'Add Car';
    document.getElementById('carForm').reset();
    document.getElementById('carModal').style.display = 'flex';
}

function editCar(id) {
    const car = cars.find(c => c.id === id);
    if (!car) return;
    
    editingCarId = id;
    document.getElementById('carModalTitle').textContent = 'Edit Car';
    document.getElementById('carYear').value = car.year;
    document.getElementById('carMake').value = car.make;
    document.getElementById('carModel').value = car.model;
    document.getElementById('carPrice').value = car.price;
    document.getElementById('carMileage').value = car.mileage;
    document.getElementById('carVin').value = car.vin || '';
    document.getElementById('carStatus').value = car.status;
    document.getElementById('carSoldPrice').value = car.sold_price || '';
    document.getElementById('carModal').style.display = 'flex';
}

function closeCarModal() {
    document.getElementById('carModal').style.display = 'none';
}

document.getElementById('carForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const carData = {
        year: parseInt(document.getElementById('carYear').value),
        make: document.getElementById('carMake').value,
        model: document.getElementById('carModel').value,
        price: parseInt(document.getElementById('carPrice').value),
        mileage: parseInt(document.getElementById('carMileage').value),
        vin: document.getElementById('carVin').value,
        status: document.getElementById('carStatus').value,
        sold_price: document.getElementById('carStatus').value === 'sold' ? parseInt(document.getElementById('carSoldPrice').value) || null : null
    };

    try {
        await saveCar(carData);
        closeCarModal();
    } catch (err) {
        alert('Error saving car: ' + err.message);
    }
});

// Initialize
async function initAuth() {
    document.getElementById('loadingScreen').style.display = 'block';
    document.getElementById('authScreen').classList.remove('active');

    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
        user = session.user;
        loadCars();
    } else {
        showAuth();
    }

    supabase.auth.onAuthStateChange((event, session) => {
        if (event === 'password_recovery') {
            // Show password reset UI
            document.getElementById('authScreen').classList.add('active');
            document.getElementById('appScreen').style.display = 'none';
            document.getElementById('authTitle').textContent = 'Set New Password';
            document.getElementById('authForm').innerHTML = `
                <div class="form-group"><label>New Password</label><input type="password" id="newPassword" required></div>
                <button type="submit" class="btn">Update Password</button>
                <div class="error-msg" id="authError"></div>
            `;
            document.getElementById('authForm').addEventListener('submit', async (e) => {
                e.preventDefault();
                const newPassword = document.getElementById('newPassword').value;
                const { error } = await supabase.auth.updateUser({ password: newPassword });
                if (error) {
                    document.getElementById('authError').textContent = error.message;
                } else {
                    alert('Password updated! Please sign in with your new password.');
                    location.reload();
                }
            });
        } else if (session) {
            user = session.user;
            loadCars();
        } else {
            user = null;
            cars = [];
            showAuth();
        }
    });
}

// Add event listeners (Netlify-friendly)
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, setting up listeners');
    const toggleBtn = document.getElementById('toggleAuth');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', (e) => {
            console.log('Toggle auth clicked!');
            e.preventDefault();
            toggleAuthMode();
        });
        console.log('Toggle auth listener attached');
    } else {
        console.error('toggleAuth element not found!');
    }
    
    const forgotBtn = document.getElementById('forgotPassword');
    if (forgotBtn) {
        forgotBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showForgotPassword();
        });
    }
    document.getElementById('signOutBtn').addEventListener('click', signOut);
    document.getElementById('addCarBtn').addEventListener('click', showAddCarModal);
    document.getElementById('cancelCarBtn').addEventListener('click', closeCarModal);
});

// Start
initAuth();
});