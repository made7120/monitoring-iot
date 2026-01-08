const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://xgwhpxovayvyuapirztg.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhnd2hweG92YXl2eXVhcGlyenRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc4MzM2MTQsImV4cCI6MjA4MzQwOTYxNH0.HANivFMAMtxmDhxjl-9HM8HGrhk1941aSjTlJ3FKdaY'; // Gunakan Key lengkap Anda

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function sendRandomData() {
  const temp = (Math.random() * (35 - 20) + 20).toFixed(2);
  const hum = (Math.random() * (80 - 40) + 40).toFixed(2);

  const { error } = await supabase
    .from('sensor_data')
    .insert([{ device_id: 'NODE-01', temperature: temp, humidity: hum }]);

  if (error) console.error('Error:', error.message);
  else console.log(`Data Terkirim: ${temp}°C, ${hum}%`);
}

setInterval(sendRandomData, 5000);