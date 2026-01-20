import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Calendar, Wrench, Award } from "lucide-react";

interface CounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

const Counter = ({ target, suffix = "", duration = 2 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, target, {
        duration,
        onUpdate: (value) => setCount(Math.floor(value)),
      });
      return () => controls.stop();
    }
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const stats = [
  {
    icon: Users,
    value: 5000,
    suffix: "+",
    label: "Clientes Atendidos",
  },
  {
    icon: Calendar,
    value: 15,
    suffix: "",
    label: "Anos de Experiência",
  },
  {
    icon: Wrench,
    value: 12000,
    suffix: "+",
    label: "Serviços Realizados",
  },
  {
    icon: Award,
    value: 100,
    suffix: "%",
    label: "Satisfação Garantida",
  },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-orange-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-background/10 backdrop-blur-sm mb-4">
                <stat.icon className="w-8 h-8 text-background" />
              </div>
              <div className="font-display text-4xl md:text-5xl font-bold text-background mb-2">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-background/80 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
