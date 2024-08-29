const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  flightDate: { //  تاريخ الرحلة
    type: String,
    required: true
  },
  flightStatus: { //  حالة الرحلة
    type: String,
    required: true,
    enum: ['scheduled', 'delayed', 'cancelled', 'arrived', 'departed'] //  قائمة الحالات الممكنة
  },
  departure: { //  معلومات عن المغادرة
    airport: { //  اسم مطار المغادرة
      type: String,
      required: true
    },
    timezone: { //  منطقة زمنية مطار المغادرة
      type: String,
      required: true
    },
    iata: { //  رمز مطار المغادرة (IATA)
      type: String,
      required: true
    },
    icao: { //  رمز مطار المغادرة (ICAO)
      type: String,
      required: true
    },
    terminal: String, //  رقم بوابة المغادرة
    gate: String, //  رقم بوابة المغادرة
    delay: Number, //  مدة التأخير (إن وجد)
    scheduled: { //  وقت المغادرة المجدول
      type: Date,
      required: true
    },
    estimated: { //  وقت المغادرة المتوقع
      type: Date,
      required: true
    },
    actual: Date, //  وقت المغادرة الفعلي (إن وجد)
    estimatedRunway: Date, //  وقت المغادرة المتوقع من المدرج
    actualRunway: Date //  وقت المغادرة الفعلي من المدرج (إن وجد)
  },
  // ... معلومات عن الوصول (arrival)
});

const flight = mongoose.model('flight', flightSchema);

module.exports = flight;