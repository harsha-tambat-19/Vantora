
import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/axios';
import { Layout } from '../components/Layout';
import { LoadingSpinner, StatCard } from '../components/Common';

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axiosInstance.get('/dashboard/stats');
        setStats(response.data);
      } catch (err) {
        setError(
          err.response?.data?.message || 'Failed to load dashboard'
        );
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <Layout>
        <LoadingSpinner />
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="text-red-400 bg-red-500/10 border border-red-500/20 p-4 rounded-xl">
          {error}
        </div>
      </Layout>
    );
  }

  if (!stats) {
    return (
      <Layout>
        <div className="text-[#94A3B8]">No data available</div>
      </Layout>
    );
  }

  // Monthly revenue chart data
  const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ];

  const chartData = stats.monthlyRevenue.map((item) => ({
    month: monthNames[item._id.month - 1],
    revenue: item.total,
  }));

  // Order status chart data
  const statusData = stats.orderStatusBreakdown.map((item) => ({
    status: item._id,
    count: item.count,
  }));

  const chartTooltipStyle = {
    backgroundColor: '#142438',
    border: '1px solid #26384D',
    borderRadius: '10px',
    color: '#F8FAFC',
  };

  return (
    <Layout>
      <div className="space-y-8">

        {/* Dashboard Header */}
        <div>
          <p className="text-[#34D399] text-xs font-semibold uppercase tracking-widest mb-2">
            Business Overview
          </p>

          <h1 className="text-3xl font-bold text-[#F8FAFC]">
            Dashboard
          </h1>

          <p className="text-[#94A3B8] text-sm mt-2">
            Overview of your business performance and metrics.
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <StatCard
            title="Total Revenue"
            value={`₹${(stats.totalRevenue / 1000).toFixed(1)}k`}
            icon="◆"
            color="teal"
          />

          <StatCard
            title="Total Orders"
            value={stats.totalOrders}
            icon="⊞"
            color="blue"
          />

          <StatCard
            title="Low Stock Items"
            value={stats.lowStockProducts}
            icon="▦"
            color="red"
          />

          <StatCard
            title="Total Employees"
            value={stats.totalEmployees}
            icon="●"
            color="amber"
          />

        </div>

        {/* Financial Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Expenses */}
          <div className="bg-[#142438] rounded-xl border border-red-400/20 p-6 hover:border-red-400/40 transition-all">
            <h3 className="text-[#94A3B8] text-xs font-semibold uppercase tracking-wider mb-3">
              Total Expenses
            </h3>

            <p className="text-2xl font-bold text-red-400">
              ₹{(stats.totalExpenses / 1000).toFixed(1)}k
            </p>
          </div>

          {/* Net Profit */}
          <div className="bg-[#142438] rounded-xl border border-[#34D399]/20 p-6 hover:border-[#34D399]/40 transition-all">
            <h3 className="text-[#94A3B8] text-xs font-semibold uppercase tracking-wider mb-3">
              Net Profit
            </h3>

            <p
              className={`text-2xl font-bold ${
                stats.totalRevenue - stats.totalExpenses >= 0
                  ? 'text-[#34D399]'
                  : 'text-red-400'
              }`}
            >
              ₹{(
                (stats.totalRevenue - stats.totalExpenses) / 1000
              ).toFixed(1)}k
            </p>
          </div>

          {/* Total Products */}
          <div className="bg-[#142438] rounded-xl border border-blue-400/20 p-6 hover:border-blue-400/40 transition-all">
            <h3 className="text-[#94A3B8] text-xs font-semibold uppercase tracking-wider mb-3">
              Total Products
            </h3>

            <p className="text-2xl font-bold text-blue-400">
              {stats.totalProducts}
            </p>
          </div>

        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Revenue Chart */}
          <div className="bg-[#142438] rounded-xl border border-[#26384D] p-6">

            <h3 className="text-lg font-semibold text-[#F8FAFC] mb-6">
              Revenue Trend
            </h3>

            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>

                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#26384D"
                />

                <XAxis
                  dataKey="month"
                  stroke="#94A3B8"
                  tick={{ fill: '#94A3B8', fontSize: 12 }}
                />

                <YAxis
                  stroke="#94A3B8"
                  tick={{ fill: '#94A3B8', fontSize: 12 }}
                />

                <Tooltip
                  contentStyle={chartTooltipStyle}
                  formatter={(value) =>
                    `₹${value.toLocaleString('en-IN')}`
                  }
                />

                <Legend />

                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#34D399"
                  name="Revenue"
                  strokeWidth={3}
                  dot={{ fill: '#34D399', r: 4 }}
                  activeDot={{ r: 7 }}
                />

              </LineChart>
            </ResponsiveContainer>

          </div>

          {/* Orders Chart */}
          <div className="bg-[#142438] rounded-xl border border-[#26384D] p-6">

            <h3 className="text-lg font-semibold text-[#F8FAFC] mb-6">
              Orders by Status
            </h3>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={statusData}>

                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#26384D"
                />

                <XAxis
                  dataKey="status"
                  stroke="#94A3B8"
                  tick={{ fill: '#94A3B8', fontSize: 12 }}
                />

                <YAxis
                  stroke="#94A3B8"
                  tick={{ fill: '#94A3B8', fontSize: 12 }}
                />

                <Tooltip contentStyle={chartTooltipStyle} />

                <Legend />

                <Bar
                  dataKey="count"
                  fill="#34D399"
                  name="Orders"
                  radius={[6, 6, 0, 0]}
                />

              </BarChart>
            </ResponsiveContainer>

          </div>

        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;


