import Main from '../../Layouts/Main'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, CheckCircle2, AlertTriangle } from 'lucide-react';


const PredictForm = () => {
  const [form, setForm] = useState({
    Tinggi: '', Berat: '',
    HighBP: '', HighChol: '', CholCheck: '', Smoker: '', Stroke: '',
    HeartDiseaseorAttack: '', PhysActivity: '', Fruits: '', Veggies: '',
    HvyAlcoholConsump: '', AnyHealthcare: '', NoDocbcCost: '', DiffWalk: '',
    MentHlth: '', PhysHlth: '',
    Sex: '', GenHlth: '', Age: '', Education: '', Income: ''
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    const formData = { ...form };

    // Hitung BMI
    if (form.Tinggi && form.Berat) {
      const tinggiM = parseFloat(form.Tinggi) / 100;
      const berat = parseFloat(form.Berat);
      formData.BMI = (berat / (tinggiM ** 2)).toFixed(1);
    } else {
      setResult({ error: 'Tinggi dan Berat harus diisi untuk menghitung BMI.' });
      setLoading(false);
      return;
    }

    // Pengolahan usia menggunakan bins tanpa label
    const age = parseInt(form.Age);
    if (age >= 18 && age < 25) {
      formData.Age = 1;
    } else if (age >= 25 && age < 30) {
      formData.Age = 2;
    } else if (age >= 30 && age < 35) {
      formData.Age = 3;
    } else if (age >= 35 && age < 40) {
      formData.Age = 4;
    } else if (age >= 40 && age < 45) {
      formData.Age = 5;
    } else if (age >= 45 && age < 50) {
      formData.Age = 6;
    } else if (age >= 50 && age < 55) {
      formData.Age = 7;
    } else if (age >= 55 && age < 60) {
      formData.Age = 8;
    } else if (age >= 60 && age < 65) {
      formData.Age = 9;
    } else if (age >= 65 && age < 70) {
      formData.Age = 10;
    } else if (age >= 70 && age < 75) {
      formData.Age = 11;
    } else if (age >= 75 && age < 80) {
      formData.Age = 12;
    } else if (age >= 80) {
      formData.Age = 13;
    } else {
      setResult({ error: 'Usia tidak valid.' });
      setLoading(false);
      return;
    }

    // Lakukan pengolahan data biner seperti sebelumnya
    const binaryFields = [
      'HighBP', 'HighChol', 'CholCheck', 'Smoker', 'Stroke',
      'HeartDiseaseorAttack', 'PhysActivity', 'Fruits', 'Veggies',
      'HvyAlcoholConsump', 'AnyHealthcare', 'NoDocbcCost', 'DiffWalk'
    ];
    for (const field of binaryFields) {
      if (form[field] === '') {
        setResult({ error: `Field ${field} harus dipilih.` });
        setLoading(false);
        return;
      }
      formData[field] = form[field] === 'Ya' ? 1 : 0;
    }

    formData.Sex = form.Sex === 'Laki-laki' ? 1 : 0;

    const genHlthMap = {
      'Sangat Baik': 1, 'Baik Sekali': 2, 'Baik': 3, 'Cukup': 4, 'Buruk': 5
    };
    formData.GenHlth = genHlthMap[form.GenHlth];

    const educationMap = {
      'Tidak sekolah': 1, 'SD': 2, 'SMP': 3, 'SMA': 4, 'D1-D3': 5, 'S1 atau lebih': 6
    };
    formData.Education = educationMap[form.Education];

    const incomeMap = {
      '< Rp1 juta': 1, 'Rp1–2 juta': 2, 'Rp2–3 juta': 3, 'Rp3–4 juta': 4,
      'Rp4–5 juta': 5, 'Rp5–7 juta': 6, 'Rp7–10 juta': 7, '> Rp10 juta': 8
    };
    formData.Income = incomeMap[form.Income];

    // Hapus input asli BMI, Tinggi, Berat
    delete formData.Tinggi;
    delete formData.Berat;

    try {
      const response = await fetch('https://skkeyuviyvtu.ap-southeast-1.clawcloudrun.com/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      setResult(data);
    } catch (err) {
      setResult({ error: 'Gagal mengambil data prediksi.' });
    } finally {
      setLoading(false);
    }
  };

  const binaryOptions = ['Ya', 'Tidak'];

  return (
    <Main>
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md">
      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-2xl font-bold mb-6 text-center text-blue-700">
        Form Prediksi Risiko Diabetes
      </motion.h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label>Tinggi Badan (cm)</label>
          <input type="number" name="Tinggi" value={form.Tinggi} onChange={handleChange} required className="input" />
        </div>
        <div>
          <label>Berat Badan (kg)</label>
          <input type="number" name="Berat" value={form.Berat} onChange={handleChange} required className="input" />
        </div>

        {[
          { name: 'HighBP', label: 'Tekanan Darah Tinggi' },
          { name: 'HighChol', label: 'Kolesterol Tinggi' },
          { name: 'CholCheck', label: 'Pernah cek kolesterol?' },
          { name: 'Smoker', label: 'Merokok' },
          { name: 'Stroke', label: 'Pernah stroke' },
          { name: 'HeartDiseaseorAttack', label: 'Penyakit jantung / serangan jantung' },
          { name: 'PhysActivity', label: 'Aktif secara fisik' },
          { name: 'Fruits', label: 'Konsumsi buah rutin' },
          { name: 'Veggies', label: 'Konsumsi sayur rutin' },
          { name: 'HvyAlcoholConsump', label: 'Konsumsi alkohol berlebihan' },
          { name: 'AnyHealthcare', label: 'Memiliki akses ke layanan kesehatan' },
          { name: 'NoDocbcCost', label: 'Pernah tidak ke dokter karena biaya' },
          { name: 'DiffWalk', label: 'Kesulitan berjalan atau bergerak' }
        ].map(({ name, label }) => (
          <div key={name}>
            <label>{label}</label>
            <div className="flex space-x-4">
              {binaryOptions.map((val) => (
                <label key={val}>
                  <input
                    type="radio"
                    name={name}
                    value={val}
                    checked={form[name] === val}
                    onChange={handleChange}
                  /> {val}
                </label>
              ))}
            </div>
          </div>
        ))}

        <div>
          <label>Kesehatan Mental (hari dalam sebulan terganggu)</label>
          <input type="number" name="MentHlth" value={form.MentHlth} onChange={handleChange} required className="input" />
        </div>
        <div>
          <label>Kesehatan Fisik (hari dalam sebulan terganggu)</label>
          <input type="number" name="PhysHlth" value={form.PhysHlth} onChange={handleChange} required className="input" />
        </div>

        <div>
          <label>Jenis Kelamin</label>
          <select name="Sex" value={form.Sex} onChange={handleChange} required className="input">
            <option value="">Pilih</option>
            <option value="Laki-laki">Laki-laki</option>
            <option value="Perempuan">Perempuan</option>
          </select>
        </div>
        <div>
          <label>Kondisi Kesehatan Umum</label>
          <select name="GenHlth" value={form.GenHlth} onChange={handleChange} required className="input">
            <option value="">Pilih</option>
            <option value="Sangat Baik">Sangat Baik</option>
            <option value="Baik Sekali">Baik Sekali</option>
            <option value="Baik">Baik</option>
            <option value="Cukup">Cukup</option>
            <option value="Buruk">Buruk</option>
          </select>
        </div>

        <div>
          <label>Usia</label>
          <select name="Age" value={form.Age} onChange={handleChange} required className="input">
            <option value="">Pilih</option>
            <option value="18-24">18-24</option>
            <option value="25-29">25-29</option>
            <option value="30-34">30-34</option>
            <option value="35-39">35-39</option>
            <option value="40-44">40-44</option>
            <option value="45-49">45-49</option>
            <option value="50-54">50-54</option>
            <option value="55-59">55-59</option>
            <option value="60-64">60-64</option>
            <option value="65-69">65-69</option>
            <option value="70-74">70-74</option>
            <option value="75-79">75-79</option>
            <option value="80+">80+</option>
          </select>
        </div>
        <div>
          <label>Pendidikan</label>
          <select name="Education" value={form.Education} onChange={handleChange} required className="input">
            <option value="">Pilih</option>
            <option value="Tidak sekolah">Tidak sekolah</option>
            <option value="SD">SD</option>
            <option value="SMP">SMP</option>
            <option value="SMA">SMA</option>
            <option value="D1-D3">D1-D3</option>
            <option value="S1 atau lebih">S1 atau lebih</option>
          </select>
        </div>

        <div>
          <label>Pendapatan</label>
          <select name="Income" value={form.Income} onChange={handleChange} required className="input">
            <option value="">Pilih</option>
            <option value="< Rp1 juta">&lt; Rp1 juta</option>
            <option value="Rp1–2 juta">Rp1–2 juta</option>
            <option value="Rp2–3 juta">Rp2–3 juta</option>
            <option value="Rp3–4 juta">Rp3–4 juta</option>
            <option value="Rp4–5 juta">Rp4–5 juta</option>
            <option value="Rp5–7 juta">Rp5–7 juta</option>
            <option value="Rp7–10 juta">Rp7–10 juta</option>
            <option value="> Rp10 juta">&gt; Rp10 juta</option>
          </select>
        </div>

        <button type="submit" className="col-span-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition">
          Prediksi
        </button>
      </form>

      <div className="mt-6 min-h-[100px]">
      <AnimatePresence>
  {result && (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.3 }}
      className="mt-4 text-center"
    >
      {result.error ? (
        <div className="text-red-500">
          <AlertTriangle size={24} className="mx-auto" />
          <p>{result.error}</p>
        </div>
      ) : result.prediction === 1 ? (
        <div className="text-red-500">
          <CheckCircle2 size={24} className="mx-auto" />
          <p>Anda berisiko diabetes!</p>
          <p className="mt-2">
            Kami menyarankan untuk segera konsultasi dengan dokter dan mulai menjaga pola makan serta
            olahraga rutin. Perubahan gaya hidup sangat penting untuk menurunkan risiko diabetes.
          </p>
        </div>
      ) : (
        <div className="text-green-500">
          <CheckCircle2 size={24} className="mx-auto" />
          <p>Risiko diabetes Anda rendah.</p>
          <p className="mt-2">
            Terus jaga gaya hidup sehat dengan makan yang bergizi, olahraga, dan rutin memeriksakan kesehatan.
          </p>
        </div>
      )}
    </motion.div>
  )}
</AnimatePresence>

      </div>
    </div>
    </Main>
  );
};


export default PredictForm;
